const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "images/item1.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "images/item2.jpg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "images/item3.jpg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "images/item4.jpg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "images/item5.jpg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "images/item6.jpg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "images/item7.jpg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "images/item8.jpg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "images/item9.jpg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];

  const section_menu =  document.querySelector(".section_menu");
  const section_btns =  document.querySelectorAll(".section_buttons");

  window.addEventListener("DOMContentLoaded",function(){
    display_menu_items(menu) ;
  });
  
  section_btns.forEach(function (btn){
        btn.addEventListener("click", function (e) {
            const category = e.target.innerText;

            // if condition is to make sure that , 
            // when user press in b/w btns not to get all button values 
            if (category.length < 10 ){

                const menuCategory = menu.filter(function (menuItem) {
                        if (menuItem.category === category) 
                            return menuItem;
                });
                if (category === "all") 
                    display_menu_items(menu);           
                else 
                    display_menu_items(menuCategory);
                
            }
            
        });
   })
  

  function display_menu_items (menu){

    let display_menu = menu.map(function (item) {

        return ` <article class="section_item">
        <div class="hover_effect">
            <img class="item_photo" src="${item.img}" alt="food-item">
        </div>
        <div class="item_text">
            <h2 class="item_name">${item.title}</h2>
            <h4 class="item_price">${item.price}</h4>
            <p class="item_detail">${item.desc}</p>
        </div>
    </article>`;

    });

    display_menu = display_menu.join("");

    section_menu.innerHTML = display_menu ;

  }