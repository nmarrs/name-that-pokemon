import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import Logo from 'components/Logo'
import Button from 'components/Button'
import { APP_SCREENS } from 'App'

const MainMenuScreen = ({ setCurrentScreen }) => {
  return (
    <MainMenuContainer>
      <Logo />
      <Button
        title="Play Now"
        onClick={() => setCurrentScreen(APP_SCREENS.gameplay)}
      />
    </MainMenuContainer>
  )
}

MainMenuScreen.propTypes = {
  setCurrentScreen: PropTypes.func.isRequired,
}

export default MainMenuScreen

const MainMenuContainer = styled.div``
