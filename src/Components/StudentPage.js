import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import BannerImage1 from '../Assets/banner1.jpg';
import BannerImage2 from '../Assets/banner2.jpg';
import BannerImage3 from '../Assets/banner3.jpg';

function CollapsibleExample() {
  const carouselHeight = '700px';

  return (
    <>
       <Navbar collapseOnSelect expand="lg" className="bg-dark" variant="dark" fixed="top">
        <Navbar.Brand to="/home" className='ps-5'>Leetcode Pro</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/home" className="nav-link">Home</NavLink>
            <NavLink to="/about" className="nav-link">About Us</NavLink>
            <NavLink to="/login" className="nav-link">Login</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Carousel style={{ height: carouselHeight }}>
        <Carousel.Item style={{ height: carouselHeight }}>
          <img
            className="d-block w-100"
            src={BannerImage1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: carouselHeight }}>
          <img
            className="d-block w-100"
            src={BannerImage2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: carouselHeight }}>
          <img
            className="d-block w-100"
            src={BannerImage3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div style={{ backgroundColor: 'blue' }}>
        {/* Content of the last div */}
        <p>This is the last div with a blue background.</p>
      </div>
    </>
  );
}

export default CollapsibleExample;
