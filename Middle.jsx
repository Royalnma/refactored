import Logo from './Logo'
import React from 'react'
import SearchBar from './SearchBar'
import Language from './Langauage'

export const Middle = () => {
  return (
    <>
    <div className='Middle'>
        <Logo />
        <SearchBar />
        <Language />
    </div>
    </>
  )
}

export default Middle;
