import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function Header() {
  return (
    <Container>
      <Row>
        {/* Logo goes here */}
        <Col md={2}>
          <Image
            fluid
            roundedCircle
            src="https://e7.pngegg.com/pngimages/956/295/png-clipart-mr-pickles-season-1-mr-pickles-season-2-loose-tooth-pickled-cucumber-animation-others-television-food-thumbnail.png"
            alt="Mr Pickles logo"
          />
        </Col>
        {/* Header text goes here */}
        <Col md={2}>
          <h1>This is the header</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
