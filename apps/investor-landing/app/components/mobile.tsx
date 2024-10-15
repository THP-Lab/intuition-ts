import {
  Button,
  ButtonSize,
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
import { motion, useScroll, useSpring } from 'framer-motion'

const IconButtonLink = ({ url, icon }: { url: string; icon: IconNameType }) => (
  <a href={url} target="_blank" rel="noreferrer">
    <Button
      variant={ButtonVariant.ghost}
      size={ButtonSize.iconXl}
      className="transition-all duration-300"
    >
      <Icon name={icon} />
    </Button>
  </a>
)

export default function Mobile() {
  const navigate = useNavigate()

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  scrollYProgress.onChange(() => {})

  function handleBack() {
    navigate('/investors')
  }

  return (
    <div className="text-primary bg-black text-center font-rubik">
      <div className="mb-12">
        <button
          className="absolute top-8 left-8 hover:cursor-pointer"
          onClick={handleBack}
          aria-label="Go back"
        >
          <HeaderLogo />
        </button>
        <div className="flex items-center justify-evenly gap-12 h-[88vh]">
          <a href={PITCH_DECK} target="_blank" rel="noreferrer">
            <SunburstCard label={'Pitch Deck'} glow="white" disableScale />
          </a>
        </div>
        <div className="flex flex-col justify-center h-[10vh] mb-12 gap-2">
          <ScrollIcon className="mx-auto" />
          <Text
            variant={TextVariant.caption}
            className="tracking-widest text-primary/70 uppercase"
          >
            SCROLL
          </Text>
        </div>
      </div>
      <div className="mt-25">
        <MobileSectionCard text={'The Product'} />
        <div className="flex flex-col gap-5 mb-[200px]">
          <Text
            variant={TextVariant.headline}
            weight={TextWeight.medium}
            className="text-primary pb-6 tracking-widest text-center uppercase"
          >
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
        <div className="flex flex-col gap-5 mb-[200px]">
          <Text
            variant={TextVariant.headline}
            weight={TextWeight.medium}
            className="text-primary pb-6 tracking-widest text-center uppercase"
          >
            How it Works
          </Text>
          <a
            href={GIT_BOOK}
            target="_blank"
            rel="noreferrer"
            className="mx-auto"
          >
            <SunburstCard label="Gitbook" size="md" disableScale />
          </a>
        </div>
      </div>
      <div className="mt-25">
        <MobileSectionCard text={'The Business'} variant="red" />
        <div className="flex flex-col gap-5 mb-[200px]">
          <Text
            variant={TextVariant.headline}
            weight={TextWeight.medium}
            className="text-primary pb-6 tracking-widest text-center uppercase"
          >
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
          <Text
            variant={TextVariant.headline}
            weight={TextWeight.medium}
            className="text-primary pb-6 tracking-widest text-center uppercase"
          >
            Growth
          </Text>
          <a
            href={GROWTH_STRATEGY}
            target="_blank"
            rel="noreferrer"
            className="mx-auto"
          >
            <SunburstCard label="Strategy" size="sm" disableScale />
          </a>
          <a
            href={MEDIA_MENTIONS}
            target="_blank"
            rel="noreferrer"
            className="mx-auto"
          >
            <SunburstCard label="Media Mentions" size="sm" disableScale />
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-12 h-[100vh]">
        <div className="flex flex-col items-center gap-6">
          <Text
            variant={TextVariant.headline}
            weight={TextWeight.medium}
            className="text-primary pb-6 tracking-widest text-center uppercase"
          >
            Get Involved
          </Text>
          <a href={CALENDLY} target="_blank" rel="noreferrer">
            <Button
              onClick={() => console.log('scheduled call')}
              variant={ButtonVariant.ghost}
              size={ButtonSize.xl}
              className="mx-auto uppercase tracking-widest transition-all duration-300"
            >
              Schedule a Call
            </Button>
          </a>
        </div>
        <div className="flex justify-end items-end flex-row gap-12">
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
              url={'https://twitter.com/0xIntuition'}
              icon={IconName.twitter}
            />
          </div>
        </div>
      </div>
      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          right: 0,
          height: '2px',
          background: 'white',
          bottom: '20px',
          scaleX,
        }}
      />
    </div>
  )
}
