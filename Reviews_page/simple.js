
const reviews_list = [
{
  name : "Rendu_Gajula.Shekar",
  job : "Front-End-Dev",
  img : "https://media.kulfyapp.com/rqHxRb/rqHxRb.png",
  review : "Ee project choodataniki nijanga rendu kallu saripoledu .. chaala baga chesav  Karthik , keep going .  " ,
},
{
  name : "JayaSurya",
  job : "Music-Director",
  img : "https://i.imgflip.com/3acmmp.png",
  review : "Good, good , good  ee project ku naku oka prathyakamaina anubhandam undi , anyway wish you all the best"
},
{
  name : "BhattaChari",
  job : "Priest",
  img : "https://lyricalwoods.com/wp-content/uploads/2020/12/Adhurs-Movie-Brahmanandam-Scene-Meme-Template.jpg",
  review : "Choosara , sir veedi double actionuu , Online lo unna projects chesi , sontha vatilaga build up isthunnadu .. parama durmargudu sir veedu"
},
{
  name : "Darla",
  job : "Data-Analyst",
  img : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
  review : " Great Work Karthik , Hope you continue this legacy an dachieve great heights .Karthik ye thopu dammunte aapu"
}
];

const img    = document.getElementById("image");
const name   = document.getElementById("name");
const job    = document.getElementById("job");
const review = document.getElementById("review");

const prevbtn   = document.getElementById("prev");
const nextbtn   = document.getElementById("next");
const randombtn = document.getElementById("random");

let index_number = 0;

window.addEventListener( "DOMContentLoaded" , function(){

  change_review(index_number);
});

function change_review( index ){

  const item = reviews_list[index];
  img.src = item.img ;
  name.textContent = item.name ;
  job.textContent  = item.job ;
  review.textContent  = item.review ;
}

prevbtn.addEventListener("click" , function(){

  if ( index_number == 0 )
       index_number = 3 ;
  else
      index_number--;

  change_review(index_number);

});

nextbtn.addEventListener("click" , function(){

  if ( index_number == 3 )
       index_number = 0 ;
  else
      index_number++;

  change_review(index_number);

});

randombtn.addEventListener("click" , function(){

  index_number = get_random_number();
  change_review(index_number);

});

function get_random_number (){

  return Math.floor(Math.random() * reviews_list.length );

}
