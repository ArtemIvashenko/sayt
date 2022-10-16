let client = 
        {
        "firstName":"",
        "name":"",
        "phone": ""
    }
function go() {
    let contactClent ='';
        contactClent+= '<input class="inputName" placeholder="Фамилия">' + client.firstName+ '</input>';
        contactClent+= '<input class="inputName" placeholder="Имя">' + client.name+ '</input>';
        contactClent+= '<input class="inputName" placeholder="Телефон">' + client.phone+ '</input>';
       
         
         $('.order').html(contactClent);
         
}
$(document).ready(function(){
    go();
});
