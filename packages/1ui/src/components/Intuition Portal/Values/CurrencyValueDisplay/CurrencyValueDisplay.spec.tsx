import React from 'react'

import { render } from '@testing-library/react'

import { CurrencyValueDisplay } from '.'

describe('CurrencyValueDisplay', () => {
  it('should render the CurrencyValueDisplay component', () => {
    const { asFragment } = render(
      <CurrencyValueDisplay value={0.345} currency="ETH" />,
    )
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="text-primary text-lg font-medium"
        >
          0.345 ETH
        </div>
      </DocumentFragment>
    `)
  })
})
