import {
  CurrencyValueDisplay,
  Tag,
  TagVariant,
  TextProps,
  ValueChange,
} from 'components'
import { Currency, CurrencyType } from 'types'

export const PositionValueVariants = {
  identity: 'identity',
  claimFor: 'claimFor',
  claimAgainst: 'claimAgainst',
} as const

export type PositionValueVariantType =
  (typeof PositionValueVariants)[keyof typeof PositionValueVariants]

interface PositionValueDisplayProps extends TextProps {
  position: PositionValueVariantType
  value: number
  feesAccrued: number
  currency?: CurrencyType
}

const PositionValueDisplay = ({
  value,
  position = PositionValueVariants.identity,
  feesAccrued,
  currency = Currency.ETH,
}: PositionValueDisplayProps) => {
  const renderBadge = () => {
    if (position === PositionValueVariants.claimFor) {
      return <Tag variant={TagVariant.for}>FOR</Tag>
    }
    if (position === PositionValueVariants.claimAgainst) {
      return <Tag variant={TagVariant.against}>AGAINST</Tag>
    }
    return null
  }
  return (
    <div className="flex items-center justify-start gap-2 max-sm:justify-between">
      <div className="h-full flex flex-col pt-1">{renderBadge()}</div>
      <div className="h-full flex flex-col items-end">
        <CurrencyValueDisplay value={value} currency={currency} />
        <ValueChange value={feesAccrued} currency={currency} />
      </div>
    </div>
  )
}

export { PositionValueDisplay }
