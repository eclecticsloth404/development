
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// TODO: create a component that displays a single bakery item
// function BakeryItem(props) {
//     if (props.item.count > 0) {
//         return (
//             <div className="BakeryItem">
//                 <p>{props.item.name}</p>
//                 <p>{props.item.description}</p>
//                 <p>{props.item.price}</p>
//                 <img className="BakeryImage" src={props.item.image}/>
//                 <br></br>
//                 <button onClick={() => {props.handleClick(props.item)}}>Add to Cart</button>
//                 <button onClick={() => {props.removeFromCart(props.item)}}>Remove from Cart</button>
//             </div>
//         );
//     }
//     return (
//         <div className="BakeryItem">
//             <p>{props.item.name}</p>
//             <p>{props.item.description}</p>
//             <p>{props.item.price}</p>
//             <img className="BakeryImage" src={props.item.image}/>
//             <br></br>
//             <button onClick={() => {props.handleClick(props.item)}}>Add to Cart</button>
//         </div>
// 	);
// }

function BakeryItem(props) {
    if (props.item.count > 0) {
        return (
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
        );
    }
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.item.image} />
            <Card.Body>
                <Card.Title>{props.item.name}</Card.Title>
                <Card.Text>
                    <p>
                    Some quick example text to build on the card title and make up the
          bulk of the card's content.
                    </p>
                    <p>
                        length: {props.item.length}
                    </p>
        </Card.Text>
        <Button 
          variant="primary" 
          onClick={() => {props.handleClick(props.item)}}>
            Add To Cart
        </Button>
      </Card.Body>
    </Card>
	);
}

export default BakeryItem;
