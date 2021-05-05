
//Capturo Datos de quien se logea

Bienvenido()
function Bienvenido (){
    const bienvenido =  { }
    
    bienvenido.nombre = prompt("Bienvenido, ingrese su Nombre:")
    bienvenido.apellido = prompt("Bienvenido, ingrese su Apellido:")
    bienvenido.id = "10020"

    const UsuarioCorriente = new UsuarioLogeado (bienvenido.nombre, bienvenido.apellido, bienvenido.id);

    UsuarioCorrienteJSON = JSON.stringify(UsuarioCorriente);
    
    localStorage.setItem("UsuarioCorriente",UsuarioCorrienteJSON)
    console.log(UsuarioCorrienteJSON)
}

//Recupero datos de Storage e Imprimo nombre de ususario logeado en Bienvenido

function RecuperoDatos(){

    const YoUsuaurio = JSON.parse(localStorage.getItem("UsuarioCorriente"))
    MiNombre = YoUsuaurio.nombre
    MiApellido = YoUsuaurio.apellido
    MiId = YoUsuaurio.id
                
}

RecuperoDatos();

window.addEventListener('load', (event) => {
 HolaUsuario();
});

function HolaUsuario(){

  const elemPadre = document.getElementById("Usuario")   

  let contenedor = document.createElement("div");
  //Definimos el innerHTML del elemento con una plantilla de texto
  contenedor.innerHTML = `<p>  ${MiNombre} ${MiApellido}`;
   elemPadre.appendChild(contenedor);

}


//Capturo y Calculo la rentabilidad del bono y lp imprimo en consola.

function Calculo1 (){

    ArrayCuponCero = new CuponCero (document.getElementById('pCompra').value, document.getElementById('pReembolso').value, document.getElementById('años').value)
    console.log(ArrayCuponCero);
    resultadoCalculo = ArrayCuponCero.rentabilidadRedondeo();
    console.log(resultadoCalculo); 

    // creo los resultados dinamicamente    
    let ccero = $("#CCero").html()
    ccero += resultadoCalculo

    //$("#CCero").html(ccero)
    let LugarCuponCero = $("<div id='ioa1' class='alineo'>" + "<p>La rentabilidad es de: </p>" + "  "  + ccero + "<p> % </p> " + "</div>")  
    $("#CCero").append(LugarCuponCero)
    $("#CCero").addClass("RentabilidadFormateada")
    $("#botonCCero").attr("disabled", true);
   
  }

    function LimpiarCero(){

      $("#botonCCero").attr("disabled", false);
      $("#pCompra").val('');
      $("#pReembolso").val('');
      $("#años").val('');
      $('#ioa1').remove();
      $('#ioaequiv').remove();

  } 


  //Guardo Datos de la sesion 

function GuardarDatosBono() {
    if (typeof(Storage) !== "undefined") {
      sessionStorage.setItem('pCompra', document.getElementById('pCompra').value);
      sessionStorage.setItem('pReembolso', document.getElementById('pReembolso').value);
      sessionStorage.setItem('años', document.getElementById('años').value);
      console.log('se guardaron los datos correctamente');

      for (let i = 0; i < sessionStorage.length; i++) {
        let clave = sessionStorage.key(i);
        console.log("Clave: "+ clave);
        console.log("Valor: "+ sessionStorage.getItem(clave));
    }

    } else { 
        alert('Ingrese datos para el calculo');   
    }
  }

 //REndimiento equivalente del bono cupon cero

function RendimientoEquivalente(){
  
let EquivCero = new  CuponCero (document.getElementById('pCompra').value, document.getElementById('pReembolso').value, document.getElementById('años').value)
console.log(EquivCero)

resultadoBEY = EquivCero.redondeoBEY();
console.log(resultadoBEY); 

// creo los resultados dinamicamente    
let lugarequivalente = $("#equivalente").html()
lugarequivalente += resultadoBEY

//$("#CCero").html(ccero)
let LugarEquiv = $("<div id='ioaequiv' class='alineo'>" + "<p>La rentabilidad equivalente es: </p>" + "  "  + lugarequivalente + "<p> % </p> " + "</div>")  
$("#equivalente").append(LugarEquiv)
$("#equivalente").addClass("RentabilidadFormateada")
$("#botonCCero").attr("disabled", true);
    
}


//Capturo y Calculo la rentabilidad de la letra menor y la imprimo en consola.

function Calculo2 (){
    ArrayLetraMenor = new MiLetraMenor (document.getElementById('pAdqui1').value, document.getElementById('pReembolsoMenor').value, document.getElementById('diasLetra1').value)
    console.log(ArrayLetraMenor);
    resultadoCalculo2 = ArrayLetraMenor.rentabilidadLetraMenorRedondeo();
    console.log(resultadoCalculo2); 

    let lrmmenor = $("#LRMmenor").html()
    lrmmenor = resultadoCalculo2

    var LugarLRMmenor = $("<div id='ioa2' class='alineo'>" + "<p>La rentabilidad es de:</p>" + lrmmenor + "</div>")  
    $("#LRMmenor").append(LugarLRMmenor)
    $("#LRMmenor").addClass("RentabilidadFormateada")
    $("#botonLRMmenor").attr("disabled", true);
  
}
    //Funcion para limpiar Y habilitar nuevo calculo
   
    function LimpiarLRMmenor() {
       
      $("#botonLRMmenor").attr("disabled", false);
      $("#pAdqui1").val('');
      $("#pReembolsoMenor").val('');
      $("#diasLetra1").val('');
      $("#ioa2").remove();
    
}

//Guardo Datos de la sesion

function GuardarDatosLetraMenor() {
    if (typeof(Storage) !== "undefined") {
      sessionStorage.setItem('pAdqui1', document.getElementById('pAdqui1').value);
      sessionStorage.setItem('pReembolsoMenor', document.getElementById('pReembolsoMenor').value);
      sessionStorage.setItem('diasLetra1', document.getElementById('diasLetra1').value);
      console.log('se guardaron los datos correctamente');

      for (let i = 0; i < sessionStorage.length; i++) {
        let clave = sessionStorage.key(i);
        console.log("Clave: "+ clave);
        console.log("Valor: "+ sessionStorage.getItem(clave));
    }

    } else {
      swal({
        text:'Ingrese datos para el calculo',
        });
    }
  }
//Capturo y Calculo la rentabilidad de la letra mayor y la imprimo en consola.

 function Calculo3 (){
   debugger
  let UYU = document.getElementById("UYU").checked;
  let UI =  document.getElementById("UI").checked;
  
  console.log(UYU)
  console.log(UI)

  ArrayLetraMayor = new MiLetraMayor (document.getElementById('pAdqui2').value, document.getElementById('pReembolsoMayor').value, document.getElementById('diasLetra2').value)
  console.log(ArrayLetraMayor);
    
    if (UYU  == true){
   
    resultadoCalculo3 = ArrayLetraMayor.rentabilidadLetraMayorRedondeo();
    console.log(resultadoCalculo3);  
    
    let lrmmayor = $("#LRMmayor").html()
    lrmmayor += resultadoCalculo3

    var LugarLRMmayor = $("<div id='ioa3' class='alineo'>" + "<p>La rentabilidad es de:</p>" + lrmmayor + "</div>")  
    $("#LRMmayor").append(LugarLRMmayor)
    $("#LRMmayor").addClass("RentabilidadFormateada")
    $("#botonLRMmayor").attr("disabled", true);
  
    }

    else if (UI == true) {

    resultadoCalculo_UI = ArrayLetraMayor.UnidadIndexada();
    console.log(resultadoCalculo_UI);

    let lrm_UI_mayor = $("#LRMmayor").html()
    lrm_UI_mayor += resultadoCalculo_UI

    var LugarLRMmayor = $("<div id='ioa3' class='alineo'>" + "<p>La rentabilidad es de:</p>" + lrm_UI_mayor + "</div>")  
    $("#LRMmayor").append(LugarLRMmayor)
    $("#LRMmayor").addClass("RentabilidadFormateada")
    $("#botonLRMmayor").attr("disabled", true);

    } 
    
      else {

      alert( "Seleccione una unidad de valor");

    }

  }

  function LimpiarLRMmayor() {
      
      $("#botonLRMmayor").attr("disabled", false);
      $("#pAdqui2").val('');
      $("#pReembolsoMayor").val('');
      $("#diasLetra2").val('');
      $('#ioa3').remove(); 
      $('#UYU').val('');
      $('#UI').val('');    
    
  }


//Guardo Datos de la sesion

function GuardarDatosLetraMayor() {
    if (typeof(Storage) !== "undefined") {
      sessionStorage.setItem('pAdqui2', document.getElementById('pAdqui2').value);
      sessionStorage.setItem('pReembolsoMayor', document.getElementById('pReembolsoMayor').value);
      sessionStorage.setItem('diasLetra2', document.getElementById('diasLetra2').value);
      console.log('se guardaron los datos correctamente');

      for (let i = 0; i < sessionStorage.length; i++) {
        let clave = sessionStorage.key(i);
        console.log("Clave: "+ clave);
        console.log("Valor: "+ sessionStorage.getItem(clave));
    }

    } else {
    
        alert('Ingrese datos para el calculo');
  
    }
  }

  //Calculo la rentabilidad aproximada del bono cupon
  
  function CalculoYTM(){

    ArrayBonoCupon = new BonoCupon (document.getElementById('PrecioBonoCupon').value, document.getElementById('FaceValue').value, document.getElementById('AVencimiento').value, document.getElementById('TasaCupon').value)
    console.log(ArrayBonoCupon);
    
    resultadoCalculoYTM = ArrayBonoCupon.rentabilidad_Redondeo_BonoCupon();
    console.log(resultadoCalculoYTM);
  
    let ccupon = $("#CCupon").html()
    ccupon += resultadoCalculoYTM

    var LugarConCupon = $("<div id='ioaYTM' class='alineo'>" + "<p>La Yield to Maturity es de:</p>" + ccupon + "</div>")  
    $("#CCupon").append(LugarConCupon)
    $("#CCupon").addClass("RentabilidadFormateada")
    $("#botonCCupon").attr("disabled", true);
 
  }


  function CurrentYield(){

    BonoCurrent = new BonoCupon (document.getElementById('PrecioBonoCupon').value, document.getElementById('FaceValue').value, document.getElementById('AVencimiento').value, document.getElementById('TasaCupon').value)
    resultadoCurrent_redondeado = BonoCurrent.redondeo_CurrentYield()
    
    console.log(resultadoCurrent_redondeado)
    
    let currentY = $("#currentyield").html()
    currentY += resultadoCurrent_redondeado
    
    var LugarCurrentYield = $("<div id='ioaCurrent' class='alineo'>" + "<p>La Current Yield es de:</p>" + currentY + "</div>")  
    $("#currentyield").append(LugarCurrentYield)
    $("#currentyield").addClass("RentabilidadFormateada")
    $("#botonCCupon").attr("disabled", true);
  
  }

     //Funcion para limpiar Y habilitar nuevo calculo
      function Limpiar(){

      $("#botonCCupon").attr("disabled", false);

      $("#PrecioBonoCupon").val('');
      $("#FaceValue").val('');
      $("#AVencimiento").val('');
      $("#TasaCupon").val('');

      $('#ioaYTM').remove();
      $('#ioaCurrent').remove();

}

  //Guardo Datos de la sesion

function GuardarDatosBonoConCupon() {
  if (typeof(Storage) !== "undefined") {
    sessionStorage.setItem('PrecioBonoCupon', document.getElementById('PrecioBonoCupon').value);
    sessionStorage.setItem('FaceValue', document.getElementById('FaceValue').value);
    sessionStorage.setItem('AVencimiento', document.getElementById('AVencimiento').value);
    sessionStorage.setItem('TasaCupon', document.getElementById('TasaCupon').value);
    console.log('se guardaron los datos correctamente');

    for (let i = 0; i < sessionStorage.length; i++) {
      let clave = sessionStorage.key(i);
      console.log("Clave: "+ clave);
      console.log("Valor: "+ sessionStorage.getItem(clave));
  }

  } else {
   alert('Ingrese datos para el calculo');
  }
}



