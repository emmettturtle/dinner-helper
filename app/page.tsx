
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Upload from './ui/upload-button'
import { useState } from 'react'
import UploadAndResponse from './ui/upload-response'
import { lilitaOne, robotoSlab } from '@/app/ui/fonts';


function classNames(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function Home() {
  // const [imgURL, setImgURL] = useState<string>('');

  return (
    <div className="min-h-full h-screen bg-cover bg-center" style={{ backgroundImage: `url('../dinner-helper-backround.jpg')` }}>
      <Disclosure as="nav" className=" border-2 border-dhOrange bg-dhYellow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center ">
            <h1 className={`${lilitaOne.className} antialiased text-5xl p-2 text-dhOrange`}>DINNER HELPER</h1>
          </div>
        </div>
      </Disclosure>

      <div className="pt-10 mx-[15%] mt-10 bg-dhWhite rounded-lg font-dhPurple border-4 border-dhPurple">
        <header>
          <div className={`${robotoSlab.className} mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-dhPurple`}>
            <h1 className="text-3xl tracking-tight">Not sure what to make for dinner?</h1>
            <p className='mb-4'>Upload a picture of your fridge or pantry and we'll tell you what you got and what to make.</p>
          </div>
        </header>
        <main>
          <div className={
            `${robotoSlab.className} mx-auto max-w-7xl px-20 sm:px-6 lg:px-8 text-dhPurple bg-dhWhite rounded-lg`
          }>
            {/* upload button */}
            <div className='flex justify-evenly w-full'>
              <UploadAndResponse></UploadAndResponse>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
