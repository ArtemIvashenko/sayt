
    function loadGoods(){
        
        let out ='<div class ="chebur">';
            for (let key in goods){
                out+= '<div class ="productCart" >';
                out+= '<h3 data-id = "' +key+ '">' + goods[key]['name'] + '</h3>'; 
                out+= '<p>' + goods[key]['description']+ '</p>';
                out+= '<img class="cheburFoto" src="'+goods[key].images +'">';
                out+= '<h> Цена :'+ goods[key]['cost'] + 'грн</h>';
                out+= '<button class ="btnCart" goods-art ="' +key+ '"> Добавить в корзину </button>';
                out+= '</div>';
                result.push(goods[key]);
            }
        out+= '</div>';
        return out;
    
    }
    
    let result = [];
   
 //   console.log(result);
    function loadHtml(){
       //let result = loadGoods();

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
         user.localStorageSet();
        
        showCart();



    }       
  /*  function user.checkCart(){
        if (localStorage.getItem('cart') !==null) {
            cart = JSON.parse(localStorage.getItem('cart'));
        }
    } */
   
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
                 
    } 
   
    function SelectCategory(){
        
        $('.categorys').click(function() {
            let articul = $(this).attr('data-id');
        console.log(articul);
            let out ='<div class ="chebur">';
             for (let key in goods){
                if (goods[key]['category'] == articul) {
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

    function searh (){
        $('.searhBtn').click(function(){
            let searhName = $('.searhName').val();
            let out ='<div class ="chebur">';
            for (let key in goods){
                let nameGoods = goods[key]['name'];
            
            if (nameGoods.toLowerCase().includes(searhName.toLowerCase()) == true){
                out+= '<div class ="productCart">';
                out+= '<h3>' + goods[key]['name'] + '</h3>';       
                out+= '<p>' + goods[key]['description']+ '</p>';
                out+= '<img class="cheburFoto" src="'+goods[key].images +'">';
                out+= '<h> Цена :'+ goods[key]['cost'] + 'грн</h>';
                out+= '<button class ="btnCart" goods-art ="' +key+ '"> Добавить в корзину </button>';
                out+= '</div>';
            } 
        }
        out+= '</div>';
             $('.goods').html(out);
        $('.btnCart').on('click',addToCart);
        });
        
    }

    function messageAddToCart (){
           $('.btnCart').click(function(){
                $('.messageAddToCart').fadeIn(2000);
                $('.messageAddToCart').fadeOut(1500);            
           }); 
        }
    function searhDiv (){
        let out = '';
        $('.searhName').keydown(function(){
            let searhName = $('.searhName').val();
            
            for (let key in goods){
                let nameGoods = goods[key]['name'];
                 
                
                if (nameGoods.toLowerCase().includes(searhName.toLowerCase()) == true){
                    out = '<div class ="searhString">'+ nameGoods +'</div>';
                    
                    //$('.searhString').show();
                } 
            }
            $('.searhString').html(out);
        });
        
    }    
    function openGoods(){
        let out ='';
        
        $('h3').click(function(){
            let articul = $(this).attr('data-id');
            console.log(goods[articul]);
            alert(goods[articul]);
            for (goods[articul] in goods){
                console.log(goods[articul]);
            }
        })
    }
    

    
$(document).ready(function(){
    loadGoods();
    loadHtml();
    user.checkCart();
    showCart();
    SelectCategory();
    menuCategorys();
    searh();
    messageAddToCart();
    searhDiv();
    openGoods();
    
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

