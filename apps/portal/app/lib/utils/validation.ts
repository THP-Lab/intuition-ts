import { requireUserWallet } from '@server/auth'
import { NO_WALLET_ERROR } from 'consts'

import { invariant } from './misc'

export const validateUser = async (request: Request) => {
  const wallet = await requireUserWallet(request)
  invariant(wallet, NO_WALLET_ERROR)
}
