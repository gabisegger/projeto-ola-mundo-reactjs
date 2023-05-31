import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutMe from "./pages/AboutMe";
import Start from "./pages/Start";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start/>}/>
        <Route path="/about-me" element={<AboutMe/>}/>
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
