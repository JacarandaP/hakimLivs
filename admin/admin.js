const toCategoriesAddress='../mockupdata/categories.json'
const toProductsAddress='../mockupdata/products.json'
const toOrdersAddress='../mockupdata/adminorders.json'
const toFooterData='../mockupdata/adminfooter.json'

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
        json.forEach((order)=>{
        render(order)}
        )
    })
    
}
/**
 *  to render orders
 */
let renderOrders=(order)=>{
    let template=$('#order-katalog-item').contents().clone()
    template.find('.order-id').text(order.orderId)
    template.find('.order-customer').text(order.customerId)
    template.find('.order-date').text(order.date)
    template.find('.order-price').text(order.price +" kr")
   
    $('#to-append-orders').append(template);
}
/**
 * render products on table
 */
let renderProducts=(product)=>{
    let template=$('#produkt-katalog-item').contents().clone()
    template.find('.product-id').text(product.id)
    template.find('.product-title').text(product.title)
    template.find('.product-category').text(product.category)
    template.find('.product-price').text(product.price +" kr")
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
    let template=`<li class="list-group-item category-item">${category}</li>`
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
    let newCategory=$('#add-category-input').val();
  // sendCategoryToDB(newCategory)
   renderCategories(newCategory)
})

}
let sendCategoryToDB=(category)=>{
   console.log("sending"+ category)

}
$('#add-new-product').on('click', ()=>{location.href="produktSida.html"})

/**
 * fetch footer and print values
 */
let updateFooter=()=>{
fetch(toFooterData).then(resp=>resp.json()).then(data=>{
    
$('#email-input').val(data.email)
$('#phone-input').val(data.phone)
$('#address-input').val(data.address)
$('#city-input').val(data.ort)
$('#zip-input').val(data.zip)
$('#opening-times-from').val(data.openfrom)
$('#opening-times-till').val(data.opentill)
})
}

/**
 * timepicker setup (uses timepicker plugin)
 */

    $('.timepicker').timepicker({
        timeFormat: 'HH:mm',
        interval: 30,
        minTime: '7',
        maxTime: '23:30pm',
        defaultTime: '7:00',
        startTime: '07:00',
        dynamic: false,
        dropdown: true,
        scrollbar: true
    });
/**
 * send footer data and print response
 */
  $('#submit-footer').on('click',()=>{
      let footerData={
        email:$('#email-input').val(),
      phone:$('#phone-input').val(),
      address:$('#address-input').val(),
      ort:$('#city-input').val(),
      zip:$('#zip-input').val(),
      openfrom:$('#opening-times-from').val(),
      opentill:$('#opening-times-till').val()}

      //here we post and we receive response, if ok show footer
      let response= `Sidfoten uppdaterad: ${footerData.email} ${footerData.phone} \n ${footerData.address} ${footerData.ort} ${footerData.zip} oppetider: från ${footerData.openfrom} till ${footerData.opentill}`
      $('#show-footer-update').text(response)
      $('#show-footer-update').show();
  })