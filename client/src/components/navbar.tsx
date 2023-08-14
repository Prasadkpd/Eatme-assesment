import { FiSearch } from 'react-icons/fi';
const Navbar = () => {
    return (
        <nav className="navbar ml-6 my-3" role="navigation" aria-label="main navigation">
            <div className="navbar-brand ml-4 navbar-item">
                <img src="https://consumer-component-library.roocdn.com/26.21.0/static/images/logo-teal.svg" alt="Logo" />
            </div>

            <div className="navbar-item field ml-6 my-auto">
                <p className="control has-icons-left search-bar">
                    <span className="icon is-small is-right">
                        <FiSearch size={ 18 } />
                    </span>
                    <input className="input" type="search" placeholder="Search..." />
                </p>
            </div>

            <div className="navbar-end">
                <a className="navbar-item is-primary" href="#">
                    Button 1
                </a>
                <a className="navbar-item" href="#">
                    Button 2
                </a>
            </div>

        </nav>

    )
}

export default Navbar;
