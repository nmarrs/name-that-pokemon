import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import Logo from 'components/Logo'
import Button from 'components/Button'
import DataLabel from 'components/DataLabel'
import { APP_SCREENS } from 'App'

const MainMenuScreen = ({ setCurrentScreen, currentMaxSessionScore }) => {
  return (
    <MainMenuContainer>
      <Logo />
      <Button
        title="Play Now"
        onClick={() => setCurrentScreen(APP_SCREENS.gameplay)}
      />
      {currentMaxSessionScore && (
        <CurrentMaxSessionScoreContainer>
          <DataLabel
            dataLabelText="Best Score So Far This Session"
            dataText={`${currentMaxSessionScore}%`}
          />
        </CurrentMaxSessionScoreContainer>
      )}
    </MainMenuContainer>
  )
}

MainMenuScreen.propTypes = {
  setCurrentScreen: PropTypes.func.isRequired,
  currentMaxSessionScore: PropTypes.number,
}

export default MainMenuScreen

const MainMenuContainer = styled.div``

const CurrentMaxSessionScoreContainer = styled.div`
  margin-top: 50px;
`
