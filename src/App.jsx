import React from 'react'
import { Routes, Route, useLocation} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import News from './components/News/News';
import Homepage from './components/homepage/homepage';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Categories from './components/Categories/Categories';
const App = () => {

  return (

    <>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route index element={<Homepage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/categories' element={<Categories/>}/>
      </Routes>
    </>
  )
}

export default App