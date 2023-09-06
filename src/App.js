import { Route, Routes } from "react-router-dom";

import Contacto from "./components/contacto";
import Estampados from "./components/estampados";
import EstampadosDetail from "./estampadosDetail";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Nosotros from "./components/nosotros/Nosotros";
import Simulador from "./components/simulador";
import { Toaster } from "react-hot-toast";
import NosotrosGaleria from "./components/nosotros/NosotrosGaleria";
import EstampadosImagenes from "./components/estampados/EstampadosImagenes"
import ContactoImagenes from "./components/contacto/ContactoImagenes";
function App() {
  const Images = () => (<h1>images</h1>)

  

  return (
    <div className= "">
      <Navbar/>
        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route path="/images" element={<Images/>}/>
          <Route path='/nosotros' element ={<Nosotros/>}/>
          <Route path="/nosotros/galeria" element={<NosotrosGaleria/>} />
          <Route path='/estampados' element={<Estampados/>}/>
          <Route path='estampados/imagenes' element={<EstampadosImagenes/>} />
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/contacto/imagenes' element={<ContactoImagenes/>} />
          <Route path='/estampados/:name' element={<EstampadosDetail/>}/>
          <Route path="/simulador/:estampado" element={<Simulador/>}/>
        </Routes>
        <Footer/>
        <Toaster
      position="top-right"
      />
    </div>
  );
}

export default App;
