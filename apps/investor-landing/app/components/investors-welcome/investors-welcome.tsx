import {
  Button,
  Card,
  CardContent,
  Text,
  TextVariant,
  TextWeight,
} from '@0xintuition/1ui'

import investorWelcomeCardBg from '@assets/investor-welcome-card-bg.png'
import { useNavigate } from '@remix-run/react'

export default function InvestorsWelcome() {
  const navigate = useNavigate()

  function handleClick() {
    navigate('/map')
  }

  return (
    <Card className="h-fit theme-border p-12 bg-transparent relative overflow-hidden backdrop-blur-sm max-sm:w-[94vw]">
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <img
          src={investorWelcomeCardBg}
          alt=""
          className="w-full h-auto object-cover"
          aria-hidden="true"
        />
      </div>
      <CardContent className="pb-0 relative">
        <div className="flex flex-col items-center gap-5">
          <Text
            variant={TextVariant.headline}
            weight={TextWeight.medium}
            className="text-primary pb-2 tracking-widest"
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
              <Button className="rounded-md border border-for/50 bg-for/15 text-primary/70 tracking-widest transition-all duration-300 hover:bg-for/30 hover:border-for hover:text-primary">
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
                className="rounded-md border border-destructive/50 bg-destructive/15 text-primary/70 tracking-widest transition-all duration-300 hover:bg-destructive/30 hover:border-destructive hover:text-primary"
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
