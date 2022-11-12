import { useEffect, useRef } from 'react'

import Connecting from 'components/Connecting'
import FullscreenToggle from 'components/FullscreenToggle'
import Terminal from 'components/Terminal'

import useToggleFullscreen from 'hooks/useToggleFullscreen'

const App = () => {
  const appRef = useRef()
  const inputRef = useRef()

  const toggleFullscreen = useToggleFullscreen(appRef)

  const shortcuts = {
    f: (e) => {
      e.preventDefault()
      toggleFullscreen()
    },
  }

  const commands = {
    help: () => {
      return [
        'available commands are:',
        '- list projects',
        '- show project <id>',
      ]
    },
    'list projects': () => {
      return [
        `cody's projects include:`,
        '- codybarr.dev (0)',
        '- coventrypca.church (1)',
      ]
    },
  }

  const focusInput = (e) => {
    inputRef.current.focus()
  }

  return (
    <div onClick={focusInput} className="min-h-screen App-Wrapper" ref={appRef}>
      <div className="relative min-h-screen p-5 App text-emerald selection:text-black selection:bg-emerald md:p-10">
        <pre className="overflow-y-hidden break-all whitespace-normal">
          <input ref={inputRef} type="text" className="absolute -left-96" />
          <code>Welcome to cli.codybarr.dev...</code>
          <code>
            type "help" for commands, ⌘+k to clear, ⌘+f to go fullscreen!
          </code>
          <br />
          <Terminal prompt="$: " shortcuts={shortcuts} commands={commands}>
            {({ prompt, output, command }) => {
              const history = output.map((line, i) => (
                <code key={i}>{line}</code>
              ))

              return (
                <>
                  {history}
                  <code>
                    {prompt}
                    {command}
                    <span className="text-emerald animate-blink">_</span>
                  </code>
                </>
              )
            }}
          </Terminal>
        </pre>

        <div className="absolute bottom-0 right-0 mb-5 mr-5 md:mr-10 md:mb-10">
          <FullscreenToggle appRef={appRef} />
        </div>

        <div className="absolute bottom-0 left-0 mb-5 ml-5 md:ml-10 md:mb-10">
          <Connecting />
        </div>
      </div>
    </div>
  )
}

export default App
