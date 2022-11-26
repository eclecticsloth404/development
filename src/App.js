import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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
    const newCart = cart.filter((x) => x != item)
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
    var filtered = bakeryData.filter(item => item.color === color);
    setFilteredItems(filtered);
  }

  function resetFilter() {
    setFilteredItems(bakeryData);
  }

  function sortPrice() {
    const sorted = [...filteredItems]; // copy of current items
    sorted.sort((a, b) => (a.price - b.price)); //sort copy
    setFilteredItems(sorted);
  }

  var componentArray = [];


  return (
    <div className="App">
        <img src="./images/logo.png"/> {/* TODO: personalize your bakery (if you want) */}
      
      
      {componentArray = filteredItems.map((item) => (
        <BakeryItem item={item} handleClick={handleClick} removeFromCart={removeFromCart}/>
      ))}
      

      <button onClick={() => {filterColor("blue")}}>Filter blue</button>
      <button onClick={() => {filterColor("black")}}>Filter black</button>
      <button onClick={() => {resetFilter()}}>reset</button>
      <button onClick={() => {sortPrice()}}>sort</button>

      <div>
        <h2>Cart</h2>
        {cart.map((item) => (<p>{item.name + ' x' + item.count}</p>))}
        <p>Total: {total}</p>
      </div>
    </div>
  );
}

export default App;
