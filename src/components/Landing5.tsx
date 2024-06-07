import styled from 'styled-components'
import Phone from '@assets/images/Landing5-2.png'
import Busy from '@assets/images/Landing5-1.png'
import { motion } from 'framer-motion'

const Landing5 = () => {
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
      <Description>{`팀원들과\nTODO를 기반으로\n소통할 수 있어요.`}</Description>
      <Contents>
        <Title>오늘의 플로잇</Title>
        <Text>오늘의 업무 상황을 이미지와 함께 공유해요!</Text>
        <PhoneImage src={Phone} />
      </Contents>
      <ImageContainer>
        <Title>나의 바쁨 현황</Title>
        <Text>지금 함께하고 있는 팀원이 어느 상황인지 알 수 있어요!</Text>
        <BusyImage src={Busy} />
      </ImageContainer>
    </Container>
  )
}

export default Landing5

const Container = styled(motion.div)`
  position: relative;
  display: flex;
  width: 120rem;
  height: 67.5rem;
  flex-direction: column;
  align-items: flex-start;
  background: linear-gradient(180deg, #151515 0%, #2d2d2d 100%);
`
const Description = styled.span`
  padding: 6.25rem 0rem 3.88rem 13.125rem;
  font-size: 3.125rem;
  font-weight: 700;
  line-height: 4.6875rem;
  letter-spacing: -0.03125rem;
  white-space: pre-wrap;
`
const Contents = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45.5625rem;
  height: 55rem;
  border-radius: 2.5rem;
  background: #141414;
  top: 6.25rem;
  right: 13.12rem;
`
const BusyImage = styled.img`
  width: 31.0625rem;
  height: 26.375rem;
  margin-top: 2.565rem;
`
const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 34.9425rem;
  padding: 0rem 3.48044rem 2.125rem 3.4375rem;
  margin-left: 13.12rem;
  border-radius: 2.5rem;
  background: #141414;
  z-index: 100;
`
const Title = styled.span`
  text-align: center;
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 3.75rem;
  letter-spacing: -0.0175rem;
  margin-top: 2.13rem;
`
const Text = styled.span`
  color: #bababa;
  text-align: center;
  font-size: 1.625rem;
  font-weight: 500;
  line-height: 2.275rem;
  letter-spacing: -0.01625rem;
`
const PhoneImage = styled.img`
  width: 34.1875rem;
  height: 46.875rem;
`
