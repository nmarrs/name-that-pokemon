import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Button = ({ title, onClick, isDisabled }) => {
  return (
    <StyledButton data-testid="button" onClick={onClick} disabled={isDisabled}>
      {title}
    </StyledButton>
  )
}

Button.defaultProps = {
  onClick: null,
  isDisabled: false,
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
}

export default Button

const StyledButton = styled.button`
  border: none;
  border-radius: 25px;
  padding: min(calc(12px + 2vmin), 28px) min(calc(12px + 2vmin), 42px);
  font-size: calc(10px + 2vmin);
  font-weight: 500;
  letter-spacing: 0.1em;
  cursor: pointer;
  background-color: #23388b;
  color: #ffffff;
  box-shadow: 0 9px #999999;

  :hover {
    background-color: #4156a9;
  }

  :active {
    background-color: #4156a9;
    box-shadow: 0 5px #666666;
    transform: translateY(4px);
  }
`
