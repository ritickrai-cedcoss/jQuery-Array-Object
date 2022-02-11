var products = [
  { id: 101, name: "Basket Ball", image: "basketball.png", price: 150 },
  { id: 102, name: "Football", image: "football.png", price: 120 },
  { id: 103, name: "Soccer", image: "soccer.png", price: 110 },
  { id: 104, name: "Table Tennis", image: "table-tennis.png", price: 130 },
  { id: 105, name: "Tennis", image: "tennis.png", price: 100 },
  { id: 103, name: "Soccer", image: "soccer.png", price: 110 },
  { id: 104, name: "Table Tennis", image: "table-tennis.png", price: 130 },
  { id: 105, name: "Tennis", image: "tennis.png", price: 100 },
];


$(document).ready(function(){
   var productsList = '';
   
   for(var i=0; i<products.length; i++)
   {
    productsList +='<div class="product">\
    <img src="images/'+products[i].image+'">\
    <h3 class="title"><a href="#">Product'+products[i].id+'</a></h3>\
    <span>Price: '+products[i].price+'</span>\
    <a class="add-to-cart" href="#" data-pid='+products[i].id+'>Add To Cart</a>\
  </div>'
   }

   $("#products").html(productsList);

});