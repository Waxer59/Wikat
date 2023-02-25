import { Route, Routes } from 'react-router-dom'
import { TopBreeds, SingleBreed, HomePage, CatsArticle } from '../wikat/pages/'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/breed/:id" element={<SingleBreed />} />
      <Route path="/topBreeds" element={<TopBreeds />} />
      <Route path="/haveACat" element={<CatsArticle />} />
    </Routes>
  )
}
