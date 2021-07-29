import styled from '@emotion/styled'

import logo from 'logo.svg'

const Logo = () => {
  return (
    <div>
      <LogoHeader>Name That</LogoHeader>
      <LogoImage src={logo} alt="logo" />
    </div>
  )
}

export default Logo

const LogoHeader = styled.h1`
  font-size: calc(20px + 4vmin);
  margin: 0 0 -25px 0;
  font-style: italic;
  font-weight: 500;
`

const LogoImage = styled.img`
  height: 40vmin;
  pointer-events: none;
`
