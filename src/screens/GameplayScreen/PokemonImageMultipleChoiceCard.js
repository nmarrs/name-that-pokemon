import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import DataLabel from 'components/DataLabel'
import Button from 'components/Button'
import { SIZES } from 'global-styles'
import { capitalizeFirstLetter } from 'helpers'

const POKEMON_IMAGE_URL = 'https://img.pokemondb.net/artwork/large/'
const POKEMON_IMAGE_URL_FILE_TYPE = '.jpg'

const PokemonImageMultipleChoiceCard = ({
  pokemonData,
  correctPokemonIndex,
  nameThatPokemon,
}) => {
  return (
    <>
      <PokemonImage
        src={`${POKEMON_IMAGE_URL}${pokemonData[correctPokemonIndex]?.name}${POKEMON_IMAGE_URL_FILE_TYPE}`}
        alt={`${pokemonData[correctPokemonIndex]?.name}`}
      />
      <DataLabel dataLabelText="TIME REMAINING" dataText="5" />
      <MultipleChoiceButtonsContainer data-testid="multipleChoiceButtonsContainer">
        {pokemonData.map((pokemon, index) => (
          <Button
            key={index}
            title={capitalizeFirstLetter(pokemon.name)}
            size={SIZES.small}
            onClick={() => nameThatPokemon(index)}
          />
        ))}
      </MultipleChoiceButtonsContainer>
    </>
  )
}

PokemonImageMultipleChoiceCard.propTypes = {
  pokemonData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  correctPokemonIndex: PropTypes.number.isRequired,
  nameThatPokemon: PropTypes.func.isRequired,
}

export default PokemonImageMultipleChoiceCard

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

const PokemonImage = styled.img`
  height: 30vmin;
`
