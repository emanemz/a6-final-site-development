// 1) Check that your jQuery is connected
if (typeof jQuery != 'undefined') {
  console.log("jQuery is working yippyyyyyy!")}
 
 $( document ).ready( function() {
 
     ////////// Mobile Nav //////////
     
     // Variables
     // Add variables for nav, mobile menu trigger, and the last nav link (lowercase first word and capitalize the second one) ('nav' below should be the name of the nav you are hiding)
 
     var mobileNav = $('nav');
     var menuTrigger = $('.menu-trigger');
     var menuLink = $('nav a');
 
     // On trigger click
     // Add jQuery function when menu trigger is clicked
   $(menuTrigger).on('click', function() {
 
     // If menu is not open, open menu
   if (!$('body').hasClass('menu-open')) {
     $(menuTrigger).attr('aria-expanded' ,'true');
     $('body').addClass ('menu-open'); 
     $(mobileNav).show().animate({ right: '20px'});
   } else {
      // If menu is open, close menu
      $(menuTrigger).attr('aria-expanded' ,'false');
      $('body').removeClass ('menu-open'); 
      $(mobileNav).animate({ right: '-320px'}).hide('slow');
     }
   });
 
     // On ESC, close menu
     $( document ).keyup( function( e ) {
       if ( e.which === 27 ) {
         if ($('body').hasClass('menu-open')){
           $(menuTrigger).attr('aria-expanded' ,'false');
           $('body').removeClass ('menu-open'); 
           $(mobileNav).animate({ right: '-320px'}).hide('slow');
         }
       }
     } );
   
     // Loop through menu if mobile menu is open
         
         // If mobile menu is open
 
           // Move focus back to menu trigger
   
   } );
   