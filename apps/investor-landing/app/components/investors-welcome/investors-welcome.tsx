import {
  Button,
  Card,
  CardContent,
  Text,
  TextVariant,
  TextWeight,
} from '@0xintuition/1ui'

import { useNavigate } from '@remix-run/react'

export default function InvestorsWelcome() {
  const navigate = useNavigate()

  function handleClick() {
    navigate('/map')
  }

  return (
    <Card className="h-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute theme-border p-12">
      <CardContent className="pb-0">
        <div className="flex flex-col items-center gap-5">
          <Text
            variant={TextVariant.headline}
            weight={TextWeight.medium}
            className="text-primary pb-6 tracking-widest"
          >
            WELCOME, FRIENDS
          </Text>
          <Text
            variant={TextVariant.body}
            className="text-primary/70 tracking-widest"
          >
            CHOOSE YOUR PATH...
          </Text>
          <div className="flex flex-row items-start justify-center gap-6">
            <div className="flex flex-col gap-2">
              <Button className="rounded-md border border-for/70 bg-transparent text-primary/70 tracking-widest transition-all duration-300 hover:bg-transparent hover:border-for hover:text-primary">
                BLUE PILL
              </Button>
              <Text
                variant={TextVariant.caption}
                className="tracking-widest text-primary/70"
              >
                STANDARD DOCSEND
              </Text>
            </div>

            <Text
              variant={TextVariant.bodyLarge}
              className="tracking-widest text-primary/70"
            >
              OR
            </Text>

            <div className="flex flex-col gap-2">
              <Button
                onClick={handleClick}
                className="rounded-md border border-destructive/70 bg-transparent text-primary/70 tracking-widest transition-all duration-300 hover:bg-transparent hover:border-destructive hover:text-primary"
              >
                RED PILL
              </Button>
              <Text
                variant={TextVariant.caption}
                className="tracking-widest text-primary/70"
              >
                INTUITIVE EXPERIENCE
              </Text>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
