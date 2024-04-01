
import './App.css'
import AboutUs from './Components/AboutUs'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Header from './Components/Header'
import OurFood from './Components/OurFood'
import SignUp from './Components/SignUp'
import {BrowserRouter,Route, Routes} from "react-router-dom";
import { useState } from 'react'

function App() {
 
const[count, setcount] = useState(0); 
const handleAdd = () => {
  setcount(count+1)
}
  return (
    <>
    
<BrowserRouter>
<Header count={count}/>
<Routes>
<Route path='/' element={<Home handleAdd={handleAdd}/>}/>
<Route path='/aboutus' element={<AboutUs/>}/>
<Route path='/ourfood' element={<OurFood/>}/>
<Route path='/signup' element={<SignUp/>}/>

 </Routes>
 <Footer/>
 </BrowserRouter>

    </>
  )
}

export default App
