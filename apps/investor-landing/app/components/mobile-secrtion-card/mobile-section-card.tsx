import { Text, TextVariant, TextWeight } from '@0xintuition/1ui'

import clsx from 'clsx'

export interface IMobileSectionCardProps {
  text: string
  variant?: 'blue' | 'red'
}

export default function MobileSectionCard({
  text,
  variant = 'blue',
}: IMobileSectionCardProps) {
  return (
    <div
      className={clsx(
        'w-full py-5 border-t border-b border-border mb-20',
        variant === 'blue' && 'bg-for',
        variant === 'red' && 'bg-destructive',
      )}
    >
      <Text
        variant={TextVariant.headline}
        weight={TextWeight.medium}
        className="text-primary"
      >
        {text}
      </Text>
    </div>
  )
}
