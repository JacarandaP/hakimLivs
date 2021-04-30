const footerAddress="mockupdata/adminfooter.json"

/**
 * get data
 */
let footerData=()=>{
    fetch(footerAddress).then(resp=>resp.json()).then(json=> $('#footer').append(footerTemplate(json)))
}
let footerTemplate=(footer)=>`<div class="row footer pt-4 text-center"><div class="col ml-4 bi bi-envelope-fill" style="font-size:1rem"><b></b> ${footer.email}</div><div class="col bi bi-telephone-fill" style="font-size:1rem"><b></b> ${footer.phone}</div></div><div class=" text-center row footer pt-2 pb-4"><div class="col ml-4 bi bi-geo-alt-fill" style="font-size:1rem;"><b></b> ${footer.address} ${footer.ort} ${footer.zip}</div><div class="col bi bi-clock-fill" style="font-size:1rem"><b></b> ${footer.openfrom} - ${footer.opentill}</div></div>`
footerData()