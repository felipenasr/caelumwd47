$(document).ready(function() {


  var onlyNumbers = function (e){
    this.value = this.value.replace(/\D/g, '');
  };

  var getAddressError = function () {
    console.error("ERRO!");
  }
  var getAddressSuccess = function(data){
    $.each(data, function (key, value) {
      $(`#${key}`).val(value);
      console.log(key, value);

    })
  }

  var getAddress = function(e){
    var cep = this.value ;
    if(cep.length !== 8){
      $(this).addClass('error').focus();
    }else{
      $(this).removeClass('error');
      $.ajax({
        url: `https://viacep.com.br/ws/${cep}/json/`,
        dataType: 'json',
        error: getAddressError,
        success: getAddressSuccess
      });

    }
  };

  $("#cep")
    .on('input', onlyNumbers)
    .on('focusout', getAddress);

});
