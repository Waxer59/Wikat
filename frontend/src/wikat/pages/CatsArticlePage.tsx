import { Footer, Navbar } from '../../ui'
import CatsArticle from '../components/catsArticle/CatsArticle'

const CatsArticlePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <CatsArticle />
      <Footer />
    </>
  )
}

export default CatsArticlePage
