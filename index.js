

var numberOfNumbers = document.querySelectorAll(".number").length;

for (var i = 0; i < numberOfNumbers; i++) {

    document.querySelectorAll(".number")[i].addEventListener("click", function() {
        //var number = document.getElementByClass('.number');
        var greys = document.querySelectorAll(".number"), j;

        for (var j = 0; j < greys.length; ++j) {
            greys[j].style.backgroundColor = "#212831";
        }
        this.style.backgroundColor = 'gray';

        $(this).addClass("selected");
    });

}

$(document).ready(function(){
    
    $(".submit-button").on("click",function(){
        var e = $(".selected")
        var x = e.text()[0]
        $(".rating").hide();
        $(".final-rating").text("You selected " + x + " out of 5");
        $(".thankyou").css('visibility', 'visible');
        
    });
    
});

