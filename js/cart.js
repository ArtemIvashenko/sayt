let cart = {};

let goods = 
        {
    "12568" : {
        "name": "Чебурек с телятиной",
        "cost": 65,
        "description":"Чебурек с телятиной",
        "category": "eat",
        "images":"img/cheburek.jpg"
    },
    "13568" : {
        "name": "Чебурек со свининой",
        "cost": 65,
        "description":"Чебурек со свинины",
        "category": "eat",
        "images":"img/cheburek.jpg"
    },
    "14568" : {
        "name": "Чебурек с курицей",
        "cost": 65,
        "description":" Чебурек с филе курици",
        "category": "eat",
        "images":"img/cheburek.jpg"
    },
    "15568" : {
        "name": "Сыр",
        "cost": 10,
        "description":"Добавление сыра",
        "category": "eat",
        "images":"img/chees.jpg" 
    },
    "16568" : {
        "name": "Соус острый",
        "cost": 10,
        "description":"Соус красный 70грм",
        "category": "eat",
        "images":"img/sousred.jpg" 
    },
    "17568" : {
        "name": "Соус чесночный",
        "cost": 10,
        "description":"Соус чесночный 70грм",
        "category": "eat",
        "images":"img/sousWhite.jpg" 
    },
    "18568": {
        "name": "Coca-cola",
        "cost": 30,
        "description": "Coca-cola 0.5l",
        "category": "water",
        "images": "img/cola.jpg"
    }
};
    function checkCart(){
        if (localStorage.getItem('cart') !==null) {
            cart = JSON.parse(localStorage.getItem('cart'));
        }
    } 
    console.log(cart);
    
    function showCart(){
        let cartIm = 0;
       if ($.isEmptyObject(cart)){
        $('.myCart').html('Корзина пуста');
        $('.cartnumber').html(cartIm);
       } else {

        let cartOut = '';
        let result = 0;
        for (let key in cart){
            cartOut+= '<button class="btnDelGoods" btnDel ="' +key+ '">X</button>';
            
            cartOut+= '<img class="fotoCartGoods"  src="'+goods[key].images +'">';
            cartOut+= '<div class="nameCartGoods">';
            cartOut+='<h3>' + goods[key]['name'] + '</h3>';
            cartOut+= '</div >';
            cartOut+= '<div class ="input-number">';
            cartOut+= '<div class ="input-number_minus" minus="'+key+'">-</div>';
            cartOut+='<h> '+ cart[key] + ' </h>';
            cartOut+= '<div class ="input-number_plus" plus = "'+key+'">+</div>';
            cartOut+= '</div>';     
            cartOut+='<h> Цена :'+ goods[key]['cost'] + '</h>';
            cartOut+='<h> Итого:' + cart[key] * goods[key]['cost'] +'</h>';
            result+= + cart[key] * goods[key]['cost'] ;
            cartOut+='<br>';
            cartIm +=cart[key];
            console.log(result); 
         }
               cartOut+= '<div class="done" >'; 
               cartOut+='<h3> Сумма заказа:' +result+'</h3>';
               cartOut+= '<button class="btnDone" >Заказать </button>'; 
               cartOut+= '</div>'; 
           
               
                   $('.cartnumber').html(cartIm);
                  $('.myCart').html(cartOut);
                  $('.input-number_plus').on('click', plusGoods);
                  $('.input-number_minus').on('click', minusGoods);
                  $('.btnDelGoods').on('click', delGoodsCart);
                  $('.btnDone').on('click', orderGoods);
    } 
}
    

    function plusGoods(){
            let articul = $(this).attr('plus');
        cart[articul]++;
        localStorage.setItem('cart',JSON.stringify(cart));
        showCart();
    }
    function minusGoods(){
        let articul = $(this).attr('minus');
        cart[articul]--;
         if (cart[articul] ===0) {
            delete cart[articul];
        }
        localStorage.setItem('cart',JSON.stringify(cart));
        showCart();
    }

    function delGoodsCart(){
        let articul = $(this).attr('btnDel');
        delete cart[articul];
         showCart();
         localStorage.setItem('cart',JSON.stringify(cart));
    

    }
    function orderGoods(){
        
         window.location.href ='file:///home/artem/test/sayt/order.html';
    }

      $(document).ready(function(){
        checkCart();
        showCart();
        $('.logo').click(function() {
        window.location.href ='file:///home/artem/test/sayt/index.html';
    });
        $('#returnOrder').click(function() {
        window.location.href ='file:///home/artem/test/sayt/index.html';
    });
      });
