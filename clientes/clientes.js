$(document).ready(function () {


  var getCostumerError = function () {
    debugger;
  }
  var getCostumerSuccess = function (costumers) {
    console.table(costumers);
    var html =[];
    $.each(costumers, (indice, costumer)=>{
      console.log(costumer.nome);
      var tr = `<tr>
  <td>${costumer.id}</td>
  <td>${costumer.nome}</td>
  <td>${costumer.email}</td>
  <td>${costumer.tel}</td>
  <td>${costumer.pais}</td>
</tr>`;
      html.push(tr);
    });
    $('table').append(html);
  }


  $.ajax({
    url: 'http://www.mocky.io/v2/59791f321300000308c10162',
    dataType: 'jsonp' ,
    error: getCostumerError,
    success: getCostumerSuccess
  });

});
