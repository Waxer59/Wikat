import { Combobox, Transition } from '@headlessui/react'
import { useState, Fragment, useEffect } from 'react'
import { getCatData } from '../../../api/catsApi'
import { type BreedElement } from '../../../common/interfaces/catApiResponseInterface'
import { useDebounce } from 'use-debounce'
import { useNavigate } from 'react-router-dom'
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2'

const SearchInput: React.FC = () => {
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState<BreedElement[] | null>(null)
  const navigate = useNavigate()

  const [debouncedValue] = useDebounce(search, 1000)

  useEffect(() => {
    const setQueryData = async () => {
      const response = await getCatData(`/cats/breeds?filter=${debouncedValue}`)
      setQuery(response)
    }
    if (debouncedValue.trim().length > 0) {
      setQueryData()
    }
  }, [debouncedValue])

  const onComboboxChange = (breedId: string) => {
    navigate(`/breed/${breedId}`)
  }

  return (
    <Combobox value={search} onChange={(e: string) => onComboboxChange(e)}>
      <div className="flex items-center border-black border-solid border rounded-[24px]">
        <Combobox.Input
          type="text"
          placeholder={window.innerWidth > 900 ? 'Enter your breed' : 'Search'}
          onChange={({ target }) => setSearch(target.value.trim())}
          className="self-start outline-none leading-[12px] sm:leaging-[18px] placeholder:text-black sm:text-[18px] text-[12px] sm:p-[15px] p-[7px] rounded-[59px] w-[85%] sm:w-[90%] sm:bg-[length:20px] bg-[length:10px]"></Combobox.Input>
        <HiOutlineMagnifyingGlass />
      </div>
      <Transition
        as={Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        afterLeave={() => setQuery(null)}>
        <Combobox.Options
          className={`border-[15px] border-white border-solid flex flex-col gap-[10px] p-[10px] overflow-auto overflow-x-hidden absolute mt-[15px] z-10 w-full rounded-[24px] bg-white max-h-60 ${
            query === null || query?.length <= 0 || search.length <= 0
              ? 'hidden'
              : ''
          }`}>
          {query &&
            query.map(({ name, id }) => (
              <Combobox.Option
                key={id}
                value={id}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 pl-[20px] pr-[20px] rounded-[12px] ${
                    active ? 'bg-[#9797971A]' : ''
                  }`
                }>
                <span className="text-[12px] sm:text-[18px] pt-[20px] font-[500]">
                  {name}
                </span>
              </Combobox.Option>
            ))}
        </Combobox.Options>
      </Transition>
    </Combobox>
  )
}

export default SearchInput
