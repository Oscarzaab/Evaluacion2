
    
    $(function () {
  
    $("#txtRut").validCampoFranz("0123456789");
    $("#txtDigito").validCampoFranz("0123456789Kk");
    $("#txtNombre").validCampoFranz(" abcdefghijklmnñopqrstuvwxyzáéíóúäëïöüABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÄËÏÖÜ");
    $("#txtApellido").validCampoFranz(" abcdefghijklmnñopqrstuvwxyzáéíóúäëïöüABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÄËÏÖÜ"
    );
    $("#txtDireccion").validCampoFranz(
      " abcdefghijklmnñopqrstuvwxyzáéíóúäëïöüABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÄËÏÖÜ0123456789"
    );
    
  });
  
  
  $(function () {
    // bloque jquery
    const IVA = 1.19;
    let subTotal = 0;
    $("#btnTotal1").click (function () {
      // validar campos vacio
     
      let nombre = $("#txtNombre").val();

    if (nombre == "") {
      alert("Debe especificar el nombre");
      $("#txtNombre").focus();
    }else {
      let lavexterior = $("#txtLavExterior").val();
      let lavmotor = $("#txtLavMotor").val();
      resultado = parseFloat(lavexterior) + parseFloat(lavmotor);
      subTotal = resultado;
      $("#txtLavExterior").val("");
      $("#txtLavMotor").val("");
      $("#txtLavExterior").focus(); // asigna el foco al elemento mencionado
      // método html permite agregar contenidos al div. Elimina el contenido existente
      $("#divMensajes").html(
      "Lavado Exterior: " + lavexterior + " CLP  " +" ; " + " Lavado de Motor: " + lavmotor +  " CLP  "
      );
    }
  });

  $("#btnTotal2").click(function () {
    let nombre = $("#txtNombre").val();
    let resultado = subTotal * IVA;
    
    // método html permite agregar contenidos al div. Elimina el contenido existente

    $("#divMensajes").html(
      "Cliente: " +
        nombre +
        ". Total a pagar: " +
        resultado +  " CLP"
    

    );
  });
});


