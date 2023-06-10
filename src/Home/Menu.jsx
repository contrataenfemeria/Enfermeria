import './Menu.css'
import { Link } from "react-router-dom"


export function Menu() {
    return (
        <>    
 <nav>
                <ul className="menu-bar">

                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link></li> 
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/historia">
                  Historia
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/nosotros">
                  Nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/formulario">
                  Formulario
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/servicios">
                  Servicios
                </Link>
              </li>
                </ul>
            </nav>


        </>
    )
}