function radioBtnClick() {
    if($('.answer1').prop('checked')){
        $('.poll__answer1').css({'color': '#55B2F3'});
    }
    else {
        $('.poll__answer1').css({'color': '#2d2d2d'});
    }

    if($('.answer2').prop('checked')){
        $('.poll__answer2').css({'color': '#55B2F3'});
    }
    else {
        $('.poll__answer2').css({'color': '#2d2d2d'});
    }

    if($('.answer3').prop('checked')){
        $('.poll__answer3').css({'color': '#55B2F3'});
    }
    else {
        $('.poll__answer3').css({'color': '#2d2d2d'});
    }

    if($('.answer4').prop('checked')){
        $('.poll__answer4').css({'color': '#55B2F3'});
    }
    else {
        $('.poll__answer4').css({'color': '#2d2d2d'});
    }
}