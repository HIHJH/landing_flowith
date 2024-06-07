import styled from 'styled-components'
import Phone from '@assets/images/Landing4-2.png'
import Todo from '@assets/images/Landing4-1.png'
import { motion } from 'framer-motion'

const Landing4 = () => {
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
    onscreen2: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        delay: 0.5,
      },
    },
  }

  return (
    <Container initial="offscreen" whileInView="onscreen" variants={Variants}>
      <Description>{`팀원들과\nTODO를 함께\n관리할 수 있어요.`}</Description>
      <IPhone initial="offscreen" whileInView="onscreen2" variants={Variants} src={Phone} />
      <ImageContainer>
        <TodoImage src={Todo} />
      </ImageContainer>
      <BackBlack />
    </Container>
  )
}

export default Landing4

const Container = styled(motion.div)`
  position: relative;
  display: flex;
  width: 120rem;
  height: 67.5rem;
  flex-direction: column;
  align-items: flex-start;
  background: #202020;
`
const Description = styled.span`
  padding: 6.25rem 0rem 3.88rem 13.125rem;
  font-size: 3.125rem;
  font-weight: 700;
  line-height: 4.6875rem;
  letter-spacing: -0.03125rem;
  white-space: pre-wrap;
`
const IPhone = styled(motion.img)`
  position: absolute;
  width: 46.4373rem;
  height: 67.5rem;
  right: 8.13rem;
`
const TodoImage = styled.img`
  width: 39.14456rem;
  height: 38.33419rem;
`
const ImageContainer = styled.div`
  width: 39.14456rem;
  height: 33.375rem;
  padding: 3.6875rem 6.60544rem 0rem 6.5625rem;
  margin-left: 13.12rem;
  border-radius: 2.5rem;
  background: #141414;
  z-index: 100;
`
const BackBlack = styled.div`
  width: 120rem;
  height: 26.125rem;
  position: absolute;
  left: 0rem;
  bottom: 0rem;
  background: linear-gradient(0deg, #0c0c0d 0%, rgba(12, 12, 13, 0) 100%);
`
