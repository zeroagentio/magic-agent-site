'use client'

import { useEffect, useState } from 'react'
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronsUpDownIcon } from 'lucide-react'
import Image from 'next/image'
// import { ChevronUpDownIcon } from '@heroicons/react/16/solid'
 
const currency = [
    {
        id: 1,
        name: 'INR',
        avatar: '🇮🇳'
      },
  {
    id: 2,
    name: 'USD',
    avatar: '🇺🇸' 
},

]

export default function CurrencyDropdown({
    setCurrency
}: {
    setCurrency : (val:string) => void;
}) {
  const [selected, setSelected] = useState(currency[0])

  useEffect(() => {
    setCurrency(selected.name);
  },[selected])

  return (
    <Listbox value={selected} onChange={setSelected}> 
      <div className="relative ml-6 ">
        <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pl-3 pr-2 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
          <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
             
            <span className="block truncate">{selected.avatar}{" "}{selected.name}</span>
          </span>
          <ChevronsUpDownIcon
            aria-hidden="true"
            className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
          />
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
        >
          {currency.map((person) => (
            <ListboxOption
              key={person.id}
              value={person}
              className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white data-[focus]:outline-none"
            >
              <div className="flex items-center"> 
              {person.avatar}
                <span className="ml-3 font-normal group-data-[selected]:font-semibold">
                {person.name}
                </span>
              </div>
 
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  )
}
