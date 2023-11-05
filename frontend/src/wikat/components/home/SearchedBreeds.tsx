import { AiOutlineArrowRight } from 'react-icons/ai'
import SingleSearchedBreed from './SingleSearchedBreed'
import { getCatData } from '../../../api/catsApi'
import { type Breed } from '../../../common/interfaces/catApiResponseInterface'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

const SearchedBreeds: React.FC = () => {
  const breedData = useQuery<Breed[]>(
    ['breedsImages'],
    async () => await getCatData('/cat/breedsImages?limit=4')
  )

  return (
    <div className="p-[20px] bg-[#E3E1DC] rounded-b-[42px] w-full">
      <div className="max-w-1/2 w-[90%] mx-auto h-full sm:pt-[40px] pt-[0px]">
        <span className="relative sm:text-[18px] text-[12px] pb-[8px] after:border-b-[3px] after:border-black after:content-[''] after:bottom-0 after:left-0 after:h-[50%] after:absolute after:w-[35%] mb-[46px] inline-block">
          Most Searched Breeds
        </span>
        <div className="flex mb-[46px] justify-between gap-[15px]">
          <h2 className="sm:text-[48px] text-[18px] font-bold">
            66+ Breeds For you to discover
          </h2>

          <Link
            to={'/topbreeds'}
            className="flex items-center text-[18px] gap-[10px] text-[#29150799] cursor-pointer font-bold uppercase">
            see more <AiOutlineArrowRight />
          </Link>
        </div>
        <ul className="flex sm:gap-[50px] gap-[15px] flex-wrap justify-evenly">
          {breedData.data?.[0] != null &&
            breedData.data.map(({ breeds, url }, i: number) => (
              <SingleSearchedBreed
                key={url}
                isFirst={i <= 0}
                breed={breeds[0]}
                url={url}
              />
            ))}
        </ul>
      </div>
    </div>
  )
}

export default SearchedBreeds
