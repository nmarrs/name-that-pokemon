import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useLazyQuery, gql } from '@apollo/client'
import styled from '@emotion/styled'

import Logo from 'components/Logo'
import DataLabel from 'components/DataLabel'
import PokemonImageMultipleChoiceCard from './PokemonImageMultipleChoiceCard'
import { SIZES } from 'global-styles'
import { APP_SCREENS } from 'App'
import {
  generateRandomPokemonIds,
  generateRandomNumberInclusive,
} from 'helpers'

const GET_RANDOM_POKEMON = gql`
  query GetRandomPokemon($randomPokemonIds: [Int!]) {
    pokemon_v2_pokemon(where: { id: { _in: $randomPokemonIds } }) {
      id
      name
    }
  }
`

const GameplayScreen = ({
  setCurrentScreen,
  currentScore,
  setCurrentScore,
  numberOfRounds,
}) => {
  const [currentRound, setCurrentRound] = useState(1)
  const [correctPokemonIndex, setCorrectPokemonIndex] = useState(null)
  const [shouldRetrieveNewPokemon, setShouldRetrieveNewPokemon] = useState(true)
  const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState(0)

  const [
    getRandomPokemon,
    {
      data: getRandomPokemonData,
      loading: getRandomPokemonLoading,
      error: getRandomPokemonError,
    },
  ] = useLazyQuery(GET_RANDOM_POKEMON)

  useEffect(() => {
    if (shouldRetrieveNewPokemon) {
      const randomPokemonIds = generateRandomPokemonIds()
      const correctPokemonIndex = generateRandomNumberInclusive(0, 3)

      setCorrectPokemonIndex(correctPokemonIndex)

      getRandomPokemon({
        variables: {
          randomPokemonIds,
        },
      })

      setShouldRetrieveNewPokemon(false)
    }
  }, [shouldRetrieveNewPokemon, getRandomPokemon])

  const nameThatPokemon = (index) => {
    if (index === correctPokemonIndex) {
      const nextNumberOfCorrectAnswers = numberOfCorrectAnswers + 1
      setNumberOfCorrectAnswers(nextNumberOfCorrectAnswers)

      setCurrentScore(
        Math.floor((nextNumberOfCorrectAnswers / currentRound) * 100),
      )
    } else {
      setCurrentScore(Math.floor((numberOfCorrectAnswers / currentRound) * 100))
    }

    if (currentRound === numberOfRounds) {
      setNumberOfCorrectAnswers(0)
      setCurrentScreen(APP_SCREENS.endGame)
    } else {
      setCurrentRound(currentRound + 1)
    }

    setShouldRetrieveNewPokemon(true)
  }

  return (
    <GameplayContainer>
      <CurrentRoundAndScoreOuterContainer>
        <CurrentRoundAndScoreInnerContainer>
          <DataLabel
            dataLabelText="Current Round"
            dataText={`${currentRound}/${numberOfRounds}`}
          />
        </CurrentRoundAndScoreInnerContainer>
        <CurrentRoundAndScoreInnerContainer>
          <DataLabel
            dataLabelText="Current Score"
            dataText={`${currentScore}%`}
          />
        </CurrentRoundAndScoreInnerContainer>
      </CurrentRoundAndScoreOuterContainer>
      <Logo size={SIZES.small} />
      <GameplayCardContainer>
        {getRandomPokemonLoading && 'Loading...'}
        {!getRandomPokemonLoading &&
          getRandomPokemonError &&
          'An error has occurred, please try and refreshing the page'}
        {getRandomPokemonData && (
          <PokemonImageMultipleChoiceCard
            pokemonData={getRandomPokemonData?.pokemon_v2_pokemon}
            correctPokemonIndex={correctPokemonIndex}
            nameThatPokemon={nameThatPokemon}
          />
        )}
      </GameplayCardContainer>
    </GameplayContainer>
  )
}

GameplayScreen.propTypes = {
  setCurrentScreen: PropTypes.func.isRequired,
  currentScore: PropTypes.number.isRequired,
  setCurrentScore: PropTypes.func.isRequired,
  numberOfRounds: PropTypes.number.isRequired,
}

export default GameplayScreen

const GameplayContainer = styled.div``

const GameplayCardContainer = styled.div`
  min-height: 50vmin;
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
