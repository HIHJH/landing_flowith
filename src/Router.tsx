import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
