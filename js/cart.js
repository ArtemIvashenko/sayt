let cart = {};
let goods = 
        {
    "12568" : {
        "name": "Чебурек с телятиной",
        "cost": 65,
        "description":"Чебурек с телятиной",
        "images":"img/cheburek.jpg"
    },
    "13568" : {
         "name": "Чебурек со свининой",
        "cost": 65,
        "description":"Чебурек со свинины",
        "images":"img/cheburek.jpg"
    },
    "14568" : {
        "name": "Чебурек с курицей",
        "cost": 65,
        "description":" Чебурек с филе курици",
        "images":"img/cheburek.jpg"
    },
    "15568" : {
        "name": "Сыр",
        "cost": 10,
        "description":"Добавление сыра",
        "images":"img/chees.jpg" 
    },
    "16568" : {
        "name": "Соус острый",
        "cost": 10,
        "description":"Соус красный 70грм",
        "images":"img/sousred.jpg" 
    },
    "17568" : {
        "name": "Соус чесночный",
        "cost": 10,
        "description":"Соус чесночный 70грм",
        "images":"img/sousWhite.jpg" 
    }
};
checkCart();
showCart();
    function checkCart(){
        if (localStorage.getItem('cart') !==null) {
            cart = JSON.parse(localStorage.getItem('cart'));
        }
    } 
    console.log(cart);
    
    function showCart(){
        let cartOut = '';
       //  let count = cart[articul];

        for (let key in cart){
            cartOut+= '<button class="btnDelGoods">X</button>';
            
            cartOut+= '<img class="fotoCartGoods"  src="'+goods[key].images +'">';
            cartOut+='<h3>' + goods[key]['name'] + '</h3>';
            cartOut+= '<div class ="input-number">';
            cartOut+= '<div class ="input-number_minus" goods-art="'+key+'">-</div>';
            cartOut+='<h> '+ cart[key] + '</h>';
            cartOut+= '<div class ="input-number_plus" data-id ="sis23">+</div>';
            cartOut+= '</div>';
            cartOut+='<h> Цена :'+ goods[key]['cost'] + '</h>';
            cartOut+='<h> Итого:' + cart[key] * goods[key]['cost'] +'</h>';
            cartOut+='<br>';
            
         }
          $('.myCart').html(cartOut);
               //   $('.input-number_minus').on('click', minusGoods);
               //   $('.input-number_plus').on('click', plusGoods);
    } 
