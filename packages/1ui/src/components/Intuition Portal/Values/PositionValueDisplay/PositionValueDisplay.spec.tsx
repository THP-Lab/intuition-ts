import { render } from '@testing-library/react'

import { PositionValueDisplay } from '.'

describe('PositionValueDisplay', () => {
  it('should render the PositionValueDisplay component', () => {
    const { asFragment } = render(
      <PositionValueDisplay
        value={0.789}
        position="identity"
        feesAccrued={0.02}
      />,
    )
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="flex items-center justify-start gap-2 max-sm:justify-between"
        >
          <div
            class="h-full flex flex-col pt-1"
          />
          <div
            class="h-full flex flex-col items-end"
          >
            <div
              class="text-primary text-lg font-medium"
            >
              0.789 ETH
            </div>
            <div
              class="text-lg font-medium text-success"
            >
              +0.020 ETH
            </div>
          </div>
        </div>
      </DocumentFragment>
    `)
  })
})
