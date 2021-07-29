import React from 'react'
import { render } from '@testing-library/react'

import Button from 'components/Button'

describe('Button', () => {
  it('renders Button correctly', () => {
    const { queryByTestId } = render(<Button title="Test Button" />)

    expect(queryByTestId('button')).not.toEqual(null)
  })
})
