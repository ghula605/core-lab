// This is where the javascript will live.
// Using Chrome developer tools, if you look at the console, you can see the message appearing on the console.

console.log('Is the scripts file working?');

$( function() {

    // code will go inside here 

    //toggle info
    $( ".burger" ).click( function() {

        $(".menu").toggleClass("show");
    
    })

})