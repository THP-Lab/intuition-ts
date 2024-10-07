import { Text, TextProps, TextVariant, TextWeight } from 'components'
import { Currency, CurrencyType } from 'types'

interface ValueChangeProps extends TextProps {
  value: number
  currency?: CurrencyType
}

const ValueChange = ({
  value,
  currency = Currency.ETH,
  ...props
}: ValueChangeProps) => {
  const formattedValueChange = value.toFixed(3)
  const amountClass = value > 0 ? 'text-success' : value < 0 ? 'text-error' : ''
  return (
    <Text
      variant={TextVariant.bodyLarge}
      weight={TextWeight.medium}
      className={amountClass}
      {...props}
    >
      {value > 0 ? '+' : ''}
      {formattedValueChange} {currency}
    </Text>
  )
}

export { ValueChange }
