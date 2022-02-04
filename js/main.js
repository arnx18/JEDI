
$(window).on("load", function () {

     $('#menu-home-button').click( function () {
        if ($('#pop-up-menu').length === 0) {
             $(this).prepend('<div id="pop-up-menu"><a class="nav-link" href="#">Portfolio</a><a class="nav-link" href="contact.html">Contact</a></div>');
        } else {
            $('#pop-up-menu').remove();
        }
    });

    $('#menu-contact-button').click( function () {
        if ($('#pop-up-menu').length === 0) {
             $(this).prepend('<div id="pop-up-menu"><a class="nav-link" href="index.html">Home</a><a class="nav-link" href="#">Portfolio</a></div>');
        } else {
            $('#pop-up-menu').remove();
        }
    });

    $('#submit-button').click( function () {  
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var message = document.getElementById('message').value;
        var red = document.getElementById('form-alert-red');
        if (name && email && phone && message) {
            alert("Message sent successfully!")
            if (red) $('#form-alert-red').remove();
        } else {
            if (!red) $('.alert-wrapper').append('<div id="form-alert-red" class="alert alert-danger text-center d-flex justify-content-center align-items-center" role="alert"><strong>Caution!</strong> All fields required!</div>');
        }          
    });
    
});