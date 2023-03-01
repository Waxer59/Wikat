import { Footer, Navbar } from '../../ui'
import DiscoverBreed from '../components/home/DiscoverBreed'
import HaveACat from '../components/home/HaveACat'

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <DiscoverBreed />
      <HaveACat />
      <Footer />
    </>
  )
}

export default HomePage
