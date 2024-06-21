import React from 'react'

import { render } from '@testing-library/react'

import { MonetaryValue } from './components'

describe('MonetaryValue', () => {
  it('should render the MonetaryValue component', () => {
    const { asFragment } = render(<MonetaryValue value={0.345} symbol="ETH" />)
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <p
          class="text-primary text-lg font-normal"
        >
          0.345 ETH
        </p>
      </DocumentFragment>
    `)
  })
})
