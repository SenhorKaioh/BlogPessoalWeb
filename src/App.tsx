import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import Cadastro from './paginas/cadastro/Cadastro';




function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <div className='min-h-[80vh]'>
      <Routes>
      <Route path="/" element= {<Login />} />
      <Route path="/home" element= {<Home />} />
      <Route path="/login" element= {<Login />} />
      <Route path="/cadastro" element= {<Cadastro />} />
      </Routes>
      </div>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;