$('#dc_form').on('submit', createPerson);

function createPerson(ev){
  ev.preventDefault();
  var name = ev.currentTarget.name.value;
  $.post({
    url: xternUrl,
    data: {
      person: {
        name: name,
        promoted: false,
      }
    },
    success: addPerson
  });
}


function addPerson(person){
  var li = $('li.people-template')
      .clone()
      .removeClass('people-template')
      .attr('data-id', person.person.id);

  li.find('.person-name')
    .html(person.person.name);

  $('#Rivals').append(li);
  dc_count++;
  $('.dc_count').html("Hero Count: "+dc_count);
}
