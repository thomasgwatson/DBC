$(document).ready(function () {
  // Just focus on making events display pretty
  $('#createEventForm').on("submit", function (e) {
    e.preventDefault();
    console.log(e)
    var formData = $(this).serialize()
    $.ajax({
      type: 'post',
      url: '/events/create',
      data: formData
    }).done(function(response){
      for (var attribute in response){
        var errors = response[attribute];
          for (var messages in errors){

            // select the approp. element based on errors(response[attribute]) and then append each message
            console.log(attribute)
            console.log(messages)
            console.log(errors[0])
            $('#'+attribute).after('<p>LOL no</p>')
          }
      }
    })
    // var request = $.ajax({ url: $(this).attr('href'), type: 'delete' });
    // request.done(function () { window.location = "/"; });
  });



});





   var data = $(this).serialize()
   //  console.log(data)
   //  var formValues = $(this).val
   //  console.log(formValues)
