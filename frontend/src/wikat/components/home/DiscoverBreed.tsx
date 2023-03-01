import SearchBreed from './SearchBreed'
import SearchedBreeds from './SearchedBreeds'

const DiscoverBreed: React.FC = () => {
  return (
    <div className="mt-[30px] flex justify-center flex-col items-center">
      <SearchBreed />
      <SearchedBreeds />
    </div>
  )
}

export default DiscoverBreed
