interface Props {
  width: number
  height: number
  name: string
  url: string
}

export const BreedOtherPhotos: React.FC<Props> = ({
  width,
  height,
  name,
  url
}) => {
  return (
    <li>
      <img
        src={url}
        width={width}
        loading="eager"
        height={height}
        alt={`${name} photo`}
        className="lg:w-[278px] w-[650px] lg:h-[278px] h-[450px] rounded-[24px] object-cover"
      />
    </li>
  )
}

export default BreedOtherPhotos
