import { Route, Routes } from "react-router-dom";

import Contacto from "./components/contacto";
import Estampados from "./components/estampados";
import EstampadosDetail from "./estampadosDetail";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Nosotros from "./components/nosotros/Nosotros";
import Simulador from "./components/simulador";

function App() {
  const Images = () => (<h1>images</h1>)

  

  return (
    <div className= "font[-apple-system]">
      <Navbar/>
        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route path="/images" element={<Images/>}/>
          <Route path='/nosotros' element ={<Nosotros/>}/>
          <Route path='/estampados' element={<Estampados/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/estampados/:name' element={<EstampadosDetail/>}/>
          <Route path="/simulador/:estampado" element={<Simulador/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
