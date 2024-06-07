import styled from 'styled-components'
import { AnimatePresence } from 'framer-motion'
import { SearchModalBox, SearchModalContent } from '@/components/common/ModalStyle'
import { useEffect, useState } from 'react'
import Delete from '@assets/images/Delete.svg'
import { postEmailApi } from '@/apis/apis'
import { StyledToastContainer } from './toastStyle'
import { Flip, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface ModalProps {
  clickModal: () => void
}

// 공통 모달 컴포넌트
const Modal = (props: ModalProps) => {
  // 전달받은 state 함수
  const { clickModal } = props
  const [isActive, setIsActive] = useState<boolean>(false)

  const [email, setEmail] = useState<string>('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const postEmail = async (email: string) => {
    try {
      await postEmailApi(email).then(() => {
        setEmail('')
        toast('사전 알림 신청 완료!')
      })
    } catch {
      toast('사전 알림 신청 실패!')
    }
  }

  useEffect(() => {
    email == '' ? setIsActive(false) : setIsActive(true)
  }, [email])

  return (
    <AnimatePresence>
      {/* 뒷배경을 클릭하면 모달을 나갈 수 있게 해야하므로 뒷 배경 onClick에 state함수를 넣는다. */}
      <SearchModalBox initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={clickModal}>
        <SearchModalContent
          width="59.625rem"
          height="24rem"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
        >
          <Icon src={Delete} onClick={clickModal} />
          <ModalContent>
            <Content>사전 알림 신청</Content>
            <MiniText>이메일을 입력해주시면 이메일로 출시 알림을 보내드릴게요.</MiniText>
            <EmailBox>
              <Email placeholder="이메일을 입력해주세요." value={email} onChange={handleChange} />
              <Button disabled={email == ''} active={isActive ? 1 : 0} onClick={() => postEmail(email)}>
                신청 완료
              </Button>
            </EmailBox>
            <StyledToastContainer
              position="bottom-center"
              autoClose={1000}
              hideProgressBar
              pauseOnHover={false}
              closeOnClick={false}
              closeButton={false}
              rtl={false}
              theme="light"
              transition={Flip}
            />
          </ModalContent>
        </SearchModalContent>
      </SearchModalBox>
    </AnimatePresence>
  )
}

export default Modal

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  gap: 8px;
`
const Content = styled.div`
  color: #000;
  font-size: 2.8125rem;
  font-weight: 500;
  line-height: 4.21875rem;
`
const MiniText = styled.div`
  color: #000;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2.25rem;
`
const Button = styled.button<{ active: number }>`
  position: absolute;
  right: 2rem;
  display: flex;
  padding: 1.25rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  background: ${(props) => (props.active ? '#252525' : '#c7c7c7')};
  color: #fff;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.75rem;
  outline: none;
  border: none;
  cursor: pointer;
`
const EmailBox = styled.div`
  display: flex;
  width: 100%;
  height: 6.75rem;
  align-items: center;
  border-radius: 0.75rem;
  background: #f2f2f2;
  margin-top: 3.88rem;
`
const Email = styled.input`
  width: 100%;
  height: 6.75rem;
  padding: 0rem 2rem;
  border-radius: 0.75rem;
  border: none;
  outline: none;
  font-size: 1.75rem;
  font-weight: 500;
  line-height: 2.45rem;
  color: #000;
  background: #f2f2f2;
  &::placeholder {
    color: #979797;
  }
  &:focus {
    outline: none;
    border: 3px solid #dedede;
    background: #ededed;
  }
`
const Icon = styled.img`
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`
