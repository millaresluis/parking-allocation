// $(document).on( 'turbolinks:load', function () {


// AOS.init();



// $('#order_frm, #order_edit_frm').formValidation({
//     framework: 'bootstrap',
//     icon: {
//     // valid: 'fa fa-check',
//     // invalid: 'fa fa-times',
//     // validating: 'fas fa-sync'
//     },
//     fields: {
//     'order[customer_name]': {
//         message: 'Invalid Customer Name',
//         validators: {
//         notEmpty: {
//             message: 'Customer Name is required'
//         }
//         }
//     },
//     'order[customer_address]': {
//         message: 'Invalid Address',
//         validators: {
//         notEmpty: {
//             message: 'Customer Address is required'
//         }
//         }
//     },
//     'order[customer_number]': {
//         message: 'Invalid Contact Number',
//         validators: {
//         notEmpty: {
//             message: 'Contact Number is required'
//         },
//         regexp: {
//             regexp:   /^[0-9]*$/,
//             message: 'Invalid Contact Number'
//         }

//         }
//     }
//     }
// }).on('success.form.fv', function(e) {
//     // Prevent form submission
//     e.preventDefault();
//     $.ajax({
//         url: String($(this).attr('action')),
//         type: 'post',
//         data:  new FormData(this),
//         contentType: false,
//         cache: false,
//         processData:false,
//         beforeSend: function(data) {
//             $('#submit_btn').attr("disabled", "disabled");
//             $('#submit_btn').addClass("disabled");
//             $('.btn-loading').removeClass('d-none');
//             $('.loading').fadeIn().css("display","inline-block");
//             },
//             success: function(data) {
//             },
//             complete: function(data){
//                 $('.btn-loading').addClass('d-none');
//                 $('.loading').fadeOut().css("display","none");
//                 },
//             error: function(data) {
//                 // code here
//             }
//     });
// });


// $('#upload_photo').on("change", function() {
//     if (this.files && this.files[0]) {
//     if(this.files[0].type.match('image.*')){
//         if(this.files[0].size < 10485760){
//         var reader = new FileReader();
//         var avatarFilename = $('.avatar-file-name');
//         var avatarImage = $('.frm-avatar');
//         reader.onload = function (e) {
//             $('.tapco_photo').attr('src', e.target.result);
//         };
//         avatarFilename.text(this.files[0].name);
//         reader.readAsDataURL(this.files[0]);
//         }else{
//         alert("Image Size is too big. Minimum size is 2MB.");
//         $(this).val("");
//         }
//     }else{
//         alert("You can only upload image file.");
//         $(this).val("");
//     }
//     }
//     $('#updatessubmit').removeClass('disabled');
//     $('#updatessubmit').prop('disabled', false);
//     var ctrl = $("#prod_thumb")
//     $(ctrl  ).css('border', 'none');
// });

// $('#product_status').select2({
//     theme: 'bootstrap-5',
//     tags: false,
//     placeholder: "Select Product Status",
//     width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
//     allowClear: false
// });

// autosize($('textarea'));

// toastr.options.closeButton = true;
// toastr.options.timeOut = 10000; // How long the toast will display without user interaction
// toastr.options.extendedTimeOut = 60; // How long the toast will display after a user hovers over it
// toastr.options.newestOnTop = true;
// toastr.options.preventDuplicates = true;
// // toastr.options.positionClass = "toast-bottom-right";

// //   toastr.options = {
// //   "closeButton": true,
// //   "hideDuration": "1000",
// //   "timeOut": "3000"
// // }


// //    var $preloader = $('.preloader');

// // if ($preloader) {
// //   $preloader.css('height', 0)
// //         setTimeout(
// //   function() 
// //   {
// //       $preloader.children().hide()
// //     }, 2000)
// //   }


// // for mobile number type and paste proof
// $('.numberValidation').on('propertychange input', function (e) {
//     var valueChanged_char = false;

//     if (e.type =='propertychange') {
//         valueChanged_char = e.originalEvent.propertyName=='value';
//     } else {
//         valueChanged_char = true;
//     }
//     if (valueChanged_char) {
//         // this.value = this.value.replace(/[-._`'"#%&,:;<>=@{}~\…\£\§\•\€\¥\$\(\)\*\+\/\\\?\[\]\^\|\₱]+/g, '');
//         this.value = this.value.replace(/[^\w\s]/gi, '')
//         this.value = this.value.replace(/[A-Za-z]/g, '');
//     }
// });

// // for mobile number type and paste proof
// $('.decimalValidation').on('propertychange input', function (e) {
//     var valueChanged_char = false;

//     if (e.type =='propertychange') {
//         valueChanged_char = e.originalEvent.propertyName=='value';
//     } else {
//         valueChanged_char = true;
//     }
//     if (valueChanged_char) {
//         // this.value = this.value.replace(/[-._`'"#%&,:;<>=@{}~\…\£\§\•\€\¥\$\(\)\*\+\/\\\?\[\]\^\|\₱]+/g, '');
//         // this.value = this.value.replace(/[^\w\s]/gi, '')
//         this.value = this.value.replace(/[^0-9.]/g, '');
//     }
// });





// $('.decimalValidation').keypress(function(e) {
//     var  allowed_chars_regex = /[0-9\.]+/;
//     if (!allowed_chars_regex.test(event.key)) {
//         event.preventDefault();
//     }
// });

// $('.chars_onlys').on('propertychange input',function(e) {
//     var  allowed_chars_regex = /[A-Za-z]+/;
//     if (!allowed_chars_regex.test(event.key)) {
//         event.preventDefault();
//     }
// });

// $('.chars_only').on('propertychange input', function (e) {
//     var valueChanged = false;
//     var  allowed_chars_regex = /[A-Za-z]+/;

//     if (e.type =='propertychange') {
//         valueChanged = e.originalEvent.propertyName=='value';
//     } else {
//         valueChanged = true;
//     }
//     if (valueChanged) {
//         this.value = this.value.replace(/[0-9\.]/g, '');
    
    
//     }
// });


// function transformTypedCharacter(typedChar) {
//     return typedChar == "'" || typedChar == '"' || typedChar == '.' || typedChar == "_" ? "" : typedChar;
// }

// function insertTextAtCursor(text) {
//     var sel, range, textNode;
//     if (window.getSelection) {
//         sel = window.getSelection();
//         if (sel.getRangeAt && sel.rangeCount) {
//             range = sel.getRangeAt(0).cloneRange();
//             range.deleteContents();
//             textNode = document.createTextNode(text);
//             range.insertNode(textNode);

//             // Move caret to the end of the newly inserted text node
//             range.setStart(textNode, textNode.length);
//             range.setEnd(textNode, textNode.length);
//             sel.removeAllRanges();
//             sel.addRange(range);
//         }
//     } else if (document.selection && document.selection.createRange) {
//         range = document.selection.createRange();
//         range.pasteHTML(text);
//     }
// }


// $(".alphaValidation").keypress(function(evt) {
//     if (evt.which) {
//         var charStr = String.fromCharCode(evt.which);
//         var transformedChar = transformTypedCharacter(charStr);
//         if (transformedChar != charStr) {
//             insertTextAtCursor(transformedChar);
//             return false;
//         }
//     }
// });



// $(".numberValidation").keypress(function(evt) {
//     if (evt.which) {
//         var charStr = String.fromCharCode(evt.which);
//         var transformedChar = transformTypedCharacter(charStr);
//         if (transformedChar != charStr) {
//             insertTextAtCursor(transformedChar);
//             return false;
//         }
//     }
// });



//     $('body').on("ajax:beforeSend", ".ajax-loading", function(event, xhr, settings) {
//     $('.loading').fadeIn().css("display","inline-block");
//     });


//     $('#user_avatar').on("change", function() {
//     // $(this).val("");
//     if (this.files && this.files[0]) {
//         if(this.files[0].type.match('image.*')){
//         if(this.files[0].size < 10485760){
//             var reader = new FileReader();
//             var submitAvatar = $('.btn-avatar');
//             var avatarFilename = $('.avatar-file-name');
//             var avatarImage = $('.frm-avatar');
//             reader.onload = function (e) {
//             avatarImage.attr('src', e.target.result);
//             };
//             reader.readAsDataURL(this.files[0]);
//             submitAvatar.attr("data-filename", this.files[0].name);
//             avatarFilename.text(this.files[0].name);
//         }else{
//             alert("Image Size is too big. Minimum size is 5MB.");
//             $(this).val("");
//         }
//         }else{
//         alert("You can only upload image file.");
//         $(this).val("");
//         }
//     }
//     });

//     $('#user_form').formValidation({
//     framework: 'bootstrap',
//     icon: {
//     // valid: 'fa fa-check',
//     // invalid: 'fa fa-times',
//     // validating: 'fas fa-sync'
//     },
//     fields: {
//     'user[first_name]': {
//         message: 'Invalid First Name',
//         validators: {
//         notEmpty: {
//             message: 'First Name is required'
//         },
//         // regexp: 
//         // {
//         //   regexp: /^[^0-9]+$/ ,
//         //   message: ' Numbers are not allowed '
//         // },
//         regexp: {
//             regexp:   /^[a-zA-z]+([\s][a-zA-Z]+)*$/,
//             message: 'Invalid First Name'
//         }
//         }
//     },
//     'user[last_name]': {
//         message: 'Invalid Last Name',
//         validators: {
//         notEmpty: {
//             message: 'Last Name is required'
//         },
//         regexp: {
//             regexp:   /^[a-zA-z]+([\s][a-zA-Z]+)*$/,
//             message: 'Invalid Last Name'
//         }
//         }
//     },
//     'user[email]': {
//         message: ' ',
//         validators: {
//         notEmpty: {
//             message: 'Email Address is required'
//         },
//         // remote: {
//         //     message: 'Email address is not available',
//         //     url: '/users/if_exists',
//         //     data: {
//         //         mode: 'add',
//         //     },
//         //     type: 'POST'
//         // },
//         // emailAddress: {
//         //     message: 'The value is not a valid email address'
//         // },
//         regexp: {
//             regexp: '^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$',
//             message: 'The value is not a valid email address'
//         }
//         }
//     },
//     'user[password_confirmation]': {
//             validators: {

//                 identical: {
//                     field: 'user[password]',
//                     message: 'The passwords you entered do not match. Please re-enter your password. '
//                 },
//                     stringLength: {
//                     min: 8,
//                     message: ' '
//                 },
//                 notEmpty: {
//                     message: 'Confirm Password is required'
//                     }
//             }
//         },
//     'user[password]': {
//         message: 'Password is required',
//         validators: {
//         notEmpty: {
//             message: 'Password is required'
//         },
//                 stringLength: {
//                 min: 8,
//                 message: 'Password confirmation must be at least 8 characters long.'
//                 }
//         }
//     },
//     'user[new_password]': {
//         message: 'New Password is required',
//         validators: {
//         notEmpty: {
//             message: 'New Password is required'
//         },
//                 stringLength: {
//                 min: 8,
//                 message: 'Password confirmation must be at least 8 characters long.'
//                 }
//         }
//     },
//     'user[role]': {
//         message: 'Invalid Role',
//         validators: {
//         notEmpty: {
//             message: 'User Role is required'
//         }
//         }
//     },
//     'user[employee_id]': {
//         message: 'Invalid Employee ID',
//         validators: {
//         notEmpty: {
//             message: 'Employee ID is required'
//         },
//         regexp: {
//             regexp:   /^[0-9]*$/,
//             message: 'Invalid Employee ID'
//         },
//         stringLength: {
//             max: 7,
//             min: 7,
//             message: 'Employee ID should consist of 7 digits.'
//         },
//         }
//     },
//     'user[status]': {
//         message: 'Invalid Status',
//         validators: {
//         notEmpty: {
//             message: 'Status is required'
//         }
//         }
//     },
//     'user[department_id]': {
//         message: 'Invalid Department',
//         validators: {
//         notEmpty: {
//             message: 'Department is required'
//         }
//         }
//     },
//     'user[designation_id]': {
//         message: 'Invalid Designation',
//         validators: {
//         notEmpty: {
//             message: 'Designation is required'
//         }
//         }
//     },

//     }
// }).on('success.form.fv', function(e) {
//             // Prevent form submission
//             e.preventDefault();
//             $.ajax({
//                 url: String($(this).attr('action')),
//                 type: 'post',
//                 data:  new FormData(this),
//                 contentType: false,
//                 cache: false,
//                 processData:false,
//                 beforeSend: function(data) {
//                 $('#submit_btn').attr("disabled", "disabled");
//                 $('#submit_btn').addClass("disabled");
//                 $('.btn-loading').removeClass('d-none');
//                 $('.loading').fadeIn().css("display","inline-block");
//                     },
//                     success: function(data) {
//                     },
//                     complete: function(data){
//                         $('.btn-loading').addClass('d-none');
//                         $('.loading').fadeOut().css("display","none");
//                     },
//                     error: function(data) {
//                         // code here
//                     }
//             });
//         });
// $('#edit_user_form').formValidation({
//     framework: 'bootstrap',
//     icon: {
//     // valid: 'fa fa-check',
//     // invalid: 'fa fa-times',
//     // validating: 'fas fa-sync'
//     },
//     fields: {
//     'user[first_name]': {
//         message: 'Invalid First Name',
//         validators: {
//         notEmpty: {
//             message: 'First Name is required'
//         },
//         // regexp: 
//         // {
//         //   regexp: /^[^0-9]+$/ ,
//         //   message: ' Numbers are not allowed '
//         // },
//         regexp: {
//             regexp:   /^[a-zA-z]+([\s][a-zA-Z]+)*$/,
//             message: 'Invalid First Name'
//         }
//         }
//     },
//     'user[last_name]': {
//         message: 'Invalid Last Name',
//         validators: {
//         notEmpty: {
//             message: 'Last Name is required'
//         },
//         regexp: {
//             regexp:   /^[a-zA-z]+([\s][a-zA-Z]+)*$/,
//             message: 'Invalid Last Name'
//         }
//         }
//     },
//     'user[email]': {
//         message: ' ',
//         validators: {
//         notEmpty: {
//             message: 'Email Address is required'
//         },
//         // remote: {
//         //     message: 'Email address is not available',
//         //     url: '/users/if_exists',
//         //     data: {
//         //         mode: 'add',
//         //     },
//         //     type: 'POST'
//         // },
//         // emailAddress: {
//         //     message: 'The value is not a valid email address'
//         // },
//         regexp: {
//             regexp: '^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$',
//             message: 'The value is not a valid email address'
//         }
//         }
//     },
//     'user[password_confirmation]': {
//             validators: {

//                 identical: {
//                     field: 'user[password]',
//                     message: 'The passwords you entered do not match. Please re-enter your password. '
//                 },
//                     stringLength: {
//                     min: 8,
//                     message: ' '
//                 },
//                 notEmpty: {
//                     message: 'Confirm Password is required'
//                     }
//             }
//         },
//     'user[password]': {
//         message: 'New Password is required',
//         validators: {
//         notEmpty: {
//             message: 'New Password is required'
//         },
//                 stringLength: {
//                 min: 8,
//                 message: 'Password confirmation must be at least 8 characters long.'
//                 }
//         }
//     },
//     'user[role]': {
//         message: 'Invalid Role',
//         validators: {
//         notEmpty: {
//             message: 'User Role is required'
//         }
//         }
//     },
//     'user[employee_id]': {
//         message: 'Invalid Employee ID',
//         validators: {
//         notEmpty: {
//             message: 'Employee ID is required'
//         },
//         regexp: {
//             regexp:   /^[0-9]*$/,
//             message: 'Invalid Employee ID'
//         },
//         stringLength: {
//             max: 7,
//             min: 7,
//             message: 'Employee ID should consist of 7 digits.'
//         },
//         }
//     },
//     'user[status]': {
//         message: 'Invalid Status',
//         validators: {
//         notEmpty: {
//             message: 'Status is required'
//         }
//         }
//     },
//     'user[department_id]': {
//         message: 'Invalid Department',
//         validators: {
//         notEmpty: {
//             message: 'Department is required'
//         }
//         }
//     },
//     'user[designation_id]': {
//         message: 'Invalid Designation',
//         validators: {
//         notEmpty: {
//             message: 'Designation is required'
//         }
//         }
//     },

//     }
// }).on('success.form.fv', function(e) {
//     // Prevent form submission
//     e.preventDefault();
//     $.ajax({
//         url: String($(this).attr('action')),
//         type: 'post',
//         data:  new FormData(this),
//         contentType: false,
//         cache: false,
//         processData:false,
//         beforeSend: function(data) {
//             $('#submit_btn').attr("disabled", "disabled");
//             $('#submit_btn').addClass("disabled");
//             $('.btn-loading').removeClass('d-none');
//             $('.loading').fadeIn().css("display","inline-block");
//             },
//             success: function(data) {
//             },
//             complete: function(data){
//                 $('.btn-loading').addClass('d-none');
//                 $('.loading').fadeOut().css("display","none");
//                 },
//             error: function(data) {
//                 // code here
//             }
//     });
// });



//     $('.showpwd').on('click', function() {
//         if ($(this).hasClass( "hidepwd" )){
//         $(this).removeClass( "hidepwd" );
//         $(this).html("<i class='fa fa-user-lock'></i> Change Password");
//         $('#user_form').formValidation('resetField', 'user[password]');
//         $('#user_form').formValidation('resetField', 'user[password_confirmation]');
//         $('#user_password').prop('disabled', true);
//         $('#user_password_confirmation').prop('disabled', true);
//         // $("#submit_btn").prop('disabled', true);
//         // $("#submit_btn").addClass("disabled"); 
//         }
//         else{
//         $(this).addClass( "hidepwd" );
//         $(this).html("<i class='fa fa-minus'></i> Hide Password");
//         $('#user_password').prop('disabled', false);
//         $('#user_password_confirmation').prop('disabled', false);
//         $("#submit_btn").removeAttr("disabled").removeClass("disabled");
//         $("#submit_btn").removeClass("disabled"); 
//         }
//         $('.show_password').toggle();

//     });


// $('#status').select2({
//     theme: 'bootstrap-5',
//     tags: false,
//     placeholder: "Filter by Status",
//     width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
//     allowClear: false
// });

//     $('#order-status').select2({
//     theme: 'bootstrap-5',
//     tags: false,
//     placeholder: "Filter by Status",
//     width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
//     allowClear: false
// });


// $('#role').select2({
//     theme: 'bootstrap-5',
//     tags: false,
//     placeholder: "Select User Role",
//     width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
//     allowClear: false
// });
// $('#edit_role').select2({
//     theme: 'bootstrap-5',
//     tags: false,
//     placeholder: "Select User Role",
//     width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
//     allowClear: false
// });

// $('#department').select2({
//     theme: 'bootstrap-5',
//     tags: false,
//     placeholder: "Select User Department",
//     width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
//     allowClear: false
// });

// $('#designation').select2({
//     theme: 'bootstrap-5',
//     tags: false,
//     placeholder: "Select User Designation",
//     width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
//     allowClear: false
// });

// $('#department_edit').select2({
//     theme: 'bootstrap-5',
//     tags: false,
//     placeholder: "Select User Department",
//     width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
//     allowClear: false
// });

// $('#designation_edit').select2({
//     theme: 'bootstrap-5',
//     tags: false,
//     placeholder: "Select User Designation",
//     width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
//     allowClear: false
// });



// $('#role_filter').select2({
//     theme: 'bootstrap-5',
//     tags: false,
//     placeholder: "Filter by Role",
//     width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
//     allowClear: false
// });

// $('#salesperson').select2({
//     theme: 'bootstrap-5',
//     tags: false,
//     placeholder: "Select Salesperson",
//     width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
//     allowClear: false
// });



// $('.location').select2({
//     theme: 'bootstrap-5',
//     tags: false,
//     placeholder: "Select City / Province",
//     width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
//     allowClear: false
// });


//     //Override the default confirm dialog by rails
//     $.rails.allowAction = function(link){
//     if (link.data("confirm") == undefined){
//         return true;
//     }
//     $.rails.showConfirmationDialog(link);
//     return false;
//     }

//     //User click confirm button
//     $.rails.confirmed = function(link){
//     link.data("confirm", null);
//     link.trigger("click.rails");
//         $('.displaynone').fadeIn().css("display","none");
//         $('.loading').fadeOut().css("display","none");
//     return false;
//     }

//     //Display the confirmation dialog
//     $.rails.showConfirmationDialog = function(link){
//     var message = link.data("confirm");

//     var caption = link.data("caption");
//     if (!$.trim(caption)){   
//         caption = 'Confirm'
//     }

//     swal({
//         title: message,
//         text: "Please check before you confirm!",
//         type: 'warning',
//         confirmButtonColor: '#ffe26b',
//         cancelButtonColor: '#e2e6ea',
//         showCancelButton: true,
//         confirmButtonText: caption
//     }).then(function(e){
//         $('.loading').fadeIn().css("display","inline-block");
//         $.rails.confirmed(link);
//     });
//     };


    
//     $(".sideBar-toogle").on('click',function(e){
//         setTimeout(function(){
//                     owlres();
//         }, 300);  
//     });



// // Department Mgmt
// $('#add_department_status_select2').select2({
//     theme: 'bootstrap-5',
//     tags: false,
//     placeholder: "Select Status",
//     width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
//     dropdownParent: $('#new_department_modal')
// });

// $('#edit_department_status_select2').select2({
//     theme: 'bootstrap-5',
//     tags: false,
//     placeholder: "Select Status",
//     width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
//     dropdownParent: $('#edit_department_modal')
// });

// $('#add_parent_department_select').select2({
//     theme: 'bootstrap-5',
//     tags: false,
//     placeholder: "Select a Parent Department",
//     width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
//     allowClear: true,
//     dropdownParent: $('#new_department_modal')
// });

// $('#edit_parent_department_select').select2({
//     theme: 'bootstrap-5',
//     tags: false,
//     placeholder: "Select a Parent Department",
//     width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
//     allowClear: true,
//     dropdownParent: $('#edit_department_modal')
// });

// $('#new_department_form, #edit_department_form').formValidation({
//     framework: 'bootstrap',
//     icon: {
//     // valid: 'fa fa-check',
//     // invalid: 'fa fa-times',
//     // validating: 'fas fa-sync'
//     },
//     fields: {
//     'department[department_name]': {
//         message: 'Department Name is required',
//         validators: {
//         notEmpty: {
//             message: 'Department Name is required'
//         }

//         }
//     },
//     'department[status]': {
//         message: 'Invalid Status',
//         validators: {
//         notEmpty: {
//             message: 'Status is required'
//         }
//         }
//     } 
//     }
// }).on('success.form.fv', function(e) {
//     // Prevent form submission
//     e.preventDefault();
//     $.ajax ({
//     url: String($(this).attr('action')),
//     type: 'post',
//     data:  new FormData(this),
//     contentType: false,
//     cache: false,
//     processData:false,
//     beforeSend: function(data) {
//         $('#submit_btn').attr("disabled", "disabled");
//         $('#submit_btn').addClass("disabled");
//         $('.btn-loading').removeClass('d-none');
//         $('.loading').fadeIn().css("display","inline-block");
//         },
//         success: function(data) {
//             $('#submit_btn').attr("disabled", "disabled");
//             $('#submit_btn').addClass("disabled");
//         },
//         complete: function(data){
//             $('.btn-loading').addClass('d-none');
//             $('.loading').fadeOut().css("display","none");
//             $('#submit_btn').attr("disabled", "disabled");
//             $('#submit_btn').addClass("disabled");
//             },
//         error: function(data) {
//             // code here
//         }
//     });
// });

// $('#new_department_modal').on('hide.bs.modal', function () {
//     $('#add_department_status_select2').val('active').change();
//     $('#add_parent_department_select').val(null).trigger('change');
//     $('#new_department_form')[0].reset();
//     $('#new_department_form').formValidation('resetForm', true);
// });

// $('#edit_department_modal').on('hide.bs.modal', function () {
//     $('#edit_department_status_select2').val('active').change();
//     $('#edit_department_form')[0].reset();
//     $('#edit_department_form').formValidation('resetForm', true);
// });

// $('#add_parent_department_select').on('change', function() {
//     $('#new_department_form').formValidation('revalidateField', 'department[department_name]');
// })

// // Designation Mgmt
// $('#add_department_select2').select2({
//     theme: 'bootstrap-5',
//     tags: false,
//     placeholder: "Select a Department",
//     width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
//     allowClear: false,
//     dropdownParent: $('#new_designation_modal')
// });

// $('#edit_department_select2').select2({
//     theme: 'bootstrap-5',
//     tags: false,
//     placeholder: "Select a Department",
//     width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
//     allowClear: false,
//     dropdownParent: $('#edit_designation_modal')
// });

// $('#department_sort_select2').select2({
//     theme: 'bootstrap-5',
//     tags: false,
//     placeholder: "Filter by Department",
//     width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
//     allowClear: true
// });

// $('#add_designation_status_select2').select2({
//     theme: 'bootstrap-5',
//     tags: false,
//     placeholder: "Select Status",
//     width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
//     allowClear: false,
//     dropdownParent: $('#new_designation_modal')
// });

// $('#edit_designation_status_select2').select2({
//     theme: 'bootstrap-5',
//     tags: false,
//     placeholder: "Select Status",
//     width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
//     allowClear: false,
//     dropdownParent: $('#edit_designation_modal')
// });

// $('#new_designation_form, #edit_designation_form').formValidation({
//     framework: 'bootstrap',
//     icon: {
//     // valid: 'fa fa-check',
//     // invalid: 'fa fa-times',
//     // validating: 'fas fa-sync'
//     },
//     fields: {
//     'designation[department_id]': {
//         message: 'Department is required',
//         validators: {
//         notEmpty: {
//             message: 'Department is required'
//         }

//         }
//     },
//     'designation[designation_name]': {
//         message: 'Designation Name is required',
//         validators: {
//         notEmpty: {
//             message: 'Designation Name is required'
//         }

//         }
//     },
//     'designation[status]': {
//         message: 'Invalid Status',
//         validators: {
//         notEmpty: {
//             message: 'Status is required'
//         }
//         }
//     } 
//     }
// }).on('success.form.fv', function(e) {
//     // Prevent form submission
//     e.preventDefault();
//     $.ajax ({
//     url: String($(this).attr('action')),
//     type: 'post',
//     data:  new FormData(this),
//     contentType: false,
//     cache: false,
//     processData:false,
//     beforeSend: function(data) {
//         $('#submit_btn').attr("disabled", "disabled");
//         $('#submit_btn').addClass("disabled");
//         $('.btn-loading').removeClass('d-none');
//         $('.loading').fadeIn().css("display","inline-block");
//         },
//         success: function(data) {
//             $('#submit_btn').attr("disabled", "disabled");
//             $('#submit_btn').addClass("disabled");
//         },
//         complete: function(data){
//             $('.btn-loading').addClass('d-none');
//             $('.loading').fadeOut().css("display","none");
//             $('#submit_btn').attr("disabled", "disabled");
//             $('#submit_btn').addClass("disabled");
//             },
//         error: function(data) {
//             // code here
//         }
//     });
// });

// $('#new_designation_modal').on('hide.bs.modal', function () {
//     $('#new_designation_form')[0].reset();
//     $('#new_designation_form').formValidation('resetForm', true);
//     $('#add_designation_status_select2').val('active').change();
//     $('.add-designation-parent-data').empty();
//     $('.edit-designation-parent-data').empty();
//     $('#add_department_select2').select2('destroy');
//     $('#add_department_select2').select2({
//     theme: 'bootstrap-5',
//     tags: false,
//     placeholder: "Select a Department",
//     width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
//     allowClear: false,
//     dropdownParent: $('#new_designation_modal')
//     });
// });

// $('#edit_designation_modal').on('hide.bs.modal', function () {
//     $('#edit_designation_form')[0].reset();
//     $('#edit_designation_form').formValidation('resetForm', true);
//     $('#edit_designation_status_select2').val('active').change();
//     $('.add-designation-parent-data').empty();
//     $('.edit-designation-parent-data').empty();
//     $('#edit_department_select2').select2('destroy');
//     $('#edit_department_select2').select2({
//     theme: 'bootstrap-5',
//     tags: false,
//     placeholder: "Select a Department",
//     width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
//     allowClear: false,
//     dropdownParent: $('#edit_designation_modal')
//     });
// });

// // Task Category Mgmt
// $('#task_category_status').select2({
//     theme: 'bootstrap-5',
//     tags: false,
//     placeholder: "Select Status",
//     width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
//     allowClear: false,
//     dropdownParent: $('#edit_task_category_modal')
// });

// $('#new_task_category_form, #edit_task_category_form').formValidation({
//     framework: 'bootstrap',
//     icon: {
//     // valid: 'fa fa-check',
//     // invalid: 'fa fa-times',
//     // validating: 'fas fa-sync'
//     },
//     fields: {
//     'task_category[task_category]': {
//         message: 'Task Category is required',
//         validators: {
//         notEmpty: {
//             message: 'Task Category is required'
//         }

//         }
//     }
//     }
// }).on('success.form.fv', function(e) {
//     // Prevent form submission
//     e.preventDefault();
//     $.ajax ({
//     url: String($(this).attr('action')),
//     type: 'post',
//     data:  new FormData(this),
//     contentType: false,
//     cache: false,
//     processData:false,
//     beforeSend: function(data) {
//         $('#submit_btn').attr("disabled", "disabled");
//         $('#submit_btn').addClass("disabled");
//         $('.btn-loading').removeClass('d-none');
//         $('.loading').fadeIn().css("display","inline-block");
//         },
//         success: function(data) {
//             $('#submit_btn').attr("disabled", "disabled");
//             $('#submit_btn').addClass("disabled");
//         },
//         complete: function(data){
//             $('.btn-loading').addClass('d-none');
//             $('.loading').fadeOut().css("display","none");
//             $('#submit_btn').attr("disabled", "disabled");
//             $('#submit_btn').addClass("disabled");
//             },
//         error: function(data) {
//             // code here
//         }
//     });
// });

// $('#new_activity_task_category_modal').on('hide.bs.modal', function () {
//     $('#new_task_category_form')[0].reset();
//     $('#new_task_category_form').formValidation('resetForm', true);
// });

// $('#edit_task_category_modal').on('hide.bs.modal', function () {
//     $('#edit_task_category_form')[0].reset();
//     $('#edit_task_category_form').formValidation('resetForm', true);
// });

// // Routine Task Mgmt
// $('#routine_task_status').select2({
//     theme: 'bootstrap-5',
//     tags: false,
//     placeholder: "Select Status",
//     width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
//     allowClear: false,
//     dropdownParent: $('#edit_routine_task_modal')
// });

// $('#new_routine_task_form, #edit_routine_task_form').formValidation({
//     framework: 'bootstrap',
//     icon: {
//     // valid: 'fa fa-check',
//     // invalid: 'fa fa-times',
//     // validating: 'fas fa-sync'
//     },
//     fields: {
//     'routine_task[routine_task]': {
//         message: 'Routine Task is required',
//         validators: {
//         notEmpty: {
//             message: 'Routine Task is required'
//         }

//         }
//     }
//     }
// }).on('success.form.fv', function(e) {
//     // Prevent form submission
//     e.preventDefault();
//     $.ajax ({
//     url: String($(this).attr('action')),
//     type: 'post',
//     data:  new FormData(this),
//     contentType: false,
//     cache: false,
//     processData:false,
//     beforeSend: function(data) {
//         $('#submit_btn').attr("disabled", "disabled");
//         $('#submit_btn').addClass("disabled");
//         $('.btn-loading').removeClass('d-none');
//         $('.loading').fadeIn().css("display","inline-block");
//         },
//         success: function(data) {
//             $('#submit_btn').attr("disabled", "disabled");
//             $('#submit_btn').addClass("disabled");
//         },
//         complete: function(data){
//             $('.btn-loading').addClass('d-none');
//             $('.loading').fadeOut().css("display","none");
//             $('#submit_btn').attr("disabled", "disabled");
//             $('#submit_btn').addClass("disabled");
//             },
//         error: function(data) {
//             // code here
//         }
//     });
// });

// $('#new_routine_task_modal').on('hide.bs.modal', function () {
//     $('#new_routine_task_form')[0].reset();
//     $('#new_routine_task_form').formValidation('resetForm', true);
// });

// $('#edit_routine_task_modal').on('hide.bs.modal', function () {
//     $('#edit_routine_task_form')[0].reset();
//     $('#edit_routine_task_form').formValidation('resetForm', true);
// });

// // Activity Monitoring
// $('#add_task_category_select2').select2({
//     theme: 'bootstrap-5',
//     tags: false,
//     placeholder: "Select Task Category",
//     width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
//     allowClear: true,
//     // dropdownParent: $('#edit_designation_modal')
// });

// $('#edit_task_category_select2').select2({
//     theme: 'bootstrap-5',
//     tags: false,
//     placeholder: "Select Task Category",
//     width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
//     allowClear: true,
//     dropdownParent: $('#edit_activity_modal')
// });

// $('#new_activity_form, #edit_activity_form').formValidation({
//     framework: 'bootstrap',
//     icon: {
//     // valid: 'fa fa-check',
//     // invalid: 'fa fa-times',
//     // validating: 'fas fa-sync'
//     },
//     fields: {
//     'activity_monitoring[task]': {
//         message: 'Task is required',
//         validators: {
//         notEmpty: {
//             message: 'Task is required'
//         }

//         }
//     }
//     }
// }).on('success.form.fv', function(e) {
//     // Prevent form submission
//     e.preventDefault();
//     $.ajax ({
//     url: String($(this).attr('action')),
//     type: 'post',
//     data:  new FormData(this),
//     contentType: false,
//     cache: false,
//     processData:false,
//     beforeSend: function(data) {
//         $('#submit_btn').attr("disabled", "disabled");
//         $('#submit_btn').addClass("disabled");
//         $('.btn-loading').removeClass('d-none');
//         $('.loading').fadeIn().css("display","inline-block");
//         },
//         success: function(data) {
//             $('#submit_btn').attr("disabled", "disabled");
//             $('#submit_btn').addClass("disabled");
//         },
//         complete: function(data){
//             $('.btn-loading').addClass('d-none');
//             $('.loading').fadeOut().css("display","none");
//             $('#submit_btn').attr("disabled", "disabled");
//             $('#submit_btn').addClass("disabled");
//             },
//         error: function(data) {
//             // code here
//         }
//     });
// });

// $('#activity_form').on('shown.bs.collapse', function () {
//     $('.add-activity-text').text("Close")
//     $('.add-icon').addClass("d-none");
//     $('.x-icon').removeClass("d-none");
// })

// $('#activity_form').on('hidden.bs.collapse', function () {
//     $('.add-activity-text').text("New Task")
//     $('.x-icon').addClass("d-none");
//     $('.add-icon').removeClass("d-none");
//     $("#task_file_upload").fileinput('clear');
//     $('#add_task_category_select2').val(null).trigger('change');
// })

// $('#activity_form').on('hide.bs.collapse', function () {
//     $('#new_activity_form').formValidation('resetField', 'activity_monitoring[task]');
// })

// $('#edit_activity_modal').on('hide.bs.modal', function () {
//     $('#edit_activity_form')[0].reset();
//     $('#edit_activity_form').formValidation('resetForm', true);
//     $('#edit_activity_submit_btn').attr('disabled', 'disabled');
// });

// // Timekeeping

// $('#new_timekeeping_form').formValidation({
//     framework: 'bootstrap',
//     icon: {
//     // valid: 'fa fa-check',
//     // invalid: 'fa fa-times',
//     // validating: 'fas fa-sync'
//     },
//     fields: {
//     }
// }).on('success.form.fv', function(e) {
//     // Prevent form submission
//     e.preventDefault();
//     $.ajax ({
//     url: String($(this).attr('action')),
//     type: 'post',
//     data:  new FormData(this),
//     contentType: false,
//     cache: false,
//     processData:false,
//     beforeSend: function(data) {
//         $('#submit_btn').attr("disabled", "disabled");
//         $('#submit_btn').addClass("disabled");
//         $('.btn-loading').removeClass('d-none');
//         $('.loading').fadeIn().css("display","inline-block");
//         },
//         success: function(data) {
//             $('#submit_btn').attr("disabled", "disabled");
//             $('#submit_btn').addClass("disabled");
//         },
//         complete: function(data){
//             $('.btn-loading').addClass('d-none');
//             $('.loading').fadeOut().css("display","none");
//             $('#submit_btn').attr("disabled", "disabled");
//             $('#submit_btn').addClass("disabled");
//             },
//         error: function(data) {
//             // code here
//         }
//     });
// });

// $('.timekeeping-btn').on('click', function(){
//     var time_data = $(this).data('time-in');
//     $('.timekeeping-range').text(time_data + " - ");
// });

// $('#timekeeping_modal').on('hide.bs.modal', function () {
//     $('#edit_timekeeping_form').formValidation('resetField', 'timekeeping[timeout]');
//     $('#new_timekeeping_form').formValidation('resetField', 'timekeeping[timein]');
// });

// $('#employee_sort_select2').select2({
//     theme: 'bootstrap-5',
//     tags: false,
//     placeholder: "Filter by Employee",
//     width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
//     allowClear: true
// });

// $('#activity_type_select2').select2({
//     theme: 'bootstrap-5',
//     tags: false,
//     placeholder: "Filter by Type",
//     width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
//     allowClear: true
// });

// $('#search-date').datetimepicker({
//     format: 'MM/DD/YYYY',
//     icons: {
//         previous: 'bi bi-chevron-compact-left',
//         next: 'bi bi-chevron-compact-right'
//     },
//     maxDate:  moment()
// })
// $('#search-date').val(null)

// // Calendar
// if (window.location.pathname == "/calendar") {
//     initializeCalendar();
// }
// $('#new_calendar_timekeeping_form').formValidation({
//     framework: 'bootstrap',
//     icon: {
//     // valid: 'fa fa-check',
//     // invalid: 'fa fa-times',
//     // validating: 'fas fa-sync'
//     },
//     fields: {
//     'timekeeping[timein]': {
//         message: 'Time is required',
//         validators: {
//         notEmpty: {
//             message: 'Time is required'
//         }

//         }
//     }
//     }
// }).on('success.form.fv', function(e) {
//     // Prevent form submission
//     e.preventDefault();
//     $.ajax ({
//     url: String($(this).attr('action')),
//     type: 'post',
//     data:  new FormData(this),
//     contentType: false,
//     cache: false,
//     processData:false,
//     beforeSend: function(data) {
//         $('#submit_btn').attr("disabled", "disabled");
//         $('#submit_btn').addClass("disabled");
//         $('.btn-loading').removeClass('d-none');
//         $('.loading').fadeIn().css("display","inline-block");
//         },
//         success: function(data) {
//             $('#submit_btn').attr("disabled", "disabled");
//             $('#submit_btn').addClass("disabled");
//         },
//         complete: function(data){
//             $('.btn-loading').addClass('d-none');
//             $('.loading').fadeOut().css("display","none");
//             $('#submit_btn').attr("disabled", "disabled");
//             $('#submit_btn').addClass("disabled");
//             },
//         error: function(data) {
//             // code here
//         }
//     });
// });

// $('#calendar_date_from').datetimepicker({
//     format: 'MM/DD/YYYY',
//     icons: {
//     previous: 'bi bi-chevron-compact-left',
//     next: 'bi bi-chevron-compact-right'
//     },
//     maxDate:  moment(),
//     useCurrent: false //Important! See issue #1075
// });
// $('#calendar_date_to').datetimepicker({
//     format: 'MM/DD/YYYY',
//     icons: {
//     previous: 'bi bi-chevron-compact-left',
//     next: 'bi bi-chevron-compact-right'
//     },
//     useCurrent: false //Important! See issue #1075
// })

// $("#calendar_date_from").on("dp.change", function (e) {
//     $('#calendar_date_to').data("DateTimePicker").minDate(e.date);
// });
// $("#calendar_date_to").on("dp.change", function (e) {
//     $('#calendar_date_from').data("DateTimePicker").maxDate(e.date);
// });

// $('#view_activity_modal').on('hidden.bs.modal', function () {
//     $("#activity_task_category").removeClass();
// });

// $('#timekeeping_modal').on('hidden.bs.modal', function () {
//     $("#timeout_btn").removeAttr("disabled").removeClass("disabled");

//     $("#timekeeping_file_upload").fileinput('clear')
// });

// // File upload config
// $("#timekeeping_file_upload").fileinput({
//     theme: "bs5",
//     browseOnZoneClick: true,
//     browseIcon: "<i class=\"fas fa-images\"></i> ",
//     browseLabel: "Browse Screenshot <span class='text-red b'>*</span>",
//     browseClass: "col-12 btn app-btn-primary pointer",
//     showBrowse: true,
//     showCaption: false,
//     showRemove: false,
//     showClose: true,
//     previewClass: 'bg-light',
//     // minFileCount: 1,
//     // minImageWidth: 200,
//     // minImageHeight: 200,
//     // maxFileSize: 10000,
//     // uploadUrl: "/upload-file/create",
//     // uploadAsync: false,
//     // deleteUrl: "/upload-file/delete",
//     showUpload: false, // hide upload button
//     overwriteInitial: false, // append files to initial preview
//     initialPreviewAsData: false, // allows you to set a raw markup
//     allowedFileTypes: ["image"],
//     dropZoneEnabled: true,
//     // maxFileCount: 5,
//     validateInitialCount: true,
//     removeIcon: '<i class="fas fa-times"></i>',
//     removeClass: 'btn btn-sm btn-danger text-white mt-2',
//     dropZoneTitle: 'Upload at least one screenshot',
//     dropZoneClickTitle: '<br>(Drag & drop screenshot)',
//     progressThumbClass: 'progress-bar bg-warning progress-bar-striped active',
//     progressClass: 'progress-bar bg-warning progress-bar-success progress-bar-striped active',
//     progressCompleteClass: 'progress-bar bg-info progress-bar-success',
//     fileActionSettings: {        
//     showUpload: false,
//     showZoom: true,
//     removeIcon: '<i class="bi bi-trash font-size-12"></i>',
//     removeClass: 'btn btn-sm btn-fileremove btn-danger',
//     dragClass: 'text-secondary mt-0 ml-2 font-size-18'},
//     required: true,
// }).on("filebatchselected", function(event, files) {
//     $('#timeout_btn').removeAttr("disabled").removeClass("disabled");
//     $('.fileinput-remove').removeClass('d-none');
// }).on('filesorted', function(e, params) {
// }).on('fileclear', function(e, params) {
//     $('#timeout_btn').attr("disabled", true).addClass("disabled");
//     $('.fileinput-remove').addClass('d-none');
// }).on("fileuploaderror", function(event, data, previewId, index) {
//     // handle upload errors
// }).on("filebatchuploadsuccess", function(event, data) {
//     // handle upload success
// }).on("filebatchuploadcomplete", function(event, files) {
// });  

// $('#timekeeping_modal').on('hidden.bs.modal', function() {
//     $('#timeout_btn').attr("disabled", true).addClass("disabled");
//     $('.fileinput-remove').addClass('d-none');
// })

// $("#task_file_upload").fileinput({
//     theme: "bs5",
//     browseOnZoneClick: true,
//     browseIcon: "<i class=\"fas fa-images\"></i> ",
//     browseLabel: "Browse Screenshot",
//     browseClass: "col-12 btn app-btn-primary pointer",
//     showBrowse: true,
//     showCaption: false,
//     showRemove: false,
//     showClose: true,
//     previewClass: 'bg-light',
//     // minFileCount: 1,
//     // minImageWidth: 200,
//     // minImageHeight: 200,
//     // maxFileSize: 10000,
//     // uploadUrl: "/upload-file/create",
//     // uploadAsync: false,
//     // deleteUrl: "/upload-file/delete",
//     showUpload: false, // hide upload button
//     overwriteInitial: false, // append files to initial preview
//     initialPreviewAsData: false, // allows you to set a raw markup
//     allowedFileTypes: ["image"],
//     dropZoneEnabled: true,
//     // maxFileCount: 5,
//     validateInitialCount: true,
//     removeIcon: '<i class="fas fa-times"></i>',
//     removeClass: 'btn btn-sm btn-danger text-white mt-2',
//     dropZoneTitle: 'Upload screenshot (optional)',
//     dropZoneClickTitle: '<br>(Drag & drop screenshot)',
//     progressThumbClass: 'progress-bar bg-warning progress-bar-striped active',
//     progressClass: 'progress-bar bg-warning progress-bar-success progress-bar-striped active',
//     progressCompleteClass: 'progress-bar bg-info progress-bar-success',
//     fileActionSettings: {        
//     showUpload: false,
//     showZoom: true,
//     removeIcon: '<i class="bi bi-trash font-size-12"></i>',
//     removeClass: 'btn btn-sm btn-fileremove btn-danger',
//     dragClass: 'text-secondary mt-0 ml-2 font-size-18'},
// }).on("filebatchselected", function(event, files) {
//     $('.fileinput-remove').removeClass('d-none');
// }).on('filesorted', function(e, params) {
// }).on('fileclear', function(e, params) {
//     $('.fileinput-remove').addClass('d-none');
// }).on("fileuploaderror", function(event, data, previewId, index) {
//     // handle upload errors
// }).on("filebatchuploadsuccess", function(event, data) {
//     // handle upload success
// }).on("filebatchuploadcomplete", function(event, files) {
// });

// $('.fileinput-remove').addClass('d-none');

// $('.gallery-item').on('click', function() {
//     var targetModal = $(this).attr('data-bs-target');
//     $(targetModal).modal('show');
// })

// $('.screenshot-owl-carousel').owlCarousel({
//     loop:false,
//     margin:5,
//     nav:false,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:4
//         }
//     }
// })

// // Feed
// var loadingPosts = false;

// $('a.load-more-timekeepings').on('inview', function (e, visible) {
//     if (loadingPosts || !visible) return;
    
//     loadingPosts = true;

//     $.getScript($(this).attr('href'), function () {
//     loadingPosts = false;
//     });
// });

// // App Tour
// $.ajax({
//     type: "GET",
//     url: "/users/get-user-data",
//     data: {},
//     success: function(data) {
//     initializeAppTour(data);
    
//     // Repeat app tour
//     $('#wfh-help').on('click', function() {
//         var role = data[0].role

//         if(role == "employee") {
//         setCookie(["activityMonitoring-dontShowAgain", "calendar-dontShowAgain", "sidebarEmployee-dontShowAgain"], false)
//         } else {
//         setCookie(["sidebarAdmin-dontShowAgain", "dashboard-dontShowAgain"], false)
//         }        
//     })
//     }
// });

// // Activity Attachments (Light Gallery) 
// $(document).on("click",".lg-close", function() {
//         if ($('#img_attachment_gallery').data('lightGallery')){
//             $('#img_attachment_gallery').data('lightGallery').destroy(true);
//         }
// });

// $('.add-activity-task-category').on('click',function(e){
//     $('#task_category_section').val('add_activity');
//     $('.task-cat-cancel').attr('data-bs-target', null).attr('data-bs-toggle', null).attr('data-bs-dismiss', 'modal')
// });


// }); // end turbolinks load

// document.addEventListener("turbolinks:before-cache", function() {
    
//     if ($('.select2-tag').data('select2')) {
//         $('.select2-tag').select2('destroy');
//     }

//     toastr.remove();

// });


// end turbolinks before cache

$(document).on( 'turbolinks:load', function () {

    // Vehicle
    $('#vehicle_type').select2({
        theme: 'bootstrap-5',
        tags: false,
        placeholder: "Select a Vehicle Type",
        width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style'
    });

    $('#new_vehicle_form').formValidation({
        framework: 'bootstrap',
        icon: {
          // valid: 'fa fa-check',
          // invalid: 'fa fa-times',
          // validating: 'fas fa-sync'
        },
        fields: {
          'vehicle[vehicle_type]': {
            message: 'Vehicle Type is required',
            validators: {
              notEmpty: {
                message: 'Vehicle Type is required'
              }
    
            }
          },
          'vehicle[plate_number_id]': {
            message: 'Plate Number ID is required',
            validators: {
              notEmpty: {
                message: 'Plate Number ID is required'
              }
    
            }
          }
        }
    }).on('success.form.fv', function(e) {
        // Prevent form submission
        e.preventDefault();
        $.ajax ({
            url: String($(this).attr('action')),
            type: 'post',
            data:  new FormData(this),
            contentType: false,
            cache: false,
            processData:false,
            beforeSend: function(data) {
                $('#submit_btn').attr("disabled", "disabled");
                $('#submit_btn').addClass("disabled");
                $('.btn-loading').removeClass('d-none');
                $('.loading').fadeIn().css("display","inline-block");
            },
            success: function(data) {
                $('#submit_btn').attr("disabled", "disabled");
                $('#submit_btn').addClass("disabled");
            },
            complete: function(data){
                $('.btn-loading').addClass('d-none');
                $('.loading').fadeOut().css("display","none");
                $('#submit_btn').attr("disabled", "disabled");
                $('#submit_btn').addClass("disabled");
            },
            error: function(data) {
                // code here
            }
        });
    });

    $('#new_vehicle_modal').on('hide.bs.modal', function () {
        $('#vehicle_type').val(null).trigger('change');
        $('#new_vehicle_form')[0].reset();
        $('#new_vehicle_form').formValidation('resetForm', true);
    });

    // Parking Allocation
    $('#parking_entry_point').select2({
      theme: 'bootstrap-5',
      tags: false,
      placeholder: "Select an Entry Point",
      width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style'
    });

    $('#new_parking_allocation_form').formValidation({
      framework: 'bootstrap',
      icon: {
        // valid: 'fa fa-check',
        // invalid: 'fa fa-times',
        // validating: 'fas fa-sync'
      },
      fields: {
        'parking_allocation[parking_entrance]': {
          message: 'Entry Point is required',
          validators: {
            notEmpty: {
              message: 'Entry Point is required'
            }
  
          }
        }
      }
    }).on('success.form.fv', function(e) {
      // Prevent form submission
      e.preventDefault();
      $.ajax ({
          url: String($(this).attr('action')),
          type: 'post',
          data:  new FormData(this),
          contentType: false,
          cache: false,
          processData:false,
          beforeSend: function(data) {
              $('#submit_btn').attr("disabled", "disabled");
              $('#submit_btn').addClass("disabled");
              $('.btn-loading').removeClass('d-none');
              $('.loading').fadeIn().css("display","inline-block");
          },
          success: function(data) {
              $('#submit_btn').attr("disabled", "disabled");
              $('#submit_btn').addClass("disabled");
          },
          complete: function(data){
              $('.btn-loading').addClass('d-none');
              $('.loading').fadeOut().css("display","none");
              $('#submit_btn').attr("disabled", "disabled");
              $('#submit_btn').addClass("disabled");
          },
          error: function(data) {
              // code here
          }
      });
    });

    $('#new_parking_allocation_modal').on('hide.bs.modal', function () {
      $('#parking_entry_point').val(null).trigger('change');
      $('#new_parking_allocation_form')[0].reset();
      $('#new_parking_allocation_form').formValidation('resetForm', true);
    });
    // new_parking_allocation_modal


}); // end turbolinks load

$(document).on('click','#new_parking_allocation_btn', function(e){
    e.preventDefault();
    var modalTitle = $(this).data('modal-title')
    var vehicleId = $(this).data('vehicle-id')
    var vehicleType = $(this).data('vehicle-type')

    $('#new_parking_allocation_modal_title').text('Assign Vehicle • ' + modalTitle)
    $('#parking_allocation_vehicle_id').val(vehicleId)
    $('#parking_allocation_vehicle_type').val(vehicleType)

});