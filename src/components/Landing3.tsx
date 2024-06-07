import styled from 'styled-components'
import Icon1 from '@assets/images/Landing3-1.png'
import Icon2 from '@assets/images/Landing3-2.png'
import Icon3 from '@assets/images/Landing3-3.png'
import { motion } from 'framer-motion'

const Landing3 = () => {
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
        delay: 0.2,
      },
    },
    icon1: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        delay: 0,
      },
    },
    icon2: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        delay: 0.1,
      },
    },
    icon3: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        delay: 0.2,
      },
    },
  }

  return (
    <Container initial="offscreen" whileInView="onscreen" variants={Variants}>
      <Description>
        <BoldText>Flowith</BoldText>
        {`에서 프로젝트 팀원들과\n함께 `}
        <BoldText>소통</BoldText>
        {`하면서 서로 `}
        <BoldText>격려</BoldText>
        {`하면서도 `}
        <BoldText>재미있게!</BoldText>
        {`\n프로젝트를 잘 진행할 수 있어요!`}
      </Description>
      <Icons>
        <IconContainer initial="offscreen" whileInView="icon1" variants={Variants}>
          {' '}
          <Icon src={Icon1} />
          <Text>균형있는</Text>
          <MiniText>팀과 개인의 균형있는 분리</MiniText>
        </IconContainer>
        <IconContainer initial="offscreen" whileInView="icon2" variants={Variants}>
          {' '}
          <Icon src={Icon2} />
          <Text>효율적</Text>
          <MiniText>효율적인 할일 관리</MiniText>
        </IconContainer>
        <IconContainer initial="offscreen" whileInView="icon3" variants={Variants}>
          {' '}
          <Icon src={Icon3} />
          <Text>데이터 기반</Text>
          <MiniText>데이터 기반의 자동화된 관리</MiniText>
        </IconContainer>
      </Icons>
    </Container>
  )
}

export default Landing3

const Container = styled(motion.div)`
  display: flex;
  width: 120rem;
  height: 55rem;
  padding: 6.25rem 13.125rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 3.875rem;
  background-color: #000;
`
const Description = styled.span`
  color: rgba(255, 255, 255, 0.6);
  font-size: 2.6875rem;
  font-weight: 500;
  line-height: 4.0625rem;
  letter-spacing: -0.02688rem;
  white-space: pre-wrap;
`
const BoldText = styled.span`
  color: #fff;
  font-size: 2.6875rem;
  font-weight: 700;
  line-height: 4.0625rem;
  letter-spacing: -0.02688rem;
  white-space: pre-wrap;
`
const Icons = styled.div`
  display: inline-flex;
  border-radius: 2.5rem;
  background: #181818;
  padding: 5.12rem 9rem 3.88rem 9rem;
  gap: 6.19rem;
`
const Icon = styled.img`
  width: 21.125rem;
  height: 21.125rem;
`
const IconContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Text = styled.span`
  margin-top: 1.81rem;
  color: #fff;
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 3.75rem;
  letter-spacing: -0.0175rem;
`
const MiniText = styled.span`
  color: #bababa;
  font-size: 1.625rem;
  font-weight: 500;
  line-height: 2.25rem;
  letter-spacing: -0.01625rem;
  margin-bottom: 0.75rem;
`
