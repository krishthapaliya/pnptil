import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Aboutus from './components/Aboutus'
import Navbar from './components/Navbar'
import Contactus from './components/Contactus'
const App = () => {
  return (
    <BrowserRouter>
     <div>
     <Navbar/> 
<Routes>

<Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path='/Aboutus' element={<Aboutus/>}/>
          <Route path='/Contactus' element={<Contactus />}/>
</Routes>
</div>
</BrowserRouter>
   
  )
}

export default App