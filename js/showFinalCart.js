
/**
 * function to present the products in the shopping cart 
 * @returns {final shopping cart med html elements}
 *
 */

function renderFinalCart(){

    showEmptyCartMssg();
    //displayMssgNotLoggedIn();
    let checkoutCart = shoppingCart;
    let finalShoppingCart = "";
    let finalTotalToPay = 0;
  for(var i in checkoutCart){
    let finalPrdId = checkoutCart[i].id;
    let finalPrdName = checkoutCart[i].title;
    let finalPrdPrice = Number(checkoutCart[i].price).toFixed(2).replace(".", ",");
    let finalPrdAmount = checkoutCart[i].amount;
    let finalTotalPrice = Number(checkoutCart[i].price * checkoutCart[i].amount).toFixed(2).replace(".", ",");
    finalTotalToPay += checkoutCart[i].price * checkoutCart[i].amount;
    finalShoppingCart += "<tr>"
    +"<td>" + finalPrdName + "</td>"
    +"<td>" + finalPrdPrice + " kr</td>"
    + "<td><div class='input-group'><button class='minus-prd  btn btn-primary' data-id='" + finalPrdId + "'>-</button>"
    + "<input class='item-count form-control' data-id='" +  finalPrdId + "' value='" + finalPrdAmount + "'readonly>"
    + "<button class='plus-prd btn btn-primary input-group-addon' data-id='" +  finalPrdId + "'>+</button></div></td>"
    + "<td>" + finalTotalPrice+ " kr</td>" 
    + "<td><button class='delete-prd' data-id='" + finalPrdId + "'><img src='images/trash.svg' alt='remove' fill='red'></img></button></td>"
    +  "</tr>";
  }
  
  $('#FinalTotalPay').html(Number(finalTotalToPay).toFixed(2).replace(".", ",") +" kr");
    
    return finalShoppingCart;
  }

  $('#finalInfo').html(renderFinalCart())



/**
 * Functions to add or eliminate products in the cart
 * @param {string product name} prdName 
 */


  function removeOne(productId) {
    for(var product in shoppingCart){
      if(Number(shoppingCart[product].id) === productId){
        shoppingCart[product].amount --;
        if(shoppingCart[product].amount === 0){
          shoppingCart.splice(product, 1);
         }
         break;
      }
    }
      saveCart();  
      $('#finalInfo').html(renderFinalCart());
      $('#counter').html(getTotalAmountProducts());
  
  }
  
  function addOne(productId){
    for(var product in shoppingCart){
      if(Number(shoppingCart[product].id) === productId){
        shoppingCart[product].amount ++;
      }
    }
      saveCart();
      $('#finalInfo').html(renderFinalCart());
      $('#counter').html(getTotalAmountProducts());
  }
  
  function discard(productId){
    for(var product in shoppingCart){
      if(Number(shoppingCart[product].id) === productId){
        shoppingCart.splice(product, 1);
        showEmptyCartMssg()
        break;
        }
     }
    saveCart();
    $('#finalInfo').html(renderFinalCart());
    $('#counter').html(getTotalAmountProducts());
   }
  

   /**
    * Event handlers on the buttons
    */
  
  $('#finalInfo').on("click", ".minus-prd",(function(){
    let prdId = $(this).data('id');
    if($(this).next().val()>1)
    removeOne(prdId);
  
  }));
  
  $('#finalInfo').on("click", ".plus-prd",(function(){
    let prdId = $(this).data('id');
   addOne(prdId);
  }));
  
  $('#finalInfo').on("click", ".delete-prd",(function(){
    let prdId = $(this).data('id');
    discard(prdId);
  }))

  /**
   * Function to show message that the cart is empty
   */

 function showEmptyCartMssg(){
    if(shoppingCart.length === 0){
      $('#containerKassa').html('<div class="col-sm-12 empty-cart-cls text-center"> <img src="https://i.imgur.com/dCdflKN.png" width="130" height="130" class="img-fluid mb-4 mr-3"> '+
      '<h3><strong>Din varukorg är tom</strong></h3>'+
      '<a href="index.html" class="btn btn-primary cart-btn-transform m-3">Fortsätt handla</a>'+
  '</div>')
    }
  }

/**
 * Function to alert the user about emptying the cart
 */

 var modalConfirm = function(response){
  
  $("#clear").on("click", function(){
    $("#alert").modal('show');
  });

  $("#modal-btn-yes").on("click", function(){
    response(true);
    $("#alert").modal('hide');
  });
  
  $("#modal-btn-no").on("click", function(){
    response(false);
    $("#alert").modal('hide');
  });
};

modalConfirm(function(confirm){
  if(confirm){
      emptyCart();
      $('#counter').html(getTotalAmountProducts());
      showEmptyCartMssg();
  }
});


  //ADDED BY BACKEND SIMULATION
  let getProfileDetails=()=>{
    if(localStorage.getItem("PROFILE")!=null){
      let profile=JSON.parse(localStorage.getItem("PROFILE"))
      $('#clientsFirstName').val(profile.name)
      $('#clientsLastName').val(profile.lastname)
      $('#clientsPhone').val(profile.telephone)
      $('#clientsStreet').val(profile.address)
      $('#clientsCity').val(profile.postort)
      $('#clientsZipCode').val(profile.postnummer)
      $('#clientsMail').val(profile.email)
    } else {
      $('#confirmbtn').prop('disabled', true); 
      $('#logInPromptSpace').html("<button type=\"button\" class=\"btn btn-primary float-right\" id=\"logInBtn\"  onclick=\"document.location='loggin.html'\" >Logga in / Registrera dig </button>");
    }
  }
getProfileDetails();

/**
 * Function to ask the user to log in to continue with the purchase
 */

function displayMssgNotLoggedIn(){
  if(localStorage.getItem("PROFILE") == null) {
    $('#containerKassa').html('<div class="col-sm-12 text center"><h3><strong>Var god logga in för att slutföra din beställning</strong></h3>'+
    '<a href="loggin.html" class="btn btn-primary m-3">Logga in</a>'+
    '</div>')
  }
}

/**
 * Function to inform the user that the order has been sent. 
 */

function displayConfirmationMsgg(){
$('#containerKassa').html('<div class="col-sm-12 empty-cart-cls text-center">' +
'<h3><strong>Din beställning har skickats. Tack för ditt köp!</strong></strong></h3>'+
'<a href="index.html" class="btn btn-primary cart-btn-transform m-3">Fortsätt handla</a>'+
'</div>');

}

let bekräftaKassa=()=>{
  placeOrder();   
  emptyCart();
  postShoppingCart()
  displayConfirmationMsgg();
  localStorage.removeItem("OrderDetails");
  
}
 let postShoppingCart=()=>{
   let orderDetails=JSON.parse(localStorage.getItem('OrderDetails'));

    let customer=JSON.parse(localStorage.getItem("PROFILE"))
console.log(orderDetails);
    fetch("https://hakimssuperserver.herokuapp.com/orders/add/"+customer.customerID+"",
    { method:"POST",
    headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json'},
      body:JSON.stringify(orderDetails)}).
      then(resp=>resp.json()).
      then(json=>console.log(json))
    localStorage.removeItem("OrderDetails");
  
 }
 $('#confirmbtn').on('click',(e)=>{e.preventDefault();bekräftaKassa()});

