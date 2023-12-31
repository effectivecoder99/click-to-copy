$('document').ready(function() {

$('#btn').click(function(){

    $('#text').select();
    document.execCommand("copy");
    $(this).addClass('bg')
    $('#copied').addClass('active')

    setTimeout(() => {
        $(this).removeClass('bg')
        $('#copied').removeClass('active') 
    }, 3000);
 
});






















});