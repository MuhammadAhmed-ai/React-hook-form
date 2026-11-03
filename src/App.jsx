import { Routes ,Route } from "react-router-dom";
import Index from "./pages";
import Signup from "./pages/signup";
import Login from "./pages/login";

function App(){

  return(

    <Routes>
      <Route path="/" element={<Index/>}  />
      <Route path ="/signup" element={<Signup/>}/>
      <Route path ="/login" element={<Login/>}/>
    </Routes>
  )
}

export default App