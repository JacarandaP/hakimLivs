
let printImage=()=>{
    let template=`<img  src="${$('#imageBox').val()}" alt="produkt bild" width="200">`
    $('#image-container').empty();
     $('#image-container').append(template);
}

$("#show-image").on("click",()=>{
   printImage()
})

let renderCombobox=(category)=>{
    let template=`<option value="${category.id}">${category.name}</option>`
    $('#category-combobox').append(template)
  //  console.log($('#titleBox').attr('productid'))
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
                $('#titleBox').attr("productId",product.id)
                $('#descriptionBox').val(product.description);
                $('#priceBox').val(product.price);
                $('#imageBox').val(product.image);
               $("option[value='"+product.category.id+"'").attr("selected",true)
                printImage();

            }
       }
        )
    })
    }
}
printProduct()

$("#go-back").on('click',()=>location.href="adminHome.html")
/
$('#submitForm').on('click',()=>{
    let categoryId=$('#category-combobox').children('option:selected').val()
   
    let product;
if($('#titleBox').attr('productid')==NaN)
    product={title:$('#titleBox').val(),description: $('#descriptionBox').val(), price:  $('#priceBox').val(),image: $('#imageBox').val(), category:{id:categoryId}}
else
product={id:$('#titleBox').attr('productid'),title:$('#titleBox').val(),description: $('#descriptionBox').val(), price:  $('#priceBox').val(),image: $('#imageBox').val(), category:{id:categoryId}}
    sendProductToDB(product);//take the values and do a post
    alert("saved " +  product.title) //ALERT NOT FANCY, WILL CHANGE IN A FUTURE
    location.href="adminHome.html"
})

let sendProductToDB=(product)=>{

    fetch(addProductAddress,
    { method:"POST",
    headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json','Authorization': ''+token+''},
      body:JSON.stringify(product)}).
      then(resp=>resp.json()).
      then(json=>console.log(json))
  

}