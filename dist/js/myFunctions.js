/**
 * Created by Cedric on 8/23/2015.
 */
$(function(){
    showMenuIcon();
    //displayText();
});

//when the device width is below 650px
//We remove the nav element from the DOM
//And add replace the nav element it with a menu icon.
function showMenuIcon(){
    $('.menu-icon').on("click", function(){
        $('nav a').toggle();
    });
}

function displayText(){
    var text = ["Cedric", "Stephenie", "Tenesha"];
    for(var i = 0; i < text.length; i++){
        document.write(text[1]);
    }
}


$(document).ready(function(){
    $('.bilboard .bilboard-message').css({"margin-left": "0px", "transition":"all 1ms ease-in-out"});
});
