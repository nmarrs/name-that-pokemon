import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import Logo from 'components/Logo'
import Button from 'components/Button'
import DataLabel from 'components/DataLabel'
import { SIZES } from 'global-styles'
import { APP_SCREENS } from 'App'
import sad_pikachu from 'images/sad_pikachu.svg'
import neutral_pikachu from 'images/neutral_pikachu.svg'
import happy_pikachu from 'images/happy_pikachu.svg'
import surprised_pikachu from 'images/surprised_pikachu.svg'

const EndGameScreen = ({ setCurrentScreen, currentScore, setCurrentScore }) => {
  const navigateAndResetGame = (screen) => {
    setCurrentScore(0)

    setCurrentScreen(screen)
  }

  const renderPokemonImage = () => {
    let pokemonImage
    switch (true) {
      case currentScore < 80:
        pokemonImage = sad_pikachu
        break
      case currentScore >= 80 && currentScore < 90:
        pokemonImage = neutral_pikachu
        break
      case currentScore >= 90 && currentScore < 100:
        pokemonImage = happy_pikachu
        break
      case currentScore === 100:
        pokemonImage = surprised_pikachu
        break
      default:
        pokemonImage = surprised_pikachu
        break
    }

    return <PokemonImage src={pokemonImage} alt="pikachu reaction image" />
  }

  const renderEndGameMessage = () => {
    let endGameMessage
    switch (true) {
      case currentScore < 70:
        endGameMessage = 'Better luck next time! Keep practicing! 📚'
        break
      case currentScore >= 70 && currentScore < 80:
        endGameMessage = "You're getting better! Keep practicing! 📚"
        break
      case currentScore >= 80 && currentScore < 90:
        endGameMessage = 'Wow, not bad! Keep practicing! 📚'
        break
      case currentScore >= 90 && currentScore < 100:
        endGameMessage = 'Gotta catch em all! Can you achieve 100%? 🧐'
        break
      case currentScore === 100:
        endGameMessage =
          'Congrats! You did it! 🥳  You are now on your way to becoming a pokedex. Can you do it again? 👀'
        break
      default:
        endGameMessage = 'Hm, something went wrong'
        break
    }

    return endGameMessage
  }

  return (
    <EndGameContainer data-testid="endGameContainer">
      <Logo size={SIZES.small} />
      {renderPokemonImage()}
      <DataLabel dataLabelText="FINAL SCORE" dataText={`${currentScore}%`} />
      <EndGameMessageText>{renderEndGameMessage()}</EndGameMessageText>
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
  height: 35vmin;
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
