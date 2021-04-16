
/**
 * function to present the products in the shopping cart 
 * @returns {final shopping cart med html elements}
 *
 */

function renderFinalCart(){

    showEmptyCartMssg();
    displayMssgNotLoggedIn();
    let checkoutCart = shoppingCart;
    let finalShoppingCart = "";
    let finalTotalToPay = 0;
  for(var i in checkoutCart){
    let finalPrd = checkoutCart[i].id;
    let finalPrdName = checkoutCart[i].title;
    let finalPrdPrice = checkoutCart[i].price;
    let finalPrdAmount = checkoutCart[i].amount;
    let finalTotalPrice = Number(checkoutCart[i].price * checkoutCart[i].amount).toFixed(2);
    finalTotalToPay += checkoutCart[i].price * checkoutCart[i].amount;
    finalShoppingCart += "<tr>"
    +"<td>" + finalPrdName + "</td>"
    +"<td>" + finalPrdPrice + "kr.</td>"
    + "<td><div class='input-group'><button class='minus-prd  btn btn-primary' data-name='" + finalPrdName + "'>-</button>"
    + "<input class='item-count form-control' data-name='" +  finalPrdName + "' value='" + finalPrdAmount + "'readonly>"
    + "<button class='plus-prd btn btn-primary input-group-addon' data-name='" +  finalPrdName + "'>+</button></div></td>"
    + "<td>" + finalTotalPrice+ "kr.</td>" 
    + "<td><button class='delete-prd' data-name='" + finalPrdName + "'><img src='images/trash.svg' alt='remove' fill='red'></img></button></td>"
    +  "</tr>";
  }
  
  $('#FinalTotalPay').html(Number(finalTotalToPay).toFixed(2)+"kr.");
    
    return finalShoppingCart;
  }

  $('#finalInfo').html(renderFinalCart())



/**
 * Functions to add or eliminate products in the cart
 * @param {string product name} prdName 
 */


  function removeOne(prdName) {
    for(var product in shoppingCart){
      if(shoppingCart[product].title === prdName){
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
  
  function addOne(prdName){
    for(var product in shoppingCart){
      if(shoppingCart[product].title === prdName){
        shoppingCart[product].amount ++;
      }
    }
      saveCart();
      $('#finalInfo').html(renderFinalCart());
      $('#counter').html(getTotalAmountProducts());
  }
  
  function discard(prdName){
    for(var product in shoppingCart){
      if(shoppingCart[product].title === prdName){
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
    let prdName = $(this).data('name');
    if($(this).next().val()>1)
    removeOne(prdName);
  
  }));
  
  $('#finalInfo').on("click", ".plus-prd",(function(){
    let prdName = $(this).data('name');
   addOne(prdName);
  }));
  
  $('#finalInfo').on("click", ".delete-prd",(function(){
    let prdName = $(this).data('name');
    discard(prdName);
  }))

  /**
   * Function to show message that the cart is empty
   */

 function showEmptyCartMssg(){
    if(shoppingCart.length === 0){
      $('#containerKassa').html('<div class="col-sm-12 empty-cart-cls text-center"> <img src="https://i.imgur.com/dCdflKN.png" width="130" height="130" class="img-fluid mb-4 mr-3"> '+
      '<h3><strong>Your Cart is Empty</strong></h3>'+
      '<a href="index.html" class="btn btn-primary cart-btn-transform m-3">continue shopping</a>'+
  '</div>')
    }
  }

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
    }
  }
getProfileDetails();

/**
 * Function to ask the user to log in to continue with the purchase
 */

function displayMssgNotLoggedIn(){
  if(localStorage.getItem("PROFILE") == null) {
    $('#formdiv').html('<div class="col-sm-12 text center"><h3><strong> Please log in to confirm your purchase</strong></h3>'+
    '<a href="loggin.html" class="btn btn-primary m-3">Log in</a>'+
    '</div>')
  }
}

/**
 * Function to inform the user that the order has been sent. 
 */

function displayConfirmationMsgg(){
$('#containerKassa').html('<div class="col-sm-12 empty-cart-cls text-center">' +
'<h3><strong>Your order has been sent. Thank you!</strong></strong></h3>'+
'<a href="index.html" class="btn btn-primary cart-btn-transform m-3">continue shopping</a>'+
'</div>');

}
 