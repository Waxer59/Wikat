interface BreedOtherPhotosInterface {
  width: number
  height: number
  name: string
  url: string
}

export const BreedOtherPhotos = ({
  width,
  height,
  name,
  url
}: BreedOtherPhotosInterface) => {
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
