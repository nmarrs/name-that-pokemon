import React from 'react'
import { render } from '@testing-library/react'

import DataLabel from 'components/DataLabel'

describe('DataLabel', () => {
  it('renders DataLabel correctly', () => {
    const { queryByTestId } = render(
      <DataLabel dataLabelText="Test DataLabel" dataText="Test Data" />,
    )

    expect(queryByTestId('dataLabelText')).not.toEqual(null)
  })
})
