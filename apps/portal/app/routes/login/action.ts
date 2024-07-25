import logger from '@lib/utils/logger'
import { redirect } from '@remix-run/node'
import { parse } from 'cookie'

export const performAction = async (request: Request) => {
  logger('[Action] Entering login action')
  const url = new URL(request.url)
  const formData = await request.formData()
  // not necessary but just to show its being properly passed to the action post privy-auth
  const userId = formData.get('userId')
  logger('[Action] userId', userId)

  const redirectUrl = url.searchParams.get('redirectTo') ?? '/app/profile'
  logger('[Action] Redirecting to', redirectUrl)
  const cookies = parse(request.headers.get('cookie') ?? '')
  // not necessary but just to show its being properly set by privy post auth
  const privyToken = cookies['privy-token']
  logger('[Action] Redirecting w/ privyToken', privyToken)
  throw redirect(redirectUrl)
}
