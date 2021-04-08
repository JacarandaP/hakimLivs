  function openSideBar() {
        document.getElementById("sidebar").style.display = "block";
      }

      function closeSideBar() {
        document.getElementById("sidebar").style.display = "none";
      }


      /**
       *  resizes an element on hover (used for resizing product image look renderProducts function in showProducts)
       * @param {element to resize} toResize 
       */
      var resizeObject=(toResize)=>{
       
        toResize.on('mouseover',()=>{toResize.animate({width:'+=30px'},500)})
        toResize.mouseout(()=>{toResize.animate({width:'-=30px'},500)})
      }