const  colors = [ "darkcyan" , "rebeccapurple" , "lightgreen" , "lightyellow" , "lightblue" ,"#24b370"];

const btn = document.getElementById("btn");
var v = document.getElementById("value");

btn.addEventListener("click" , function (){

  const randomnumber = generate_random_number();

  document.body.style.backgroundColor = colors[randomnumber];
  v.innerHTML  = colors[randomnumber];

})

function generate_random_number(){

  return Math.floor( Math.random()*colors.length);
}
