const footerAddress="mockupdata/adminfooter.json"

/**
 * get data
 */
let footerData=()=>{
    fetch(footerAddress).then(resp=>resp.json()).then(json=> $('#footer').append(footerTemplate(json)))
}
let footerTemplate=(footer)=>`<div class="row bg-light pt-3 text-center"><div class="col ml-4"><b>email:</b> ${footer.email}</div><div class="col"><b>Telefon:</b> ${footer.phone}</div></div><div class=" text-center row bg-light pt-2 pb-2"><div class="col ml-4"><b>Address:</b> ${footer.address} ${footer.ort} ${footer.zip}</div><div class="col"><b>Öppetider:</b> ${footer.openfrom}-${footer.opentill}</div></div>`
footerData()