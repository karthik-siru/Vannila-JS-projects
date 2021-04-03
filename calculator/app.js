
//  the input  below  is the object of input .

const input = document.querySelector("input") ;

//  This function displays the entered number on to the input .
//  First input object is stored using document.querySelector
/*

  ******** WHat IS  querySelector ??***************

  So , this will basically selects the first object in the document , with class
  value as the passed value .

*/
// and to  append to it , we will  use +=  instead of = .
function display( number ){

  input.value += number ;
}

// The below function calculates the expression given in the input and keeps the result there itself

/*
    Note that , we passed every number as string in the display function .

    We will use the  eval function to  evaluate the expression , and keep them again in the input

    This , is simple , but we can do it in another way like taking one number and them adding them
    that will take a lot of  code , instead of that , i used eval() function simply .

*/

function calculate(){

  var value = input.value ;
  input.value = eval(value);
}


/*

  The  below function , clr ()  will reset the value in the input to nothing .

  Nothing  - "".


*/

function clr (){
  input.value = "";
}

// From , here onwards we will work on changing the backgorund .

/*
  So , let's store the possible values in hex_color representation in an array
  and randomly , pick six values and  join them to  form the colour
*/
const  colors = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];

/*
  We will select the Change_Background button object and store them in the constant btn

  By getElementById('id_of_background_changer_button')

  ran variable is a iterator and will be used to cover 6 digits .

*/
const btn = document.getElementById("bgcid");
var ran = 0;

/*

   Using EventListener , when changr_background_color button is pressed , we will execute the below function

   we will change the background to linear-gradient ( 145deg , "white" , generated hex-color  )
*/

btn.addEventListener("click" , function (){

  var hex_color = "#" ;

  for ( var i = 0; i<6;i++)
      hex_color += colors[generate_random_number()];

  document.body.style.background = 'linear-gradient('+ '-45deg ,'+ 'white' + ',' + hex_color + ')'  ;

})

/*
  The below function will generate a random number in the range [0, array-length ] .
*/
function generate_random_number(){

  return Math.floor( Math.random()*colors.length);
}
