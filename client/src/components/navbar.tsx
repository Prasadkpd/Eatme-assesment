import { Button } from 'react-bulma-components';
import { BiHomeAlt } from 'react-icons/bi';
import { FaRegUser } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className="navbar mx-6 my-3" role="navigation" aria-label="main navigation">
      <div className="navbar-brand ml-4 navbar-item">
        <img
          src="https://consumer-component-library.roocdn.com/26.21.0/static/images/logo-teal.svg"
          alt="Logo"
        />
      </div>

      <div className="navbar-item field ml-6 my-auto">
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
      </div>

      <div className="navbar-end">
        <Button className="primary mr-3">
          <BiHomeAlt className="mr-2 primary-icons" />
          Sign up Or Login
        </Button>
        <Button>
          <FaRegUser className="mr-2 primary-icons" />
          Account
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
