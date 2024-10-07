import { Text, TextVariant, TextWeight, ValueChange } from 'components'
import { CurrencyType } from 'types'

interface PositionCardFeesAccruedProps
  extends React.HTMLAttributes<HTMLDivElement> {
  amount: number
  currency?: CurrencyType
}

const PositionCardFeesAccrued = ({
  amount,
  currency,
}: PositionCardFeesAccruedProps) => {
  return (
    <div className={'flex flex-col max-lg:items-center'}>
      <Text
        variant={TextVariant.caption}
        weight={TextWeight.medium}
        className="text-muted-foreground mb-0.5"
      >
        Fees Accrued
      </Text>
      <ValueChange value={amount} currency={currency} />
    </div>
  )
}

export { PositionCardFeesAccrued }
