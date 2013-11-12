$(document).ready(function () {
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
            $('#'+attribute).after('<p>'+attribute+': ' + errors[messages] + '</p>')
          }
      }
    })
  });
});

// Need to
