import { render } from '@testing-library/react'

import PokemonImageMultipleChoiceCard from 'screens/GameplayScreen/PokemonImageMultipleChoiceCard'

describe('PokemonImageMultipleChoiceCard', () => {
  it('renders PokemonImageMultipleChoiceCard correctly', () => {
    const { queryByTestId } = render(
      <PokemonImageMultipleChoiceCard
        pokemonData={[{ id: 12, name: 'ditto' }]}
        correctPokemonIndex={0}
        nameThatPokemon={jest.fn()}
      />,
    )

    expect(queryByTestId('multipleChoiceButtonsContainer')).not.toEqual(null)
  })
})
