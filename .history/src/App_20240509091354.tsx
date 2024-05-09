
import './App.css'
import Homepage from './components/homepage/homepage'
import {Routes, Route} from 'react-router-dom'

import WhiteHome from './components/whiteHome/whiteHome'
import GreyHome from './components/greyHome/greyHome'
function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage/>}>
   
      </Route>

      <Route path='retail-homes' element={<GreyHome/>}
      >

      </Route>

      <Route path='custom-homes' element={<WhiteHome/>}
      />

      <Route path='retail-contruction' e

    </Routes>
    
    </>
  )
}

export default App
