$(document).ready(function(){
    var formSubmitButton = $("#form_submit");

    //to add list
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

    // var getListsFromServer = function(){
    //     $.ajax({
    //         url: '/todo_lists/poll',
    //         method: "GET"
    //     }).done(function(data){
    //         console.log(data);
    //         $("#list-container").html(data);
    //     });
    // };
    //setInterval(getListsFromServer, 10000);

    //add list items
    var formItemSubmitButton = $("#form_submit1");

        formItemSubmitButton.on("click", function(event){
            event.preventDefault();
            $.ajax({
                url: "/todo_lists/" + $("#todo-list-id").val(),
                method: "POST",
                data: $("form#todo-item-form").serialize(),
            })
            .done(function(data){
               //alert(data);
               $("#todo-list").html(data);
            }).fail(function(){
                alert('fail!!!');
            });
    });

});