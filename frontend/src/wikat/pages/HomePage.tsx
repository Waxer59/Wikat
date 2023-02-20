import Footer from '../../ui/Footer'
import Navbar from '../../ui/Navbar'
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
