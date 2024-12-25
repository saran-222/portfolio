import React from 'react'
import NavbarLinks from './NavbarLinks'

const MenuOverlay = ({ links, setNavbarOpen }) => {

  const handleLinkClick = () => {
    setNavbarOpen(false);
  };

  return (
    <ul className='flex flex-col py-4 items-center'>
      {
        links.map((link, index) => (
          <li key={index}>
            <NavbarLinks href={link.path} title={link.title} onClick={handleLinkClick} />
          </li>
        ))
      }
    </ul>
  )
}

export default MenuOverlay
