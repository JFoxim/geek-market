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

    $('#btnSavePhoneAndAddress').on('click', function(event) {
       $.ajax({
          type: "PUT",
          url: "/geekmarket/api/cart/addAddressAndPhone",
          async: false,
          data: {
            'address': $('#fieldAddress').val(),
            'phone': $('#fieldPhone').val()
          }
       });
    });

    $('#payBtn').on('click', function(event) {
      $.post("/geekmarket/paypal/make/payment", { sum: "10" });
    });

    $('.removeBtn').on('click', function(event) {
		var studentId = $(this).attr('entryIndex');
		$.get("/students/remove/" + studentId);
		location.reload();
	});

	$('#consoleTestBtn').on('click', function(event) {
		console.log($('#myInput').val());
	});

	$('#testBtn').on('click', function(event) {
        event.preventDefault();
        console.log('111' + 2);
		$.get("/hello").done(function() {
		    alert("AAA");
		});
	});

    $('.myTableRow').on('click', function(event) {
                            // event.preventDefault();
                            console.log($(this).attr('entryIndex'));
                    	});

	$('.table .editBtn').on('click', function(event) {
		event.preventDefault();
		var href = $(this).attr('href');		
		$.get(href, function(book, status) {
			$('.myForm #id').val(book.id);
			$('.myForm #title').val(book.title);
			$('.myForm #author').val(book.author);
		});		
		$('.myForm #editModal').modal();
	});
	
	$('.addNewBookBtn').on('click', function(event) {
		event.preventDefault();		
		var href = $(this).attr('href');		
		$.get(href, function(book, status) {
			$('.myForm #id').val(book.id);
			$('.myForm #title').val(book.title);
			$('.myForm #author').val(book.author);
		});	
		$('.myForm #editModal').modal();
	});



});