const footerAddress="mockupdata/adminfooter.json"
/*
$.getScript("js/profile.js",function(){formatPhone(footerEmail);
});
*/
/**
 * get data
 */
let footerData=()=>{
    fetch(footerAddress).then(resp=>resp.json()).then(json=> $('#footer').append(footerTemplate(json)))
}
let footerTemplate=(footer)=>
`<div id= footer-color class="w3-container ">
<div class="row pt-4 pl-2 pr-2 text-center footer">
<div class="col-12 col-sm-6 bi bi-envelope-fill" style="font-size:1rem">
<b></b> 
${footer.email}</div>
<div class="col-12 col-sm-6 bi bi-telephone-fill" style="font-size:1rem"><b></b> ${formatPhone(footer.phone)}</div></div>
<div class="row pt-2 pl-2 pr-2 pb-4 text-center footer">
<div class="col-12 col-sm-6 bi bi-geo-alt-fill" style="font-size:1rem"><b></b> ${formatNameSimple(footer.address)} ${formatNameSimple(footer.ort)} ${formatZip(footer.zip)}</div>
<div class="col-12 col-sm-6 bi bi-clock-fill" style="font-size:1rem"><b></b> ${footer.openfrom} - ${footer.opentill}</div></div></div>`

footerData()