
    function loadGoods(){
        
        let out ='<div class ="chebur">';
            for (let key in goods){
                out += '<div class ="productCart" >';
                out += '<h3 data-id = "' +key+ '">' + goods[key]['name'] + '</h3>'; 
                out += '<p class="descriptionGoods">' + goods[key]['description']+ '</p>';
                out += '<img class="cheburFoto" src="'+goods[key].images +'">';
                out += '<h> Цена :'+ goods[key]['cost'] + 'грн</h>';
                out += '<button class ="btnCart" goods-art ="' +key+ '"> Добавить в корзину </button>';
                out += '</div>';
                
            }
        out += '</div>';
        return out;
    
    }
    
    function getGoodsItem(goods,key){
        let result = '';
        result += '<div class ="productCart" >';
                result += '<h3 data-id = "' +key+ '">' + goods[key]['name'] + '</h3>'; 
                result += '<p class="descriptionGoods">' + goods[key]['description']+ '</p>';
                result += '<img class="cheburFoto" src="'+goods[key].images +'">';
                result += '<h> Цена :'+ goods[key]['cost'] + 'грн</h>';
                result += '<button class ="btnCart" goods-art ="' +key+ '"> Добавить в корзину </button>';
                result += '</div>';
                return result;
    }
   
 //   console.log(result);
    function loadHtml(){
        $('.goods').html(loadGoods());
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
        cartUser.localStorageSet();
        showCart();
        messageAddToCart();
    }       
  /*  function Cart.checkCart(){
        if (localStorage.getItem('cart') !==null) {
            cart = JSON.parse(localStorage.getItem('cart'));
        }
    } */
   
   function showCart(){
        let cartOut = '';
        let cartIm = 0;

        for (let key in cart){
             cartOut +='<div class"cartGoods">';
             cartOut += '<img class="fotoCartGoods"  src="'+goods[key].images +'">';
             cartOut +='<h3>' + goods[key]['name'] + '</h3>';
             cartOut +='<h> Цена :'+ goods[key]['cost'] + '</h>';
             cartOut +='<h> Количество :'+ cart[key] + '</h>';
             cartOut += '<div class ="input-number">';
             cartOut += '<div class ="input-number_minus" minus="'+key+'">-</div>';
             cartOut += '<div class ="input-number_plus" plus = "'+key+'">+</div>';
             cartOut += '</div>';
             cartIm  +=cart[key];
             cartOut +='</div>';
         }
          
          
        $('.cartnumber').html(cartIm);
                 
    } 
   
    function SelectCategory(){
        
        $('.categorys').click(function() {
            let articul = $(this).attr('data-id');
            console.log(articul);
            let out ='<div class ="chebur">';
            for (let key in goods){
                if (goods[key]['category'] == articul) {
                    out += getGoodsItem(goods,key);
                } 
                if (articul == ''){
                    return loadHtml();
                }
            }
            out += '</div>';
            $('.goods').html(out);
            $('.btnCart').on('click',addToCart);
        });
    }

    function menuCategorys (){
        $('.menu').click(function() {
            $('.selectCategorys').slideToggle('slow');
        });
    }

    function searh (){
        $('.searhBtn').click(function(){
            let searhName = $('.searhName').val();
            let out ='<div class ="chebur">';
            for (let key in goods){
                let nameGoods = goods[key]['name'];   
                if (nameGoods.toLowerCase().includes(searhName.toLowerCase()) == true){
                    out+= getGoodsItem(goods,key);
                } 
            }
            out += '</div>';
            $('.goods').html(out);
            $('.btnCart').on('click',addToCart);
        });
        
    }

    function messageAddToCart (){
         
                $('.messageAddToCart').fadeIn(2000);
                $('.messageAddToCart').fadeOut(1500);            
        
        }
    function searhDiv (){
        $('.searhName').keydown(function(){
            let searhName = $('.searhName').val();
             let out = '<div class ="chebur">';
             if (searhName === ' ' || searhName.length <= 1){
                 loadHtml();
                 return;
            } 
            for (let key in goods){
                let nameGoods = goods[key]['name'];     
                if (nameGoods.toLowerCase().includes(searhName.toLowerCase()) == true){
                   out+= getGoodsItem(goods,key);
                } 
            }
            out += '</div>';
                $('.goods').html(out);
                $('.btnCart').on('click',addToCart);

        });
    }    

    function nextSlider(){
        $('.next').click(function  (event){
        listSliderInfinity();      
    });
    };
    function prevSlider(){
        $('.prev').click(function (){
        let curryImage = $('.now');
        let curryImageIndex = $('.now ').index()-1;
        let prevImageIndex = curryImageIndex - 1;
        let prevImage = $('.imgSl').eq(prevImageIndex);
        curryImage.fadeOut(500);
        curryImage.removeClass('now');
        prevImage.fadeIn(200);
        prevImage.addClass('now');
    });
    }
    function listSliderInfinity(){
        let curryImage = $('.now');
        let curryImageIndex = $('.now').index();
        
        let nextImageIndex = curryImageIndex +1;
        let nextImage = $('.imgSl').eq(curryImageIndex);
        curryImage.fadeOut(500);
        curryImage.removeClass('now');        
            if (nextImageIndex == ($('.imgSl:last').index()+1)){
                $('.imgSl').eq(0).fadeIn(200);
                $('.imgSl').eq(0).addClass('now');
            } else {
                nextImage.fadeIn(200);
                nextImage.addClass('now');
            }
        
    }
    

    
$(document).ready(function(){
    loadGoods();
    loadHtml();
    cartUser.check();
    showCart();
    SelectCategory();
    menuCategorys();
    searh();
    nextSlider();
    prevSlider();
    searhDiv();
    //setInterval(listSliderInfinity, 10000);
    $('.btnCart').on({
        mouseenter: function(){
            $(this).css('color', 'red');
        },
        mouseleave: function(){
            $(this).css('color', 'white');
        }
    });
    $('.cart').click(function() {
        if ($.isEmptyObject(cart)){
            alert('Корзина пуста');
            return;
        }
        window.location.href ='file:///home/artem/test/sayt/cart.html';
    });

    $('.logo').click(function() {
        window.location.href ='file:///home/artem/test/sayt/index.html';
    });

    $(window).scroll(function(){
        if ($(document).scrollTop() > 150){
            $('.topScroll').fadeIn();
            }else {
                $('.topScroll').fadeOut();
            }
        
    });

    $('.topScroll').click(function(){
        $(document).scrollTop(0);
    });

    $(window).scroll(function(){
        if ($(document).scrollTop() > 250){
            $('.menuBar').css({'position': ' fixed',  'background': 'green', });
        }if ($(document).scrollTop() < 50){
            $('.menuBar').css({'position': 'relative ',  'background': '', });
        }
    })
    

  
  

});

