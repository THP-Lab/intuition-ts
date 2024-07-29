// Import Storybook meta and StoryObj type
import type { Meta, StoryObj } from '@storybook/react'

// Import your actual component
import { ScrollArea } from './ScrollArea'

// Setup meta for the Storybook
const meta: Meta<typeof ScrollArea> = {
  title: 'Components/ScrollArea',
  component: ScrollArea,
}

export default meta

// Define types for your stories
type Story = StoryObj<typeof ScrollArea>

// Example story for the default state
export const BasicUsage: Story = {
  args: {},
  render: (args) => <ScrollArea {...args} />,
}
