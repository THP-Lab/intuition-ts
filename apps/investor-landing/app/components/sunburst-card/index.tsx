import { SunburstNoGlow } from '@components/svg/sunburst-no-glow'
import clsx from 'clsx'

export interface ISunburstCardProps {
  label: string
  disabled?: boolean
  disableScale?: boolean
  size?: 'default' | 'sm' | 'md' | 'x-sm'
  glow?: 'white' | 'blue' | 'purple' | 'yellow' | 'pink'
}

export default function SunburstCard({
  label,
  disabled = false,
  disableScale = false,
  size = 'default',
  glow = 'white',
}: ISunburstCardProps) {
  const glowClasses = {
    white: 'hover:drop-shadow-[0_0_50px_#7ED8FF]',
    purple: 'hover:drop-shadow-[0_0_50px_#BF7EFF]',
    yellow: 'hover:drop-shadow-[0_0_50px_#FFDB7E]',
    blue: 'hover:drop-shadow-[0_0_50px_#55CCFF]',
    pink: 'hover:drop-shadow-[0_0_50px_#FF88AA]',
  }

  const sizeClasses = {
    default: '400',
    sm: '250',
    md: '360',
    'x-sm': '200',
  }

  const textSizeClasses = {
    default: 'text-xl',
    sm: 'text-md',
    md: 'text-lg',
    'x-sm': 'text-sm',
  }

  return (
    <div
      className={clsx(
        'relative opacity-60 transition-all duration-300 ease-in-out hover:opacity-100',
        !disableScale && 'hover:scale-110',
        disabled ? 'cursor-not-allowed' : 'cursor-pointer',
        glowClasses[glow],
      )}
    >
      <SunburstNoGlow
        className={`z-30 transition-all duration-300 ease-in-out`}
        width={sizeClasses[size]}
        height={sizeClasses[size]}
      />
      <div
        className={clsx(
          'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
          'text-primary uppercase tracking-[3px] font-medium text-center',
          textSizeClasses[size],
          disabled && 'opacity-40',
        )}
      >
        {label}
      </div>
    </div>
  )
}
