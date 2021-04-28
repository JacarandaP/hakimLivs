const profileAPI = "./mockupdata/myProfile.json";
const ordersAPI = "./mockupdata/myOrders.json";
let renderOrders;

/**
 * saves profile data to local storage ONLY FOR TESTING
 *  has to be changed to a get request like: /api/user
 */
/* COMMENTED BY BACKEND SIMULATION
function saveProfile() {
  fetch(profileAPI)
    .then((res) => res.json())
    .then((json) => {
      saveProfileLocalStorages(json);
    });
}
*/
/**
 * saves order data to local storage ONLY FOR TESTING
 *  has to be changed to a get request like: /api/order
 */
function saveMyOrders() {
  fetch(ordersAPI)
    .then((res) => res.json())
    .then((json) => {
      localStorage.setItem(ordersStorage, JSON.stringify(json));
    });
}
/**END OF MOCK UP SET UP */

function profileInit(){
 // saveProfile() //this is for MOCK UP data!!! needs to be commented in a near future
  saveMyOrders() // this is for MOCK UP data!!
 // checkLogged()
loadProfileToTable();

}

/**
 * Load profile data and show
 */
 const loadProfileToTable=()=>{
    let profile=JSON.parse(localStorage.getItem("PROFILE"));
    $('#user-name').text(profile.name)
    $('#user-last-name').text(profile.lastname)
    $('#user-all-names').text(profile.name + " " + profile.lastname)
    $('#user-phone-number').text(profile.telephone)
    $('#user-address').text(profile.address)
    $('#user-city').text(profile.postort)
    $('#user-zip').text(profile.postnummer)

}
const loadProfileToForm=()=>{
  let profile=JSON.parse(localStorage.getItem("PROFILE"));
  $('#form-name').val(profile.name)
  $('#form-last-name').val(profile.lastname)
  $('#form-phone').val(profile.telephone)
  $('#form-city').val(profile.postort)
  $('#form-address').val(profile.address)
  $('#form-zip').val(profile.postnummer)


}
/**
 * function to show and hide when edit button is clicked
 */
$("#update-data").hide();
$("#edit-profile").click(() => {
  $("#update-data").show();
  $("#show-data").hide();
  loadProfileToForm()
});

/**
 * submit profile update and refresh local storage. TODO: NEEDS TO CALL BACKEND AND HAVE SUCCES RESPONSE
 */
$('#submit-profile-changes').click(()=>{
  let savedProfile=JSON.parse(localStorage.getItem("PROFILE"));
  let profile={
    address: $('#form-address').val(),
    email:savedProfile.email,
    name:$('#form-name').val(),
lastname: $('#form-last-name').val(),
name:$('#form-name').val(),
password:savedProfile.password,
postnummer: $('#form-zip').val(),
postort: $('#form-city').val(),
telephone: $('#form-phone').val()
  }
//post it to BACKEND, if succeed save to local storage !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
saveProfileLocalStorages(profile)
localStorage.setItem(profileStorage, JSON.stringify(profile));
//ADD A FANCY ALERT! for user?????
})
renderOrders=()=>{
  let orders=JSON.parse(localStorage.getItem(ordersStorage))
  if(orders!==null){
    orders.forEach((order)=>{
    let template=$('#order-history-card').contents().clone()
    template.find('.order-history-id').text(order.orderNr)
    template.find('.order-history-date').text(order.date)
    template.find('.order-history-toggle').attr('data-target',value="#toggle"+order.orderNr)
    template.find('.order-history-toggle').attr('aria-controls',"toggle"+order.orderNr)
    template.find('.orders-body-collapse').attr('id',"toggle"+order.orderNr)
    template.find('.order-delivery-address').text("to implement")
    template.find('.order-products-cards').text()
    template.find('.order-delivery-address').text(order.delivered.name + " " + order.delivered.lastname + " "+order.delivered.address+ " "+ order.delivered.postort +" " + order.delivered.postnummer)
    order.products.forEach((product)=>{ template.find('.order-products-cards').append(`<li class="list-group-item">${product.title}<br> quantity: ${product.quantity}<br>price: ${product.price.toFixed(2).replace(".", ",")} kr
  </li>`)
    $('#accordion').append(template)  
    })
    
  })
  }
}

function customerInfo() {
    let profile=JSON.parse(localStorage.getItem("PROFILE"));
    let output = "";
    if(profile!=null){
      output += `<table class="text-center">
      <th class="text-center py-3 px-4" style="min-width: 100px;">Leveransadress</th>
      <tr id="user-all-names"></tr>
      <tr id="user-address"></tr>
      <tr id="user-city"></tr>
      <tr id="user-zip"></tr>
      <tr id="user-phone-number"><br></tr>
  </table>`
  $('#customer-info').html(output); 
    }
  
}

function showDeliveryAddress(){
  if(shoppingCart.length !=0){
    customerInfo();
    loadProfileToTable();
  }
}


