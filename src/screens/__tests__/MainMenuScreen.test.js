import { render } from '@testing-library/react'
import MainMenuScreen from 'screens/MainMenuScreen'

describe('MainMenuScreen', () => {
  it('renders MainMenuScreen correctly', () => {
    const { getByText } = render(
      <MainMenuScreen setCurrentScreen={jest.fn()} />,
    )

    const textElement = getByText(/play now/i)

    expect(textElement).toBeInTheDocument()
  })

  it('renders max session score when it exists', () => {
    const { getByText } = render(
      <MainMenuScreen
        setCurrentScreen={jest.fn()}
        currentMaxSessionScore={80}
      />,
    )

    const textElement = getByText(/best score/i)

    expect(textElement).toBeInTheDocument()
  })

  it('does not render max session score when non exists', () => {
    const { queryByText } = render(
      <MainMenuScreen
        setCurrentScreen={jest.fn()}
        currentMaxSessionScore={null}
      />,
    )

    const textElement = queryByText(/best score/i)

    expect(textElement).toBe(null)
  })
})
