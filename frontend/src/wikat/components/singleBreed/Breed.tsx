import { useParams } from 'react-router-dom'
import {
  type BreedElement,
  type BreedPhoto
} from '../../../common/interfaces/catApiResponseInterface'
import BreedCharacteristic from './BreedCharacteristic'
import BreedOtherPhotos from './BreedOtherPhotos'
import { getCatData } from '../../../api/catsApi'
import { useQuery } from '@tanstack/react-query'
import { BounceLoader } from 'react-spinners'

const BREED_CHARACTERISTICS = [
  'Temperament',
  'Origin',
  'Life Span',
  'Adaptability',
  'Affection level',
  'Child Friendly',
  'Grooming',
  'Intelligence',
  'Health issues',
  'Social needs',
  'Stranger friendly'
]

const DEFAULT_LEVEL_BARS = 5

interface BreedData extends BreedElement {
  url: string
  width: string
  height: string
  [key: string]: any
}

const Breed: React.FC = () => {
  const { id } = useParams()

  const breedData = useQuery<BreedData>([id], async () => {
    const [{ breeds, url, width, height }] = await getCatData(
      `/cats/breed/${id}`
    )

    breeds[0].life_span += ' years'

    return {
      ...breeds[0],
      url,
      width,
      height
    }
  })

  const breedOtherPhotos = useQuery<BreedPhoto[]>(
    [`${id}-photos`],
    async () => await getCatData(`/cats/breedImages/${id}?limit=8`)
  )

  const levelBars = (level: number = 0): JSX.Element => {
    return (
      <ul className={`left-[171px] absolute flex gap-[8px]`}>
        {Array.from({ length: DEFAULT_LEVEL_BARS }).map((_, i) => (
          <li
            key={i}
            className={`w-[60px] h-[12px] rounded-[8px] ${
              i <= level ? 'bg-filled-level-bar' : 'bg-non-filled-level-bar'
            }`}></li>
        ))}
      </ul>
    )
  }

  if (breedData.isLoading) {
    return (
      <div className="flex justify-center mt-48">
        <BounceLoader color="#e1e1e1" />
      </div>
    )
  }

  return (
    <>
      <div className="flex flex-col sm:ml-[35px]">
        <div className="flex sm:gap-[115px] gap-[40px] mt-[50px] flex-wrap sm:justify-center justify-start">
          <div className="z-[100] relative after:bg-[#DEC68B] sm:after:w-[45px] sm:after:h-[330px] after:h-[75%] after:left-[-15px] after:top-0 after:mt-[20px] after:absolute after:z-[-1] after:content-[''] after:rounded-[15px]">
            <img
              src={breedData?.data?.url}
              width={breedData?.data?.width}
              height={breedData?.data?.height}
              alt={`${id} photo`}
              className="sm:w-[370px] w-full sm:h-[370px] h-full rounded-[24px] object-cover"
            />
          </div>
          <div>
            <h2 className="font-[600] text-[36px]">{breedData?.data?.name}</h2>
            <ul className="flex flex-col gap-[32px] mt-[32px]">
              {BREED_CHARACTERISTICS.map((title) => {
                const breedDataElement =
                  breedData?.data?.[title.replace(/ /g, '_').toLowerCase()]
                return (
                  <BreedCharacteristic
                    key={title}
                    characteristic={title}
                    desc={
                      !isNaN(breedDataElement)
                        ? levelBars(breedDataElement)
                        : ` ${breedDataElement}`
                    }
                  />
                )
              })}
            </ul>
          </div>
        </div>
        <div className="font-[600] text-[36px] mt-[80px] min-h-[900px]">
          <h3>Other photos</h3>
          <ul className="flex gap-[46px] mt-[40px] mb-[177px] flex-wrap justify-center 3xl:justify-start">
            {breedOtherPhotos?.data &&
              breedOtherPhotos.data.map(
                ({ url, id, width, height }: BreedPhoto) => (
                  <BreedOtherPhotos
                    key={id}
                    height={height}
                    width={width}
                    url={url}
                    name={breedData?.data?.name ?? ''}
                  />
                )
              )}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Breed
