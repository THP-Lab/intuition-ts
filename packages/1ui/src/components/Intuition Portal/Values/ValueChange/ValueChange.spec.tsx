import React from 'react'

import { render } from '@testing-library/react'

import { ValueChange } from '.'

describe('ValueChange', () => {
  it('should render the ValueChange component', () => {
    const { asFragment } = render(<ValueChange value={0.005} currency="ETH" />)
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="text-lg font-medium text-success"
        >
          +0.005 ETH
        </div>
      </DocumentFragment>
    `)
  })
})
