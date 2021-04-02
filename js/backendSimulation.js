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
                userExists=true;
                console.log(userExists)
                alert("this email is already registered, we can send a ficticious verification to that email :)")
                sessionStorage.removeItem('USERSDBEMAIL');
                break;
            }
            //sessionStorage.removeItem('USERSDBEMAIL');
        }
if(!userExists){
    let profile={name,lastname,email,telephone,
        address,postort,postnummer,password}
    localStorage.setItem('PROFILE',JSON.stringify(profile))
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

backendLoggin=(email,password)=>{
    fetch(usersDBaddress)
    .then((res) => res.json())
    .then((json) => {
        let usersDB=[];

        json.forEach((users)=>usersDB.push(users))
    usersDB.forEach((user)=>{ 
        if(user.email==email && user.password==password){
       let profile={name:user.email,lastname:user.lastname,email:user.email,telephone:user.telephone,
        address:user.address,postort:user.postort,postnummer:user.postnummer,password:user.password}
      
        saveProfileLocalStorages(profile)
        checkLogged()
        alert("you are logged as:" + user.name + " " + user.lastname)
    }
    })
})
}