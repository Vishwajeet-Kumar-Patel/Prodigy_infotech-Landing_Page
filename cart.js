// Remove button event listener
var removeButtons = document.querySelectorAll('.remove-btn');
removeButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    var cartItem = button.parentElement.parentElement;
    cartItem.remove();
    checkCartEmpty();
  });
});

// Check if cart is empty
function checkCartEmpty() {
  var cartItems = document.querySelectorAll('.cart-item');
  var paymentBtn = document.getElementById('payment.html');
  
  if (cartItems.length === 0) {
    payment.html.disabled = true;
  } else {
    payment.html.disabled = false;
  }
}
