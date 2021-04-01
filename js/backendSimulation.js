var backendSendRegister;
var backendLogging; 
var backendConfirmCart; 
let usersDBaddress="./mockupdata/fakeUsers.json";
var userExists=false;
let userProfile;

////////////////////////////////////////////////////////////////
function saveUsersDB(name,lastname,email,telephone,
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
}
      });
  }
backendSendRegister=(name,lastname,email,telephone,
    address,postort,postnummer,password)=>{
            saveUsersDB(name,lastname,email,telephone,
                address,postort,postnummer,password)
          
        }

