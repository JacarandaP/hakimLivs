/**
 * render products on table
 */
let renderProducts=(product)=>{
    let template=$('#produkt-katalog-item').contents().clone()
    template.find('.product-id').text(product.id)
    template.find('.product-title').text(product.title)
    template.find('.product-category').text(product.category)
    template.find('.product-price').text(product.price)
    template.find('.product-edit').attr('product-id',product.id)
    template.find('.product-edit').attr('onclick',"gotoeditProduct(this);")
    $('#to-append-products').append(template);
    
}
/**
 * get products
 */
let getProducts=(render)=>{
    fetch('../mockupdata/products.json')
    .then(resp=>resp.json())
    .then((json)=>{
        json.forEach((product)=>{
        render(product)}
        )
    })
    
}
/**
 * sends the info of the product and goes to product edit page
 */
let gotoeditProduct=(e)=>{
    location.href="adminprodukt.html"
}