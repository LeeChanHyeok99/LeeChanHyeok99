$(document).ready(function(){

    let ht = $(window).height()
    console.log(ht)
    
    $('section').height(ht)
    
    $(window).resize(function(){
        let ht = $(window).height();
          
        $('section').height(ht)
        });
    


$('.con4_menu li').eq(0).click(function(){

 let i =$(this).index()
console.log(i)

$('.con4 .inner02').removeClass('on')
$('.con4 .inner03').removeClass('on')
$('.con4 .inner01').addClass('on')


})

$('.con4_menu li').eq(1).click(function(){

    let i =$(this).index()
console.log(i)

$('.con4 .inner01').removeClass('on')
$('.con4 .inner03').removeClass('on')
$('.con4 .inner02').addClass('on')


})


$('.con4_menu li').eq(2).click(function(){

    let i =$(this).index()
console.log(i)

$('.con4 .inner01').removeClass('on')
$('.con4 .inner02').removeClass('on')
$('.con4 .inner03').addClass('on')


})









})