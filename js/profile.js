const profileAPI = "./mockupdata/myProfile.json";
/**
 * saves profile data to local storage ONLY FOR TESTING
 *
 */
function saveProfile() {
  fetch(profileAPI)
    .then((res) => res.json())
    .then((json) => {
      saveProfileLocalStorages(json);
    });
}
/**END OF MOCK UP SET UP */

/**
 * Load profile data and show
 */
const loadProfile=()=>{
    let profile=loadProfileLocalStorage;
    $('#user-name').text(profile.name)
    $('#user-last-name').text(profile.lastname)
    $('#user-phone-number').text(profile.telephone)
    $('#user-address').text(profile.address)
    $('#user-city').text(profile.postort)
    $('#user-zip').text(profile.postnummer)

}
/**
 * function to show and hide when edit button is clicked
 */
$("#update-data").hide();
$("#edit-profile").click(() => {
  $("#update-data").show();
  $("#show-data").hide();
});


/**
 * function to save the products to local storage
 */
saveProfileLocalStorages = (profile) => {
  localStorage.setItem("PROFILE", JSON.stringify(profile));
};

/**
 * function to load the profileData
 */

loadProfileLocalStorage = JSON.parse(localStorage.getItem("PROFILE"));

let printData = (profile) => {};
