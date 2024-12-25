import React from 'react'

const TabButton = ({ active, selectTab, children }) => {

  const buttonClasses = active ? 'textwhite border-b border-purple-500' : 'text-[#ADB7BE] '
  return (
    <button onClick={selectTab}>
      <p className={`mr-6 font-semibold hover:text-white ${buttonClasses} `}>
        {children}
      </p>
    </button>
  )
}

export default TabButton
