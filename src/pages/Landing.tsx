import Header from '@/components/Header'
import Landing1 from '@/components/Landing1'
import Landing2 from '@/components/Landing2'
import Landing3 from '@/components/Landing3'
import Landing4 from '@/components/Landing4'
import Landing5 from '@/components/Landing5'
import Landing6 from '@/components/Landing6'
import Landing7 from '@/components/Landing7'
import styled from 'styled-components'

const Landing = () => {
  return (
    <Container>
      <Header />
      <Landing1 />
      <Landing2 />
      <Landing3 />
      <Landing4 />
      <Landing5 />
      <Landing6 />
      <Landing7 />
    </Container>
  )
}

export default Landing

const Container = styled.div`
  width: 100vw;
  overflow: hidden;
`
