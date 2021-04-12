const usersAPIaddress='../mockupdata/adminkunder.json'
//set up 
$('#confirmed-message').hide();

/**
 * set values to selector
 */
let setSelectorValues=()=>{
    for(let i=1;i<101;i++){
        let options="<option value='"+i+"'>"+i+"</option>"
    $('#beställning-per-vecka').append(options)
    }
}
/**
 * send the criteria and show message response
 */
let sendCriteria=()=>{
    $('#send-criteria').on('click',()=>{
    let criteria={orderprice: $('#beställning-pris').val(), orderpervecka:$('#beställning-per-vecka').val()}

    //send with fetch post data and print response if ok
    let response=criteria;
    $('#confirmed-message').text(`Nu en trogna kunden är när har en beställning av ${response.orderprice} kr. och har beställat ${response.orderpervecka} gånger per vecka`)
    $('#confirmed-message').show();
    //update also the customer table down there???
    $('#to-append-customers').empty();
    updateUserTable(renderUsers)
   
})
}
/**
 * update customer table, fetches from database
 */
let updateUserTable=(render)=>{
    fetch(usersAPIaddress)
    .then(resp=>resp.json())
    .then(json=>{
        json.forEach((user)=>{
            render(user);
        })
    })

}
/**
 * render user
 */
let renderUsers=(user)=>{
    let template=$('#customer-item').contents().clone()
    template.find('.customer-id').text(user.id)
    template.find('.customer-trogna').text(user.trogna)
    template.find('.customer-total-orders').text(user.totalOrders)
    template.find('.customer-total-price').text(user.totalPrice)
    $('#to-append-customers').append(template);

}