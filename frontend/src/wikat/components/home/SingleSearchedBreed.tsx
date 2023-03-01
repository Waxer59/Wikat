import { Link } from 'react-router-dom'
import { type BreedElement } from '../../../common/interfaces/catApiResponseInterface'

interface Props {
  isFirst: boolean
  breed: BreedElement
  url: string
}

const SingleSearchedBreed: React.FC<Props> = ({
  isFirst = false,
  breed,
  url
}) => {
  const { id, name } = breed
  return (
    <>
      <li
        className={`flex ${
          isFirst
            ? "z-[0] relative after:bg-[#DEC68B] sm:after:w-[45px] after:h-[180px] after:left-[-15px] after:mt-[20px] after:absolute after:z-[-2] after:content-[''] after:rounded-[15px]"
            : ''
        }`}>
        <Link
          to={`/breed/${id}`}
          className="flex flex-col sm:gap-[20px] gap-[12px]">
          <img
            src={url}
            alt={`${name} photo`}
            className="sm:w-[220px] w-[130px] sm:h-[220px] h-[130px] rounded-[24px]"
          />
          <span className="font-bold sm:text-[18px] text-[12px]">{name}</span>
        </Link>
      </li>
    </>
  )
}

export default SingleSearchedBreed
