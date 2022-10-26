class Cart {


    checkCart(){
        if (localStorage.getItem('cart') !==null) {
            cart = JSON.parse(localStorage.getItem('cart'));
        }
    } 
    
    
    showCart(){
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
                  $('.input-number_plus').on('click', user.plusGoods);
                  $('.input-number_minus').on('click', user.minusGoods);
                  $('.btnDelGoods').on('click', user.delGoodsCart);
                  $('.btnDone').on('click', user.orderGoods);
    } 
}
    

    plusGoods(){
            let articul = $(this).attr('plus');
        cart[articul]++;
        user.localStorageSet();
        user.showCart();
    }
    minusGoods(){
        let articul = $(this).attr('minus');
        cart[articul]--;
         if (cart[articul] ===0) {
            user.delGoodsCart();
        }
        user.localStorageSet();
        user.showCart();
    }

    delGoodsCart(){
        let articul = $(this).attr('btnDel');
         delete cart[articul];
         user.showCart();
         user.localStorageSet();
    }
    orderGoods(){
        
         window.location.href ='file:///home/artem/test/sayt/order.html';
    }
    localStorageSet(){
        localStorage.setItem('cart',JSON.stringify(cart));
    }
}
let user = new Cart();
$(document).ready(function(){
    user.checkCart();
    user.showCart();
    $('.logo').click(function() {
        window.location.href ='file:///home/artem/test/sayt/index.html';
    });
    $('#returnOrder').click(function() {
        window.location.href ='file:///home/artem/test/sayt/index.html';
    });
});
