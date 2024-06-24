// script.js
$(document).ready(function() {
    $('#booking-form').submit(function(event) {
        event.preventDefault();
        var formData = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: '/api/book',
            data: formData,
            success: function(data) {
                console.log(data);
                alert('Booking successful!');
            },
            error: function(xhr, status, error) {
                console.log(error);
                alert('Error booking: ' + error);
            }
        });
    });
});