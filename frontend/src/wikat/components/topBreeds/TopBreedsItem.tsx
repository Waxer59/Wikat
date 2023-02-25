interface TopBreedsItemInterface {
  img: string
  index: string
  name: string
  desc: string
}

export const TopBreedsItem = ({
  img,
  desc,
  index,
  name
}: TopBreedsItemInterface) => {
  return (
    <li className="flex w-full gap-[50px] flex-wrap">
      <div className="flex justify-center">
        <img
          className="w-[278px] h-[278px] xl:w-[170px] xl:h-[170px] rounded-[24px]"
          src={img}
          alt={`${name} photo`}
        />
      </div>
      <div className="flex flex-col gap-[24px]">
        <h3 className="text-[36px] font-[600] text-topBreeds">{`${index}. ${name}`}</h3>
        <p className="text-[18px] font-[500] text-topBreeds max-w-[800px] leading-[22px]">
          {desc}
        </p>
      </div>
    </li>
  )
}

export default TopBreedsItem
