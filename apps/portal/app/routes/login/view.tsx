import PrivyLoginButton from '@client/privy-login-button'
import logger from '@lib/utils/logger'
import { User as PrivyUser } from '@privy-io/react-auth'
import { useSubmit } from '@remix-run/react'

export const LoginView = () => {
  const submit = useSubmit()

  function handleLogin(
    user: PrivyUser,
    isNewUser: boolean,
    wasAlreadyAuthenticated: boolean,
  ) {
    logger('user: ', user)
    logger('isNewUser: ', isNewUser)
    logger('wasAlreadyAuthenticated: ', wasAlreadyAuthenticated)

    const formData = new FormData()
    formData.append('userId: ', user.id)
    submit(formData, { method: 'post' })
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <PrivyLoginButton handleLogin={handleLogin} />
    </div>
  )
}
