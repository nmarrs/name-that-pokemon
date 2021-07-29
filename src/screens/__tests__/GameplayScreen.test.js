import { render, screen } from '@testing-library/react'
import GameplayScreen from 'screens/GameplayScreen'

test('renders current round text', () => {
  render(<GameplayScreen />)
  const textElement = screen.getByText(/current round/i)
  expect(textElement).toBeInTheDocument()
})