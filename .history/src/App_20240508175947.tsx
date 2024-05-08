
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

      <Route path='retail-con' element={<GreyHome/>}
      >

      </Route>

      <Route path='retail-properties' element={<WhiteHome/>}
      />

    </Routes>
    
    </>
  )
}

export default App
