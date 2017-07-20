(function () {
  console.log('rodando...');
  var meuGA = {};
  meuGA.contador = 0;
  meuGA.add = function (){
      meuGA.contador+=1;
    };

  meuGA.clear = function () {
    return meuGA.contador = 0;
  }
})();
