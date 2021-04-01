//
//some variables
const productsAPI='./mockupdata/products.json'
const categoriesAPI='./mockupdata/categories.json'
//function to render products
let renderProducts;
//function to save products
let saveProductsLocalStorages;
let loadProductsLocalStorage = [];
var categories=new Array();


/**
 * gets categories from database,saves them in categories and renders them
 */
 function getCategories(render,appendTo){
    fetch(categoriesAPI)
    .then(res=>res.json())
    .then(json=>json.forEach((category)=>{
        categories.push(category);
        render(category,appendTo)
    }))
}


/**
 * 
 * @param {the category string} category 
 * @param {the element to append the list} appendTo 
 */
function renderCategories(category,appendTo){
   
    let categoryItem="<li><button id='category' data-name='"+category+"' class='category list-group-item list-group-item-action'>"+category+"</button></li>"
    appendTo.append(categoryItem)
}


/**
 * 
 * gets products from api, saves as Json to local storage and renders them
 * @param {function to render into cards} render 
 * @param {where to append the cards} appendTo 
 */
function getProducts(render,appendTo){
fetch(productsAPI)
.then((res)=>res.json())
.then((json)=>{
    saveProductsLocalStorages(json);
    json.forEach((product)=>{
        render(product, appendTo)
    
    }
    )
})}


/**
 * to render a product card based on a template written in the index.html
 */
 renderProducts=(product,appendTo)=>{
    let template=$('#product-card-template').contents().clone()
    template.find('.product-title').text(product.title)
    template.find('.product-description').text(product.description)
    template.find('.product-image').attr('src', product.image)
    template.find('.product-price').text(product.price)
    template.find('.product-category').text(product.category)
    template.find('.card').attr('data-category',product.category)
    template.find('.add-to-cart').attr('productID',product.id)
    template.find('.add-to-cart').attr('productTitle', product.title)
    template.find('.add-to-cart').attr('productDescription', product.description)
    template.find('.add-to-cart').attr('productPrice', product.price)
    template.find('.add-to-cart').attr('productCategory', product.category)
    template.find('.add-to-cart').attr('productAmount', 1)
    appendTo.append(template);

}
/**
 * function to save the products to local storage
 */
saveProductsLocalStorages=(product)=>{
    localStorage.setItem('PRODUCTS',JSON.stringify(product))
}

/**
 * function to load the products
 */

loadProductsLocalStorage = JSON.parse(localStorage.getItem('PRODUCTS'));

/**
 * Function to render the products by selected category
 * @param {The selected category} category 
 */

function getProductsByCategory(render,appendTo, category){  
   
    loadProductsLocalStorage.forEach((product)=>{
        
        if(product.category === category){
            render(product,appendTo)
          
        }
    })
}

/**
 * eventlistener to filter by category
 */
$('#category-list').on('click', '.category',(function(){
let categoryName = $(this).data('name');

$('#products').empty()
getProductsByCategory(renderProducts, $("#products"), categoryName)
}))


