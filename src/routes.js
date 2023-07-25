import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutMe from "./pages/AboutMe";
import Start from "./pages/Start";
import Menu from './components/Menu';
import Rodape from './components/Rodape';
import DefaultPage from './components/DefaultPage';
import Post from './pages/Post'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<DefaultPage/>}>
          <Route index element={<Start/>}/>
          <Route path="about-me" element={<AboutMe/>}/>
          <Route path="posts/:id" element={<Post />} />
        </Route>
        {/* 
          Na rota "/", a estrutura a ser renderizada é: 

          <DefaultPage>
            <Start/>
          </DefaultPage>

          Na rota "/aboutme", a estrutura a ser renderizada é: 

          <DefaultPage>
            <AboutMe/>
          </DefaultPage>
        */}

        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;
