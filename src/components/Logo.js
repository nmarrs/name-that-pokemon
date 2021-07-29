import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import logo from 'logo.svg'
import { SIZES } from 'global-styles'

const Logo = ({ size }) => {
  return (
    <div>
      <LogoHeader size={size}>Name That</LogoHeader>
      <LogoImage src={logo} alt="logo" size={size} />
    </div>
  )
}

Logo.defaultProps = {
  size: SIZES.large,
}

Logo.propTypes = {
  size: PropTypes.string,
}

export default Logo

const LogoHeader = styled.h1(({ size }) => ({
  fontSize:
    size === SIZES.large
      ? 'calc(20px + 4vmin)'
      : size === SIZES.small
      ? 'calc(10px + 2vmin)'
      : 'calc(20px + 4vmin)',
  margin:
    size === SIZES.large
      ? '0 0 -25px 0'
      : size === SIZES.small
      ? '0'
      : '0 0 -25px 0',
  fontStyle: 'italic',
  fontWeight: 500,
}))

const LogoImage = styled.img(({ size }) => ({
  height:
    size === SIZES.large
      ? '40vmin'
      : size === SIZES.small
      ? '15vmin'
      : '40vmin',
  pointerEvents: 'none',
}))
