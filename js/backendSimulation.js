var backendSendRegister;
var backendLoggin; 
var backendConfirmCart; 
let usersDBaddress="./mockupdata/fakeUsers.json";
var userExists=false;
let userProfile;

////////////////////////////////////////////////////////////////
/**
 * function to simulate DB. search if a given email is in DB, if its not there it creates an user and saves the PROFILE in localStorage
 */
function handleUsersEmailDB(name,lastname,email,telephone,
    address,postort,postnummer,password) {
    fetch(usersDBaddress)
      .then((res) => res.json())
      .then((json) => {
          let usersEmails=[];
          json.forEach((email)=>usersEmails.push(email.email))
        sessionStorage.setItem('USERSDBEMAIL', JSON.stringify(usersEmails))
        const loadEmailsLocalStorage = JSON.parse(sessionStorage.getItem( 'USERSDBEMAIL'));
        for(emails in loadEmailsLocalStorage){
            if(loadEmailsLocalStorage[emails]==email){
                userExists=true; //DATABASE RESPONSE GIVES NO ACCEPTED
                console.log(userExists)
                alert("this email is already registered, we can send a ficticious verification to that email :)")
                sessionStorage.removeItem('USERSDBEMAIL');
                break;
            }
            //sessionStorage.removeItem('USERSDBEMAIL');
        }
if(!userExists){
    //HERE THE DATABASE RESPONSE ACCEPTED so, we save the profile and credentials in local storage
    let profile={name,lastname,email,telephone,
        address,postort,postnummer,password}

    localStorage.setItem('PROFILE',JSON.stringify(profile))
    saveCredentialsLocalStorage({email:profile.email,password:profile.password})
    sessionStorage.removeItem('USERSDBEMAIL');
    alert(name + " with " + email + "has been created")
}
      });
  }

backendSendRegister=(name,lastname,email,telephone,
    address,postort,postnummer,password)=>{
            handleUsersEmailDB(name,lastname,email,telephone,
                address,postort,postnummer,password)
          
        }

backendLoggin=(email,password,frontendReacts)=>{
    //taking data from fake DB
    fetch(usersDBaddress)
    .then((res) => res.json())
    .then((json) => {
        let usersDB=[];
        json.forEach((users)=>usersDB.push(users))
    usersDB.forEach((user)=>{ 
        
        //FAKE DB takes the post
        if(user.email==email && user.password==password){
isLogged=true;
            //FAKE DB RESPONSE OK and Frontend saves credentials
            saveCredentialsLocalStorage({email:user.email,password:user.password})
          
          
            /* THIS IS NOT NECESSARY but is useful for testing*/ 
       let profile={name:user.name,lastname:user.lastname,email,telephone:user.lastname,email:user.email,telephone:user.telephone,
        address:user.address,postort:user.postort,postnummer:user.postnummer,password:user.password}
      
        saveProfileLocalStorages(profile)
        //alert("you are logged as:" + user.name + " " + user.lastname)
        frontendReacts(profile)
    }
    
    })
    if(!isLogged)
    frontendReacts();
})


}