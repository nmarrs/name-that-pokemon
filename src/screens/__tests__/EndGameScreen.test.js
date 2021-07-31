import { render } from '@testing-library/react'
import EndGameScreen from 'screens/EndGameScreen'

describe('EndGameScreen', () => {
  it('renders EndGameScreen correctly', () => {
    const { queryByTestId } = render(
      <EndGameScreen
        setCurrentScreen={jest.fn()}
        currentScore={0}
        setCurrentScore={jest.fn()}
      />,
    )

    expect(queryByTestId('endGameContainer')).not.toEqual(null)
  })

  it('renders EndGameScreen correctly when score is 100', () => {
    const { getByText } = render(
      <EndGameScreen
        setCurrentScreen={jest.fn()}
        currentScore={100}
        setCurrentScore={jest.fn()}
      />,
    )

    const textElement = getByText(/congrats/i)

    expect(textElement).toBeInTheDocument()
  })

  it('renders EndGameScreen correctly when score is 90', () => {
    const { getByText } = render(
      <EndGameScreen
        setCurrentScreen={jest.fn()}
        currentScore={90}
        setCurrentScore={jest.fn()}
      />,
    )

    const textElement = getByText(/gotta catch em all/i)

    expect(textElement).toBeInTheDocument()
  })

  it('renders EndGameScreen correctly when score is 80', () => {
    const { getByText } = render(
      <EndGameScreen
        setCurrentScreen={jest.fn()}
        currentScore={80}
        setCurrentScore={jest.fn()}
      />,
    )

    const textElement = getByText(/wow, not bad/i)

    expect(textElement).toBeInTheDocument()
  })

  it('renders EndGameScreen correctly when score is 70', () => {
    const { getByText } = render(
      <EndGameScreen
        setCurrentScreen={jest.fn()}
        currentScore={70}
        setCurrentScore={jest.fn()}
      />,
    )

    const textElement = getByText(/getting better/i)

    expect(textElement).toBeInTheDocument()
  })

  it('renders EndGameScreen correctly when score is less than 70', () => {
    const { getByText } = render(
      <EndGameScreen
        setCurrentScreen={jest.fn()}
        currentScore={69}
        setCurrentScore={jest.fn()}
      />,
    )

    const textElement = getByText(/better luck/i)

    expect(textElement).toBeInTheDocument()
  })

  it('renders max session score when it exists', () => {
    const { getByText } = render(
      <EndGameScreen
        setCurrentScreen={jest.fn()}
        currentScore={69}
        setCurrentScore={jest.fn()}
        currentMaxSessionScore={80}
      />,
    )

    const textElement = getByText(/best score/i)

    expect(textElement).toBeInTheDocument()
  })

  it('does not render max session score when non exists', () => {
    const { queryByText } = render(
      <EndGameScreen
        setCurrentScreen={jest.fn()}
        currentScore={69}
        setCurrentScore={jest.fn()}
        currentMaxSessionScore={null}
      />,
    )

    const textElement = queryByText(/best score/i)

    expect(textElement).toBe(null)
  })
})
