import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CategoryCardComponent = ({ category, idx }) => {
  const images = [
    "/images/MagneticCaseIPhone.jpg",
    "/images/Monitors.jpg",
    "/images/speakers.jpg",
    "/images/KeratinHairMask.jpg",
    "/images/AthleticShoes.jpg",
    "/images/SportsGlass.jpg",
    "/images/MenVintage.jpg",
    "/images/WirelessMagneticCharger.jpg",
    "/images/DualMonitorArm.jpg",
    "/images/Asus.jpg",
    

  ];
  return (
    <Card>
      <Card.Img crossorigin="anonymous" variant="top" src={images[idx]} />
      <Card.Body>
        <Card.Title>{category}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <LinkContainer to="/product-list">
          <Button variant="primary">Go to the Category</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};

export default CategoryCardComponent;