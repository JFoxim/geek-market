$(document).ready(function() {
    $('.add-item-btn').on('click', function(event) {
        var btnLink = $(this).attr('link');
        console.log(btnLink);
        $.ajax({
            type: "POST",
            url: "/geekmarket/api/cart_items",
            async: false,
            data: {
                "id": btnLink
            }
        }).done(function() {
            alert("Товар добавлен в корзину");
        });
    });
});