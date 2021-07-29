import { render, screen } from '@testing-library/react'
import GameplayScreen from 'screens/GameplayScreen'

test('renders gameplay text', () => {
  render(<GameplayScreen />)
  const textElement = screen.getByText(/Gameplay screen/i)
  expect(textElement).toBeInTheDocument()
})
