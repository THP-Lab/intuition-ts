import type { Meta, StoryObj } from '@storybook/react'
import { Currency } from 'types'

import {
  PositionValueDisplay,
  PositionValueVariants,
} from './PositionValueDisplay'

// Setup meta for the Storybook
const meta: Meta = {
  title: 'Intuition Portal/Values/PositionValue Display',
  component: PositionValueDisplay,
  argTypes: {
    position: {
      options: Object.keys(PositionValueVariants),
      control: { type: 'select' },
    },
    currency: {
      options: Object.values(Currency),
      control: 'select',
    },
  },
}

export default meta

type Story = StoryObj<typeof PositionValueDisplay>

export const BasicUsage: Story = {
  name: 'Position Value Display',
  args: {
    value: 0.789,
    position: PositionValueVariants.identity,
    currency: Currency.ETH,
    feesAccrued: 0.02,
  },
  render: (args) => (
    <div>
      <PositionValueDisplay {...args} />
    </div>
  ),
}
