import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import BannerImage1 from '../Assets/banner1.jpg';
import BannerImage2 from '../Assets/banner2.jpg';
import BannerImage3 from '../Assets/banner3.jpg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from './Footer';

function Home() {
  const carouselHeight = '700px';

  return (
    <>
        <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh' }}>

      <Navbar collapseOnSelect expand="lg" className="bg-dark" variant="dark" fixed="top">
        <Navbar.Brand to="/home" className='ps-5'>Leetcode Pro</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/about" className="nav-link">About Us</NavLink>
            <NavLink to="/login" className="nav-link">Login</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Carousel style={{ height: carouselHeight, marginBottom: '25px' }}>
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

      <div style={{ textAlign: 'center', margin: '20px', padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '8px',color:'black' }}>
        <h2>Welcome to Leetcode Pro!</h2>
        <p>
          Leetcode Pro is your quick shortcut for practicing Data Structures and Algorithms (DSA),
          solving coding questions, understanding Design Principles, and mastering Database Management Systems (DBMS)
          in an engaging quiz format.
        </p>
      </div>
      <div className="d-flex justify-content-around">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={BannerImage3} />
          <Card.Body>
            <Card.Title>Programing</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={BannerImage3} />
          <Card.Body>
            <Card.Title>Data Structures</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={BannerImage3} />
          <Card.Body>
            <Card.Title>Design Principle</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>

      <Footer />
      </div>
    </>
  );
}

export default Home;
