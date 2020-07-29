$(function (){
    //обязательные поля
    get_required(); 

    $('#button_sign_up').click(function(){
        click_sign_up();
    });
});

function click_sign_up()
{
    var sign_up_url = url_backend + "accounts/registration/";
    var data_sign_up = {};
    get_data(data_sign_up);

    $.ajax({
    type: 'POST',
    url: sign_up_url,
    dataType: 'JSON',
    timeout: timeout_backend,
    data: data_sign_up,
    success: function(data){
        if (data == 'Registration fail') { 
            alert('Ошибка регистрации');
        } 
        else { 
            location.href = '/www_data/data/';
        }
    },
    error: function(request, error){
        if (error == "timeout") {
            alert(error_timeout);
        }
        else {
            alert(error_default);
        }
    }
    });
}

function get_data(data_sign_up)
{
    data_sign_up['username'] = $('#username').val();
    data_sign_up['email'] = $('#email').val();
    data_sign_up['password'] = $('#password').val();
}

function get_required()
{
  $( "#username" ).prop( "required", true);
  $( "#email" ).prop( "required", true);
  $( "#password" ).prop( "required", true);
}
