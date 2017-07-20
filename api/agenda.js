// Passo a passo do app:
//
// 1 Usuário preenche cmapos e clica em adicionar;
// 2 Validação apresenta erros(se houverem);
// 3 Gravar dados no storage do browser;
// 4 Apresentar dados na lista.
//



// Declarando função anonima
(function () {
  // user interface (interface do usuário rs)
  var ui = {
    fields: document.querySelectorAll('input'),
    button: document.querySelector('.pure-button'),
    list: document.querySelector('.pure-table')
  };
  // declarando as ações do sistema!

  var validateFields = function () {console.log('valida');debugger;}
  var storeData = function () {};
  var listAll = function () {debugger;};
  var init = function () {
    // maping events (mapeando os eventos do nosso app) Evento é uma ação disparada pelo usuário!
    // quando estamos trabalhando com eventos, não devemos executar uma função assim que a relacionamos a um evento. Quem é responsável por isso é o JavaScript!
    // ui.button.onclick = valideFields;

    ui.button.addEventListener("click", validateFields);
    ui.button.addEventListener("click", listAll);

  }();

})();
