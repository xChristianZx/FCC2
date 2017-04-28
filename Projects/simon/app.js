$(document).ready(function(){
    let $powerBtn = $('div.toggle.btn.btn-xs');
    
    if ($powerBtn.hasClass('.btn-primary')) {
        console.log('POWER ON!')
    } else if ($powerBtn.hasClass('.btn-default.off')){
        console.log('POWER OFFFFFF!')
    };
    

    $('.color-button').mousedown(function(){
        $(this).toggleClass('clicked');
    }).mouseup(function(){
        $(this).toggleClass('clicked');
    })

}); 