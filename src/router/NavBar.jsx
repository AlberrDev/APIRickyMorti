import { NavLink } from "react-router-dom"

export const NavBar = () => {
    return (
      <>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            
            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className= {({isActive} )=> `nav-item nav-link ${isActive ? 'active' : ''}` }
                        to="/inicio"
                    >
                        Inicio
                    </NavLink>

                </div>
            </div>
            </nav>
      </>
    )
  }