import { Route, Routes } from "react-router-dom";

import Estampados from "./components/estampados";
import EstampadosDetail from "./estampadosDetail";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Nosotros from "./components/nosotros/Nosotros";

function App() {
  const Images = () => (<h1>images</h1>)

  

  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route path="/images" element={<Images/>}/>
          <Route path='/nosotros' element ={<Nosotros/>}/>
          <Route path='/estampados' element={<Estampados/>}/>
          <Route path='/estampados/:name' element={<EstampadosDetail/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
