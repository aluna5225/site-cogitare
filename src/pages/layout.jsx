import { Link, Outlet } from "react-router"
import logo from '../img/logo.png'

function Layout() {
  return (
    <>
      <header>
        <nav>
          <img src={logo} alt="Logo Cogitare" />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
            <li>
              <Link to="/materias">Matérias</Link>
            </li>
            <li>
              <Link to="/cadastro">Cadastro</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />      
    </>
  )
}

export default Layout