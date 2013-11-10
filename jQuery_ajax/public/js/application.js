function simonSays(){
$(document).ready(function(){
  $('body').on('click', '#get_color', function(e){
    preventinator(e)
    getColorPost()

  });
  function preventinator(e){
    e.preventDefault()
    console.log("Should have prevented Default")
  }
  function getColorPost(){
    $.ajax({
      type: 'post',
      url: '/color'
    }).done(function(response){
      console.log(response)
    })
  }
});
}

simonSays()


// psuedo-code
// wrap it all in simonSays func
// call simonSays func. Maybe even make simonSays an object literal...
// create an event listerner

