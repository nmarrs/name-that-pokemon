import { render, screen } from '@testing-library/react'
import EndGameScreen from 'screens/EndGameScreen'

describe('EndGameScreen', () => {
  it('renders EndGameScreen correctly', () => {
    const { queryByTestId } = render(
      <EndGameScreen setCurrentScreen={jest.fn()} />,
    )

    expect(queryByTestId('endGameContainer')).not.toEqual(null)
  })
})
