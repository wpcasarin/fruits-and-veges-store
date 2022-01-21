import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <a href="#">Logo</a>
      <ul className="navigation">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">Sobre Nós</NavLink>
        </li>
      </ul>
      <a href="#">Carrinho</a>
    </nav>
  );
}

export default Header;
