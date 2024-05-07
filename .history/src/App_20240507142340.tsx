
import './App.css'
import Homepage from './components/homepage/homepage'
import {Routes, Route} from 'react-router-dom'
import CustomProperty from './components/customProperty/customProperty'
function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage/>}>
   
      </Route>

      <Route path='custom-properties' element={<CustomProperty/>}
      ></Route>

    </Routes>
    
    </>
  )
}

export default App
