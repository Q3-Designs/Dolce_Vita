
import './App.css'
import Homepage from './components/homepage/homepage'
import {Routes, Route} from 'react-router-dom'
import CustomProperty from './components/greyHome/greyHome'
import WhiteHome from './components/whiteHome/whiteHome'
function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage/>}>
   
      </Route>

      <Route path='custom-homes' element={<CustomProperty/>}
      >

      </Route>

      <Route path='retail-properties' element={<WhiteHome/>}
      />

    </Routes>
    
    </>
  )
}

export default App
