// TODO: Retrieve / cache this value from API instead to be more resilient / future proof
const CURRENT_NUMBER_OF_POKEMON = 898

export const generateRandomPokemonIds = (
  numberOfIdsToGenerate = 4,
  maxIdValue = CURRENT_NUMBER_OF_POKEMON,
) => {
  const idsGenerated = new Set()

  const minIdValue = 1
  while (idsGenerated.size < numberOfIdsToGenerate) {
    const newRandomId = generateRandomNumberInclusive(minIdValue, maxIdValue)

    idsGenerated.add(newRandomId)
  }

  return Array.from(idsGenerated)
}

export const generateRandomNumberInclusive = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
