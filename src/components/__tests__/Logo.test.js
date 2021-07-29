import { render, screen } from '@testing-library/react'
import Logo from 'components/Logo'

test('renders main menu text', () => {
  render(<Logo />)
  const textElement = screen.getByText(/name that/i)
  expect(textElement).toBeInTheDocument()
})
