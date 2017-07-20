var MGA = (function () {
  console.log('rodando...');
  var meuGA = {};

  meuGA.contador = 0;
  meuGA.add = function (){
      return meuGA.contador+=1;
    };

  meuGA.clear = function () {
    return meuGA.contador = 0;
  }

  return {adiciona: meuGA.add, limpar: meuGA.clear};
})();
