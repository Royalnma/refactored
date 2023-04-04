
import React from 'react'
import Country from './Country'
import Info from './Info'
import Privacy from './Privacy'
import Sustainability from './Sustainability'

export const Footer = () => {
  return (
    <>
      <div className='Footer'>
        <Country />
        <div className='foot'>
          <Info />
          <div className='center'>
            <Sustainability />
          </div>
          <div className='right'>
            <Privacy title={"Privacy"} />
            <Privacy title={"Terms"} />
            <Privacy title={"Settings"} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;