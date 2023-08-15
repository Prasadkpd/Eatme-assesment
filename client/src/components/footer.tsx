import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered footer-con">
        <div className="tile is-ancestor">
          <div className="tile is-vertical is-12">
            <div className="tile">
              <div className="tile is-parent is-vertical">
                <article className="tile is-child notification card">
                  <div className="content">
                    <ul className="list">
                      <li>
                        <p className="subtitle">Discover Dilivaroo</p>
                      </li>
                      <li>
                        <Link to="/login" className="link">
                          Investors
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="link">
                          About us
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="link">
                          Tkewy
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="link">
                          More
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="link">
                          Newsroom
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="link">
                          Engineering blog
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="link">
                          Design blog
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="link">
                          Gift Cards
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="link">
                          Careers
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="link">
                          Resturant signup
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="link">
                          Become a rider
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="link">
                          Deliveroo Talent Dilevery
                        </Link>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child notification card">
                  <div className="content">
                    <ul className="list">
                      <li>
                        <p className="subtitle">Legal</p>
                      </li>
                      <li>
                        <Link to="/" className="link">
                          Terms and conditions
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="link">
                          Privacy
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="link">
                          Cookies
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="link">
                          Modern Slavery Statement
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="link">
                          Tax Strtergy
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="link">
                          Section 172 Statement
                        </Link>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child notification card">
                  <div className="content">
                    <ul className="list">
                      <li>
                        <p className="subtitle">Help</p>
                      </li>
                      <li>
                        <Link to="/" className="link">
                          Contact
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="link">
                          FAQs
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="link">
                          Cuisins
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="link">
                          Brands
                        </Link>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child notification card">
                  <div className="content">
                    <ul className="list">
                      <li>
                        <p className="subtitle">Take Delivaroo with you</p>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
