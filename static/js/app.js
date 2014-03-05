$(document).ready(function(){
    var formSubmitButton = $("#form_submit");

    formSubmitButton.on("click", function(event){
        event.preventDefault();
        $.ajax({
            url: "/",
            method: "POST",
            data: $("form#todo_list_form").serialize(),
        })
        .done(function(data){
           //alert(data);
           $("#list-container").html(data);
        }).fail(function(){
            alert('fail!!!');
        });
    });

    var getListsFromServer = function(){
        $.ajax({
            url: '/todo_lists/poll',
            method: "GET"
        }).done(function(data){
            console.log(data);
            $("#list-container").html(data);
        });
    };
    setInterval(getListsFromServer, 10000);
});