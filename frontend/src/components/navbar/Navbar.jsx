import { Fragment } from 'react'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import './Navbar.css'
const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Btech', href: '/Btech/college', current: false },
  { name: 'Mtech', href: '/Mtech/college', current: false },
  { name: 'MBA', href: '/MBA/college', current: false },
  { name: 'Jobs', href: '/jobs', current: false },
  { name: 'Events', href: '/events', current: false },
  { name: 'Stem', href: '/stem', current: false },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white fixed_custom top-0 w-full z-10 shadow-xl rounded-b-3xl">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="relative inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton >
                  {open ? (
                    <XMarkIcon className="block h-6 w-6 me-1" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6 me-1" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  {/* <img
                    className="h-8 w-auto "
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  /> */}
                </div>
                <div className="hidden lg:ml-6 lg:block">
                  <div className="flex space-x-2 text-sm ">
                    {navigation.map((item) => (
                      <Link

                        key={item.name}
                        to ={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-500 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className='flex gap-5'>
              <a class="bg-white border border-gray-300 text-gray-800 font-semibold py-1 px-4 rounded-lg hover:cursor-pointer hover:bg-slate-200 " href = '/login'>
              Login
              </a>

              <a class="bg-white border border-gray-300 text-gray-800 py-1 px-4 font-semibold rounded-lg hover:cursor-pointer hover:bg-slate-200 me-4" href='/signup'>
              Sign Up

              </a>
              </div>
            </div>
          </div>

          <DisclosurePanel className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-500 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}
