import { Link, animateScroll as scroll } from "react-scroll";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="side1">
            <div className="row">
              <div className="col-md-3">
                <h1 className="logo">Tech Genius</h1>
                <p className="footer-text">
                  Experience innovation with Tech Genius.
                </p>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Important Link</p>
                <ul>
                  <li>
                    <Link
                      spy={true}
                      smooth={true}
                      duration={1000}
                      to="headerbg"
                    >
                      {" "}
                      Home{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="about-scroll"
                      spy={true}
                      smooth={true}
                      duration={1000}
                    >
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="services-scroll"
                      spy={true}
                      smooth={true}
                      duration={1000}
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to="#" spy={true} smooth={true} duration={1000}>
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="contact-scroll"
                      spy={true}
                      smooth={true}
                      duration={1000}
                    >
                      Contact us
                    </Link>
                  </li>
                  <li>
                    <Link to="#" spy={true} smooth={true} duration={1000}>
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link to="#" spy={true} smooth={true} duration={1000}>
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="side2">
            <div className="row">
              <div className="col-md-3">
                <p className="footer-title">Contact</p>
                <ul>
                  <li>
                    <Link to="#">techgenius@gmail.com</Link>
                  </li>
                  <li>
                    <Link to="#">Colombo, Sri Lanka</Link>
                  </li>
                  <li>
                    <Link to="#">026 123 00 00</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Follow us on</p>
                <ul>
                  <li>
                    <a target="_blank" rel="noreferrer" href="#">
                      Faacebook
                    </a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="#">
                      Github
                    </a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="h#">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="#">
                      Linkedin
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => scroll.scrollToTop(2500)} src="" className="gotop">
        <i className="fas fa-level-up-alt"></i>
      </button>
    </footer>
  );
}
export default Footer;
