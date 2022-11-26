import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function GridExample(props) {
  return (
    <Row xs={1} md={4} className="g-4">
      {components.map((_, idx) => (
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.item.image} />
            <Card.Body>
              <Card.Title>{props.item.name}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button 
              variant="primary" 
              onClick={() => {props.handleClick(props.item)}}>
                Add To Cart
              </Button>
              <Button 
              variant="primary" 
              onClick={() => {props.removeFromCart(props.item)}}>
                Remove From Cart
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GridExample;