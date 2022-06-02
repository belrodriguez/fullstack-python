/* Filtro para formulario Bootstrap - JQuery */

$("#tipoMensaje").change(function() {
    if ($(this).val() == "2") {
      $('#reviewLibros').show();
      $('#reviewMensaje').attr('required', '');
      $('#reviewMensaje').attr('data-error', 'Este campo es obligatorio');
    } else {
      $('#reviewLibros').hide();
      $('#reviewMensaje').removeAttr('required');
      $('#reviewMensaje').removeAttr('data-error');
    }
  });
  $("#tipoMensaje").trigger("change");


/* Animacion tipo maquina de escribir para index */

var aText = new Array(
"Hola, soy El Autor."
    );

var iSpeed = 70; 
var iIndex = 0;
var iArrLength = aText[0].length;
var iTextPos = 0;
var sContents = '';
var iRow;
    
function typewriter1()
{
    sContents =  ' ';
    iRow = Math.max(0, iIndex);
    var destination = document.getElementById("saludo1");
    
    while ( iRow < iIndex ) {
    sContents += aText[iRow++];
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos);
    if ( iTextPos++ == iArrLength ) {
    iTextPos = 0;
    iIndex++;
    if ( iIndex != aText.length ) {
    iArrLength = aText[iIndex].length;
    setTimeout("typewriter1()", 500);
    }
    } else {
    setTimeout("typewriter1()", iSpeed);
    }
}

typewriter1();