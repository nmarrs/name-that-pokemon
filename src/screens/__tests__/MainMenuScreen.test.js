import { render, screen } from '@testing-library/react'
import MainMenuScreen from 'screens/MainMenuScreen'

test('renders main menu text', () => {
  render(<MainMenuScreen setCurrentScreen={jest.fn()} />)
  const textElement = screen.getByText(/Play Now/i)
  expect(textElement).toBeInTheDocument()
})
