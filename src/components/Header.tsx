import styled from 'styled-components'
import LogoIcon from '@assets/images/Logo.svg'

const Header = () => {
  return (
    <Container>
      <Logo src={LogoIcon} />
      <Bottom />
    </Container>
  )
}

export default Header

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 6.25rem;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(0.625rem);
  z-index: 999;
`
const Logo = styled.img`
  width: 8.4375rem;
  height: 1.625rem;
`
const Bottom = styled.div`
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: 0.25rem;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 25%,
    rgba(255, 255, 255, 0.25) 50%,
    rgba(255, 255, 255, 0) 75%
  );
`
