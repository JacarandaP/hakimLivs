let shoppingCart = [];

function Product(id, title, description, price, category, amount) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.category = category;
    this.amount = amount;
    
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

  function emptyCart(){
    shoppingCart= [];
    saveCart();
  }

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

    function getTotalAmountProducts(){
        var totalAmountProducts = 0;
        for(var item in shoppingCart){
          totalAmountProducts += Number(shoppingCart[item].amount);
        }
        $('#counter').html(totalAmountProducts);
        return totalAmountProducts;
      }

$('#clear').click(function(){
    emptyCart();
    $('#counter').html(getTotalAmountProducts());
  })




    
