import { Link , NavLink } from "react-router-dom"
import { useContext } from "react";
import { UserContext } from "../contexts/useContext.js" // télécharger le store 
import { useNavigate } from "react-router-dom"

const Menu = () => {
    const { isLogged , deconnexion } = useContext(UserContext);
    const navigate = useNavigate()
    
    const logout = e => {
        e.preventDefault();
        deconnexion()
        navigate("/login"); 
    }

    return ( 
        <div className="bg-dark">
            <nav className="container navbar navbar-expand navbar-dark">
                <span className="navbar-brand"> Jour3 </span>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/" className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"}>Accueil</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/a-propos" className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"}>
                            A propos
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"}>Contact</NavLink>
                    </li>
                </ul>
                <ul className="navbar-nav ms-auto">
                    {isLogged ?  
                        <>
                         <li className="nav-item">
                            <NavLink to="/" className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"} onClick={logout}>Déconnexion</NavLink>
                          </li>
                          <li className="nav-item">
                                <NavLink to="/dashboard" className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"}>Dashboard</NavLink>
                            </li>
                        </>
                    : 
                        <li className="nav-item">
                            <NavLink to="/login" className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"}>Login</NavLink>
                        </li>
                    }
                    
                </ul>
            </nav>
        </div>
     );
}
 
export default Menu;