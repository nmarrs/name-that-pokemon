import { render, screen } from '@testing-library/react'
import GameplayScreen from 'screens/GameplayScreen'

test('renders current round text', () => {
  render(
    <GameplayScreen
      setCurrentScreen={jest.fn()}
      currentScore={0}
      setCurrentScore={jest.fn()}
      numberOfRounds={10}
    />,
  )
  const textElement = screen.getByText(/current round/i)
  expect(textElement).toBeInTheDocument()
})
