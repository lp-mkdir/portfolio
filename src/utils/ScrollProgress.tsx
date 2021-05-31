import { useState, useEffect, useRef } from "react"

export const ScrollProgress = () => {
  const [pos, setPos] = useState(0)
  const scrollPerc = useRef<number>()

  function handleScroll() {
    // get actual "Y" axis position and then sum the actual browser height (from client)
    setPos(window.pageYOffset)
  }

  useEffect(() => {
    window.addEventListener(`scroll`, handleScroll)
    // Calc total scroll height of document
    const initScrollHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    )
    const scrollHeight = initScrollHeight - document.documentElement.clientHeight
    scrollPerc.current = (pos * 100) / scrollHeight
  }, [pos, scrollPerc])
  return { pos, scrollPerc: scrollPerc.current }
}
