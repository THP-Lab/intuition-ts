// Import React
import React from 'react'

// Import Storybook meta and StoryObj type
import type { Meta, StoryObj } from '@storybook/react'

// Import your actual component
import { Card } from './Card'

// Setup meta for the Storybook
const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
}

export default meta

// Define types for your stories
type Story = StoryObj<typeof Card>

// Example story for the default state
export const BasicUsage: Story = {
  args: {
    // Define default props here, if any
  },
  render: (args) => <Card {...args} />,
}
