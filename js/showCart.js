
let shoppingCart = [];

let productsinOrderDetails = [];


let orderDetails = productsinOrderDetails; 

function ProductInOrder(productID, productPrice){
  this.productID = productID
  this.productPrice = productPrice
}


function Product(id, title, description, price, category, amount) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.category = category;
    this.amount = amount;
    
  }

  function placeOrder(){
    let productInShoppingCartID
    let productInShoppingCartPrice
    let numberOfItems
    for(var item in shoppingCart){
      productInShoppingCartID = shoppingCart[item].id
      productInShoppingCartPrice = shoppingCart[item].price
      numberOfItems = shoppingCart[item].amount
      for(i= 0; i < numberOfItems; i++){
        let productInOrder = new ProductInOrder(productInShoppingCartID, productInShoppingCartPrice)
        productsinOrderDetails.push(productInOrder);
        saveOrderDetails();
    }
  }
}
  
  function saveCart(){
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
    
  }
  
  function loadCart() {
    shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    $('#counter').html(getTotalAmountProducts());
  
  }
  if (localStorage.getItem("shoppingCart") != null) {
    loadCart();
  }

  function saveOrderDetails(){
    localStorage.setItem('OrderDetails', JSON.stringify(orderDetails));
    
  }
  
  function loadOrderDetails() {
    orderDetails = JSON.parse(localStorage.getItem('OrderDetails'));
 
  
  }
  if (localStorage.getItem("OrderDetails") != null) {
    loadOrderDetails();
  }


  function emptyCart(){
    shoppingCart= [];
    saveCart();
    //BACKEND SIMULATOR ADDED
    $('#finalInfo').hide();
    $('#FinalTotalPay').hide();
    
  }

  /**
   * 
   * @param {event on click} e 
   * @returns goes out of the loop if the product already exists, just increases the amount of that product in the cart
   */

 function AddProduct(e){

    let productID =  (e.getAttribute('productID'));
    let productTitle = (e.getAttribute('productTitle'));
    let productDes = (e.getAttribute('productDescription'));
    let productPrice = (e.getAttribute('productPrice'));
    let productCat = (e.getAttribute('productCategory'));
    let productAmount = (e.getAttribute('productAmount'));
   for(var item in shoppingCart){
        if(shoppingCart[item].id === productID){
            shoppingCart[item].amount ++;
            saveCart();
            return;
            }
        }
    let newProductInCart = new Product(productID, productTitle, productDes, productPrice, productCat, productAmount);
    shoppingCart.push(newProductInCart);
    saveCart();
    }

/**
 * 
 * @returns total amout of products in cart
 */


    function getTotalAmountProducts(){
        var totalAmountProducts = 0;
        for(var item in shoppingCart){
          totalAmountProducts += Number(shoppingCart[item].amount);
        }
      
       if(totalAmountProducts===0){
       $('#counter').hide();
       $('#counter-kassa-sida').hide();
            
       }
       else{
        $('#counter').show();
        $('#counter').html(totalAmountProducts);
       }
        return totalAmountProducts;
      }


/**
 * Replaces the button with minusplus buttons
 * @param {event} e 
 */
let replaceButton=(e)=>{
  let productId=e.getAttribute('productID');
  $.each(shoppingCart,(i,product)=>{
    if(productId===product.id){
      let newButtons=minusPlus(product)
      $(e).replaceWith(newButtons)
      
    }
  })
  

}
/**
 * to render the minus-plus buttons
 * @param {product object} product 
 * @returns 
 */
let minusPlus= (product)=>{
  return "<div class='input-group'><button class='minus-prd  btn btn-primary' onclick='addOrRest(this)' data-id='" + product.id + "'>-</button>"
+ "<input class=' text-center item-count form-control bg-white' style='border:0;' data-id='" +  product.id + "' value='" + product.amount + "'readonly>"
+ "<button class='plus-prd btn btn-primary input-group-addon' onclick='addOrRest(this)' data-id='" +  product.id + "'>+</button></div>"}

/**
 * to add or rest when plus or minus buttons are clicked
 * @param {event} e 
 */
let addOrRest=(e)=>{
  let productId=e.getAttribute('data-id');
  let isAdd=$(e).hasClass('plus-prd');
  console.log($(e))
  $.each(shoppingCart,(i,product)=>{
    if(product.id==productId)
    if(isAdd)
      product.amount=operationAdd(product.amount);
      else product.amount=operationRest(product.amount);
    })
    if(isAdd){
    let amount=$(e).prev().val();
    $(e).prev().val(operationAdd(Number(amount)));
    }
    else{
    $(e).next().val(operationRest(Number($(e).next().val())));
    }
     
      $('#finalInfo').html(renderFinalCart());
      $('#counter').html(getTotalAmountProducts());
      $('#counter-sidebar').html(getTotalAmountProducts());
      saveCart()
}
/**
 * takes a number and returns the sum
 * @param {number to sum} a 
 * @returns 
 */
let operationAdd=(a)=>{
  a++;
  return a;
}
/**
 * takes a number and rests 1, doesnt rest further than 1
 * @param {number to rest} a 
 * @returns 
 */
let operationRest=(a)=>{
  if(a>1)
    a--;
  return a;
}
$('#counter-sidebar').text($('#counter').text());
$('#counter-kassa-sida').text($('#counter').text());
