import { Button, Image, Navbar } from 'react-bulma-components';
import { BiHomeAlt } from 'react-icons/bi';
import { FaRegUser } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
const NavBar = () => {
  const navigate = useNavigate();

  return (
    <Navbar className="px-6 py-2 is-fixed-top" aria-label="main navigation" role="navigation">
      <Navbar.Brand className="ml-4">
        <Navbar.Item renderAs="a" href="/">
          <Image
            src="https://consumer-component-library.roocdn.com/26.21.0/static/images/logo-teal.svg"
            className="brand-img"
          />
        </Navbar.Item>
      </Navbar.Brand>
      <Navbar.Item className="ml-6 my-auto field">
        <p className="control has-icons-left search-bar">
          <span className="icon is-small is-right">
            <FiSearch size={18} />
          </span>
          <input
            className="input has-text-weight-semibold"
            type="search"
            placeholder="Search Tosted St-Martin's Lane"
          />
        </p>
      </Navbar.Item>

      <Navbar.Item className="navbar-end">
        <Button className="primary mr-3" onClick={() => navigate('/login')}>
          <BiHomeAlt className="mr-2 primary-icons" />
          Sign up Or Login
        </Button>
        <Button>
          <FaRegUser className="mr-2 primary-icons" />
          Account
        </Button>
      </Navbar.Item>
    </Navbar>
  );
};

export default NavBar;
