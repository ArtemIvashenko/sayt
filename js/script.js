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


    function loadGoods(){
        let out ='<div class ="chebur">';
            for (let key in goods){
            
                out+= '<div class ="productCart">';
                out+= '<h3>' + goods[key]['name'] + '</h3>'; 
                out+= '<h> Цена :'+ goods[key]['cost'] + 'грн</h>';
                out+= '<p>' + goods[key]['description']+ '</p>';
                out+= '<img class="cheburFoto" src="'+goods[key].images +'">';
                out+= '<button class ="btnCart" goods-art ="' +key+ '"> Добавить в корзину </button>';
                out+= '</div>';
            
                console.log(out);
                console.log(goods);
            }
        out+= '</div>';
        $('.goods').html(out);
        $('.btnCart').on('click',addToCart);
       
    }
    
    function addToCart(){
         let articul = $(this).attr('goods-art');
         if (cart[articul] !== undefined){
             cart[articul]++;
         } else {
             cart[articul] = 1;
         }
         localStorage.setItem('cart',JSON.stringify(cart));
        showCart();
    }       
    function checkCart(){
        if (localStorage.getItem('cart') !==null) {
            cart = JSON.parse(localStorage.getItem('cart'));
        }
    } 
   
   function showCart(){
        let cartOut = '';
       //  let count = cart[articul];

        for (let key in cart){
             cartOut+='<div class"cartGoods">';
             cartOut+= '<img class="fotoCartGoods"  src="'+goods[key].images +'">';
             cartOut+='<h3>' + goods[key]['name'] + '</h3>';
             cartOut+='<h> Цена :'+ goods[key]['cost'] + '</h>';
             cartOut+='<h> Количество :'+ cart[key] + '</h>';
             cartOut+= '<div class ="input-number">';
             cartOut+= '<div class ="input-number_minus" goods-art="'+key+'">-</div>';
             cartOut+= '<input class ="input-number_input" type ="text" value ="1">';
             cartOut+= '<div class ="input-number_plus" data-id ="sis23">+</div>';
             cartOut+= '</div>';
             cartOut+='<br>';
             cartOut+='<h> Итого:' + cart[key] * goods[key]['cost'] +'</h>';
             cartOut+='</div>';
         }
          $('.cartGoods').html(cartOut);
                  $('.input-number_minus').on('click', minusGoods);
                  $('.input-number_plus').on('click', plusGoods);
    } 
    function minusGoods(){
        let total = $(this).next();
        if (total.val()>1) {
            total.val(+total.val()-1);
        }
    }

    function plusGoods(){
        let total = $(this).prev();
        total.val(+total.val() + 1);
    }
$(document).ready(function(){
    
    loadGoods();
    checkCart();
    showCart();
    

    $('.cart').click(function() {
        window.location.href ='file:///home/artem/test/sayt/cart.html';
    });
    
    
    $('.next').click(function (){
        let curryImage = $('.img.now');
        let curryImageIndex = $('.img.now').index();
        let nextImageIndex = curryImageIndex + 1;
        let nextImage = $('.img').eq(nextImageIndex);
        curryImage.fadeOut(500);
        curryImage.removeClass('now');        
            if (nextImageIndex == ($ ('.img:last').index()+1)){
                $('.img').eq(0).fadeIn(500);
                $('.img').eq(0).addClass('now');
            } else {
                nextImage.fadeIn(500);
                nextImage.addClass('now');
            }
        
    });
    $('.prev').click(function (){
        let curryImage = $('.img.now');
        let curryImageIndex = $('.img.now').index();
        let prevImageIndex = curryImageIndex - 1;
        let prevImage = $('.img').eq(prevImageIndex);
        curryImage.fadeOut(500);
        curryImage.removeClass('now');
        prevImage.fadeIn(500);
        prevImage.addClass('now');
    });


});

