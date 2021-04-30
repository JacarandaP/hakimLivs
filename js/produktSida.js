
/**
 * gets the product info and
 */
let getProductInfo=()=>{
    let productInfo=JSON.parse(sessionStorage.getItem('PRODUCT_INFO'));
    $('#product-info-title').text(productInfo.title)
    $('#product-info-description').text(productInfo.description)
    $('#product-info-price').text(productInfo.price.toFixed(2).replace(".", ",") + " kr")
    $('#product-info-category').text(productInfo.category.name)
    $('#product-info-img').attr('src',productInfo.image)
    $('#buy').attr('productID',productInfo.id)
    $('#buy').attr('productTitle',productInfo.title)
    $('#buy').attr('productDescription',productInfo.description)
    $('#buy').attr('productPrice',productInfo.price)
    $('#buy').attr('productCategory',productInfo.category)
    $('#buy').attr('productAmount',1)
   refreshButton($('#buy'),'productID')
    
}
$(document).ready(()=>{ changeTopVarOnloggedIn();
getProductInfo()

})


