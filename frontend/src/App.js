import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Addproduct from "./pages/Addproduct";
import EditProduct from "./pages/EditProduct";



function App() {
  return (
<>
<BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/addproduct' element={<Addproduct />} />
          <Route path='/edit' element={<EditProduct />} />
        
        </Routes>
      </BrowserRouter>
  
  </>
)
}



export default App;
