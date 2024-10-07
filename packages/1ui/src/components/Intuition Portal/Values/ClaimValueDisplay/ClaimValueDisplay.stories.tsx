import type { Meta, StoryObj } from '@storybook/react'
import { ClaimValueDisplay } from 'components/Intuition Portal/Values/ClaimValueDisplay/ClaimValueDisplay'
import { Currency } from 'types'

// Setup meta for the Storybook
const meta: Meta = {
  title: 'Intuition Portal/Values/Claim Value Display',
  component: ClaimValueDisplay,
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

type Story = StoryObj<typeof ClaimValueDisplay>

export const BasicUsage: Story = {
  name: 'Claim Value Display',
  args: {
    tvl: 0.345,
    currency: 'ETH',
    claimsFor: 230,
    claimsAgainst: 125,
  },
  render: (args) => (
    <div>
      <ClaimValueDisplay {...args} />
    </div>
  ),
}
