import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import Logo from 'components/Logo'
import Button from 'components/Button'
import DataLabel from 'components/DataLabel'
import { SIZES } from 'global-styles'
import { APP_SCREENS } from 'App'
import sad_pikachu from 'sad_pikachu.svg'

const EndGameScreen = ({ setCurrentScreen, currentScore, setCurrentScore }) => {
  const navigateAndResetGame = (screen) => {
    setCurrentScore(0)

    setCurrentScreen(screen)
  }

  return (
    <EndGameContainer data-testid="endGameContainer">
      <Logo size={SIZES.small} />
      <PokemonImage src={sad_pikachu} alt="sad_pikachu" />
      <DataLabel dataLabelText="FINAL SCORE" dataText={`${currentScore}%`} />
      <EndGameMessageText>
        Better luck next time! Keep practicing!
      </EndGameMessageText>
      <EndGameButtonsContainer>
        <Button
          title="Play again?"
          onClick={() => navigateAndResetGame(APP_SCREENS.gameplay)}
        />
        <Button
          title="Main Menu"
          onClick={() => navigateAndResetGame(APP_SCREENS.mainMenu)}
        />
      </EndGameButtonsContainer>
    </EndGameContainer>
  )
}

EndGameScreen.propTypes = {
  setCurrentScreen: PropTypes.func.isRequired,
  currentScore: PropTypes.number.isRequired,
  setCurrentScore: PropTypes.func.isRequired,
}

export default EndGameScreen

const EndGameContainer = styled.div``

const PokemonImage = styled.img`
  height: 30vmin;
`

const EndGameMessageText = styled.p`
  font-size: calc(12px + 1vmin);
`

const EndGameButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  button {
    margin: 20px;
  }
`
