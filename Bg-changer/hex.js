const  colors = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];

const btn = document.getElementById("btn");
var v = document.getElementById("value");
var ran = 0;


btn.addEventListener("click" , function (){

  var hex_color = "#" ;

  for ( var i = 0; i<6;i++)
      hex_color += colors[generate_random_number()];

  document.body.style.backgroundColor = hex_color ;
  v.innerHTML  = hex_color;

})

function generate_random_number(){

  return Math.floor( Math.random()*colors.length);
}
