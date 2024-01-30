import { useState, useEffect } from "react";

export default function ProgressBar({ timeout, onTimeout }) {
  const [timeRemaining, setTimeRemaining] = useState(timeout)

  useEffect(() => {
    console.log('timeout')
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer)
    }
  }, [onTimeout, timeout])

  useEffect(() => {
    console.log('interval')
    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 100)
    }, 100);

    return () => {
      clearInterval(interval)
    }
  }, [])

  return <progress value={timeRemaining} max={timeout} />
}
