import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Restaurant from './pages/Restaurant'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurant" element={<Restaurant />} />
  </Routes>
)

export default Rotas
