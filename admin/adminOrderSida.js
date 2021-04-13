const customerData='../mockupdata/fakeUsers.json';
const customersOrders='../mockupdata/adminorders.json';
const productsAPI='../mockupdata/products.json'
let orderId;

/**
 *  get the orderId from the other page
 */
orderId=sessionStorage.getItem('ORDER_ID')

/**
 * get customers data
 */
let setCustomerData=(render, id)=>{
fetch(customerData)
.then(resp =>resp.json())
.then(json=>{
    json.forEach((customer)=>{ if(customer.id==id)
        render(customer)
    })
})
}
/**
 * get order data
 */
let getOrderData=(render,orderId)=>{
    fetch(customersOrders).then(resp=>resp.json()).then(json=>{
     
        json.forEach((orders)=>{
            if(orders.orderId==orderId){
             render(orders)
            setCustomerData(renderCustomerData,orders.customerId)}
            })
        })
}

/**
 * render customer data
 */
let renderCustomerData=(customer)=>{
    $('#customer-name').text(customer.name + " " + customer.lastname + " ");
    $('#customer-address').text(customer.address + " " + customer.postort + " "+ customer.postnummer)
}
/**
 * render order data
 */
let renderOrderData=(order)=>{
    $('#order-number').text(order.orderId)
    console.log(order)
    
    order.products.forEach(productId=>{
        getProducts(productId,renderProduct)
})
}
/**
 * gets the product by id and renders
 * @param {*} productId 
 * @param {*} render 
 */
let getProducts=(productId,render)=>{
    fetch(productsAPI).then(resp=>resp.json()).then(json=>{
        json.forEach(product=>{
            if(product.id==productId)
            render(product)
        })
    })
}
/**
 * render product as list
 */
let renderProduct=(product)=>{
    let template=`<li class="list-group-item"><b>Produkt titel:</b> ${product.title} <b>Produkt kategori:</b> ${product.category}<b> Produkt pris:</b> ${product.price} </li>`
    $('#order-list').append(template);
}
