const profileAPI =(email,pass)=>{ return "https://hakimssuperserver.herokuapp.com/customer/checkcustomer/"+email+"/"+pass}
const ordersAPI = "https://hakimssuperserver.herokuapp.com/orders/getbycustomer";
const postUpdateProfile="https://hakimssuperserver.herokuapp.com/customer/update"
const credentials=JSON.parse(localStorage.getItem('CREDENTIALS'));
let renderOrders;

let fetchProfile=(credentials,render) => {

  fetch(profileAPI(credentials.email,credentials.password))
  .then((res) => res.json())
  .then((profile)=>{
   render(profile)
  })
}
let updateProfile=(profile,render)=>{
fetch(postUpdateProfile,
{ method:"POST",
headers: {
    'Accept': '*/*',
    'Content-Type': 'application/json'},
  body:JSON.stringify(profile)}).
  then(resp=>resp.json()).
  then(updatedProfile=>{
    
    render(updatedProfile)
    //save to local storage
    let newProfile={customerID: updatedProfile.id,name:updatedProfile.firstname,lastname:updatedProfile.lastname,address:updatedProfile.address,email:updatedProfile.email,telephone:updatedProfile.telephone,postort:updatedProfile.city,postnummer:updatedProfile.zip}
    localStorage.setItem('PROFILE', JSON.stringify(newProfile));
  })
}
/**
 * Load profile data and show
 */
 const renderProfileTable=(profile)=>{
 // let profile=JSON.parse(localStorage.getItem("PROFILE"));
  $('#user-name').text(formatNameSimple(profile.firstname))
  $('#user-last-name').text(formatNameSimple(profile.lastname))
  $('#user-all-names').text(formatNameSimple(profile.name + " " + profile.lastname))
  $('#user-phone-number').text(formatPhone(profile.telephone))
  $('#user-address').text(formatNameSimple(profile.address))
  $('#user-city').text(formatNameSimple(profile.city))
  $('#user-zip').text(formatZip(profile.zip))

}
const renderProfileToForm=(profile)=>{
 // let profile=JSON.parse(localStorage.getItem("PROFILE"));
  $('#form-name').val(profile.firstname)
  $('#form-last-name').val(profile.lastname)
  $('#form-phone').val(profile.telephone)
  $('#form-city').val(profile.city)
  $('#form-address').val(profile.address)
  $('#form-zip').val(profile.zip)

}
$('#submit-profile-changes').click((e)=>{
  e.preventDefault()
  //let savedProfile=JSON.parse(localStorage.getItem("PROFILE"));
  let profile={
    email:credentials.email,
    address: $('#form-address').val(),
    firstname:$('#form-name').val(),
lastname: $('#form-last-name').val(),
zip: $('#form-zip').val(),
city: $('#form-city').val(),
telephone: $('#form-phone').val()
  }
  updateProfile(profile,renderProfileTable)
  $("#update-data").hide();
  $("#show-data").show();

 
//post it to BACKEND, if succeed save to local storage !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//saveProfileLocalStorages(profile)
//localStorage.setItem(profileStorage, JSON.stringify(profile));
//ADD A FANCY ALERT! for user?????
})
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
/*
function saveMyOrders() {
  fetch(ordersAPI)
    .then((res) => res.json())
    .then((json) => {
      localStorage.setItem(ordersStorage, JSON.stringify(json));
    });
}
/**END OF MOCK UP SET UP */

function profileInit(){
  fetchProfile(credentials,renderProfileTable)
  
 // saveProfile() //this is for MOCK UP data!!! needs to be commented in a near future
 // saveMyOrders() // this is for MOCK UP data!!
 // checkLogged()
//loadProfileToTable();

}

/**
 * Three functions to format phone number, names and zip according to presentation standard
 */
 
function formatPhone(phoneNumber){
  return phoneNumber.substring(0,3) + "-" + phoneNumber.substring(3,6) + " " + phoneNumber.substring(6,8) + " "  + phoneNumber.substring(8);
}

function formatNameSimple(name){
  let newName = name.substring(0,1).toUpperCase();
  for (let i = 0; i < name.length-1; i++) {
    if(name[i] == ' ' || name[i] == '-'){
      if(name[+1] != ' ' ){
        newName += name[i+1].toUpperCase();
      }
    } else {
      newName += name[i+1].toLowerCase();
    }
  }
  return newName;
}

function formatZip(zip){
  return zip.substring(0,3) + " " + zip.substring(3);
}


/**
 * Load profile data and show
 */

 const loadProfileToTable=()=>{
    let profile=JSON.parse(localStorage.getItem("PROFILE"));
    $('#user-name').text(formatNameSimple(profile.name))
    $('#user-last-name').text(formatNameSimple(profile.lastname))
    $('#user-all-names').text(formatNameSimple(profile.name + " " + profile.lastname))
    $('#user-phone-number').text(formatPhone(profile.telephone))
    $('#user-address').text(formatNameSimple(profile.address))
    $('#user-city').text(formatNameSimple(profile.postort))
    $('#user-zip').text(formatZip(profile.postnummer))

}

/*
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
  fetchProfile(credentials,renderProfileToForm)
  //loadProfileToForm()
});

/**
 * submit profile update and refresh local storage. TODO: NEEDS TO CALL BACKEND AND HAVE SUCCES RESPONSE
 */
/*
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

*/
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


