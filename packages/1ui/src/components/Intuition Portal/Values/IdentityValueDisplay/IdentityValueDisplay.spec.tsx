import React from 'react'

import { render } from '@testing-library/react'

import { IdentityValueDisplay } from '.'

describe('IdentityValueDisplay', () => {
  it('should render the IdentityValueDisplay component', () => {
    const { asFragment } = render(
      <IdentityValueDisplay value={0.345} currency="ETH" followers={230} />,
    )
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="flex flex-col items-end max-sm:flex-row max-sm:justify-between max-sm:items-center max-sm:w-full"
        >
          <div
            class="text-primary text-lg font-medium"
          >
            0.345 ETH
          </div>
          <div
            class="flex gap-1 items-center"
          >
            <svg
              class="text-secondary-foreground h-4 w-4"
            >
              <use
                href="/src/components/Visualization/Icon/Icon.sprites.svg#people"
              />
            </svg>
            <div
              class="text-base font-normal text-secondary-foreground"
            >
              230
            </div>
          </div>
        </div>
      </DocumentFragment>
    `)
  })
})
