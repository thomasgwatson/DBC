$(document).ready(function (e) {

//   $('#createEventForm').validator().submit(function(e) {
//     var formData = $(this).serialize()

//     if (!e.isDefaultPrevented()){}
//     $.ajax({
//       type: 'post',
//       url: '/events/create',
//       data: formData
//     })
//     .done(function(response){
//       for (var attribute in response){
//         var errors = response[attribute];
//           for (var messages in errors){
//             $('#'+attribute).after('<p>'+attribute+': ' + errors[messages] + '</p>')
//           }
//       }
//     })

//   };
// });

$('#createEventForm').validator().submit(function(e) {

  var form = $(this);

// client-side validation OK.
if (!e.isDefaultPrevented()) {
var formData = $(form).serialize();

$.ajax({
      type: 'post',
      url: '/events/create',
      data: formData
    }).done(function(response){
      console.log(response)
      console.log(response[0]['status'])
      if (response[0].status === 'added'){
        console.log("did this get in here?")
        window.location.href('/')
      }
      for (var attribute in response){
        var errors = response[attribute];
          for (var messages in errors){
            $('#'+attribute).after('<p>'+attribute+': ' + errors[messages] + '</p>');
          }
      }
    })
  }

// prevent default form submission logic
e.preventDefault();
})
});
