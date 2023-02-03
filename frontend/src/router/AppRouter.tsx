import { Route, Routes } from 'react-router-dom'
import HomePage from '../wikat/pages/HomePage'
import SingleBreed from '../wikat/pages/SingleBreed'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/breed" element={<SingleBreed />} />
    </Routes>
  )
}
