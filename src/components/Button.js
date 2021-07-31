import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import { SIZES } from 'global-styles'

const Button = ({ title, onClick, isDisabled, size }) => {
  return (
    <StyledButton
      data-testid="button"
      onClick={onClick}
      disabled={isDisabled}
      size={size}
    >
      {title}
    </StyledButton>
  )
}

Button.defaultProps = {
  onClick: null,
  isDisabled: false,
  size: SIZES.large,
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
  size: PropTypes.string,
}

export default Button

const StyledButton = styled.button(({ size }) => ({
  border: 'none',
  borderRadius: '25px',
  padding:
    size === SIZES.large
      ? 'min(calc(12px + 2vmin), 28px) min(calc(12px + 2vmin), 42px)'
      : size === SIZES.small
      ? 'min(calc(12px + 2vmin), 14px) min(calc(12px + 2vmin), 42px)'
      : 'min(calc(12px + 2vmin), 28px) min(calc(12px + 2vmin), 42px)',
  fontSize:
    size === SIZES.large
      ? 'calc(10px + 2vmin)'
      : size === SIZES.small
      ? 'calc(10px + 1vmin)'
      : 'calc(10px + 2vmin)',
  fontWeight: 500,
  letterSpacing: '0.1em',
  cursor: 'pointer',
  backgroundColor: '#23388b',
  color: '#ffffff',
  boxShadow: '0 9px #999999',

  ':hover': {
    backgroundColor: '#4156a9',
  },

  ':active': {
    backgroundColor: '#4156a9',
    boxShadow: '0 5px #666666',
    transform: 'translateY(4px)',
  },
}))
