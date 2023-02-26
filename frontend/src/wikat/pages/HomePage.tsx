import { Footer, Navbar } from '../../ui'
import DiscoverBreed from '../components/home/DiscoverBreed'
import HaveACat from '../components/home/HaveACat'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <DiscoverBreed />
      <HaveACat />
      <Footer />
    </>
  )
}
