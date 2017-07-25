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
    list: document.querySelector('tbody')
  };
  // declarando as ações do sistema!

  var validateFields = function (e) {
    // preventDefault é uma função que o JS 'evita' q a ação padrão seja executada, sem que tenhamos que mudar o type do button, por exemplo
    e.preventDefault();
    var erros = 0;
    var data = {};
    ui.fields.forEach(function (field) {
      if(field.value.trim().length===0){
        field.classList.add("error");
        erros++;
      }else{
        field.classList.remove('error')
        data[field.id] = field.value;
      }

    });
    if(erros > 0){
      document.querySelector('.error').focus();
    }else{
      storeData(data);
    }
  }
  var storeData = function (data) {
    // gravando dados no localStorage!
    var list = (localStorage.schedule)?JSON.parse(localStorage.schedule):[];
    list.push(data);
    localStorage.schedule = JSON.stringify(list);
    cleanFields();
    // listAll();
  };
  var cleanFields = () => ui.fields.forEach(field =>field.value = '');
  var listAll = function () {
    if (localStorage && localStorage.schedule) {
      var contacts = JSON.parse(localStorage.schedule);
      var html = [];
      // console.table(contacts);
      contacts.forEach((contact, key)=>{
          // template string. ES6
          var line = `
                      <tr>
                        <td>${key}</td>
                        <td>${contact.name}</td>
                        <td>${contact.email}</td>
                        <td>${contact.telefone}</td>
                        <td><a href="#" data-action="delete" data-id="${key}">Excluir</a></td>
                      </tr>
                      `;
          html.push(line);
      });
      console.log(html.join(''));
      ui.list.innerHTML = html.join("");
    }
  };


  var init = function () {
    // maping events (mapeando os eventos do nosso app) Evento é uma ação disparada pelo usuário!
    // quando estamos trabalhando com eventos, não devemos executar uma função assim que a relacionamos a um evento. Quem é responsável por isso é o JavaScript!
    // ui.button.onclick = valideFields;

    ui.button.addEventListener("click", validateFields);
    listAll();


  }();

})();
