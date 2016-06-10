$(document).on('click', 'button.delete', function(ev) {
  var li = $(ev.currentTarget).closest('li');
  var id = li.data('id');
  deletePerson(id, li);
});


function deletePerson(id, li){
  $.ajax({
    url: xternUrl + '/' + id,
    method: 'delete',
    success: function(){
      if(li){
        li.remove();
        dc_count--;
        $('.dc_count').html("Hero Count: "+dc_count);
      }
    }
  })
}
