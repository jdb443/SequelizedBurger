$(function() {
    $(".devour-burger").on("click", function(event) {
        var id = $(this).data("id");
        var eaten = $(this).data("eaten");
        var eatObj = {
            devoured: eaten
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: eatObj
        }).then(
            function() {
                console.log("Ate burger with id: " + id);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#new-burger").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "PUT",
            data: newBurger
        }).then(function() {
            console.log("Added another burger to the menu");
            location.reload();
        });
    });
    $('.devoured').on('click', function(event){
        const id= event.target.name
        $.ajax(`/api/burgers/${id}`, {
            method: 'DELETE',
            data: id
        });
        location.reload();
    });

});

// $(function () {

//     $('.tooltipped').tooltip({
//         exitDelay: 800,
//         html: 'Click me if you are hungry!',
//         position: 'left',
//         inDuration: 800,
//         outDuration: 800,

//     });
//     $('.tooltipped2').tooltip({
//         exitDelay: 800,
//         html: 'Carefull! It will be gone for good!',
//         position: 'right',
//         inDuration: 800,
//         outDuration: 800,

//     });
// });