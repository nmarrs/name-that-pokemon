import { useState } from 'react'
import styled from '@emotion/styled'

import MainMenuScreen from 'screens/MainMenuScreen'
import GameplayScreen from 'screens/GameplayScreen'
import EndGameScreen from 'screens/EndGameScreen'

const APP_SCREENS = {
  mainMenu: 'mainMenu',
  gameplay: 'gameplay',
  endGame: 'endGame',
}

function App() {
  const [currentScreen, setCurrentScreen] = useState(APP_SCREENS.mainMenu)

  const screenToRender = () => {
    if (currentScreen === APP_SCREENS.mainMenu) {
      return <MainMenuScreen />
    } else if (currentScreen === APP_SCREENS.gameplay) {
      return <GameplayScreen />
    } else if (currentScreen === APP_SCREENS.endGame) {
      return <EndGameScreen />
    } else {
      return <MainMenuScreen />
    }
  }

  return <AppContainer>{screenToRender()}</AppContainer>
}

export default App

const AppContainer = styled.div`
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`
