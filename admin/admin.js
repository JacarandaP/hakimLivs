const toCategoriesAddress='../mockupdata/categories.json'
const toProductsAddress='../mockupdata/products.json'


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
 * get categories
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
    location.href="adminprodukt.html"
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