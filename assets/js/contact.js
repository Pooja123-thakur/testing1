// Contact Form Validation
$(document).ready(function() {
    // Form submission
    $('.contact-form').on('submit', function(e) {
        e.preventDefault();
        
        // Clear previous errors
        $('.form-group').removeClass('error');
        $('.error-message').hide();
        
        let isValid = true;
        
        // Validate required fields
        $('#name').val().trim() === '' ? showError($('#name'), 'Name is required') : isValid = isValid;
        $('#email').val().trim() === '' ? showError($('#email'), 'Email is required') : isValid = isValid;
        $('#message').val().trim() === '' ? showError($('#message'), 'Message is required') : isValid = isValid;
        
        // Validate email format
        if ($('#email').val().trim() !== '') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test($('#email').val())) {
                showError($('#email'), 'Please enter a valid email address');
                isValid = false;
            }
        }
        
        if (isValid) {
            // Show loading state
            const submitBtn = $(this).find('button[type="submit"]');
            submitBtn.addClass('loading').text('Sending...');
            
            // Simulate form submission (replace with actual AJAX call)
            setTimeout(() => {
                submitBtn.removeClass('loading').text('Send Message');
                showSuccessMessage('Thank you! Your message has been sent successfully.');
                $(this)[0].reset();
            }, 2000);
        }
    });
    
    function showError(field, message) {
        field.addClass('error');
        field.after(`<div class="error-message">${message}</div>`);
    }
    
    function showSuccessMessage(message) {
        $('.contact-form').append(`<div class="success-message">${message}</div>`);
        setTimeout(() => {
            $('.success-message').fadeOut();
        }, 5000);
    }
    
    // Google Maps interaction
    $('.map-wrapper').on('click', function() {
        $(this).addClass('active');
    });
    
    // Contact info cards hover effect enhancement
    $('.contact-info-card').hover(
        function() {
            $(this).find('.icon').css('transform', 'rotate(5deg)');
        },
        function() {
            $(this).find('.icon').css('transform', 'rotate(0deg)');
        }
    );
});