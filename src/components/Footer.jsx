import { Col, Container, Row } from "react-bootstrap";
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <Container fluid className="text-light mt-5 py-4 d-flex">
      <Row className="justify-content-start">
        <Col xs={12} md={6}>
          <Facebook size={30} />
          <Instagram size={30} />
          <Twitter size={30} />
          <Youtube size={30} />
        </Col>
      </Row>
      <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4">
        <Col>
          <p>
            <a href="#" className="text-light text-decoration-none">
              Audio and Subtitles
            </a>
          </p>
          <p>
            <a href="#" className="text-light text-decoration-none">
              Media Center
            </a>
          </p>
          <p>
            <a href="#" className="text-light text-decoration-none">
              Privacy
            </a>
          </p>
          <p>
            <a href="#" className="text-light text-decoration-none">
              Contact Us
            </a>
          </p>
        </Col>
        <Col className="mb-3">
          <p>
            <a href="#" className="text-light text-decoration-none">
              Audio Description
            </a>
          </p>
          <p>
            <a href="#" className="text-light text-decoration-none">
              Investor Relations
            </a>
          </p>
          <p>
            <a href="#" className="text-light text-decoration-none">
              Legal Notices
            </a>
          </p>
        </Col>
        <Col className="mb-3">
          <p>
            <a href="#" className="text-light text-decoration-none">
              Help Center
            </a>
          </p>
          <p>
            <a href="#" className="text-light text-decoration-none">
              Jobs
            </a>
          </p>
          <p>
            <a href="#" className="text-secondary text-decoration-none">
              Cookie Preferences
            </a>
          </p>
        </Col>
        <Col className="mb-3">
          <p>
            <a href="#" className="text-secondary text-decoration-none">
              Gift Cards
            </a>
          </p>
          <p>
            <a href="#" className="text-secondary text-decoration-none">
              Terms of Use
            </a>
          </p>
          <p>
            <a href="#" className="text-secondary text-decoration-none">
              Corporate Information
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default Footer;
