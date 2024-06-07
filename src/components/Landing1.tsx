import styled from 'styled-components'
import BackgroundImage from '@assets/images/Landing1.png'
import { motion } from 'framer-motion'

const Landing1 = () => {
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
    <Container initial="offscreen" whileInView="onscreen" variants={Variants}>
      <BackImage src={BackgroundImage} />
      <Title>일과 일상의 흐름을, 플로잇으로</Title>
    </Container>
  )
}

export default Landing1

const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  position: relative;
  width: 120rem;
  height: 67.5rem;
`
const BackImage = styled.img`
  width: 100%;
  height: 67.5rem;
  object-fit: cover;
`
const Title = styled.div`
  position: absolute;
  bottom: 3.56rem;
  color: #fff;
  text-align: center;
  font-size: 3.5625rem;
  font-weight: 700;
  line-height: 4.9875rem;
`
