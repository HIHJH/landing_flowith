import styled from 'styled-components'
import BigLogo from '@assets/images/BigLogo.png'
import TextLogo from '@assets/images/TextLogo.png'
import { motion } from 'framer-motion'

const Landing6 = () => {
  const Variants = {
    offscreen: {
      y: +50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        delay: 0.1,
      },
    },
  }

  return (
    <Container>
      <BackImage src={BigLogo} />
      <BlurBox initial="offscreen" whileInView="onscreen" variants={Variants}>
        <Title>친구들과 소통하면서, 프로젝트를 보다 재미있게</Title>
        <Logo src={TextLogo} />
      </BlurBox>
    </Container>
  )
}

export default Landing6

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 120rem;
  height: 67.5rem;
`
const BackImage = styled.img`
  padding-top: 3rem;
  height: 59rem;
  object-fit: cover;
`
const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 3.5rem;
`
const BlurBox = styled(motion.div)`
  display: flex;
  width: 93.75rem;
  padding: 4.6875rem 0rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.875rem;
  position: absolute;
  left: 13.125rem;
  bottom: 6.25rem;
  border-radius: 1.25rem;
  border: 0.1875rem solid rgba(255, 255, 255, 0.12);
  background: rgba(0, 0, 0, 0.07);
  box-shadow: 0px 0.25rem 1.3375rem 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(2.4625rem);
`
const Logo = styled.img`
  width: 24.5rem;
`
