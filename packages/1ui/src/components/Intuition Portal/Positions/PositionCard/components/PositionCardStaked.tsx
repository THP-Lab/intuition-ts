import { CurrencyValueDisplay, Text } from 'components'
import { CurrencyType } from 'types'

interface PositionCardStakedProps extends React.HTMLAttributes<HTMLDivElement> {
  amount: number
  currency?: CurrencyType
}

const PositionCardStaked = ({ amount, currency }: PositionCardStakedProps) => {
  return (
    <div className="flex flex-col max-lg:items-center">
      <Text variant="caption" className="text-muted-foreground mb-0.5">
        Amount Staked
      </Text>
      <CurrencyValueDisplay
        textVariant="bodyLarge"
        value={amount}
        currency={currency}
      />
    </div>
  )
}

export { PositionCardStaked }
