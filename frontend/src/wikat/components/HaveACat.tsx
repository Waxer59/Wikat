import { AiOutlineArrowRight } from 'react-icons/ai'

export default function HaveACat() {
  return (
    <div className="mt-[100px] flex items-center gap-[60px]">
      <div className="max-w-[400px]">
        <h2 className="font-bold text-[48px]">Why should you have a cat?</h2>
        <p className="text-[18px] inline-block mt-[40px]">
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety levels
        </p>
        <button className="flex items-center text-[18px] gap-[10px] text-[#29150799] cursor-pointer mt-auto font-bold mt-[65px]">
          SEE MORE <AiOutlineArrowRight />
        </button>
      </div>
      <ul className="gap-[28px] columns-2">
        <li className="mb-[45px]">
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
