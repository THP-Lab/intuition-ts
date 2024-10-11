import {
  Button,
  ButtonVariant,
  Card,
  CardContent,
  Text,
  TextVariant,
} from '@0xintuition/1ui'

//import { useNavigate } from '@remix-run/react'

export default function InvestorsWelcome() {
  // const navigate = useNavigate()

  function handleClick() {
    console.log('clicked')
  }

  return (
    <Card className="h-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute theme-border p-12">
      <CardContent>
        <div className="flex flex-col items-center gap-5">
          <Text variant={TextVariant.headline} className="text-primary pb-6">
            WELCOME, FRIENDS
          </Text>
          <Text variant={TextVariant.body}>CHOOSE YOUR PATH...</Text>
          <div className="flex flex-row items-start justify-center gap-6">
            <div className="flex flex-col gap-2">
              <Button variant={ButtonVariant.for}>BLUE PILL</Button>
              <Text variant={TextVariant.caption}>STANDARD DOCSEND</Text>
            </div>

            <Text variant={TextVariant.bodyLarge}>OR</Text>

            <div className="flex flex-col gap-2">
              <Button variant={ButtonVariant.against} onClick={handleClick}>
                RED PILL
              </Button>
              <Text variant={TextVariant.caption}>INTUITIVE EXPERIENCE</Text>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
