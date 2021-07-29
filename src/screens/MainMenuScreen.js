import styled from '@emotion/styled'

import Logo from 'components/Logo'
import Button from 'components/Button'

const MainMenuScreen = () => {
  return (
    <MainMenuContainer>
      <Logo />
      <Button title="Play Now" />
    </MainMenuContainer>
  )
}

export default MainMenuScreen

const MainMenuContainer = styled.div``
