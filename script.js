$(document).ready(function(){
$('.input-number_minus').click( function () {
        let total = $(this).next();
        if (total.val() > 1) {
            total.val(+total.val() - 1);
        }
    });

    // Увеличиваем на 1
    $('.input-number_plus').click( function () {
        let total = $(this).prev();
        total.val(+total.val() + 1);
    });

    // Запрещаем ввод текста 
    document.querySelectorAll('.input-number_input').forEach(function (el) {
        el.addEventListener('keydown', function (event) {
            // Разрешаем: backspace, delete, tab
            if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 ||
                // Ctrl+A
                (event.keyCode == 65 && event.ctrlKey === true) ||
                // ← →
                (event.keyCode >= 35 && event.keyCode <= 39)) {
                return;
            } else {
                // Только цифры
                if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                    event.preventDefault();
                }
            }

        });
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
