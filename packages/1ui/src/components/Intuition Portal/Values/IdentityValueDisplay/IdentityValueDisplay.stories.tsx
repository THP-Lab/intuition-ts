import type { Meta, StoryObj } from '@storybook/react'
import { IdentityValueDisplay } from 'components'
import { Currency } from 'types'

// Setup meta for the Storybook
const meta: Meta = {
  title: 'Intuition Portal/Values/Identity Value Display',
  component: IdentityValueDisplay,
  argTypes: {
    currency: {
      description: 'Currency to display',
      options: Object.values(Currency),
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'ETH' },
      },
      control: 'select',
    },
  },
}

export default meta

type Story = StoryObj<typeof IdentityValueDisplay>

export const BasicUsage: Story = {
  name: 'Value Accrual',
  args: {
    value: 0.345,
    currency: 'ETH',
    followers: 230,
  },
  render: (args) => (
    <div>
      <IdentityValueDisplay {...args} />
    </div>
  ),
}
