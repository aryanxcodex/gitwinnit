import { Link, useLocation } from 'react-router-dom';
import { Button } from '@radix-ui/themes';

export default function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex gap-4">
          <NavButton to="/home" label="Home" active={location.pathname === '/home'} />
          <NavButton to="/myposts" label="My Posts" active={location.pathname === '/myposts'} />
          <NavButton to="/about" label="About" active={location.pathname === '/about'} />
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
    </div>
  );
}

// Reusable Navigation Button
const NavButton = ({ to, label, active }) => (
  <Button asChild variant={active ? 'solid' : 'soft'}>
    <Link to={to}>{label}</Link>
  </Button>
);
