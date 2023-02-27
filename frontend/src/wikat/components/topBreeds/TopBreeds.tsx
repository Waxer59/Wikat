import { getCatData } from '../../../api/catsApi'
import TopBreedsItem from './TopBreedsItem'
import { useState, useEffect } from 'react'

const TopBreeds = () => {
  const [TopBreeds, setTopBreeds] = useState<any | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const topBreeds = await getCatData('/cat/topBreeds')
      // console.log(topBreeds[0][0].breeds)
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
        {TopBreeds != null &&
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
