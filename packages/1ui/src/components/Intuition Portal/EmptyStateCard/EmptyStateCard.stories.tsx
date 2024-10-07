import type { Meta, StoryObj } from '@storybook/react'
import { Button, Icon } from 'components'

import { EmptyStateCard } from './EmptyStateCard'

const meta: Meta<typeof EmptyStateCard> = {
  title: 'Intuition Portal/EmptyStateCard',
  component: EmptyStateCard,
}

export default meta

type Story = StoryObj<typeof EmptyStateCard>

export const BasicUsage: Story = {
  args: {},
  render: () => (
    <div className="w-[600px]">
      <EmptyStateCard message="No identities found." />
    </div>
  ),
}

export const WithChildren: Story = {
  args: {},
  render: () => (
    <div className="w-[600px]">
      <EmptyStateCard message="No identities found.">
        <Button size="md" onClick={() => console.log('Clicked')}>
          <Icon name="fingerprint" className="h-4 w-4" /> Create an Identity
        </Button>
      </EmptyStateCard>
    </div>
  ),
}
