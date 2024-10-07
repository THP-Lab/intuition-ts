import {
  Text,
  TextProps,
  TextVariant,
  TextVariantType,
  TextWeight,
} from 'components'
import { Currency, CurrencyType } from 'types'

interface CurrencyValueDisplayProps extends TextProps {
  value: number
  currency?: CurrencyType
  textVariant?: TextVariantType
}

const CurrencyValueDisplay = ({
  value,
  currency = Currency.ETH,
  textVariant = TextVariant.bodyLarge,
  ...props
}: CurrencyValueDisplayProps) => {
  return (
    <Text variant={textVariant} weight={TextWeight.medium} {...props}>
      {value} {currency}
    </Text>
  )
}

export { CurrencyValueDisplay }
