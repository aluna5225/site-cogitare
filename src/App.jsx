import { Routes, Route } from "react-router"

import Layout  from './pages/layout'
import Home from './pages/index'
import Sobre from './pages/sobre'
import Materias from './pages/materias'
import Cadastro from './pages/cadastro'
import Login from './pages/login'
import Aplicativo from './pages/aplicativo'
import Wrapper from "./pages/wrapper"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="materias" element={<Materias />} />
        <Route path="cadastro" element={<Cadastro />} />
        <Route path="login" element={<Login />} />
        <Route 
          path="aplicativo" 
          element={
            <Wrapper>
              <Aplicativo />
            </Wrapper>            
          } 
        />
      </Route>
    </Routes>
  );
}


