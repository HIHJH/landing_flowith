import styled from 'styled-components'
import cardImage1 from '@assets/images/Landing2-1.png'
import cardImage2 from '@assets/images/Landing2-2.png'
import cardImage3 from '@assets/images/Landing2-3.png'
import cardImage4 from '@assets/images/Landing2-4.png'
import cardImage5 from '@assets/images/Landing2-5.png'
import { motion } from 'framer-motion'

const Landing2 = () => {
  const Variants = {
    offscreen: {
      y: +50,
      opacity: 0,
      animate: {
        rotate: 0,
      },
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        delay: 0.1,
      },
    },
    card1: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        delay: 0,
      },
      rotate: -8.743,
    },
    card2: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        delay: 0.1,
      },
      rotate: 8.347,
    },
    card3: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        delay: 0.25,
      },
    },
    card4: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        delay: 0.4,
      },
      rotate: -8.855,
    },
    card5: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        delay: 0.55,
      },
      rotate: 8.456,
    },
  }

  return (
    <Container initial="offscreen" whileInView="onscreen" variants={Variants}>
      <Description>{`팀플, 서포터즈, 사이드프로젝트, 대외활동 등등\n누군가와 함께하고 있는 일들이 많아서 할 일을 관리하는 게 너무 어려워요.`}</Description>
      <Cards>
        <Card1 initial="offscreen" whileInView="card1" variants={Variants}>
          <Text>팀 프로젝트</Text> <Card src={cardImage1} />
        </Card1>
        <Card2 initial="offscreen" whileInView="card2" variants={Variants}>
          <Text>서포터즈</Text> <Card src={cardImage2} />
        </Card2>
        <Card3 initial="offscreen" whileInView="card3" variants={Variants}>
          <Text>개인 일정</Text> <Card src={cardImage3} />
        </Card3>
        <Card4 initial="offscreen" whileInView="card4" variants={Variants}>
          <Text>대외활동</Text> <Card src={cardImage4} />
        </Card4>
        <Card5 initial="offscreen" whileInView="card5" variants={Variants}>
          <Text>학업</Text> <Card src={cardImage5} />
        </Card5>
      </Cards>
      <BackBlack />
    </Container>
  )
}

export default Landing2

const Container = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #000 0%, #282828 100%);
  width: 120rem;
  height: 67.5rem;
`
const Description = styled.div`
  color: #eee;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -0.025rem;
  white-space: pre-wrap;
`
const Cards = styled.div`
  position: relative;
  display: inline-flex;
  width: 100.30956rem;
  height: 29.03263rem;
  flex-shrink: 0;
  margin-top: 8.56rem;
`
const Card = styled.img`
  width: 9.25rem;
  height: 9.25rem;
`
const Text = styled.div`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 3.75rem;
  letter-spacing: -0.025rem;
`
const Card1 = styled(motion.div)`
  position: absolute;
  display: inline-flex;
  transform: rotate(-8.743deg);
  width: 20.375rem;
  height: 24.4375rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.375rem;
  border-radius: 1.25rem;
  border: 0.1875rem solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.12);
  box-shadow: 0 0.25rem 1.3375rem 0 rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(1.575rem);
  left: 2rem;
  bottom: 1.78rem;
`
const Card2 = styled(motion.div)`
  position: absolute;
  display: inline-flex;
  transform: rotate(8.347deg);
  width: 20.375rem;
  height: 24.4375rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.375rem;
  border-radius: 1.25rem;
  border: 0.1875rem solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.12);
  box-shadow: 0 0.25rem 1.3375rem 0 rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(1.575rem);
  top: 0.9rem;
  left: 20.96rem;
  bottom: 1rem;
`
const Card3 = styled(motion.div)`
  position: absolute;
  display: inline-flex;
  width: 20.375rem;
  height: 24.4375rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.375rem;
  border-radius: 1.25rem;
  border: 0.1875rem solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.12);
  box-shadow: 0 0.25rem 1.3375rem 0 rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(1.575rem);
  left: 41.12rem;
  bottom: 4.6rem;
`
const Card4 = styled(motion.div)`
  position: absolute;
  display: inline-flex;
  transform: rotate(-8.855deg);
  width: 20.375rem;
  height: 24.4375rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.375rem;
  border-radius: 1.25rem;
  border: 0.1875rem solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.12);
  box-shadow: 0 0.25rem 1.3375rem 0 rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(1.575rem);
  top: 1.75rem;
  right: 18.98rem;
`
const Card5 = styled(motion.div)`
  position: absolute;
  display: inline-flex;
  transform: rotate(8.456deg);
  width: 20.375rem;
  height: 24.4375rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.375rem;
  border-radius: 1.25rem;
  border: 0.1875rem solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.12);
  box-shadow: 0 0.25rem 1.3375rem 0 rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(1.575rem);
  right: 0;
  bottom: 1.86rem;
`
const BackBlack = styled.div`
  position: absolute;
  bottom: 0;
  width: 120rem;
  height: 26.125rem;
  flex-shrink: 0;
  background: linear-gradient(0deg, #0c0c0d 0%, rgba(12, 12, 13, 0) 100%);
`
