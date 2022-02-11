var products = [
  { id: 101, name: "Basket Ball", image: "basketball.png", price: 150 },
  { id: 102, name: "Football", image: "football.png", price: 120 },
  { id: 103, name: "Soccer", image: "soccer.png", price: 110 },
  { id: 104, name: "Table Tennis", image: "table-tennis.png", price: 130 },
  { id: 105, name: "Tennis", image: "tennis.png", price: 100 },
];

var arrayCart = [];
var qtyVal=1;

$("#products").on("click", ".add-to-cart", function () {
  var cartId = $(this).data("pid");
  var arrVal = [];
  arrVal.push(cartId);
  for(var i=0; i<arrVal.length; i++)
  {
    if(cartId==arrVal[i])
    {
      console.log("Values matched");
      $(".qty").val(qtyVal+1);
    }
  }
  
  console.log("updated value of qty is : "+ qtyVal);
  for (var i = 0; i < products.length; i++) {
    if (cartId == products[i].id) 
    {
      arrayCart.push(products[i]);
      cartTable();
    }
  }
  console.log(arrayCart);
  console.log("Fetching the values " + cartId);
});

function cartTable() {

  var cartable =
    "<table><tr><th>ID</th><th>Name</th><th>Image</th><th>Price</th><th>Quantity</th></tr>";
  console.log("check here"+arrayCart.length);
  for (var i = 0; i < arrayCart.length; i++) {
    cartable +=
      "<tr><td>" +
      arrayCart[i].id +
      "</td><td>" +
      arrayCart[i].name +
      "</td><td>" +
      arrayCart[i].image +
      "</td><td>" +
      arrayCart[i].price +
      "</td><td><input type='number' data-mid='txtUpdate' onchange='modifyValue()' value='1'</td></tr>";
  }
  cartable += "</table><a href='#' id='delCart'>Delete Cart</a>";
  $("#cart").html(cartable);
  $("#delCart").on("click",function(){
    arrayCart.length=0;
    cartTable();
  })
}

function display(items) {
  var productsList = "";
  for (var i = 0; i < items.length; i++) {
    productsList +=
      '<div class="product">\
    <img src="images/' +
      products[i].image +
      '">\
    <h3 class="title"><a href="#">Product' +
      products[i].id +
      "</a></h3>\
    <span>Price: " +
      products[i].price +
      '</span>\
    <a class="add-to-cart" href="#" data-pid=' +
      products[i].id +
      ">Add To Cart</a>\
    </div>";
  }
  $("#products").html(productsList);
}
$(document).ready(function () {
  display(products);
  cartTable(arrayCart);
});
