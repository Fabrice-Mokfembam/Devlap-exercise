

$(document).ready(function() {
 
  let main_img = $("#big-image");
  let img = $(".img");

  img.each(function () {
    $(this).on("click", function () {
      main_img.attr("src", $(this).attr("src"));
    });
  });


  $('.number-products').hide();

  // Handle click event for "add to cart" buttons
  $('.each_product button').click(function() {
    // Get the product details
    var productContainer = $(this).closest('.each_product');
    var productName = productContainer.find('.product-name').text();
    var productAmount = productContainer.find('.amount').text();
    var productImgSrc = productContainer.find('img').attr('src');

    // Create the cart item HTML
    var cartItemHtml = `
      <div class="each-cart-content">
        <div class="wrapper">
          <div class="cart-img">
            <img src="${productImgSrc}" alt="">
          </div>
          <div class="credentials">
            <div class="amount em">${productAmount}</div>
            <div class="name">${productName}</div>
          </div>
        </div>
        <div class="btn">
          remove
        </div>
      </div>
    `;

    // Append the cart item to the cart section
    $('.cart_container').append(cartItemHtml);

    // Show the cart section and hide the "cart is empty" message
    $('.number-products').show();
    $('.number-products').text($('.each-cart-content').length + ' items in cart');
  });
    
 $('.cart_container').on('click', '.btn', function() {
    // Remove the corresponding cart item
    $(this).closest('.each-cart-content').remove();

    // Update the item count and show/hide "cart is empty" message
    var itemCount = $('.each-cart-content').length;
    if (itemCount === 0) {
      $('.number-products').hide();
    } else {
      $('.number-products').text(itemCount + ' items in cart');
    }
  });
});