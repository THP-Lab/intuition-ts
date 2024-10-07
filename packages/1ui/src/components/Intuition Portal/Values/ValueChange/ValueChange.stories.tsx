import type { Meta, StoryObj } from '@storybook/react'
import { Currency } from 'types'

import { ValueChange } from './ValueChange'

// Setup meta for the Storybook
const meta: Meta = {
  title: 'Intuition Portal/Values/Value Change',
  component: ValueChange,
  argTypes: {
    currency: {
      options: Object.values(Currency),
      control: 'select',
    },
  },
}

export default meta

type Story = StoryObj<typeof ValueChange>

export const BasicUsage: Story = {
  name: 'Value Change',
  args: {
    value: 0.005,
    currency: Currency.ETH,
  },
  render: (args) => (
    <div>
      <ValueChange {...args} />
    </div>
  ),
}
