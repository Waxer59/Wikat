interface BreedOtherPhotos {
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
}: BreedOtherPhotos) => {
  return (
    <li>
      <img
        src={url}
        width={width}
        loading="eager"
        height={height}
        alt={`${name} photo`}
        className="lg:w-[278px] w-full lg:h-[278px] h-full rounded-[24px]"
      />
    </li>
  )
}
