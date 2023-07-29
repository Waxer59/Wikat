import SearchInput from './SearchInput'
import { useState } from 'react'
import Modal from 'react-modal'
import { HiXMark } from 'react-icons/hi2'

const SearchBreed: React.FC = () => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false)

  const onInputClick = () => {
    if (window.innerWidth <= 500) {
      setIsSearchModalOpen(true)
    }
  }

  return (
    <div className="bg-black bg-bottom bg-discoverCat bg-cover bg-no-repeat sm:h-[550px] p-[5px] h-[200px] w-full rounded-t-[42px]">
      <div className="flex flex-col gap-[25px] max-w-1/2 w-[90%] justify-center h-full pl-[40px]">
        <div className="text-white sm:text-[64px] text-[14px] flex flex-col max-w-[90%] gap-[7px] w-1/2">
          <div className="flex items-center flex-no-wrap gap-[5px]">
            <span>
              Wi<strong>kat</strong>
            </span>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="svg2"
                viewBox="0 0 400 380"
                className="sm:w-[64px] w-[14px] fill-white"
                version="1.0">
                <path
                  id="path1891"
                  d="m151.35 307.2h113c0-16.06-1.15-19.25-27.75-19.25 4.25-12.75 21.52-43.59 31.12-43.59 8.5 0 18.63 0.47 18.63 19.84 0 22 37.02 57.48 46 43 13.38-21.56-23-14.98-23-67 0-71.15 41.52-61.02 41.52-101 0-20-5.52-22.7-5.52-37 0-18.893 16.65-17.796 13.41-33.465-2.24-10.823-3.99-19.503-5.29-32.591-0.93-9.287-1.23-19.185-10.87-18.787-11.33 0.468-15.63 20.417-33.25 21.848-17.58 1.427-32.57-14.967-39.38-12.625-6.74 2.321-4.62 20.625-0.62 33.625 6.29 20.432 20 46.995-5 50.995s-68 8-99 49-29.86 89.12-42 104c-40.759 49.96-82.526 29.45-82.526 71 0 18.61 31.525 32 36.525 26s-42.485-23.87 10.646-45c45.395-18.04 49.445-21.72 63.355-9z"
                />
              </svg>
            </div>
          </div>
          <p className="text-white sm:text-[24px] text-[10px]">
            Get to know more about your cat breed
          </p>
        </div>
        <div className="sm:text-[18px] text-[12px] w-[50%] relative bg-white rounded-[24px]">
          <div onClick={onInputClick}>
            <SearchInput />
          </div>

          <Modal
            isOpen={isSearchModalOpen}
            className="z-[10] w-[95%] max-w-[350px] h-[350px] bg-white flex flex-col p-2 gap-[20px]"
            ariaHideApp={false}>
            <button
              onClick={() => setIsSearchModalOpen(false)}
              className="self-end">
              <HiXMark className="ml-auto" />
            </button>
            <div>
              <SearchInput />
            </div>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default SearchBreed
