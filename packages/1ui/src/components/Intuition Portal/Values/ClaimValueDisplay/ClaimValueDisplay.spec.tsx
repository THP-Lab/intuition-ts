import React from 'react'

import { render } from '@testing-library/react'

import { ClaimValueDisplay } from '.'

describe('ClaimValueDisplay', () => {
  it('should render the ClaimValueDisplay component', () => {
    const { asFragment } = render(
      <ClaimValueDisplay
        tvl={0.345}
        currency="ETH"
        claimsFor={230}
        claimsAgainst={125}
      />,
    )
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="flex flex-col items-end max-md:flex-row max-md:justify-between max-md:items-center"
        >
          <div
            class="text-primary text-lg font-medium"
          >
            0.345 ETH
          </div>
          <div
            class="flex gap-2 items-center mt-2 max-md:mt-0"
          >
            <div
              class="flex gap-1 items-center"
            >
              <svg
                class="text-for h-4 w-4"
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
            <div
              class="flex gap-1 items-center"
            >
              <svg
                class="text-against h-4 w-4"
              >
                <use
                  href="/src/components/Visualization/Icon/Icon.sprites.svg#people"
                />
              </svg>
              <div
                class="text-base font-normal text-secondary-foreground"
              >
                125
              </div>
            </div>
          </div>
        </div>
      </DocumentFragment>
    `)
  })
})
