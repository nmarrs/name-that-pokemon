import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useLazyQuery, gql } from '@apollo/client'
import styled from '@emotion/styled'

import Logo from 'components/Logo'
import Button from 'components/Button'
import DataLabel from 'components/DataLabel'
import { SIZES } from 'global-styles'
import { APP_SCREENS } from 'App'
import {
  generateRandomPokemonIds,
  generateRandomNumberInclusive,
  capitalizeFirstLetter,
} from 'helpers'

const POKEMON_IMAGE_URL = 'https://img.pokemondb.net/artwork/large/'
const POKEMON_IMAGE_URL_FILE_TYPE = '.jpg'

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

    // TODO: Fix data refresh (images being loaded from previous batch instead of waiting)
    // current bug: previous image is being loaded, not super efficient, but can live with for now...
    // CREATE ISSUE FOR ABOVE (if time try and address it)
    setShouldRetrieveNewPokemon(true)
  }

  // TODO: Fix button styling (lot of variation given diff pokemon names), maybe as part of PR 4
  // TODO: Breakout game into subcomponent (when we have getRandomPokemonData)
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
      {getRandomPokemonLoading && 'Loading...'}
      {!getRandomPokemonLoading &&
        getRandomPokemonError &&
        'An error has occurred, please try and refreshing the page'}
      {getRandomPokemonData && (
        <>
          <PokemonImage
            src={`${POKEMON_IMAGE_URL}${getRandomPokemonData?.pokemon_v2_pokemon[correctPokemonIndex]?.name}${POKEMON_IMAGE_URL_FILE_TYPE}`}
            alt={`${getRandomPokemonData?.pokemon_v2_pokemon[correctPokemonIndex]?.name}`}
          />
          <DataLabel dataLabelText="TIME REMAINING" dataText="5" />
          <MultipleChoiceButtonsContainer>
            {getRandomPokemonData?.pokemon_v2_pokemon.map((pokemon, index) => (
              <Button
                key={index}
                title={capitalizeFirstLetter(pokemon.name)}
                size={SIZES.small}
                onClick={() => nameThatPokemon(index)}
              />
            ))}
          </MultipleChoiceButtonsContainer>
        </>
      )}
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

const PokemonImage = styled.img`
  height: 30vmin;
`
