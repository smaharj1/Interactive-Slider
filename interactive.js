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
            $(this).addClass('skill-high').animate({
                width: '100%'
            }, 'slow')
        } else if (isMedium) {
            $(this).addClass('skill-medium').animate({
                width: '50%'
            }, "slow");
        } else {
            $(this).addClass('skill-low').animate({
                width: '30%'
            }, "slow");
        }
    });

});