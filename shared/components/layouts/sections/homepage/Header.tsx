import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
      <div className='bg-dark'>
      <div className='box py-3 lg:py-5'>
        <div className='flex justify-between'>
          <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1694696670/Gleemora/gleemora_zjdilu.png' alt='logo' width={100} height={40} className='w-[180px]'/>
          <div className='flex items-center gap-x-12'>
              <Link href={''} className='block text-white fw-500 lg:px-6 py-1 rounded-[4px] hover:scale-x-105 duration-100'>Become a celebrity survivor</Link>
              <Link href={''} className='block bg-white fw-500 lg:px-6 py-1 rounded-[4px] hover:scale-x-105 duration-100'>Join the waitlist</Link>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Header