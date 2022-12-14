import { NavLink } from "react-router-dom"

const Menu = () => {

    return ( 
        <div className="bg bg-warning">
            <nav className="navbar navbar-expand navbar-light container">
                <span className="navbar-brand"> Jour5 </span>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/" className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"}>Accueil</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/optimisation" className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"}>Optimisation</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
     );
}
 
export default Menu;