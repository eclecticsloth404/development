
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// TODO: create a component that displays a single bakery item

function Product(props) {
    if (props.item.count > 0) {
        return (
        <Card className="CardStyle">
            <Card.Img variant="top" src={props.item.image} />
            <Card.Body>
                <Card.Title>{props.item.name}</Card.Title>
                <Card.Text>
                    <p>{props.item.description}</p>
                    <p>Size range: {props.item.sizerange}</p>
                    <p>price: {props.item.price}</p>
                    <div className="card-button-container">
                    <div className="item1">
                        <Button className="button-font" variant="primary" onClick={() => {props.handleClick(props.item)}}>
                            Add To Cart
                        </Button>
                    </div>
                    <div className="item2">
                        <Button className="button-font" variant="primary" onClick={() => {props.removeFromCart(props.item)}}>
                            Remove 1 From Cart
                        </Button>
                    </div>
                </div>
                </Card.Text>
            </Card.Body>
        </Card>
        );
    }
    return (
        <Card className="CardStyle">
            <Card.Img variant="top" src={props.item.image} />
            <Card.Body>
                <Card.Title>{props.item.name}</Card.Title>
                <Card.Text>
                    <p>{props.item.description}</p>
                    <p>Size range: {props.item.sizerange}</p>
                    <p>price: {props.item.price}</p>
                    <div className="card-button-container">
                    <div className="item1">
                        <Button className="button-font" variant="primary" onClick={() => {props.handleClick(props.item)}}>
                            Add To Cart
                        </Button>
                    </div>
                    <div className="item2">
                        <Button className="button-font disabled" variant="primary" disabled>
                            Remove 1 From Cart
                        </Button>
                    </div>
                </div>
                </Card.Text>
            </Card.Body>
        </Card>
        );
}
export default Product;
