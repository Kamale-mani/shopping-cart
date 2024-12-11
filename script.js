
$(document).ready(function () {
  let cart = [];
  const cartCount = $('.cart-count');
  const cartDetails = $('.cart-details');
  const cartItems = $('.cart-items');
  const totalAmount = $('.total span');

  // Add to Cart functionality
  $('.add-to-cart').click(function () {
    const product = $(this).closest('.product');
    const name = product.data('name');
    const price = parseFloat(product.data('price'));
    const image = product.data('image');

    cart.push({ name, price, image });
    updateCart();
    $(this).text('Added').css({ background: 'green' });
  });

  // Show/Hide Cart
  $('.cart-icon').click(function () {
    cartDetails.fadeToggle();
  });

  // Close Cart
  $('.close-cart').click(function () {
    cartDetails.fadeOut();
  });

  // Update Cart
  function updateCart() {
    cartCount.text(cart.length);
    cartItems.empty();
    let total = 0;

    cart.forEach(item => {
      cartItems.append(`
        <li>
          <img src="${item.image}" alt="${item.name}">
          ${item.name} - $${item.price}
        </li>
      `);
      total += item.price;
    });

    totalAmount.text(total);
  }
});
