import { motion } from 'framer-motion'
import styled from 'styled-components'

// 모달 창 뒷배경
export const SearchModalBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
`

// 모달 스타일
export const SearchModalContent = styled(motion.div)<{
  width: string
  height: string
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 3.19rem 6.25rem;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 1.25rem;
  background: #fff;
  z-index: 5;
`
