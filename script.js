document.addEventListener("DOMContentLoaded", function() {
  console.log("ready!");

  var eleProductStatus = document.getElementById("productStatus");
  var eleProductTrackingId = document.getElementById("productTrackingId");
  var eleProductImage = document.getElementById("productImage");
  var eleProductBrandName = document.getElementById("productBrandName");
  var eleProductName = document.getElementById("productName");
  var eleProductId = document.getElementById("productId");
  var eleProductQtyPrice = document.getElementById("productQtyPrice");

  function getProductDetails() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://fakestoreapi.com/products/1", true);
    xhr.onload = function() {
      var res = JSON.parse(xhr.responseText);
      console.log("res: ", res);
      eleProductImage.src = res.image;
      // eleProductBrandName.innerHTML = res.category;
      eleProductName.innerHTML = res.title;
      eleProductId.innerHTML = res.description;
      eleProductQtyPrice.innerHTML = res.price;
    };
    xhr.send();
  }

  getProductDetails();
});
