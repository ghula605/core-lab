$( function() {

    // code will go inside here 

    //draging elements
    $( ".draggable" ).draggable({

        stack: ".draggable",
        containment: ".container"
    });

    //toggle switch
    $( ".switch" ).click( function() {

        $(".container").toggleClass("darkmode");

    });

    //toggle info
    $( ".click-me" ).click( function() {

        $(".extra-info").fadeToggle("hide");
    
    });

    //scale objects
    $(".moodboard-4").hover( 
        function(){$(this).animate({width: "260px", height:"auto"}, 250);},        
        function(){$(this).animate({width: "250px", height:"auto"}, 250);});
        
    $(".moodboard-6").hover( 
        function(){$(this).animate({width: "330px", height:"auto"}, 250);},        
        function(){$(this).animate({width: "320px", height:"auto"}, 250);});
    
    $(".moodboard-1").hover( 
        function(){$(this).animate({width: "260px", height:"auto"}, 250);},        
        function(){$(this).animate({width: "250px", height:"auto"}, 250);});
        
    $(".moodboard-8").hover( 
        function(){$(this).animate({width: "210px", height:"auto"}, 250);},        
        function(){$(this).animate({width: "200px", height:"auto"}, 250);});
        
    $(".moodboard-10").hover( 
        function(){$(this).animate({width: "410px", height:"auto"}, 250);},        
        function(){$(this).animate({width: "400px", height:"auto"}, 250);});
        
    $(".moodboard-11").hover( 
        function(){$(this).animate({width: "210px", height:"auto"}, 250);},        
        function(){$(this).animate({width: "200px", height:"auto"}, 250);});
    
    $(".moodboard-12").hover( 
        function(){$(this).animate({width: "310px", height:"auto"}, 250);},        
        function(){$(this).animate({width: "300px", height:"auto"}, 250);});
        
    $(".moodboard-13").hover( 
        function(){$(this).animate({width: "210px", height:"auto"}, 250);},        
        function(){$(this).animate({width: "200px", height:"auto"}, 250);});
        
})