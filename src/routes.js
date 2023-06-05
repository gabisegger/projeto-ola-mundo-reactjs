import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutMe from "./pages/AboutMe";
import Start from "./pages/Start";
import Menu from './components/Menu';
import Rodape from './components/Rodape';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<Start/>}/>
        <Route path="/about-me" element={<AboutMe/>}/>
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;
