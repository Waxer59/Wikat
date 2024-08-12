import { getCatData } from '../../../api/catsApi'
import TopBreedsItem from './TopBreedsItem'
import { useState, useEffect } from 'react'
import { type Breed } from '../../../common/interfaces/catApiResponseInterface'

const TopBreeds: React.FC = () => {
  const [TopBreeds, setTopBreeds] = useState<Breed[] | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const topBreeds = await getCatData('/cats/topBreeds')
      setTopBreeds(topBreeds)
    }
    fetchData()
  }, [])

  return (
    <>
      <h2 className="font-[700] text-[36px] mt-[50px] text-topBreeds">
        Top 10 most searched breeds
      </h2>
      <ul className="flex mt-[55px] gap-[55px] mb-[100px] flex-col">
        {TopBreeds &&
          TopBreeds.map(([{ url, id, breeds }]: any, index: number) => (
            <TopBreedsItem
              img={url}
              breed={breeds[0]}
              index={index + 1}
              key={id}
            />
          ))}
      </ul>
    </>
  )
}

export default TopBreeds
