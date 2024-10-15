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
        'w-full py-5 border-t border-b border-border mb-20 uppercase',
        variant === 'blue' && 'bg-for/20',
        variant === 'red' && 'bg-destructive/20',
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
