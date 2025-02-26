import { AI_MANAGER, AI_PRODUCT_SEARCH, AI_SUPPORT, ANALYTICS, KNOWLEDGE_BASE, PRODUCT_DEMO } from '@/lib/utils'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
 
import { MagnifyingGlassIcon, PersonIcon, PieChartIcon, ReaderIcon } from '@radix-ui/react-icons'
import { ChevronDownIcon, Headset, PhoneIcon, PlayCircle } from 'lucide-react'

const solutions = [
    { name: 'AI Product Search', description: "Your customers' data will be safe and secure", href: AI_PRODUCT_SEARCH, icon: MagnifyingGlassIcon },
    { name: 'Analytics', description: 'Get a better understanding of your customers', href: ANALYTICS, icon: PieChartIcon },
    { name: 'AI Support', description: 'Automates ticket creation and management', href: AI_SUPPORT, icon: Headset },
    { name: 'AI Store Manager', description: 'Assistant designed to manage your online store', href: AI_MANAGER , icon: PersonIcon },
    { name: 'Knowledge Base', description: 'AI learns from real-time data for precise info', href: KNOWLEDGE_BASE, icon: ReaderIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: PRODUCT_DEMO, icon: PlayCircle },
  { name: 'Book demo', href: 'https://cal.com/ndrohith/30min', icon: PhoneIcon },
]

export default function FeatureDropdown() {
  return (
    <Popover className="">
      <PopoverButton className="inline-flex gap-x-1 items-center font-semibold">
        <span>Features</span>
        <ChevronDownIcon aria-hidden="true" className="size-5" />
      </PopoverButton>

      <PopoverPanel
        transition
        className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
      >
        <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 ring-1 shadow-lg ring-gray-900/5">
          <div className="p-4">
            {solutions.map((item) => (
              <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-gray-600" />
                </div>
                <div>
                  <a href={item.href} 
                target='_blank'
                className="font-semibold text-gray-900">
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                  <p className="mt-1 text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
            {callsToAction.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target='_blank'
                className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
              >
                <item.icon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  )
}
