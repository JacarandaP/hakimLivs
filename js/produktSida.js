
/**
 * gets the product info and
 */
let getProductInfo=()=>{
    let productInfo=JSON.parse(sessionStorage.getItem('PRODUCT_INFO'));
    $('#product-info-title').text(productInfo.title)
    $('#product-info-description').text(productInfo.description)
    $('#product-info-price').text(productInfo.price + " kr")
    $('#product-info-category').text(productInfo.category)
    $('#product-info-img').attr('src',productInfo.image)
    $('#buy').attr('productID',productInfo.id)
    $('#buy').attr('productTitle',productInfo.title)
    $('#buy').attr('productDescription',productInfo.description)
    $('#buy').attr('productPrice',productInfo.price)
    $('#buy').attr('productCategory',productInfo.category)
    $('#buy').attr('productAmount',1)
   
    
}
$(document).ready(()=>{ changeTopVarOnloggedIn();
getProductInfo()})

