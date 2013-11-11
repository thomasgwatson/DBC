// function simonSays(){
$(document).ready(function(){
  $('body').on('click', '#get_color', function(e){
    preventinator(e)
    getColorPost()

  });
  function preventinator(event){
    event.preventDefault()
    console.log("Should have prevented Default")
  }
  function getColor(){
    $.ajax({
      type: 'get',
      url: '/color'
    }).done(function(response){
      console.log(response)
      responseHandler(response)
    })
    function responseHandler(serverData){
      $('#color_me li:nth-child(' + serverData.cell + ')').css( 'background-color', serverData.color)
    }
  }
});
// }

// simonSays()


// psuedo-code
// wrap it all in simonSays func
// call simonSays func. Maybe even make simonSays an object literal...
// create an event listerner

