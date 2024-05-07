
import './App.css'
import Homepage from './components/homepage/homepage'
import {Routes, Route} from 'react-router-dom'
function App() {


  return (
    <>
    <Routes>
      <Route path='/'>
      <Homepage/>
      </Route>

    </Routes>
    
    </>
  )
}

export default App
