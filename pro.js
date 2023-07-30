// Add to cart button event listener
var addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    var productInfo = button.parentElement;
    var productName = productInfo.querySelector('h3').textContent;
    var productPrice = productInfo.querySelector('p').textContent;
    var productImage = productInfo.parentElement.querySelector('img').src;

    addToCart(productName, productPrice, productImage);
  });
});

// Add item to cart
function addToCart(name, price, image) {
  // Implement your own logic to add the item to the cart
  // You can use localStorage, session storage, or send the data to the server
  console.log('Item added to cart:', name, price, image);
}
