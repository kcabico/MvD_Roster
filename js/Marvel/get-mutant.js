$(function() {
 $.get({
   url: mutantUrl,
   success: function processMutants(people) {
     $.each(people, function(i, person) {
       addMutant(person);
     });
   }
 });
});

function addMutant(person) {
 var li = $('li.people-template')
   .clone()
   .removeClass('people-template')
   .attr('data-id', person.id);

 li.find('.person-name')
   .html(person.mutant_name);

 $('#people').append(li);
}
