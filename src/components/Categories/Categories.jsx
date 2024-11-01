import React from 'react'
import Navbar from '../navbar/Navbar'

const Categories = () => {
  return (
    <>
    <body style={{
      background: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(${'src/assets/cate_background.png'})`,
      backgroundSize: `cover`,
      backgroundPosition: `center`,
      backgroundRepeat: `no-repeat`,
      position: `relative`,
    }}
    >
        <Navbar/>
        <div>Categories</div>
    </body>
    </>

  )
}

export default Categories