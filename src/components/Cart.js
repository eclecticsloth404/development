import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
function Cart(props) {
  return (
    <div>
      <h2>Cart</h2>
      <Card style={{ width: '18rem' }}>
        <ListGroup variant="flush">
          {props.cart.map((item) => (
            <ListGroup.Item>{item.name + ' x' + item.count}</ListGroup.Item>
          ))}
          <ListGroup.Item>Total: {props.total}</ListGroup.Item>
        </ListGroup>
      </Card>
      </div>
  );
}

export default Cart;
