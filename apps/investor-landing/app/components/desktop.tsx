import { useRef, useState } from 'react'

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
import PathCard from '@components/path-card/path-card'
import PathCardSeparator from '@components/path-card/path-card-separator'
import SunburstCard from '@components/sunburst-card'
import { Business } from '@components/svg/business'
import { Product } from '@components/svg/product'
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

const scrollToRef = (ref: React.RefObject<HTMLElement>) => {
  const handleClick = () => {
    window.scrollTo({
      top: ref.current?.offsetTop,
      left: 0,
      behavior: 'smooth',
    })
  }
  return { handleClick }
}

function Block({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section id={id}>
      <div>{children}</div>
    </section>
  )
}

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

type Section = 'PITCH_DECK' | 'PICK_PATH' | 'PRODUCT' | 'BUSINESS' | 'JOIN'

export interface IDesktopProps {}

export default function Desktop() {
  const [activeSection, setActiveSection] = useState<Section>('PITCH_DECK')

  const navigate = useNavigate()

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  scrollYProgress.onChange((latest) => {
    if (latest <= 0.2) {
      setActiveSection('PITCH_DECK')
    }
    if (latest > 0.2) {
      setActiveSection('PICK_PATH')
    }
    if (latest > 0.4) {
      setActiveSection('PRODUCT')
    }
    if (latest > 0.7) {
      setActiveSection('BUSINESS')
    }
    if (latest > 0.9) {
      setActiveSection('JOIN')
    }
    console.log('latest is ', latest)
  })
  const pitchDecksRef = useRef(null)
  const chooseYourPathRef = useRef(null)
  const productRef = useRef(null)
  const businessRef = useRef(null)
  const callToActionRef = useRef(null)
  const { handleClick: handleScrollToPitchDecks } = scrollToRef(pitchDecksRef)
  const { handleClick: handleScrollToChooseYourPath } =
    scrollToRef(chooseYourPathRef)
  const { handleClick: handleScrollToProduct } = scrollToRef(productRef)
  const { handleClick: handleScrollToBusiness } = scrollToRef(businessRef)
  const { handleClick: handleScrollToCallToAction } =
    scrollToRef(callToActionRef)

  function handleBack() {
    navigate('/')
  }

  return (
    <div className="text-primary bg-transparent">
      <div className="fixed bottom-5 left-5 z-50 bg-primary/10 rounded-lg">
        <div className="flex flex-col items-end z-999 p-2 font-medium m-2.5">
          <Button
            variant={ButtonVariant.text}
            onClick={handleScrollToPitchDecks}
            className={`mb-2.5 w-full justify-end uppercase tracking-widest rounded-md text-lg ${
              activeSection === 'PITCH_DECK'
                ? 'bg-primary/20 text-primary'
                : 'bg-transparent hover:bg-primary/10'
            }`}
          >
            Pitch Deck
          </Button>
          <Button
            variant={ButtonVariant.text}
            onClick={handleScrollToChooseYourPath}
            className={`mb-2.5 w-full justify-end uppercase tracking-widest rounded-md text-lg ${
              activeSection === 'PICK_PATH'
                ? 'bg-primary/20 text-primary'
                : 'bg-transparent hover:bg-primary/10'
            }`}
          >
            Pick Your Path
          </Button>
          <Button
            variant={ButtonVariant.text}
            onClick={handleScrollToProduct}
            className={`mb-2.5 w-full justify-end uppercase tracking-widest rounded-md text-lg ${
              activeSection === 'PRODUCT'
                ? 'bg-primary/20 text-primary'
                : 'bg-transparent hover:bg-primary/10'
            }`}
          >
            Product
          </Button>
          <Button
            variant={ButtonVariant.text}
            onClick={handleScrollToBusiness}
            className={`mb-2.5 w-full justify-end uppercase tracking-widest rounded-md text-lg ${
              activeSection === 'BUSINESS'
                ? 'bg-primary/20 text-primary'
                : 'bg-transparent hover:bg-primary/10'
            }`}
          >
            Business
          </Button>
          <Button
            variant={ButtonVariant.text}
            onClick={handleScrollToCallToAction}
            className={`w-full justify-end uppercase tracking-widest rounded-md text-lg ${
              activeSection === 'JOIN'
                ? 'bg-primary/20 text-primary'
                : 'bg-transparent hover:bg-primary/10'
            }`}
          >
            Contact Us
          </Button>
        </div>
      </div>
      <div ref={pitchDecksRef}>
        <Block id="2">
          <>
            <button
              className="absolute top-8 left-8 hover:cursor-pointer"
              onClick={handleBack}
              aria-label="Go back"
            >
              <HeaderLogo />
            </button>
            <div className="flex items-center justify-evenly gap-12 h-[88vh]">
              <a href={PITCH_DECK} target="_blank" rel="noreferrer">
                <SunburstCard label={'Pitch Deck'} glow="white" />
              </a>
              {/* <Box>Meme Deck</Box> */}
            </div>
          </>
          <>
            <div
              className="flex flex-col justify-center h-[10vh] mb-0"
              ref={chooseYourPathRef}
            >
              {/* <ReactSVG src="scroll-icon.svg" onClick={handleScrollToChooseYourPath} /> */}

              <Button
                variant={ButtonVariant.ghost}
                onClick={
                  activeSection === 'PITCH_DECK'
                    ? handleScrollToChooseYourPath
                    : handleScrollToPitchDecks
                }
                className="w-fit mx-auto"
              >
                <Icon
                  name={
                    activeSection === 'PITCH_DECK'
                      ? IconName.arrowDown
                      : IconName.arrowUp
                  }
                />
              </Button>
            </div>
          </>
        </Block>
      </div>
      <div>
        <Block id="3">
          <div className="h-[90vh] pt-[10vh]">
            <Text
              variant={TextVariant.headline}
              weight={TextWeight.medium}
              className="text-primary pb-6 tracking-widest text-center mb-12 uppercase"
            >
              Follow your Intuition
            </Text>
            <>
              <div className="flex items-center justify-center gap-0 h-[500px]">
                <div className="w-[40vw] h-full">
                  <PathCard
                    heading="The Product"
                    buttonLabel="Choose"
                    handleClick={handleScrollToProduct}
                  >
                    <Product />
                  </PathCard>
                </div>
                <PathCardSeparator />
                <div className="w-[40vw] h-full">
                  <PathCard
                    heading="The Business"
                    buttonLabel="Choose"
                    handleClick={handleScrollToBusiness}
                  >
                    <Business />
                  </PathCard>
                </div>
              </div>
            </>
          </div>
        </Block>
      </div>
      <div ref={productRef}>
        <Block id="4">
          <div className="flex items-center justify-evenly gap-12 h-[100vh] relative">
            <div className="absolute top-[5vh] left-1/2 transform -translate-x-1/2 z-10">
              <Button
                variant={ButtonVariant.ghost}
                onClick={handleScrollToChooseYourPath}
                className="w-fit mx-auto"
              >
                <Icon name={IconName.arrowUp} />
              </Button>
            </div>
            <div className="flex flex-col gap-5">
              <Text
                variant={TextVariant.headline}
                weight={TextWeight.medium}
                className="text-primary pb-6 tracking-widest text-center mb-12"
              >
                The Vision
              </Text>
              <div className="grid grid-cols-2 gap-5">
                <a href={ONE_PAGER} target="_blank" rel="noreferrer">
                  <SunburstCard label="1-Pager" size="sm" />
                </a>
                <a
                  href={'https://medium.com/0xintuition'}
                  target="_blank"
                  rel="noreferrer"
                >
                  <SunburstCard label="Medium" size="sm" />
                </a>
                <a href={APP_DEMO} target="_blank" rel="noreferrer">
                  <SunburstCard label="App Video" size="sm" />
                </a>

                <a href={SNAP_DEMO} target="_blank" rel="noreferrer">
                  <SunburstCard label="MetaMask Integration Video" size="sm" />
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <Text
                variant={TextVariant.headline}
                weight={TextWeight.medium}
                className="text-primary pb-6 tracking-widest text-center mb-12"
              >
                How it Works
              </Text>
              <a href={GIT_BOOK} target="_blank" rel="noreferrer">
                <SunburstCard label="Gitbook" size="md" />
              </a>
            </div>
            <div className="absolute bottom-[5vh] left-1/2 transform -translate-x-1/2 z-10">
              <Button
                variant={ButtonVariant.ghost}
                onClick={handleScrollToBusiness}
                className="w-fit mx-auto"
              >
                <Icon name={IconName.arrowDown} />
              </Button>
            </div>
          </div>
        </Block>
      </div>
      <div ref={businessRef}>
        <Block id="5">
          <div className="flex items-center justify-evenly gap-12 h-[100vh] relative">
            <div className="absolute top-[5vh] left-1/2 transform -translate-x-1/2 z-10">
              <Button
                variant={ButtonVariant.ghost}
                onClick={handleScrollToProduct}
                className="w-fit mx-auto"
              >
                <Icon name={IconName.arrowUp} />
              </Button>
            </div>
            <div className="flex flex-col gap-5">
              <Text
                variant={TextVariant.headline}
                weight={TextWeight.medium}
                className="text-primary pb-6 tracking-widest text-center mb-12"
              >
                Financials & Tokenomics
              </Text>
              <div className="grid grid-cols-2 gap-5">
                <a href={TOKENOMICS} target="_blank" rel="noreferrer">
                  <SunburstCard label="Tokenomics" size="sm" />
                </a>
                <a href={FINANCIALS} target="_blank" rel="noreferrer">
                  <SunburstCard label="Financial Model" size="sm" />
                </a>
                <a href={PRO_FORMA_CAP_TABLE} target="_blank" rel="noreferrer">
                  <SunburstCard label="Cap Table" size="sm" />
                </a>
                <a href={INCORPORATION_DOCS} target="_blank" rel="noreferrer">
                  <SunburstCard label="Formation Docs" size="sm" />
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <Text
                variant={TextVariant.headline}
                weight={TextWeight.medium}
                className="text-primary pb-6 tracking-widest text-center mb-12"
              >
                Growth
              </Text>
              <a href={GROWTH_STRATEGY} target="_blank" rel="noreferrer">
                <SunburstCard label="Strategy" size="sm" />
              </a>
              <a href={MEDIA_MENTIONS} target="_blank" rel="noreferrer">
                <SunburstCard label="Media Mentions" size="sm" />
              </a>
            </div>
            <div className="absolute bottom-[5vh] left-1/2 transform -translate-x-1/2 z-10">
              <Button
                variant={ButtonVariant.ghost}
                onClick={handleScrollToCallToAction}
                className="w-fit mx-auto"
              >
                <Icon name={IconName.arrowDown} />
              </Button>
            </div>
          </div>
        </Block>
      </div>
      <div ref={callToActionRef}>
        <Block id="6">
          <div className="flex items-center justify-evenly gap-12 h-[100vh] relative">
            <div className="absolute top-[5vh] left-1/2 transform -translate-x-1/2 z-10">
              <Button
                variant={ButtonVariant.ghost}
                onClick={handleScrollToBusiness}
                className="w-fit mx-auto"
              >
                <Icon name={IconName.arrowUp} />
              </Button>
            </div>
            <div className="flex flex-col items-center justify-center gap-12">
              <div className="flex flex-col align-center gap-6">
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
            {/* No bottom arrow for the last section */}
          </div>
        </Block>
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
