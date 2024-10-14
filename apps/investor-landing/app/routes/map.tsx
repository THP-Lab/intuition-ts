import { useEffect, useState } from 'react'

import Desktop from '@components/desktop'
import Mobile from '@components/mobile'

export default function App() {
  const [isMobile, setIsMobile] = useState(true)
  useEffect(() => {
    if (!isMobile) {
      const html = document.querySelector('html')
      if (html) {
        html.style.overflow = 'hidden'
      }
    } else {
      const html = document.querySelector('html')
      if (html) {
        html.style.overflow = 'auto'
      }
    }
  }, [isMobile])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1000px)')
    setIsMobile(mediaQuery.matches)
    mediaQuery.addListener((e) => setIsMobile(e.matches))
    console.log(mediaQuery)
    return () => {
      mediaQuery.removeListener((e) => setIsMobile(e.matches))
    }
  }, [])

  return <div>{isMobile ? <Mobile /> : <Desktop />}</div>
}
