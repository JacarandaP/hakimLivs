  /**
 * fetch footer and print values
 */
   let updateFooter=()=>{
    fetch(toFooterData).then(resp=>resp.json()).then(data=>{
        
    $('#email-input').val(data.email)
    $('#phone-input').val(data.phone)
    $('#address-input').val(data.address)
    $('#city-input').val(data.ort)
    $('#zip-input').val(data.zip)
    $('#opening-times-from').val(data.openfrom)
    $('#opening-times-till').val(data.opentill)
    })
    }
    
    /**
     * timepicker setup (uses timepicker plugin)
     */
    
        $('.timepicker').timepicker({
            timeFormat: 'HH:mm',
            interval: 30,
            minTime: '7',
            maxTime: '23:30pm',
            defaultTime: '7:00',
            startTime: '07:00',
            dynamic: false,
            dropdown: true,
            scrollbar: true
        });
    /**
     * send footer data and print response
     */
      $('#submit-footer').on('click',()=>{
          let footerData={
            email:$('#email-input').val(),
          phone:$('#phone-input').val(),
          address:$('#address-input').val(),
          ort:$('#city-input').val(),
          zip:$('#zip-input').val(),
          openfrom:$('#opening-times-from').val(),
          opentill:$('#opening-times-till').val()}
    
          //here we post and we receive response, if ok show footer
          let response= `Sidfoten uppdaterat: ${footerData.email} ${footerData.phone} \n ${footerData.address} ${footerData.ort} ${footerData.zip} oppetider: från ${footerData.openfrom} till ${footerData.opentill}`
          $('#show-footer-update').text(response)
          $('#show-footer-update').show();
      })