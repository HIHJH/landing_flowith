import styled from 'styled-components'
import BackgroundImage from '@assets/images/Landing7.png'
import Modal from './common/Modal'
import { useState } from 'react'
import { motion } from 'framer-motion'

const Landing7 = () => {
  // 모달 버튼 클릭 유무를 저장할 state
  const [showModal, setShowModal] = useState<boolean>(false)
  // 버튼 클릭시 모달 버튼 클릭 유무를 설정하는 state 함수
  const clickModal = () => setShowModal(!showModal)

  const Variants = {
    default: {
      scale: 1,
    },
    scaleUp: {
      scale: 1.1,
      transition: {
        duration: 0.2,
        delay: 0,
      },
    },
  }

  return (
    <Container>
      <BackImage src={BackgroundImage} />
      <CenterContent>
        <Title>{`플로잇은 출시 준비 중이에요.\n사전 신청하면 출시 알림을 보내드릴게요.`}</Title>
        <Button initial="default" whileHover="scaleUp" variants={Variants} onClick={() => setShowModal(true)}>
          사전알림 신청
        </Button>
      </CenterContent>
      {showModal && <Modal clickModal={clickModal} />}
    </Container>
  )
}

export default Landing7

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 120rem;
  height: 67.5rem;
`
const BackImage = styled.img`
  width: 100%;
  height: 67.5rem;
  object-fit: cover;
`
const CenterContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`
const Title = styled.h1`
  font-size: 2.8125rem;
  font-weight: 500;
  line-height: 4.21875rem;
  white-space: pre-wrap;
  text-align: center;
`
const Button = styled(motion.button)`
  display: flex;
  width: 33.75rem;
  height: 5.75rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.75rem;
  background: #252525;
  color: #fff;
  font-size: 1.875rem;
  font-weight: 500;
  border: none;
  outline: none;
  cursor: pointer;
`
