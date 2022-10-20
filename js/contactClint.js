let client = 
        {
        "firstName":"",
        "name":"",
        "phone": ""
    }

function sendEmail(){
    let name = $('.name').val();
    let email = $('.email').val();
    let phone = $('.phone').val();
}
$(document).ready(function(){

    $('.sendEmail').on('click',sendEmail);
});
