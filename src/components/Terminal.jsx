import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const ALLOWED_KEY_REGEX = /^([ ,?"'!a-zA-Z0-9]|Enter|Backspace){1}$/

const Terminal = ({
  prompt,
  shortcuts: userShortcuts = {},
  commands: userCommands = {},
  children,
}) => {
  const [command, setCommand] = useState('')
  const [output, setOutput] = useState([])

  const shortcuts = {
    k: (e) => {
      e.preventDefault()
      setOutput([])
      // setCommand('')
    },
    ...userShortcuts,
  }

  const actions = {
    Enter: (e) => {
      if (!command) return

      setOutput((o) => [...o, `${prompt} ${command}`])

      if (userCommands[command]) {
        setOutput((o) => [...o, ...userCommands[command]()])
      } else {
        setOutput((o) => [...o, `'${command}' is not a recognized command`])
      }

      setCommand('')
    },
    Backspace: (e) => {
      setCommand((c) =>
        c
          .split('')
          .slice(0, c.length - 1)
          .join('')
      )
    },
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!ALLOWED_KEY_REGEX.test(e.key)) return

      // keyboard shortcuts
      if (e.ctrlKey || e.metaKey) {
        shortcuts[e.key] && shortcuts[e.key](e)
        return
      }

      e.preventDefault()

      // commands (like Enter and Backspace)
      actions[e.key] ? actions[e.key](e) : setCommand((c) => c + e.key)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [command, output])

  return children({ output, command, prompt })
}

Terminal.propTypes = {
  children: PropTypes.func.isRequired,
  prompt: PropTypes.string.isRequired,
}

export default Terminal
