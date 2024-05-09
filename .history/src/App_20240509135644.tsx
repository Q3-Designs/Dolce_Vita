
import './App.css'
import Homepage from './components/homepage/homepage'
import {Routes, Route} from 'react-router-dom'

import WhiteHome from './components/whiteHome/whiteHome'
import GreyHome from './components/greyHome/greyHome'
import Ravenna from './components/ravenna/ravenna'
import Booking from './components/booking/booking'
import Commercial from './components/ravenna/ravenna'
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

      <Route path='commercial-construction' element={<Commercial/>}/>

      <Route path='contact' element={<Booking/>}
      />

    </Routes>
    
    </>
  )
}

export default App
