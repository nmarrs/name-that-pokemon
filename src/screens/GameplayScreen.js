import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import Logo from 'components/Logo'
import Button from 'components/Button'
import DataLabel from 'components/DataLabel'
import { SIZES } from 'global-styles'
import { APP_SCREENS } from 'App'
import example_pokemon from 'example_pokemon.svg'

const GameplayScreen = ({ setCurrentScreen }) => {
  return (
    <GameplayContainer>
      <CurrentRoundAndScoreOuterContainer>
        <CurrentRoundAndScoreInnerContainer>
          <DataLabel dataLabelText="Current Round" dataText="1/10" />
        </CurrentRoundAndScoreInnerContainer>
        <CurrentRoundAndScoreInnerContainer>
          <DataLabel dataLabelText="Current Score" dataText="0%" />
        </CurrentRoundAndScoreInnerContainer>
      </CurrentRoundAndScoreOuterContainer>
      <Logo size={SIZES.small} />
      <PokemonImage src={example_pokemon} alt="example_pokemon" />
      <DataLabel dataLabelText="TIME REMAINING" dataText="5" />
      <MultipleChoiceButtonsContainer>
        <Button
          title="Option 1"
          size={SIZES.small}
          onClick={() => setCurrentScreen(APP_SCREENS.endGame)}
        />
        <Button
          title="Option 2"
          size={SIZES.small}
          onClick={() => setCurrentScreen(APP_SCREENS.endGame)}
        />
        <Button
          title="Option 3"
          size={SIZES.small}
          onClick={() => setCurrentScreen(APP_SCREENS.endGame)}
        />
        <Button
          title="Option 4"
          size={SIZES.small}
          onClick={() => setCurrentScreen(APP_SCREENS.endGame)}
        />
      </MultipleChoiceButtonsContainer>
    </GameplayContainer>
  )
}

GameplayScreen.propTypes = {
  setCurrentScreen: PropTypes.func.isRequired,
}

export default GameplayScreen

const GameplayContainer = styled.div``

const MultipleChoiceButtonsContainer = styled.div`
  width: 500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  button {
    margin: 20px;
  }

  @media screen and (max-width: 550px) {
    width: 300px;
  }

  @media screen and (max-width: 780px) {
    width: 350px;
  }
`

const CurrentRoundAndScoreOuterContainer = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    margin: 10px;
  }
`

const CurrentRoundAndScoreInnerContainer = styled.div`
  flex-direction: 'column';
`

const PokemonImage = styled.img``
