import { Text } from '@0xintuition/1ui'

import { SunburstNoGlow } from '@components/svg/sunburst-no-glow'

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
    default: 'h-full w-full',
    sm: 'h-[250px] w-[250px]',
    md: 'h-[360px] w-[360px]',
    'x-sm': 'h-[200px] w-[200px]',
  }

  return (
    <div
      className={`relative opacity-60 transition-all duration-300 ease-in-out hover:opacity-100 ${
        disableScale ? '' : 'transform hover:scale-110'
      } ${disabled ? 'cursor-not-allowed opacity-30' : 'cursor-pointer'} ${
        glow ? glowClasses[glow] : ''
      }`}
    >
      <SunburstNoGlow
        className={`z-30 transition-all duration-300 ease-in-out ${sizeClasses[size]}`}
      />
      <Text
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white uppercase tracking-widest font-medium ${
          size === 'sm' ? 'text-md' : size === 'md' ? 'text-lg' : 'text-xl'
        } ${disabled ? 'opacity-40' : ''}`}
      >
        {label}
      </Text>
    </div>
  )
}
