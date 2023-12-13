import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      
        <Navbar className="navBar" bg="dark" data-bs-theme="white">
          <Container className="navContainer">
            <span className="navElement">
              <Link to="/">Homepage</Link>
            </span>
            {/* <Navbar.Brand href="#home">
              <Link to="/">home</Link>
            </Navbar.Brand> */}
            <Nav className="navElements">
              <span className="navElement">
                <Link to="/Form">Form</Link>
              </span>
              <span className="navElement">
                <Link to="/Donor">Donor</Link>
              </span>          
            </Nav>
          </Container>
        </Navbar>
      
    </>
  );
};

export default NavBar;

