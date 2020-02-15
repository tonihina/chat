$(document).ready(function() {
    $.ajax({
            type: "POST",
            url: "https://andreaconeche.000webhostapp.com/mostrarComunidad.php",
            cache: false,
            data: "nombre="+localStorage.getItem("nombre"),
            beforeSend: function() {
                $("#muestaUsuarios").text("Cargando...");
              },
            success: function(response)
            {
                $('#muestaUsuarios').html(response).fadeIn();
                $("#muestaUsuarios").listview("refresh");

                
               
            }
    });

});

$(document).ready(function() {
    $('h3').text(localStorage.getItem("nombre"));
    $.ajax({
            type: "POST",
            url: "https://andreaconeche.000webhostapp.com/mostrarImagen.php",
            cache: false,
            data: "nombre="+localStorage.getItem("nombre"),
            beforeSend: function() {
                $("#fotoPerfil").text("Cargando...");
              },
            success: function(response)
            {
                $('#fotoPerfil').html(response).fadeIn();
                $("#fotoPerfil").listview("refresh");
                
            }
    });

});
var usuarioDesti="";
var usuarioRemi=localStorage.getItem("nombre");

function mensajea(destinatario){
    $.mobile.changePage("#mensajes",{ transition: "slideup", changeHash: true});
    usuarioDesti=destinatario;
}

$("#enviarMensaje").click(function(){

  var mensaje=$('[name="mensaje"]').val();
  
  
  var fMensaje = $("#mensaje").val();
 
  
  var dataString = "mensaje=" + fMensaje +"&destinatario=" + usuarioDesti +"&remitente=" + usuarioRemi;
  $.ajax({
    type:"POST",
    url: "https://andreaconeche.000webhostapp.com/mandarMensaje.php",
    data: dataString,
    crossDomain: true,
    cache: false,
    beforeSend: function() {
      document.getElementById("enviarMensaje").innerHTML = "Enviando...";
    },
    success: function(data) {
      if (data == "success") {
        document.getElementById("enviarMensaje").innerHTML = "Enviar";
        var fMensaje = $("#mensaje").val(" ");
        refrescar();
      } else if (data == "error") {
        alert("Error");
      }
  }
  });
  
});

$("#mensajes").on("pageshow", function(){ 
     
  
setTimeout($.ajax({
  type: "POST",
  url: "https://andreaconeche.000webhostapp.com/mostrarMensajes.php",
  cache: false,
  data: "destinatario=" + usuarioDesti +"&remitente=" + usuarioRemi,
  beforeSend: function() {
      $("#muestradeMensajes").text("Cargando...");
    },
  success: function(response)
  {
      $('#muestradeMensajes').html(response).fadeIn();
      $("#muestradeMensajes").listview("refresh");   
      $('#mns').innerHTML("0");
     
  }
}), 1000);
  /** Una vez obtenido el ID de noticia hacemos lo necesario para cargar los datos de la noticia **/

});


function refrescar(){
  $(document).ready(function() {
   
    $.ajax({
            type: "POST",
            url: "https://andreaconeche.000webhostapp.com/mensajesPanel.php",
            cache: false,
            data: "nombre="+localStorage.getItem("nombre"),
            beforeSend: function() {
                $("#muestradeMensajesPanel").text("Cargando...");
              },
            success: function(response)
            {
                $('#muestradeMensajesPanel').html(response).fadeIn();
                $("#muestradeMensajesPanel").listview("refresh");
                
            }
    });

});
$.ajax({
  type: "POST",
  url: "https://andreaconeche.000webhostapp.com/mostrarMensajes.php",
  cache: false,
  data: "destinatario=" + usuarioDesti +"&remitente=" + usuarioRemi,
  beforeSend: function() {
      $("#muestradeMensajes").text("Enviando...");
    },
  success: function(response)
  {
      $('#muestradeMensajes').html(response).fadeIn();
      $("#muestradeMensajes").listview("refresh");   
     
     
  }
});
$(document).ready(function() {
   
  $.ajax({
          type: "POST",
          url: "https://andreaconeche.000webhostapp.com/mensajes.php",
          cache: false,
          data: "nombre="+localStorage.getItem("nombre"),
        
          success: function(response)
          {
              $('#mns').html(response).fadeIn();
              $("#mns").listview("refresh");
              
          }
  });

})
}

