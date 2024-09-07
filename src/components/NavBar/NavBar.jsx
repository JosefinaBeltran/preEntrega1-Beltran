import "./NavBar.css"
import logo from "../../assets/logo.png"
import CartWidget from "../CartWidget/CartWidget"

function NavBar(){
    return (
        <nav className="navbar">
            <div>
                <img className="logo" src={logo} alt="Logo de >CodeMate!" />
            </div>
            <ul className="navbar-link">
                <li className="navbar-item">
                    <a href="#">Home</a>
                </li>
                <li className="navbar-item">
                    <a href="#">Libros</a>
                </li>
                <li className="navbar-item">
                    <a href="#">E-books</a>
                </li>
            </ul>
            <CartWidget/>
        </nav>
    )
}

export default NavBar