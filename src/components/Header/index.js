import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        className="app-logo"
        alt="wave"
      />
      <h1 className="logo-heading">Wave</h1>
    </div>
    <ul className="nav-menu">
      <li>
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="nav-link">
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
