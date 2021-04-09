
let printImage=()=>{
    let template=`<img  src="${$('#imageBox').val()}" alt="produkt bild" width="200">`
    $('#image-container').empty();
     $('#image-container').append(template);
}

$("#show-image").on("click",()=>{
   printImage()
})

let renderCombobox=(category)=>{
    let template=`<option value="${category}">${category}</option>`
    $('#category-combobox').append(template)

}

getCategories(renderCombobox);

let printProduct=()=>{
    let selectedProductId=sessionStorage.getItem("TEMP_ID")
    if(selectedProductId!=NaN){
        fetch(toProductsAddress)
    .then(resp=>resp.json())
    .then((json)=>{
        json.forEach((product)=>{
            if(product.id==selectedProductId){
                sessionStorage.removeItem("TEMP_ID");
                $('#titleBox').val(product.title);
                $('#descriptionBox').val(product.description);
                $('#priceBox').val(product.price);
                $('#imageBox').val(product.image);
               $("option[value='"+product.category+"'").attr("selected",true)
                console.log($("option[value='"+product.category+"'"))
                printImage();
            }
       }
        )
    })
    }
}
printProduct()

$("#go-back").on('click',()=>location.href="admin.html")
/*
$('#registerForm').on('submit',()=>{
    //take the values and do a post
})
*/