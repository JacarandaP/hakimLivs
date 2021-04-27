  function openSideBar() {
        document.getElementById("sidebar").style.display = "block";
        $('#sidebar').css("width","100%");
      }

      function closeSideBar() {
        document.getElementById("sidebar").style.display = "none";
        $('#sidebar').css("width","200px");
      }


      /**
       *  resizes an element on hover (used for resizing product image look renderProducts function in showProducts)
       * @param {element to resize} toChange 
       */
      var reactOnMouseOver=(toChange)=>{
       
        toChange.on('mouseover',()=>{
          toChange.css('cursor', 'pointer');

        })
        toChange.mouseout(()=>{
          
          //toChange.animate({width:'-=30px'},500)
        })
      }