import { ButtonVariant } from 'components/Button'

import { SidebarNavItem, SidebarNavItemProps } from './SidebarNavItem'

export const SidebarLayoutNavItem = ({
  iconName,
  label,
  onClick,
  variant,
  ...props
}: SidebarNavItemProps) => {
  return (
    <SidebarNavItem
      {...props}
      variant={variant ?? ButtonVariant.navigation}
      label={label}
      iconName={iconName}
      onClick={onClick}
    />
  )
}
