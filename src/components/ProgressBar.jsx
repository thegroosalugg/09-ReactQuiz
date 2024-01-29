import { useState, useEffect } from "react";

export default function ProgressBar({ timeout, onTimeout }) {
  const [timeRemaining, setTimeRemaining] = useState(timeout)

  useEffect(() => {
    console.log('hello')
    const timer = setTimeout(onTimeout, timeout);

    // return () => {
    //   clearTimeout(timer)
    // }
  }, [onTimeout, timeout])

  useEffect(() => {
    console.log('bye')
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 100)
    }, 100);

    // return () => {
    //   clearInterval(timer)
    // }
  }, [])

  return <progress value={timeRemaining} max={timeout} />
}
