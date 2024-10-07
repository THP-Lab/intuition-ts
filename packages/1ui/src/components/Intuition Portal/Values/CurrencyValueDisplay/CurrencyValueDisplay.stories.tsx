import type { Meta, StoryObj } from '@storybook/react'
import { TextVariant } from 'components/Type/Text'
import { Currency } from 'types'

import { CurrencyValueDisplay } from '.'

// Setup meta for the Storybook
const meta: Meta = {
  title: 'Intuition Portal/Values/Currency Value Display',
  component: CurrencyValueDisplay,
  argTypes: {
    textVariant: {
      description: 'Text variants available in the design system',
      options: Object.values(TextVariant),
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'bodyLarge' },
      },
      control: 'select',
    },
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

type Story = StoryObj<typeof CurrencyValueDisplay>

export const BasicUsage: Story = {
  name: 'Currency Value Display',
  args: {
    value: 0.345,
    currency: 'ETH',
    textVariant: 'bodyLarge',
  },
  render: (args) => (
    <div>
      <CurrencyValueDisplay {...args} />
    </div>
  ),
}
