const NavBar = () => {
    return (
        <nav className="navbar py-4 ml-4" role="navigation" aria-label="main navigation">
            <div className="navbar-brand ml-4">
                <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28" />
                </a>
                <div className="container">
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input is-medium" type="text" placeholder="Search..." />
                        </div>
                        <div className="control">
                            <button className="button is-medium is">
                               
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
