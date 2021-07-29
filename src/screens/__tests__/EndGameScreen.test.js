import { render, screen } from '@testing-library/react'
import EndGameScreen from 'screens/EndGameScreen'

test('renders end game text', () => {
  render(<EndGameScreen />)
  const textElement = screen.getByText(/End game screen/i)
  expect(textElement).toBeInTheDocument()
})
