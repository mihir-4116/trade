import { Link, animateScroll as scroll } from 'react-scroll'

function Footer() {


  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="side1">
            <div className="row">
              <div className="col-md-3">
                <h1 className="logo">HiReignKarmaAlliance</h1>
                <p className="footer-text">
                Connecting the World through International Scrap Trade       
                </p>
              </div>              
            </div>
          </div>
          <div className="side2">
            <div className="row">
            <div className="col-md-3">
                <p className="footer-title">Important Links</p>
                <ul>
                  <li>
                  <Link   
                         spy={true}
                         smooth={true}
                         duration={1000}
                         to="headerbg"
                  > Home </Link>
                  </li>
                  <li>
                  <Link to="services" spy={true} smooth={true} duration={1000} > Services </Link>
                  </li>
                  <li>
                  <Link to="about-scroll" spy={true} smooth={true} duration={1000}>About Us  </Link>
                  </li>
                  <li>
                  <Link to="contact" spy={true} smooth={true} duration={1000}> Contact  </Link>
                  </li>
                </ul>
              </div>             
            </div>
          </div>
          <div className="side3">
            <div className="row">
              <div className="col-md-3">
                <p className="footer-title">Contact Us</p>
                <ul>
                  <li>
                    <Link to="#" >HiReignKarmaAlliance@outlook.com</Link>
                  </li>
                  <li>
                    <Link to="#" > Otto-Suhr-Allee 108A</Link>
                  </li>
                  <li>
                    <Link to="#" > 10585, Berlin </Link>
                  </li>
                  <li>
                    <Link to="#" >+49 176 63415263</Link>
                  </li>
                </ul>
              </div>  
            </div>
          </div>

        </div>
      </div>
      <button onClick={() => scroll.scrollToTop(2500)} src="" className="gotop"><i className="fas fa-level-up-alt"></i></button>

    </footer>
  );
}
export default Footer;
