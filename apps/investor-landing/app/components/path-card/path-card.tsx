import { Button, Text } from '@0xintuition/1ui'

import { cn } from '@lib/utils/misc'

export interface IPathCardProps {
  heading: string
  children: React.ReactNode
  buttonLabel: string
  handleClick: () => void
}

export default function PathCard({
  heading,
  buttonLabel,
  handleClick,
  children,
}: IPathCardProps) {
  return (
    <div className="w-full h-full theme-border rounded-xl relative flex flex-col items-center">
      <Text
        variant="bodyLarge"
        weight="medium"
        className="text-white uppercase tracking-[3px] m-6"
      >
        {heading}
      </Text>
      <div className="max-h-[70%]">{children}</div>
      <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Button
          onClick={handleClick}
          className={cn(
            'font-medium text-base uppercase tracking-[3px]',
            'px-6 py-3 bg-black text-white border border-white rounded',
            'opacity-80 transition-all duration-300 ease-in-out hover:opacity-100',
          )}
        >
          {buttonLabel}
        </Button>
      </div>
    </div>
  )
}
