document.addEventListener("DOMContentLoaded", function() {
  console.log("ready!");

  var eleProductStatus = document.getElementById("productStatus");
  var eleProductTrackingId = document.getElementById("productTrackingId");
  var eleProductImage = document.getElementById("productImage");
  var eleProductBrandName = document.getElementById("productBrandName");
  var eleProductName = document.getElementById("productName");
  var eleProductId = document.getElementById("productId");
  var eleProductReview = document.getElementById("productReview");
  var eleProductQtyPrice = document.getElementById("productQtyPrice");
  var eleProductPromoMessage = document.getElementById("productPromoMessage");
  var eleProductAvailabilityMessage = document.getElementById(
    "productAvailabilityMessage"
  );

  function getProductDetails() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://fakestoreapi.com/products/1", true);
    xhr.onload = function() {
      var res = JSON.parse(xhr.responseText);
      console.log("res: ", res);
      eleProductImage.src = res.image;
      eleProductBrandName.innerHTML = res.category;
      eleProductName.innerHTML = res.title;
      eleProductId.innerHTML = res.description;
      eleProductReview.innerHTML = "Write a Review";
      eleProductAvailabilityMessage.innerHTML = "Only 1 left in stock";
      eleProductQtyPrice.innerHTML = res.price;
      eleProductPromoMessage.innerHTML = "10% off with SBI Credit Cards";
    };
    xhr.send();
  }

  getProductDetails();
});
