
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Upload from './ui/upload-button'
import { useState } from 'react'
import UploadAndResponse from './ui/upload-response'


function classNames(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function Home() {
  // const [imgURL, setImgURL] = useState<string>('');

  return (
    <div className="min-h-full">
      <Disclosure as="nav" className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center ">
            <h1 className='text-4xl p-3 text-black'>Dinner Helper</h1>
          </div>
        </div>
      </Disclosure>

      <div className="py-10">
        <header>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl tracking-tight text-gray-900">Not sure what to make for dinner?</h1>
            <p className='text-gray-900'>Upload a picture of your fridge or pantry and we'll tell you what you got and what to make.</p>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 border">
            {/* upload button */}
            <div className='flex justify-evenly w-full'>
              {/* <Upload setImgURL={setImgURL}></Upload> */}
              <UploadAndResponse></UploadAndResponse>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
