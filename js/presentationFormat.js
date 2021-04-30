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
  