import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Aboutus from './components/Aboutus'
import Navbar from './components/Navbar'
import Contactus from './components/Contactus'
import Footer from './components/Footer'
const App = () => {
  return (
    <BrowserRouter>
     <div className='font-inter'>
     <Navbar/> 
<Routes>

<Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path='/Aboutus' element={<Aboutus/>}/>
          <Route path='/Contactus' element={<Contactus />}/>
</Routes>
<Footer/>
</div>
</BrowserRouter>
   
  )
}

export default App