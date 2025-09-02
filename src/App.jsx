import {BrowserRouter as Router,Routes,Route,} from "react-router-dom"
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import Signup from "./components/Signup"

import Weather from "./components/Weather"



function App() {
 

  return (
    <>
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/weather" element={<Weather/>}/>
          
        </Routes>
    </Router>
       
    </>
  )
}

export default App
