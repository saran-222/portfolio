// "use client"
// import React, { useState } from 'react'
// import NavbarLinks from './NavbarLinks'
// import { RxHamburgerMenu } from "react-icons/rx";
// import { MdOutlineClose } from "react-icons/md";
// import MenuOverlay from './MenuOverlay';

// const navLinks = [

//   {
//     title: "About",
//     path: "#about"
//   },
//   {
//     title: "Projects",
//     path: "#projects"
//   },
//   {
//     title: "Contact",
//     path: "#contact"
//   },
// ]

// const Navbar = () => {

//   const [navbarOpen, setNavbarOpen] = useState(false)

//   return (
//     <nav className='fixed mx-auto top-0 left-0 right-0 z-10 bg-black bg-opacity-100'>
//       <div className='flex container lg:py-6 flex-wrap items-center justify-center px-4 py-4'>
//         <div className='mobile-menu block md:hidden '>
//           {
//             !navbarOpen ? (
//               <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200'>
//                 <RxHamburgerMenu className='h-5 w-5  ' />
//               </button>
//             ) : (
//               <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200'>
//                 <MdOutlineClose className='h-5 w-5  ' />
//               </button>
//             )
//           }
//         </div>
//         <div className='menu hidden md:block md:w-auto id="navbar'>
//           <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 sm:text-sm lg:text-lg'>
//             {
//               navLinks.map((link, index) => (
//                 <li key={index}>
//                   <NavbarLinks href={link.path} title={link.title} />
//                 </li>
//               ))
//             }
//           </ul>
//         </div>
//       </div>
//       {
//         navbarOpen ? <MenuOverlay links={navLinks} setNavbarOpen={setNavbarOpen} /> : null
//       }
//     </nav>
//   )
// }

// export default Navbar




"use client"
import React, { useState } from 'react'
import NavbarLinks from './NavbarLinks'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";
import MenuOverlay from './MenuOverlay';

const navLinks = [
  {
    title: "About",
    path: "#about"
  },
  {
    title: "Projects",
    path: "#projects"
  },
  {
    title: "Contact",
    path: "#contact"
  },
]

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const handleLinkClick = (e) => {
    e.preventDefault(); 
    const targetId = e.target.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth', 
      });
    }
    setNavbarOpen(false); 
  };

  return (
    <nav className='fixed mx-auto top-0 left-0 right-0 z-10 bg-black bg-opacity-100'>
      <div className='flex container lg:py-6 flex-wrap items-center justify-center px-4 py-4'>
        <div className='mobile-menu block md:hidden'>
          {
            !navbarOpen ? (
              <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200'>
                <RxHamburgerMenu className='h-5 w-5' />
              </button>
            ) : (
              <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200'>
                <MdOutlineClose className='h-5 w-5' />
              </button>
            )
          }
        </div>
        <div className='menu hidden md:block md:w-auto'>
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 sm:text-sm lg:text-lg'>
            {
              navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    onClick={handleLinkClick}
                    className='text-slate-200 hover:text-white'
                  >
                    {link.title}
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      {
        navbarOpen ? <MenuOverlay links={navLinks} setNavbarOpen={setNavbarOpen} /> : null
      }
    </nav>
  )
}

export default Navbar;
