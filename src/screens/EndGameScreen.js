import styled from '@emotion/styled'

import Logo from 'components/Logo'
import Button from 'components/Button'
import DataLabel from 'components/DataLabel'
import { SIZES } from '../global-styles'
import sad_pikachu from 'sad_pikachu.svg'

const EndGameScreen = () => {
  return (
    <EndGameContainer data-testid="endGameContainer">
      <Logo size={SIZES.small} />
      <PokemonImage src={sad_pikachu} alt="sad_pikachu" />
      <DataLabel dataLabelText="FINAL SCORE" dataText="20%" />
      <EndGameMessageText>
        Better luck next time! Keep practicing!
      </EndGameMessageText>
      <EndGameButtonsContainer>
        <Button title="Play again?" />
        <Button title="Main Menu" />
      </EndGameButtonsContainer>
    </EndGameContainer>
  )
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
