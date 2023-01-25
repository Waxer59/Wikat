import { Route, Routes } from 'react-router-dom'
import HomePage from '../wikat/pages/HomePage'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}
