import React from 'react'
import Image from 'next/image'
import { HomeIcon, StarIcon, PlusIcon, Search } from '@heroicons/react/24/solid'
import { signIn } from 'next-auth/react'



function Header() {
  return (
    <div className='sticky bg-[#040714] top-0 z-[1000] flex items-center px-10 h-[72px] md:px-12'>
      <Image
        src={"/images/logo.svg"}
        width={80} height={80}
        className='cursor-pointer'>
      </Image>
      <div className='hidden ml-10 md:flex items-center space-x-6'>
        <a className="header-link group">
          <HomeIcon className="h-4" />
          <span className="span">Home</span>
        </a>
        <a className="header-link group">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="span">Search</span>
        </a>
        <a className="header-link group">
          <PlusIcon className="h-4" />
          <span className="span">Watchlist</span>
        </a>
        <a className="header-link group">
          <StarIcon className="h-4" />
          <span className="span">Originals</span>
        </a>
        <a className="header-link group">
          <img src="/images/movie-icon.svg" alt="" className="h-5" />
          <span className="span">Movies</span>
        </a>
        <a className="header-link group">
          <img src="/images/series-icon.svg" alt="" className="h-5" />
          <span className="span">Series</span>
        </a>
      </div>
      <button className='ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200' onClick={signIn}>Login</button>
    </div>
  )
}

export default Header

