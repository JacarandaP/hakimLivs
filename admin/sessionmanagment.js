const token=sessionStorage.getItem("TOKEN");
const addProductAddress="http://localhost:8080/product/add"

const parseJwt =(token)=> {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

const notLogged=()=>{
    if(token==null){
    document.body.innerHTML="Du är inte inloggad"}
};
