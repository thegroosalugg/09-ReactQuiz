import { useState, useEffect } from "react";

export default function ProgressBar({ timeout, onTimeout }) {
  const [timeRemaining, setTimeRemaining] = useState(timeout)

  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);
    console.log('hello')
    return () => {
      clearTimeout(timer)
    }
  }, [onTimeout, timeout])

  useEffect(() => {
    const timer = setInterval(() => {
      console.log('bye')
      setTimeRemaining((prevTime) => prevTime - 100)
    }, 100);

    return () => {
      clearInterval(timer)
    }
  }, [])

  return <progress value={timeRemaining} max={timeout} />
}
