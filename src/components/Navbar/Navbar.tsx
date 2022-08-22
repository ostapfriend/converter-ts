import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/converter-ts" className="navbar-item">
            Home
          </Link>

          <Link to="/list-currencies" className="navbar-item">
            CurrencyList
          </Link>
        </div>
      </div>
    </nav>
  )
}