import PrivyLogoutButton from '@client/privy-logout-button'
import GetStarted from '@components/get-started'
import HomeBanner from '@components/home/home-banner'

export default function App() {
  return (
    <div className="w-full flex flex-col gap-12">
      <HomeBanner />
      <PrivyLogoutButton />
      <GetStarted />
    </div>
  )
}
