const profileStorage="PROFILE";
const ordersStorage="ORDERS";

/**
 * function to save the products to local storage
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