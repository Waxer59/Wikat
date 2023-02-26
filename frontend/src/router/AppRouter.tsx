import { Route, Routes } from 'react-router-dom'
import {
  TopBreedsPage,
  SingleBreedPage,
  HomePage,
  CatsArticlePage
} from '../wikat/pages/'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/breed/:id" element={<SingleBreedPage />} />
      <Route path="/topbreeds" element={<TopBreedsPage />} />
      <Route path="/catsarticle" element={<CatsArticlePage />} />
    </Routes>
  )
}
