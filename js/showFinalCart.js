function renderFinalCart(){
    let checkoutCart = shoppingCart;
    let finalProdCart = "";
    let finalTotalToPay = 0;
  for(var i in checkoutCart){
    let finalPrd = checkoutCart[i].id;
    let finalPrdName = checkoutCart[i].title;
    let finalPrdPrice = checkoutCart[i].price;
    let finalPrdAmount = checkoutCart[i].amount;
    let finalTotalPrice = Number(checkoutCart[i].price * checkoutCart[i].amount).toFixed(2);
    finalTotalToPay += checkoutCart[i].price * checkoutCart[i].amount;
    finalProdCart += "<tr>"
    +"<td>" + finalPrdName + "</td>"
    +"<td>"+ "$" + finalPrdPrice + "</td>"
    + "<td><div class='input-group'><button class='minus-prd input-group-addon btn btn-primary' data-name='" + finalPrdName + "'>-</button>"
    + "<input type='number' class='item-count form-control' data-name='" +  finalPrdName + "' value='" + finalPrdAmount + "'>"
    + "<button class='plus-prd btn btn-primary input-group-addon' data-name='" +  finalPrdName + "'>+</button></div></td>"
    + "<td>"+ "$" + finalTotalPrice+ "</td>" 
    + "<td><button class='delete-prd' data-name='" + finalPrdName + "'><img src='images/trash.svg' alt='remove' fill='red'></img></button></td>"
    +  "</tr>";
  }
  
  $('#FinalTotalPay').html(Number(finalTotalToPay).toFixed(2));
    
    return finalProdCart;
  }

  $('#finalInfo').html(renderFinalCart())


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
        break;
      }
    }
    saveCart();
    $('#finalInfo').html(renderFinalCart());
    $('#counter').html(getTotalAmountProducts());
    }
  
  
  $('#finalInfo').on("click", ".minus-prd",(function(){
    let prdName = $(this).data('name');
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