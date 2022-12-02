Describe the goal of the application and value to a user:
- This web app is a storefront for a denim store. Users can add items to their cart with an updated total, filter items by color and size range, and sort by price.
Link to your deployed web application running online
- https://eclecticsloth404.github.io/development/
Explain the organization of your Components, and the props and state related to them
- I have 3 components: Cart, Filter, and Product
    - The cart component generates the cart and modifies the cart state as items are added or removed from the cart. 
    - The filter component generates the filter menus for each filter and modifies the state of the amount of filters and         the state of items displayed on the page. It takes in the list of filters to generate and the function that will be         called to update the state based on which filter it is.
    - The product component generates the styling for the actual items in the json file. It takes in the item, and functions that happen on press for the buttons that are generated.
