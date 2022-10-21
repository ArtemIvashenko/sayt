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
/*let category = {
    "eat": {
        "category": "eat"
    },
    "water": {
        "category":"water"
    }
}*/

    function loadGoods(){
        let out ='<div class ="chebur">';

            for (let key in goods){
                


                out+= '<div class ="productCart">';
                out+= '<h3>' + goods[key]['name'] + '</h3>'; 
                out+= '<p>' + goods[key]['description']+ '</p>';
                out+= '<img class="cheburFoto" src="'+goods[key].images +'">';
                out+= '<h> Цена :'+ goods[key]['cost'] + 'грн</h>';
                out+= '<button class ="btnCart" goods-art ="' +key+ '"> Добавить в корзину </button>';
                out+= '</div>';
            
              //  console.log(out);
              //  console.log(goods);
             

            }
        out+= '</div>';

        $('.goods').html(out);
        $('.btnCart').on('click',addToCart);
        
    }
    
    function addToCart(){
         let articul = $(this).attr('goods-art');
         if (cart[articul] !== undefined){
             cart[articul]++;
             console.log(articul);
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
        let cartIm = 0;

        for (let key in cart){
             cartOut+='<div class"cartGoods">';
             cartOut+= '<img class="fotoCartGoods"  src="'+goods[key].images +'">';
             cartOut+='<h3>' + goods[key]['name'] + '</h3>';
             cartOut+='<h> Цена :'+ goods[key]['cost'] + '</h>';
             cartOut+='<h> Количество :'+ cart[key] + '</h>';
             cartOut+= '<div class ="input-number">';
             cartOut+= '<div class ="input-number_minus" minus="'+key+'">-</div>';
             cartOut+= '<div class ="input-number_plus" plus = "'+key+'">+</div>';
             cartOut+= '</div>';
             cartIm +=cart[key];
             cartOut+='</div>';
         }
          
          
          $('.cartnumber').html(cartIm);
                  $('.input-number_minus').on('click', minusGoods);
                  $('.input-number_plus').on('click', plusGoods);
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
    function SelectCategory(){
        
        $('.categorys').click(function() {
            let articul = $(this).attr('data-id');
        console.log(articul);
            let out ='<div class ="chebur">';
             for (let key in goods){
                if (goods[key]['category']== articul) {
                    out+= '<div class ="productCart">';
                out+= '<h3>' + goods[key]['name'] + '</h3>';       
                out+= '<p>' + goods[key]['description']+ '</p>';
                out+= '<img class="cheburFoto" src="'+goods[key].images +'">';
                out+= '<h> Цена :'+ goods[key]['cost'] + 'грн</h>';
                out+= '<button class ="btnCart" goods-art ="' +key+ '"> Добавить в корзину </button>';
                out+= '</div>';
                
                } 
                if (articul == ''){
                    return loadGoods();
                }
            }
            out+= '</div>';
            $('.goods').html(out);
        $('.btnCart').on('click',addToCart);
            
            

        });
    }

    function menuCategorys (){
        $('.menu').click(function() {
            $('.selectCategorys').slideToggle('slow');
        });
    }


    
$(document).ready(function(){
    loadGoods();
    checkCart();
    showCart();
    SelectCategory();
    menuCategorys();

    

    $('.cart').click(function() {
        if ($.isEmptyObject(cart)){
            alert('Корзина пуста');
            return;
        }

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
        let prevImage = $('img').eq(prevImageIndex);
        curryImage.fadeOut(500);
        curryImage.removeClass('now');
        prevImage.fadeIn(500);
        prevImage.addClass('now');
    });


});

