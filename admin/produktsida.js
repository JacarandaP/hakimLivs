

let renderCombobox=(category)=>{
    let template=`<option value="${category}">${category}</option>`
    $('#category-combobox').append(template)

}

getCategories(renderCombobox);

$("#show-image").on("click",()=>{
    let template=`<img  src="${$('#imageBox').val()}" alt="produkt bild" width="200">`
   $('#image-container').empty();
    $('#image-container').append(template);
})
/*
$('#registerForm').on('submit',()=>{
    //take the values and do a post
})
*/