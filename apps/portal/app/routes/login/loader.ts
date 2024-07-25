import logger from '@lib/utils/logger'
import { AuthTokenClaims } from '@privy-io/server-auth'
import { redirect } from '@remix-run/node'
import { verifyPrivyAccessToken } from '@server/privy'

export type LoaderData = AuthTokenClaims | null
export const fetchLoaderData = async (
  request: Request,
): Promise<LoaderData> => {
  const authTokenClaims = await verifyPrivyAccessToken(request)
  if (authTokenClaims) {
    logger('[Loader] User is already authenticated, redirecting to home')
    throw redirect('/app/profile')
  }
  return authTokenClaims
}
