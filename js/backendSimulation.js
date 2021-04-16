var backendSendRegister;
var backendLoggin;
var backendConfirmCart;
let usersDBaddress = "./mockupdata/fakeUsers.json";
var userExists = false;
let userProfile;

////////////////////////////////////////////////////////////////
/**
 * function to simulate DB. search if a given email is in DB, if its not there it creates an user and saves the PROFILE in localStorage
 */
function handleUsersEmailDB(
  name,
  lastname,
  email,
  telephone,
  address,
  postort,
  postnummer,
  password
) {
  fetch(usersDBaddress)
    .then((res) => res.json())
    .then((json) => {
      let usersEmails = [];
      json.forEach((email) => usersEmails.push(email.email));
      sessionStorage.setItem("USERSDBEMAIL", JSON.stringify(usersEmails));
      const loadEmailsLocalStorage = JSON.parse(
        sessionStorage.getItem("USERSDBEMAIL")
      );
      for (emails in loadEmailsLocalStorage) {
        if (loadEmailsLocalStorage[emails] == email) {
          userExists = true; //DATABASE RESPONSE GIVES NO ACCEPTED
          console.log(userExists);
          alert(
            "this email is already registered, we can send a ficticious verification to that email :)"
          );
          sessionStorage.removeItem("USERSDBEMAIL");
          break;
        }
        //sessionStorage.removeItem('USERSDBEMAIL');
      }
      if (!userExists) {
        //HERE THE DATABASE RESPONSE ACCEPTED so, we save the profile and credentials in local storage
        let profile = {
          name,
          lastname,
          email,
          telephone,
          address,
          postort,
          postnummer,
          password,
        };

        localStorage.setItem("PROFILE", JSON.stringify(profile));
        saveCredentialsLocalStorage({
          email: profile.email,
          password: profile.password,
        });
        sessionStorage.removeItem("USERSDBEMAIL");
        alert(name + " with " + email + "has been created");
      }
    });
}

backendSendRegister = (
  name,
  lastname,
  email,
  telephone,
  address,
  postort,
  postnummer,
  password
) => {
  handleUsersEmailDB(
    name,
    lastname,
    email,
    telephone,
    address,
    postort,
    postnummer,
    password
  );
};

backendLoggin = (email, password, frontendReacts) => {
  //taking data from fake DB
  fetch(usersDBaddress)
    .then((res) => res.json())
    .then((json) => {
      let usersDB = [];
      let profile;
      json.forEach((users) => usersDB.push(users));
      usersDB.forEach((user) => {
        //FAKE DB takes the post
        if (user.email == email && user.password == password) {
          isLogged=true;
          //FAKE DB RESPONSE OK and Frontend saves credentials
          localStorage.setItem(
            "CREDENTIALS",
            JSON.stringify({ email: user.email, password: user.password })
          );
          // saveCredentialsLocalStorage({email:user.email,password:user.password})
          //DB RETURNS A PROFILE.JSON we create one and save it to local storage
           profile = {
             id:user.id,
            name: user.name,
            lastname: user.lastname,
            email,
            telephone: user.lastname,
            email: user.email,
            telephone: user.telephone,
            address: user.address,
            postort: user.postort,
            postnummer: user.postnummer,
            password: user.password,
          };
          localStorage.setItem("PROFILE", JSON.stringify(profile));
          json=profile;
       //  return profile;
          //saveProfileLocalStorages(profile)
          //alert("you are logged as:" + user.name + " " + user.lastname)
         
        }
      });
    return profile}).then((profile)=>frontendReacts(profile));
    
};
