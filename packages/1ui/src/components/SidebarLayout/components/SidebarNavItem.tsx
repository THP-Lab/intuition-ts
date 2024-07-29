import { HTMLAttributes } from 'react'

import { type VariantProps } from 'class-variance-authority'
import { cn } from 'styles'

import {
  Button,
  ButtonProps,
  buttonVariants,
  Icon,
  IconNameType,
  Text,
  TextVariant,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../..'
import { useSidebarLayoutContext } from './SidebarLayoutProvider'

export interface SidebarNavItemProps
  extends VariantProps<typeof buttonVariants>,
    ButtonProps {
  iconName: IconNameType
  label: string
  nClick?: () => void
}

export const SidebarNavItem = ({
  iconName,
  label,
  variant,
  onClick,
  isLoading,
  ...props
}: SidebarNavItemProps) => {
  const { isCollapsed } = useSidebarLayoutContext()
  const buttonProps = {
    variant,
    className: 'w-full truncate justify-start',
    onClick,
    isLoading,
    ...props,
  }
  return isCollapsed ? (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size="iconLg"
            {...buttonProps}
            className={cn(buttonProps.className, 'justify-center')}
          >
            {!isLoading && <Icon name={iconName} />}
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right" sideOffset={16}>
          <Text variant={TextVariant.body}>{label}</Text>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ) : (
    <Button
      size="lg"
      {...buttonProps}
      className={cn(buttonProps.className, 'justify-start')}
    >
      {!isLoading && <Icon name={iconName} />}
      {label}
    </Button>
  )
}
