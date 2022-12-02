import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js";
import Filter from "./components/Filt.js"
import Cart from "./components/Cart.js"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
// import 'bootstrap/dist/css/bootstrap.css';



/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const [cart, nextCart] = useState([]);
  const [total, nextTotal] = useState(0);
  const [filteredItems, setFilteredItems] = useState(bakeryData);
  const [numFilters, nextFilters] = useState(0);

  function addToCart(item) {
    item.count += 1;
    if(cart.includes(item)) {
      nextCart(cart);
    } else {
      nextCart([...cart, item]);
    }
  }

  function removeFromCart(item) {
    item.count -= 1;
    const newCart = cart.filter((x) => x !== item)
    if(item.count === 0) {
      nextCart(newCart);
    } else {
      nextCart([...newCart, item]);
    }
    updateTotal(item, false)
  }

  function updateTotal(item, addP) {
    var newTotal = parseFloat(total);
    if(addP) {
      newTotal += parseFloat(item.price);
    } else {
      newTotal -= parseFloat(item.price);
    }
    nextTotal(newTotal.toFixed(2));
  }

  function handleClick(item) {
    addToCart(item);
    updateTotal(item, true);
  }

  function filterColor(color) {
    var filtered = []
    if(document.getElementById(color).checked) {
      if(numFilters > 0) {
        filtered = filteredItems.concat(bakeryData.filter(item => item.color === color));
      } else {
        filtered = filteredItems.filter(item => item.color === color);
      }
      nextFilters(numFilters + 1);
    } else {
      if(numFilters > 1) {
        filtered = filteredItems.filter(item => item.color !== color);
      } else {
        filtered = bakeryData;
      }
      nextFilters(numFilters - 1);
    }
    setFilteredItems(filtered);
  }

  function filterLength(len) {
    var filtered = []
    if(document.getElementById(len).checked) {
      if(numFilters > 0) {
        filtered = filteredItems.concat(bakeryData.filter(item => item.sizerange === len));
      } else {
        filtered = filteredItems.filter(item => item.sizerange === len);
      }
      nextFilters(numFilters + 1);
    } else {
      if(numFilters > 1) {
        filtered = filteredItems.filter(item => item.sizerange !== len);
      } else {
        filtered = bakeryData;
      }
      nextFilters(numFilters - 1);
    }
    setFilteredItems(filtered);
  }

  function sortPrice(isHigh) {
    const sorted = [...filteredItems]; // copy of current items
    if(isHigh) {
      sorted.sort((a, b) => (a.price - b.price));
    } else {
      sorted.sort((a, b) => (b.price - a.price));
    }
    setFilteredItems(sorted);
  }


  return (
    <div className="App">
      <img src="./images/logo.png"/>
      <div className="grid-container">
        <div className="item1">
          Sort or Filter Items:
        </div>
        <div className="item2">
          <Dropdown>
            <Dropdown.Toggle variant="success" size="lg" id="dropdown-basic">
              Sort by
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={()=>sortPrice(true)}>Price Low to High</Dropdown.Item>
              <Dropdown.Item onClick={()=>sortPrice(false)}>Price High to Low</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="item3">
          <Filter cat={'Size Range'} arr={['Tall', 'Short', 'Main collection', 'Plus']} f={filterLength}/>
        </div>  
        <div className="item4">
          <Filter cat={'Color'} arr={['Black', 'Blue', 'Green', 'Orange']} f={filterColor}/>
        </div>
      </div>
      <div>
        <Container className="my-container">
          <Row>
            <Col xs={9}>
              <div>
                <Row xs={1} md={2} lg={3} className="g-4">
                  {filteredItems.map((item) => (
                  <Col>
                    <BakeryItem item={item} handleClick={handleClick} removeFromCart={removeFromCart}/>
                  </Col>
                  ))}
                </Row>
              </div>
            </Col>
            <Col>
              <Cart cart={cart} total={total} />
            </Col>
          </Row>
        </Container> 
      </div>
    </div>
  );
}

export default App;
