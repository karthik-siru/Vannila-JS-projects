var nav_status = 0 ;

const btn       = document.getElementById('btn');
const container = document.getElementsByClassName('main_container');

btn.addEventListener("click" , function (){

  if (nav_status == 0){

    $('.main_container').css('width' , '40vh')

    $('a').css('display', 'block');
    nav_status = 1 ;
  }
  else{

    $('.main_container').css('width' , '0vh')
    $('a').css('display', 'none');
    nav_status = 0 ;
  }

});
