import {
  Button,
  ButtonVariant,
  Icon,
  IconName,
  IconNameType,
  Text,
  TextVariant,
  TextWeight,
} from '@0xintuition/1ui'

import { HeaderLogo } from '@components/header-logo'
import MobileSectionCard from '@components/mobile-secrtion-card/mobile-section-card'
import SunburstCard from '@components/sunburst-card'
import { ScrollIcon } from '@components/svg/scroll-icon'
import {
  APP_DEMO,
  CALENDLY,
  FINANCIALS,
  GIT_BOOK,
  GROWTH_STRATEGY,
  INCORPORATION_DOCS,
  MEDIA_MENTIONS,
  ONE_PAGER,
  PITCH_DECK,
  PRO_FORMA_CAP_TABLE,
  SNAP_DEMO,
  TOKENOMICS,
} from '@consts/links'
import { useNavigate } from '@remix-run/react'
import { motion } from 'framer-motion'

const IconButtonLink = ({ url, icon }: { url: string; icon: IconNameType }) => (
  <a href={url} target="_blank" rel="noreferrer">
    <Button variant={ButtonVariant.navigation}>
      <Icon name={icon} />
    </Button>
  </a>
)

export interface IMobileProps {}

export default function Mobile() {
  const navigate = useNavigate()

  function handleBack() {
    navigate('/investors')
  }

  return (
    <div className="text-primary bg-transparent text-center">
      <div className="mb-10">
        <>
          <button
            className="absolute top-8 left-0 hover:cursor-pointer"
            onClick={handleBack}
            aria-label="Go back"
          >
            <HeaderLogo />
          </button>
          <div className="flex items-center justify-evenly gap-12 h-88vh">
            {/* <Box>Verbal Deck</Box> */}

            <a href={PITCH_DECK} target="_blank" rel="noreferrer">
              <SunburstCard label={'Pitch Deck'} glow="white" disableScale />
            </a>
            {/* <Box>Meme Deck</Box> */}
          </div>
        </>
        <>
          <div className="flex flex-col justify-center h-10vh mb-12">
            <ScrollIcon />
            <Text
              variant={TextVariant.caption}
              className="tracking-widest text-primary/70"
            >
              SCROLL
            </Text>
          </div>
        </>
      </div>
      <div className="mt-25">
        <MobileSectionCard text={'The Product'} />
        <div className="flex flex-col gap-5 mb-50">
          <Text variant={TextVariant.headline} weight={TextWeight.medium}>
            The Vision
          </Text>
          <div className="grid grid-cols-2 gap-5">
            <a href={ONE_PAGER} target="_blank" rel="noreferrer">
              <SunburstCard label="1-Pager" size="x-sm" disableScale />
            </a>
            <a
              href={'https://medium.com/0xintuition'}
              target="_blank"
              rel="noreferrer"
            >
              <SunburstCard label="Medium" size="x-sm" disableScale />
            </a>
            <a href={APP_DEMO} target="_blank" rel="noreferrer">
              <SunburstCard label="App Video" size="x-sm" disableScale />
            </a>

            <a href={SNAP_DEMO} target="_blank" rel="noreferrer">
              <SunburstCard label="Snap Video" size="x-sm" disableScale />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-5 mb-50">
          <Text variant={TextVariant.headline} weight={TextWeight.medium}>
            How it Works
          </Text>
          <a href={GIT_BOOK} target="_blank" rel="noreferrer">
            <SunburstCard label="Gitbook" size="md" disableScale />
          </a>
        </div>
      </div>
      <div className="mt-50">
        <MobileSectionCard text={'The Business'} variant="red" />
        <div className="flex flex-col gap-5 mb-50">
          <Text variant={TextVariant.headline} weight={TextWeight.medium}>
            Financials & Tokenomics
          </Text>
          <div className="grid grid-cols-2 gap-5">
            <a href={TOKENOMICS} target="_blank" rel="noreferrer">
              <SunburstCard label="Tokenomics" size="x-sm" disableScale />
            </a>
            <a href={FINANCIALS} target="_blank" rel="noreferrer">
              <SunburstCard label="Financial Model" size="x-sm" disableScale />
            </a>
            <a href={PRO_FORMA_CAP_TABLE} target="_blank" rel="noreferrer">
              <SunburstCard label="Cap Table" size="x-sm" disableScale />
            </a>
            <a href={INCORPORATION_DOCS} target="_blank" rel="noreferrer">
              <SunburstCard label="Formation Docs" size="x-sm" disableScale />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <Text variant={TextVariant.headline} weight={TextWeight.medium}>
            Growth
          </Text>
          <a href={GROWTH_STRATEGY} target="_blank" rel="noreferrer">
            <SunburstCard label="Strategy" size="sm" disableScale />
          </a>
          <a href={MEDIA_MENTIONS} target="_blank" rel="noreferrer">
            <SunburstCard label="Media Mentions" size="sm" disableScale />
          </a>
        </div>
      </div>
      <>
        <div className="flex flex-col items-center justify-center gap-12 h-100vh">
          <div className="flex flex-col items-center gap-6">
            <Text variant={TextVariant.headline} weight={TextWeight.medium}>
              Get Involved
            </Text>
            <a href={CALENDLY} target="_blank" rel="noreferrer">
              <Button onClick={() => console.log('scheduled call')}>
                Schedule a Call
              </Button>
            </a>
          </div>
          <div className="flex justify-end items-end flex-row gap-10">
            <div className="border border-white rounded-lg">
              <IconButtonLink
                url={'https://medium.com/0xintuition'}
                icon={IconName.medium}
              />
            </div>
            <div className="border border-white rounded-lg">
              <IconButtonLink
                url={'https://discord.gg/2vbVnX6wQp'}
                icon={IconName.discord}
              />
            </div>
            <div className="border border-white rounded-lg">
              <IconButtonLink
                url={'https://x.com/0xIntuition'}
                icon={IconName.twitter}
              />
            </div>
          </div>
        </div>
      </>

      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          right: 0,
          height: '2px',
          background: 'white',
          bottom: '20px',
        }}
      />
    </div>
  )
}
