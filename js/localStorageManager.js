const profileStorage="PROFILE";
const ordersStorage="ORDERS";
const credentialsStorage="CREDENTIALS";
/**
 * function to save the credentials to local storage
 */
 const saveCredentialsLocalStorage = (credentials) => {
  localStorage.setItem(credentialsStorage, JSON.stringify(credentials));
};
/**
 * to load the credentials (useful for checkLogged)
 */
const loadCredentialsLocalStorage = JSON.parse(localStorage.getItem( credentialsStorage));
/**
 * function to save the profile to local storage
 */
 const saveProfileLocalStorages = (profile) => {
    localStorage.setItem(profileStorage, JSON.stringify(profile));
  };
  
  /**
   * function to load the profileData
   */
  
 const loadProfileLocalStorage = JSON.parse(localStorage.getItem( profileStorage));

 const removeProfileLocalStorage=localStorage.removeItem( profileStorage);

 ////////////////////////////////
 const saveOrdersLocalStorages = (orders) => {
    localStorage.setItem(ordersStorage, JSON.stringify(orders));
  };

  const loadOrdersLocalStorage = JSON.parse(localStorage.getItem(ordersStorage));