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
            message: 'Plate Number is required',
            validators: {
              notEmpty: {
                message: 'Plate Number is required'
              },
              stringLength: {
                min: 8,
                max: 8,
                message: 'Plate Number must be 8 characters long.'
              },
    
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

    $('#new_park_vehicle_form').formValidation({
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

    $('#new_park_vehicle_modal').on('hide.bs.modal', function () {
      $('#parking_entry_point').val(null).trigger('change');
      $('#new_park_vehicle_form')[0].reset();
      $('#new_park_vehicle_form').formValidation('resetForm', true);
    });

    $('#return_vehicle_form, #new_exit_vehicle_form, #new_unpark_vehicle_form').formValidation({
      framework: 'bootstrap',
      icon: {
        // valid: 'fa fa-check',
        // invalid: 'fa fa-times',
        // validating: 'fas fa-sync'
      },
      fields: {
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

    // Parking Entry Point
    $('#create_entry_point_form').formValidation({
      framework: 'bootstrap',
      icon: {
        // valid: 'fa fa-check',
        // invalid: 'fa fa-times',
        // validating: 'fas fa-sync'
      },
      fields: {

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

    $('#update_entry_point_form').formValidation({
      framework: 'bootstrap',
      icon: {
        // valid: 'fa fa-check',
        // invalid: 'fa fa-times',
        // validating: 'fas fa-sync'
      },
      fields: {
        'parking_entry_point[id]': {
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

    $('#update_entry_point_modal').on('hide.bs.modal', function () {
      $('#parking_entry_point_direction').val(null).trigger('change');
      $('#update_entry_point_form')[0].reset();
      $('#update_entry_point_form').formValidation('resetForm', true);
    });

    $('#parking_entry_point_direction').select2({
      theme: 'bootstrap-5',
      tags: false,
      placeholder: "Select an Entry Point",
      width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style'
    });

    $('#parking_entry_point_status').select2({
      theme: 'bootstrap-5',
      tags: false,
      placeholder: "Select a Status",
      width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style'
    });

    $('#unpark_datetime_out_text').datetimepicker({
      format: 'LLLL',
      sideBySide: true,
      icons: {
          previous: 'bi bi-chevron-compact-left',
          next: 'bi bi-chevron-compact-right',
          up: 'bi bi-chevron-up',
          down: 'bi bi-chevron-down'
      }
    })

}); // end turbolinks load

$(document).on('click','#new_park_vehicle_btn', function(e){
    e.preventDefault();
    var modalTitle = $(this).data('modal-title')
    var vehicleId = $(this).data('vehicle-id')
    var vehicleType = $(this).data('vehicle-type')
    var textVehicleType = $(this).data('text-vehicle-type')

    $('#new_park_vehicle_modal_title').text('Park Vehicle • ' + modalTitle)
    $('#park_vehicle_id').val(vehicleId)
    $('#parking_allocation_vehicle_type').val(vehicleType)
    $('#parking_vehicle_type').val(textVehicleType)

});

$(document).on('click','#new_exit_vehicle_btn', function(e){
    e.preventDefault();
    var modalTitle = $(this).data('modal-title')
    var vehicleId = $(this).data('vehicle-id')
    var parkingDatetimeIn = $(this).data('datetime-in')

    $('#new_exit_vehicle_modal_title').text('Exit Parking Slot • ' + modalTitle)
    $('#exit_vehicle_id').val(vehicleId)
    $('#parking_allocation_datetime_in').val(parkingDatetimeIn)

});

$(document).on('click','#exiting_vehicle_btn', function(e){
    e.preventDefault();
    var plateNumber = $(this).data('plate-number')
    var vehicleId = $(this).data('vehicle-id')
    var vehicleType = $(this).data('vehicle-type')
    var vehicleTypeText = $(this).data('vehicle-type-text')
    var parkingSlotId = $(this).data('parking-slot-id')
    var parkingSlotType = $(this).data('parking-slot-type')
    var parkingSlotTypeText = $(this).data('parking-slot-type-text')
    var parkingEntryPoint = $(this).data('parking-entry-point')
    var parkingDatetimeIn = $(this).data('datetime-in')
    var parkingDatetimeOut = $(this).data('datetime-out')
    var parkingDatetimeInText = $(this).data('datetime-in-text')

    $('#new_unpark_vehicle_modal_title').text('Leave Parking Complex • Plate Number: ' +  plateNumber)
    $('.receipt_plate_number').val(plateNumber)
    $('#receipt_vehicle_id, #unpark_vehicle_id, #return_vehicle_id').val(vehicleId)
    $('#receipt_parking_slot_id, #unpark_parking_slot_id').val(parkingSlotId)
    $('#receipt_datetime_in, #unpark_datetime_in').val(parkingDatetimeIn)
    $('#receipt_datetime_out, #unpark_datetime_out').val(parkingDatetimeOut)
    $('#unpark_vehicle_type').val(vehicleType)
    $('#unpark_vehicle_type_text').val(vehicleTypeText)
    $('#receipt_parking_slot_type').val(parkingSlotType)
    $('#unpark_parking_slot_type_text').val(parkingSlotTypeText)
    $('#unpark_parking_entry_point').val(parkingEntryPoint)
    $('#unpark_datetime_in_text').val(parkingDatetimeInText)

});

$(document).on('select2:select','#parking_entry_point', function(e){
    $('.vehicle-park-submit').removeClass('disabled').removeAttr('disabled', 'disabled');
});