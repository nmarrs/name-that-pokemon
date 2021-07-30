import { render } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'

import GameplayScreen from 'screens/GameplayScreen'

describe('GameplayScreen', () => {
  // TODO: Figure out fix for test
  it.skip('renders GameplayScreen correctly', () => {
    const { getByText } = render(
      <MockedProvider>
        <GameplayScreen
          setCurrentScreen={jest.fn()}
          currentScore={0}
          setCurrentScore={jest.fn()}
          numberOfRounds={10}
        />
      </MockedProvider>,
    )

    const textElement = getByText(/current round/i)

    expect(textElement).toBeInTheDocument()
  })
})
