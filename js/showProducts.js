
const productsAPI='https://webacademy.se/fakestore/'
let renderProducts;
let saveProductsLocalStorages;
let getProductsLocalStorages;



function getCategories(render,appendTo){

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
        render(product.title,product.description,product.image,product.price,product.category, appendTo)
    
    }
    )
})}


/**
 * to render a product card based on a template written in the index.html
 */
 renderProducts=(title,description,image,price,category,appendTo)=>{
    let template=$('#product-card-template').contents().clone()
    template.find('.product-title').text(title)
    template.find('.product-description').text(description)
    template.find('.product-image').attr('src', image)
    template.find('.product-price').text(price)
    template.find('.product-category').text(category)
    template.find('.card').attr('data-category',category)
    appendTo.append(template);

}
/**
 * function to save the products to local storage
 */
saveProductsLocalStorages=(product)=>{
    localStorage.setItem('PRODUCTS',JSON.stringify(product))
}