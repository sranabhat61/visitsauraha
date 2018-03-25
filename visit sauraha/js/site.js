 

/************************
        Home page
 ************************/

/*Show images on modal popup*/
     $(function() {
         $('.pop').on('click', function(e) {
             e.preventDefault();
             $('.imagepreview').attr('src', $(this).find('img').attr('src'));
             $('#imagemodal').modal('show');   
         });     
     });

/************************
       End Home page
 ************************/ 





/************************
       Photos page
 ************************/ 

/**image gallery**/
   document.getElementById('links').onclick = function (event) {
         event = event || window.event;
         var target = event.target || event.srcElement,
             link = target.src ? target.parentNode : target,
             options = {index: link, event: event},
             links = this.getElementsByTagName('a');
         blueimp.Gallery(links, options);
     };
/************************
       End Photos page
 ************************/ 






/************************
 
       End Contct page
 ************************/ 
