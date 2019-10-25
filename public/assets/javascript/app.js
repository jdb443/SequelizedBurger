// $(function() {
//     $(".devour-burger").on("click", function(event) {
//         var id = $(this).data("id");
//         var eaten = $(this).data("eaten");
//         var eatObj = {
//             devoured: eaten
//         };

//         $.ajax("/api/burgers/" + id, {
//             type: "PUT",
//             data: eatObj
//         }).then(
//             function() {
//                 console.log("Ate burger with id: " + id);
//                 location.reload();
//             }
//         );
//     });

//     $(".create-form").on("submit", function(event) {
//         event.preventDefault();

//         var newBurger = {
//             burger_name: $("#new-burger").val().trim()
//         };

//         $.ajax("/api/burgers", {
//             type: "PUT",
//             data: newBurger
//         }).then(function() {
//             console.log("Added another burger to the menu");
//             location.reload();
//         });
//     });
// });

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

$(function () {

    // Eat - move item to the devoured table
    $(".eat-btn").on("click", function (event) {
        var burger = {
            id : $(this).data("id")
        }

        console.log("Eat event for id: ", burger.id);

        // Send the POST request.
        $.ajax("/api/burgers/" + burger.id, {
            type: "PUT",
            data: burger
        }).then(
            function () {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    // Delete - remove item from database
    $(".delete-btn").on("click", function (event) {
        var burger = {
            id : $(this).data("id")
        }

        console.log("Delete event for id: ", burger.id);

        // Send the POST request.
        $.ajax("/api/burgers/" + burger.id, {
            type: "DELETE",
            data: burger
        }).then(
            function () {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    // Add - form entry POST event to add item to database
    $("#add-btn").on("click", function (event) {

        event.preventDefault();

        // Validation
        var burgerName =  $('input[name=burger-name]').val().trim();
        
        var burger = {
            burger_name: burgerName,
        }

<<<<<<< HEAD
        console.log("Add event for burger name: ", burger.burger_name + "\nEaten: " +  burger.devoured);

        // Send the POST request.
        $.ajax("/api/burgers/", {
            type: "POST",
            data: burger
        }).then(
            function () {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

});
=======
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
>>>>>>> 915b8c10e9ac2fec51788dac84a999a24302575c
