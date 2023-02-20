import SearchBreed from './SearchBreed'
import SearchedBreeds from './SearchedBreeds'

export default function DiscoverBreed() {
  return (
    <div className="mt-[30px] flex justify-center flex-col items-center">
      <SearchBreed />
      <SearchedBreeds />
    </div>
  )
}
