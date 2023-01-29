import { AiOutlineArrowRight } from 'react-icons/ai'

export default function SearchedBreeds() {
  return (
    <div className="h-[550px] bg-[#E3E1DC] rounded-b-[42px] w-full">
      <div className="max-w-1/2 w-[90%] mx-auto h-full pt-[40px]">
        <span className="relative text-[18px] pb-[8px] after:border-b-[3px] after:border-black after:content-[''] after:bottom-0 after:left-0 after:h-[50%] after:absolute after:w-[35%] mb-[46px] inline-block">
          Most Searched Breeds
        </span>
        <div className="flex mb-[46px] justify-between">
          <h2 className="text-[48px] font-bold">
            X+ Breeds For you to discover
          </h2>

          <button className="flex items-center text-[18px] gap-[10px] text-[#29150799] cursor-pointer mt-auto font-bold">
            SEE MORE <AiOutlineArrowRight />
          </button>
        </div>
        <ul className="flex gap-[50px]">
          <li className="flex flex-col gap-[20px]">
            <img
              src="images/discoverCat.png"
              alt=""
              className="w-[220px] h-[220px] rounded-[24px]"
            />
            <span className="font-bold text-[18px]">Bengal</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
