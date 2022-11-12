import { useState, useEffect } from 'react'

export default () => {
  const [count, setCount] = useState(1)

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((c) => (c + 1) % 4)
    }, 1000)
    return () => clearInterval(timer)
  })

  const dots = Array(count).fill('.').join('')

  return <code className="text-3xl">connecting{dots}</code>
}
