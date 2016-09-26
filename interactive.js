/*
    Created by: Sujil Maharjan 
    Email: smaharj1@ramapo.edu
*/

$(document).ready(function() {

    $('.interactive-slide li span').hover(function() {
        var isHigh = $(this).hasClass('high');
        var isMedium = $(this).hasClass('medium');

        // If the skill is high, then turn the background to green and put the width to 100%
        if (isHigh) {
            $(this).css('background-color','#00C957').animate({
                width: '100%'
            }, 'slow')
        } else if (isMedium) {
            $(this).css('background-color','#FFA500').animate({
                width: '50%'
            }, "slow");
        } else {
            $(this).css('background-color','#1E90FF').animate({
                width: '30%'
            }, "slow");
        }
    });

});
