//const toCategoriesAddress='../mockupdata/categories.json'
const toCategoriesAddress='https://hakimssuperserver.herokuapp.com/category/all'
//const toProductsAddress='../mockupdata/products.json'
const toProductsAddress='https://hakimssuperserver.herokuapp.com/product'

const toOrdersAddress='https://hakimssuperserver.herokuapp.com/orders/all'
//const toOrdersAddress='../mockupdata/adminorders.json'
const toFooterData='../mockupdata/adminfooter.json'
//const sendNewProduct='localhost:8080/product/add'

$('#show-footer-update').hide();
/**
 * get products and render
 */
 let getProducts=(render)=>{
    fetch(toProductsAddress)
    .then(resp=>resp.json())
    .then((json)=>{
        json.forEach((product)=>{
        render(product)}
        )
    })
    
}
/**
 * get categories and render
 */
 let getCategories=(render)=>{
    fetch(toCategoriesAddress)
    .then(resp=>resp.json())
    .then((json)=>{
        json.forEach((category)=>{
        render(category)}
        )
    })
    
}
/**
 * get orders and render
 */
 let getOrders=(render)=>{
    fetch(toOrdersAddress)
    .then(resp=>resp.json())
    .then((json)=>{
        json.forEach((order)=>{ console.log(order)
        render(order)}
        )
    })
    
}
/**
 *  to render orders
 */
let renderOrders=(order)=>{
    let template=$('#order-katalog-item').contents().clone()
    template.find('.order-id > a').text(order.id)
    template.find('.order-customer').text(order.customer.id)
    template.find('.order-date').text(order.createDate)
    template.find('.order-price').text(order.orderDetails.map(product=>product.productPrice).reduce((a,b)=>a+b))
    //template.find('.order-price').text(Number(order.orderDetails.map(product=>product.price)).toFixed(2).replace(".", ","))

    $('#to-append-orders').append(template);
}

/**
 * render products on table
 */
let renderProducts=(product)=>{
    let template=$('#produkt-katalog-item').contents().clone()
    template.find('.product-id').text(product.id)
    template.find('.product-title').text(product.title)
    template.find('.product-category').text(product.category.name)
    template.find('.product-price').text(product.price.toFixed(2).replace(".", ",") +" kr")
    template.find('.product-edit').attr('product-id',product.id)
    template.find('.product-edit').attr('onclick',"gotoeditProduct(this);")
    $('#to-append-products').append(template);
    
}

/**
 * sends the info of the product and goes to product edit page
 */
let gotoeditProduct=(e)=>{
    sessionStorage.setItem("TEMP_ID",e.getAttribute('product-id'));
    location.href="produktSida.html"
}

/**
 * render categories on list
 */
 let renderCategories=((category)=>{
    let template=`<li class="list-group-item category-item">${category.name}</li>`
    $('.to-append-categories').append(template);
    
})

/**
 * function to search and filter on table
 */
let searchAndFilter=(searchInput,toFilter)=>{
$(searchInput).keyup(()=>{
    var toSearch= $(searchInput).val().toLowerCase();
    var tofilter=$(toFilter);
    tofilter.hide();
    if(toSearch=="")
    tofilter.show();
    tofilter.filter((i,v)=>{
     $(v).toggle($(v).text().toLowerCase().indexOf(toSearch)>-1);  
    })

})
}

/**
 * send category and update list
 */
let addCategory=()=>{
$('#add-category').on('click', ()=>{

    let newCategory={name:$('#add-category-input').val()};

    
   sendCategoryToDB(newCategory)
   renderCategories(newCategory)
})

}
let sendCategoryToDB=(category)=>{
    fetch('https://hakimssuperserver.herokuapp.com/category/add',
    { method:"POST",
    headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json'},
      body:JSON.stringify(category)}).
      then(resp=>resp.json()).
      then(json=>console.log(json))
   //console.log("sending"+ category)

}
$('#add-new-product').on('click', ()=>{location.href="produktSida.html"})

  /**
   * sends to orderSida and set id value when id is clicked
   * 
   */
 let goToOrderDetails=(e)=>{
     sessionStorage.setItem("ORDER_ID",$(e).text())
     location.href="adminOrderSida.html"
 }

      //here we post and we receive response, if ok show footer
      /*
      let response= `Sidfoten uppdaterad: ${footerData.email} ${footerData.phone} \n ${footerData.address} ${footerData.ort} ${footerData.zip} oppetider: från ${footerData.openfrom} till ${footerData.opentill}`
      $('#show-footer-update').text(response)
      $('#show-footer-update').show();
      */

