$(document).ready(function() {
  addButtonListener()
  rollButtonListener();
});

var wat = function(){
  console.log("WAT")
}

var addDie = function(){
  $('.dice').append('<div class="die">0</div>');
}

var addButtonListener = function(){
  $('#roller button.add').on('click', function() {
    wat()
    addDie()
  });
}

var rollButtonListener = function(){
  $('#roller button.roll').on('click', function() {
    rollEachDie()
  });
}

var rollEachDie = function(){
 $('.die').each(function(k, die) {
      var value = Math.floor((Math.random()*6)+1);
      $(die).text(value);
    });
}

var roll = function(){}
