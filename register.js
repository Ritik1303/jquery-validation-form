var check = (function () {
    jQuery.validator.addMethod("noSpace", function (value, element) {
        return value == '' || value.trim().length != 0;
    }, "Spaces not allowed.");

    var registrationForm = $('#registration');
    if (registrationForm.length) {
        registrationForm.validate({
            rules: {
                //username is the name of the textbox
                username: {
                    required: true,
                },
                email: {
                    required: true,
                    email: true
                },
                password: {
                    required: true
                },
                confirm: {
                    required: true,
                    equalTo: '#password'
                },
                fname: {
                    required: true,
                    noSpace: true
                },
                lname: {
                    required: true,
                    noSpace: true
                },
                gender: {
                    required: true
                },
                hobbies: {
                    required: true
                },
                country: {
                    required: true
                },
                state: {
                    required: true
                },
                city: {
                    required: true
                },
                mobile: {
                    required: true
                },
                address: {
                    required: true
                }
            },
            messages: {
                username: {
                    //error message for the required field
                    required: 'Please enter username!'
                },
                email: {
                    required: 'Please enter email!',
                    //error message for the email field
                    email: 'Please enter valid email!'
                },
                password: {
                    required: 'Please enter password!'
                },
                mobile: {
                    required: 'Please enter mobile number'
                },
                confirm: {
                    required: 'Please enter confirm password!',
                    equalTo: 'Please enter same password!'
                },
                hobbies: {
                    required: 'Select atleast one.'
                },
                fname: {
                    required: 'Please enter first name!'
                },
                lname: {
                    required: 'Please enter last name!'
                },
                country: {
                    required: 'Please select country!'
                },
                state: {
                    required: 'Please enter state!'
                },
                city: {
                    required: 'Please enter city!.'
                },
                address: {
                    required: 'Please enter address!'
                }
            },
            errorPlacement: function (error, element) {
                if (element.is(":radio")) {
                    error.appendTo(element.parents('.gender'));
                }
                else if (element.is(":checkbox")) {
                    error.appendTo(element.parents('.hobbies'));
                }
                else {
                    error.insertAfter(element);
                }

            }
        });
    }
    return {
        check: check,
    };
})();