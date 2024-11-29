import { Container, Dropdown, Image, Nav, Navbar } from "react-bootstrap";
import { BellFill, List, Search } from "react-bootstrap-icons";

const TopBar = () => {
  return (
    <Navbar expand="lg" variant="dark" className="mb-4">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src="assets/img/netflix_logo.png"
            height="40"
            alt="netflix logo"
          />
        </Navbar.Brand>
        <Dropdown className="d-md-none">
          <Dropdown.Toggle variant="outline-light" className="text-white fs-5">
            <List size={20} color="white" />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Home</Dropdown.Item>
            <Dropdown.Item href="#">TV Shows</Dropdown.Item>
            <Dropdown.Item href="#">Movies</Dropdown.Item>
            <Dropdown.Item href="#">Recently Added</Dropdown.Item>
            <Dropdown.Item href="#">My List</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav>
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#" className="active">
              TV Shows
            </Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">Recently Added</Nav.Link>
            <Nav.Link href="#">My List</Nav.Link>
          </Nav>
          <div>
            <span>
              <Search size={20} color="white" />
            </span>
            <span>KIDS</span>
            <span>
              <BellFill size={20} color="white" />
            </span>
            <Dropdown align="end">
              <Dropdown.Toggle variant="link">
                <Image src="./assets/img/avatar.png" height="30" alt="Avatar" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Profile</Dropdown.Item>
                <Dropdown.Item href="#">Settings</Dropdown.Item>
                <Dropdown.Item href="#">Log Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
