import { useState } from 'react'
import styled from '@emotion/styled'

import MainMenuScreen from 'screens/MainMenuScreen'
import GameplayScreen from 'screens/GameplayScreen'
import EndGameScreen from 'screens/EndGameScreen'

export const APP_SCREENS = {
  mainMenu: 'mainMenu',
  gameplay: 'gameplay',
  endGame: 'endGame',
}

const NUMBER_OF_ROUNDS = 10

function App() {
  const [currentScreen, setCurrentScreen] = useState(APP_SCREENS.mainMenu)
  const [currentScore, setCurrentScore] = useState(0)

  const screenToRender = () => {
    if (currentScreen === APP_SCREENS.mainMenu) {
      return <MainMenuScreen setCurrentScreen={setCurrentScreen} />
    } else if (currentScreen === APP_SCREENS.gameplay) {
      return (
        <GameplayScreen
          setCurrentScreen={setCurrentScreen}
          currentScore={currentScore}
          setCurrentScore={setCurrentScore}
          numberOfRounds={NUMBER_OF_ROUNDS}
        />
      )
    } else if (currentScreen === APP_SCREENS.endGame) {
      return (
        <EndGameScreen
          setCurrentScreen={setCurrentScreen}
          currentScore={currentScore}
        />
      )
    } else {
      return 'Invalid screen'
    }
  }

  return <AppContainer>{screenToRender()}</AppContainer>
}

export default App

const AppContainer = styled.div`
  text-align: center;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
