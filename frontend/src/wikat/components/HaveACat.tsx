import { AiOutlineArrowRight } from 'react-icons/ai'

export default function HaveACat() {
  return (
    <div className="mt-[100px] flex items-center gap-[40px] flex-col mds:flex-row">
      <div className="mds:max-w-[400px]">
        <h2 className="relative font-bold sm:text-[48px] text-[40px] after:border-t-[3px] after:border-black after:content-[''] after:top-0 after:left-0 after:h-[50%] after:absolute after:w-[15%]">
          Why should you have a cat?
        </h2>
        <p className="text-[18px] inline-block mt-[40px]">
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety levels
        </p>
        <button className="flex items-center sm:text-[18px] text-[12px] gap-[10px] text-[#29150799] cursor-pointer font-bold sm:mt-[65px] mt-[25px]">
          SEE MORE <AiOutlineArrowRight />
        </button>
      </div>
      <ul className="sm:gap-[28px] gap-[10px] columns-2">
        <li className="sm:mb-[45px] mb-[10px]">
          <img src="images/image1.png" alt="" />
        </li>
        <li>
          <img className="ml-auto" src="images/image2.png" alt="" />
        </li>
        <li>
          <img src="images/image3.png" alt="" />
        </li>
      </ul>
    </div>
  )
}
