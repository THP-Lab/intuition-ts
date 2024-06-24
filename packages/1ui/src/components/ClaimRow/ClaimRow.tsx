import * as React from 'react'

import { CurrencyType } from 'types'

import { Icon, IconName, MonetaryValue, Text, TextVariant } from '..'

export interface ClaimRowProps extends React.HTMLAttributes<HTMLDivElement> {
  claimsFor: number
  claimsAgainst: number
  amount: number
  currency?: CurrencyType
}

const ClaimRow = ({
  claimsFor,
  claimsAgainst,
  amount,
  currency,
  children,
  ...props
}: ClaimRowProps) => {
  const againstPercentage = (claimsAgainst / (claimsFor + claimsAgainst)) * 100

  return (
    <div className="flex-col gap-2" {...props}>
      <div className="flex justify-between items-center">
        <div className="flex items-center h-[6px] w-[60%]">
          <span
            className="h-full bg-against block rounded-l-sm"
            style={{ width: `${againstPercentage}%` }}
          />
          <span className="h-full w-full bg-for block rounded-r-sm" />
        </div>
        <MonetaryValue
          variant={TextVariant.bodyLarge}
          value={amount}
          currency={currency}
        />
      </div>
      <div className="flex justify-between items-center">
        {children}
        <div className="flex gap-2 items-center">
          <div className="flex gap-1 items-center">
            <Icon name={IconName.people} className="text-against h-4 w-4" />
            <Text
              variant={TextVariant.body}
              className="text-secondary-foreground"
            >
              {claimsAgainst}
            </Text>
          </div>
          <div className="flex gap-1 items-center">
            <Icon name={IconName.people} className="text-for h-4 w-4" />
            <Text
              variant={TextVariant.body}
              className="text-secondary-foreground"
            >
              {claimsFor}
            </Text>
          </div>
        </div>
      </div>
    </div>
  )
}

export { ClaimRow }
