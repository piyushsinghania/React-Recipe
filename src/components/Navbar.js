import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

// styles
import './Navbar.css'

// components
import Search from './Search'

export default function Navbar() {
  const { color } = useTheme();

  return (
    <div className="navbar" style={{background: color}}>
      <nav>
        <Link to="/" className='brand'>
          <h1>Cooking Ninja</h1>
        </Link>
        <Search />
        <Link to="/create">
          Create Recipe
        </Link>
      </nav>
    </div>
  );
}
