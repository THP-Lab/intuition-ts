import { useEffect } from 'react'

import InvestorsWelcome from '@components/investors-welcome/investors-welcome'
import { useLocation } from '@remix-run/react'

export default function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="h-screen w-screen m-0 p-0 flex">
      <InvestorsWelcome />
    </div>
  )
}
