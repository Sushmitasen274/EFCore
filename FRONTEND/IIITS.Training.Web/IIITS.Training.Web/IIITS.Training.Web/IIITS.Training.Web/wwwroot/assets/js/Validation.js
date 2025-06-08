

$(document).ready(function () {
    $('input').attr('spellcheck', true);
    $('textarea').attr('spellcheck', true);
    /*DatePicker Placeholder Attribute Change*/
    $(".hasDatepicker,.datepicker").attr('placeholder', 'DD-MM-YYYY');


    $("input[type='text']").on('input', function () {
        var inputValue = $(this).val();
        if (inputValue[0] === ' ') {
            inputValue = inputValue.substring(1);
            $(this).val(inputValue);
        }
    });


    /*  $('.js-example-basic-single').select2();*/

    /*Label Text Replace*/


    $("table").addClass("display");
    $("#ExciseDutyRequired").val("");
    $("#AddExciseDutyRequired").val("");
    $("#PermitFees").val("");
    $("#Total").val("");

    /* $("#txtLength,#txtWidth").val("");*/
    $("#OccasionFees").val("");

    $(".txtFromDate").datepicker({
        dateFormat: "dd-M-yy",

        onSelect: function (date) {
            var dt2 = $('.txtToDate');
            var startDate = $(this).datepicker('getDate');
            var minDate = $(this).datepicker('getDate');
            dt2.datepicker('setDate', minDate);
            startDate.setDate(startDate.getDate() + 30);
            //sets dt2 maxDate to the last day of 30 days window
            dt2.datepicker('option', 'maxDate', startDate);
            dt2.datepicker('option', 'minDate', minDate);
            $(this).datepicker('option', 'minDate', minDate);
        }
    });
    $('.txtToDate').datepicker({
        dateFormat: "dd-M-yy"
    });

    $(".numbers").on("input", function () {
        var inputValue = $(this).val();
        // Remove leading zeros from the input
        inputValue = inputValue.replace(/^0+/, '');
        // Check if the input is a valid number starting from 1 to 9
        if (/^[1-9]\d*$/.test(inputValue)) {
            // Input starts with a digit from 1 to 9, followed by any number of digits (excluding zero)
            // Allow the input
            $(this).val(inputValue); // Update the input value without leading zeros
        } else {
            // Clear the input if it doesn't match the pattern
            $(this).val("");
        }
    });



    $(".alphanumeric").keypress(function (event) {
        return /[a-zA-Z0-9 ]/.test(String.fromCharCode(event.keyCode));
    });
    $(".alphabet").keypress(function (event) {
        return /[a-zA-Z ]/.test(String.fromCharCode(event.keyCode));
    });
    $('.allowDecimal').on('input', function (e) {
        // Get the current input value
        var value = this.value;
        // Remove any non-numeric and non-decimal characters
        value = value.replace(/[^0-9.]/g, '');
        // Replace multiple consecutive dots with a single dot
        value = value.replace(/(\..*)\./g, '$1');
        // Update the input field value
        this.value = value;
        // Prevent the input of alphabetic characters
        if (e.key.match(/[^0-9.]/)) {
            e.preventDefault();
        }
    });
    $('.allowDecimal,.numbers,.alphabet,.pin-input,.gst-input,.pan-input,.address-input,.aadhar-input,.mobile-input,.email-input').on('paste', function (e) {
        // Prevent the paste action
        e.preventDefault();
    });
    $(".hasDatepicker").keypress(function (e) {
        e.preventDefault();
    });
    $("button i").removeClass('fa-file');

    $("button i").removeClass('fa-plus');
    $("button i").removeClass('fa-exchange');
    $("button i").removeClass('fa-delete');
    $(".datepicker").datepicker();
    $('table').wrap('<div class="table-responsive"></div>');

    //Validation for Email ID
    $('.email-input').on('input', function (e) {
        const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        const email = $(this).val();

        const message = $(this).next('.validation-message');

        if ($(this).val().length === 0 && e.which === 32) {
            e.preventDefault();
        }

        if (emailPattern.test(email)) {
            message.text('Valid email address ');
            /* message.removeClass('error-message');*/
            message.removeClass('text-danger error-message');
            return true;
        } else {
            message.text('Invalid email address Ex:xyz@gmail.com');
            message.addClass('error-message');
            return false;

        }
    });

    //Validation for Mobile number
    $('.mobile-input').on('keypress', function (e) {

        const mobilePattern = /^[6-9]\d{0,9}$/; // Indian mobile numbers start with 6, 7, 8, or 9 and have up to 10 digits
        const inputValue = $(this).val() + e.key;
        const isValid = mobilePattern.test(inputValue);
        if ($(this).val().length === 0 && e.which === 32) {
            e.preventDefault();
        }
        if (!isValid) {
            e.preventDefault();
        }
    });

    //Validation for Adhar number
    $('.aadhar-input').on('keypress', function (e) {

        const aadharPattern = /^\d{0,12}$/; // Aadhar numbers have 12 digits
        const inputValue = $(this).val() + e.key;
        const isValid = aadharPattern.test(inputValue);
        if ($(this).val().length === 0 && e.which === 32) {
            e.preventDefault();
        }
        if (!isValid) {
            e.preventDefault();
        }
    });


    //Validation for Address
    //$('.address-input').on('input', function () {
    //    const addressPattern = /^[a-zA-Z0-9\s,.'-]*$/;
    //    const address = $(this).val();

    //    const message = $(this).next('.validation-message');

    //    if (addressPattern.test(address)) {
    //        message.text('Valid address');
    //        /*   message.removeClass('error-message');*/
    //        message.removeClass('text-danger error-message');
    //        return true;
    //    } else {
    //        message.text('Invalid address');
    //        message.addClass('error-message');
    //        return false;

    //    }
    //});
    $('.address-input').on('input', function () {
        const addressPattern = /^[a-zA-Z0-9\s,.'-]*$/;
        const address = $(this).val();

        const message = $(this).next('.validation-message');

        if (address === '') {
            message.text('Please Enter Address');
            message.addClass('text-danger error-message');
            return false;
        } else if (addressPattern.test(address)) {
            message.text('Valid address');
            message.removeClass('text-danger error-message').addClass('text-success');
            return true;
        } else {
            message.text('Invalid address');
            message.addClass('text-danger error-message');
            return false;
        }
    });

    //Validation for PAN Number
  

    $('.pan-input').on('input', function (e) {
       
        const inputValue = $('.pan-input').val().toUpperCase();
        $(this).val(inputValue);
        const isValid = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(inputValue);
        const validationMessage = $(this).next('.validation-message');
        if ($(this).val().length === 0 && e.which === 32) {
            e.preventDefault();
        }
        if (isValid) {
            validationMessage.text('Valid PAN number').css('color', 'green');
            validationMessage.removeClass('text-danger error-message');
            return true;

        } else {
            validationMessage.text('Invalid PAN number Ex:QWERT2313R').css('color', 'red');
            $(".pan-input").focus();
            return false;
        }
    });

    $('.ifsc-input').on('input', function () {

        const inputValue = $(this).val().toUpperCase();
        $(this).val(inputValue);
        const isValid = /^[A-Z]{4}0[A-Z0-9]{6}$/.test(inputValue);
        const validationMessage = $(this).next('.validation-message');
        if ($(this).val().length === 0 && e.which === 32) {
            e.preventDefault();
        }
        if (isValid) {
            validationMessage.text('Valid IFSC Code').css('color', 'green');
            validationMessage.removeClass('text-danger error-message');
            return true;

        } else {
            validationMessage.text('Invalid IFSC Code Ex:SBIN0005943').css('color', 'red');
            return false;
        }


    });

    $('.gst-input').on('keypress', function (e) {


        if ($(this).val().length === 0 && e.which === 32) {
            e.preventDefault();
        }
    });

    $('.pin-input').on('keypress', function (e) {
        if ($(this).val().length === 0 && e.which === 32) {
            e.preventDefault();
        }
    });
    $('.tin-input').on('keyup', function () {
        const inputValue = $(this).val();
        const sanitizedValue = inputValue.replace(/[^A-Z0-9]/g, ''); // Remove non-alphanumeric characters and lowercase letters
        $(this).val(sanitizedValue);
        validateTIN(sanitizedValue, $(this).next('.validation-message'));
    });

});

//Validation for PAN Number
//const panInputs = document.querySelectorAll('.pan-input');
//panInputs.forEach(function (input) {
//    input.addEventListener('input', function () {
//        const inputValue = this.value.toUpperCase();
//        const isValid = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(inputValue);
//        const validationMessage = this.nextElementSibling;

//        if (isValid) {
//            validationMessage.textContent = 'Valid PAN number';
//            validationMessage.style.color = 'green';
//            return true;
//        } else {
//            validationMessage.textContent = 'Invalid PAN number';
//            validationMessage.style.color = 'red';
//            return false;
//        }
//    });
//});



function validateTIN(inputValue, validationMessage) {
    if (inputValue === '') {
        validationMessage.text('Please Enter TIN No').css('color', 'red');
        validationMessage.addClass('text-danger error-message');
    } else if (inputValue.length !== 11) {
        validationMessage.text('TIN No must be 11 characters').css('color', 'red');
        validationMessage.addClass('text-danger error-message');
    } else {
        validationMessage.text('Valid TIN No').css('color', 'green');
        validationMessage.removeClass('text-danger error-message');
    }
}





//Validation for GST
const gstInputs = document.querySelectorAll('.gst-input');
gstInputs.forEach(function (input) {
    input.addEventListener('change', function () {
        const inputValue = this.value.toUpperCase();
        $(this).val(inputValue);
        /* const isValid = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9]{1}[Z]{1}[0-9]{1}$/.test(inputValue);*/
        const isValid = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(inputValue);
        const validationMessage = this.nextElementSibling;

        if (isValid) {
            validationMessage.textContent = 'Valid GST number';
            validationMessage.style.color = 'green';
            validationMessage.classList.remove("text-danger", "error-message");
            return true;
        } else {
            validationMessage.textContent = 'Invalid GST number Ex:22AAAAA0000A1Z5';
            validationMessage.style.color = 'red';
            $(".gst-input").focus();
          //  $(".gst-input").text('');
            return false;
        }
    });
});

//Validation for PIN
const PINInputs = document.querySelectorAll('.pin-input');
PINInputs.forEach(function (input) {
    input.addEventListener('input', function () {
        const inputValue = this.value.toUpperCase();
        const isValid = /^\d{6}$/.test(inputValue);
        const validationMessage = this.nextElementSibling;

        if (isValid) {
            validationMessage.textContent = 'Valid PIN number';
            validationMessage.style.color = 'green';
            validationMessage.classList.remove("text-danger", "error-message");
            return true;
        } else {
            validationMessage.textContent = 'Invalid PIN number Ex:577417';
            validationMessage.style.color = 'red';
            return false;
        }
    });
});




