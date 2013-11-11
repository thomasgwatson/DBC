$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());

  function bindEvents() {
    // Bind functions which add, remove, and complete todos to the appropriate
    // elements
    $('button.add').on('click', function(){
      var $toDoItem = buildTodo($('.todo').val())
      $('.todo_list').append($toDoItem)
    })

    $('.todo_list').on('click', '.complete', function(e){
      e.preventDefault()
      getTodoNode.call(this).addClass('complete')
    })

    $('.todo_list').on('click', '.delete', function(e){
      e.preventDefault()
      getTodoNode.call(this).remove()
    })

    var getTodoNode = function() {
      return $(this).closest('.todo')
    }
  }

  //Create functions to add, remove and complete todos



  function buildTodo(todoName) {
    // Creates an jQueryDOMElement from the todoTemplate.
    var $todo = $(todoTemplate);
    // Modifies it's text to use the passed in todoName.
    $todo.find('h2').text(todoName);
    // Returns the jQueryDOMElement to be used elsewhere.
    return $todo;
  }


  bindEvents();
});
