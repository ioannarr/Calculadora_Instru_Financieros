
//Aviso de que si cierra window se borran sus datos
// let salir = document.getElementById("Top");

// salir.addEventListener("beforeunload", (event) => {
//   // if (event.target.value !== "") {
//   //   addEventListener("beforeunload", beforeUnloadListener, {capture: true});
//   // } else {
//   //   removeEventListener("beforeunload", beforeUnloadListener, {capture: true});
//   // }
//   Salir();
// });

// function Salir(){
 
//  console.log(evento)
//       if(evento == true){
//           localStorage.clear();
//           console.log(localStorage); 
//       }
//       else{
//           console.log("retorna a la aplicacion");
//       }
// }


window.addEventListener('beforeunload', evt => {
  if (closeWindow) return

  evt.returnValue = false

  setTimeout(() => {
      let result = dialog.showMessageBox({
          message: 'Quit app?',
          buttons: ['Yes', 'No']
      })

      if (result == 0) {
          closeWindow = true
          remote.getCurrentWindow().close()
      }
  })
})


//Cambio los colores de los campos de input 
let campo1 = document.getElementById("pCompra")
let campo2 = document.getElementById("pReembolso")
let campo3 = document.getElementById("años")
let campo4 = document.getElementById("PrecioBonoCupon")
let campo13 = document.getElementById("FaceValue")
let campo5 = document.getElementById("AVencimiento")  
let campo6 = document.getElementById("TasaCupon")
let campo7 = document.getElementById("pAdqui1")
let campo8 = document.getElementById("pReembolsoMenor")
let campo9 = document.getElementById("diasLetra1")
let campo10 = document.getElementById("pAdqui2")
let campo11 = document.getElementById("pReembolsoMayor")
let campo12 = document.getElementById("diasLetra2")


function Focalizo(campo) {
  campo.classList.add('barraCamposIn')
  campo.classList.remove('barraCamposOut')
}

function Blurizo(campo) { 
  campo.classList.add('barraCamposOut')
  campo.classList.remove('barraCamposIn')
}

campo1.addEventListener("mouseover", () => Focalizo(campo1))
campo2.addEventListener("mouseover", () => Focalizo(campo2))
campo3.addEventListener("mouseover", () => Focalizo(campo3))

campo1.addEventListener("mouseout", () => Blurizo(campo1))
campo2.addEventListener("mouseout", () => Blurizo(campo2))
campo3.addEventListener("mouseout", () => Blurizo(campo3))

campo4.addEventListener("mouseover", () => Focalizo(campo4))
campo13.addEventListener("mouseover", () => Focalizo(campo13))
campo5.addEventListener("mouseover", () => Focalizo(campo5))
campo6.addEventListener("mouseover", () => Focalizo(campo6))


campo4.addEventListener("mouseout", () => Blurizo(campo4))
campo13.addEventListener("mouseout", () => Blurizo(campo13))
campo5.addEventListener("mouseout", () => Blurizo(campo5))
campo6.addEventListener("mouseout", () => Blurizo(campo6))

campo7.addEventListener("mouseover", () => Focalizo(campo7))
campo8.addEventListener("mouseover", () => Focalizo(campo8))
campo9.addEventListener("mouseover", () => Focalizo(campo9))

campo7.addEventListener("mouseout", () => Blurizo(campo7))
campo8.addEventListener("mouseout", () => Blurizo(campo8))
campo9.addEventListener("mouseout", () => Blurizo(campo9))

campo10.addEventListener("mouseover", () => Focalizo(campo10))
campo11.addEventListener("mouseover", () => Focalizo(campo11))
campo12.addEventListener("mouseover", () => Focalizo(campo12))

campo10.addEventListener("mouseout", () => Blurizo(campo10))
campo11.addEventListener("mouseout", () => Blurizo(campo11))
campo12.addEventListener("mouseout", () => Blurizo(campo12))


//Voy al Top
// function ScrollUp() {
// window.scrollTo(0,0)
// }


//Valido la entrada de campos del BonoCuponCero


function ValidoCampos1(){
 
 BCCCompra = document.getElementById('pCompra').value 
 BCCReembolso = 1000 
 BCCAños = document.getElementById('años').value

    if ( (BCCCompra || BCCAños) == ""){
      alert("Complete todos los campos")
    }
      else if(BCCCompra >= 1000){
        alert("Valor Actual del Bono debe ser menor al Valor Nominal")
    }
      else if( BCCReembolso !== 1000){
        alert("Valor Nominal debe ser 1000")
    }
      else if( BCCAños <= 0){
        alert("Ingrese años al vencimiento")
   }


}

// Valido los campos del Bono Con Cupon
function ValidoCamposYTM(){

BCPrecio =  document.getElementById('PrecioBonoCupon').value 
BCFaceValue = 1000  
BCTasaCupon =  document.getElementById('TasaCupon').value 
BCAVencimiento =  document.getElementById('AVencimiento').value
  
     if ( (BCPrecio || BCTasaCupon || BCAVencimiento) == ""){
       alert("Complete todos los campos")
     }
       else if(BCPrecio >= 1000){
         alert("Valor Actual del Bono debe ser menor al Valor Nominal")
     }
       else if( BCFaceValue !== 1000){
         alert("Valor Nominal debe ser 1000")
     }
       else if( BCAVencimiento <= 0){
         alert("Ingrese años al vencimiento")
    }
    else if ( BCTasaCupon <= 0 ){
      alert("")
    }
 
 }


 // Valido los campos de la LRM menor a 365 dias
function ValidoCampos2(){
  
  LRM1Padqui1 = document.getElementById('pAdqui1').value 
  LRM1PReemboslo = 1000  
  LRMMdias1 = document.getElementById('diasLetra1').value

       if ( (LRM1Padqui1 || LRMMdias1) == ""){
         alert("Complete todos los campos")
       }
         else if(LRM1Padqui1 >= 1000){
           alert("Valor Actual del Bono debe ser menor al Valor Nominal")
       }
         else if( LRM1PReemboslo !== 1000){
           alert("Valor Nominal debe ser 1000")
       }
         else if( LRMMdias1 <= 0){
           alert("Ingrese dias al vencimiento")
      }
      else if ( LRMMdias1 >= 365 ){
        alert("Use Formula mayor a 365 dias")
      }
   
   }


   function ValidoCampos3(){
  
    LRM2Padqui2 = document.getElementById('pAdqui2').value 
    LRM2PReemboslo = 1000  
    LRMMdias2 = document.getElementById('diasLetra2').value
  
         if ( (LRM1Padqui2 || LRMMdias2) == ""){
           alert("Complete todos los campos")
         }
           else if(LRM1Padqui2 >= 1000){
             alert("Valor Actual del Bono debe ser menor al Valor Nominal")
         }
           else if( LRM2PReemboslo !== 1000){
             alert("Valor Nominal debe ser 1000")
         }
           else if( LRMMdias2 <= 0){
             alert("Ingrese dias al vencimiento")
        }
        else if ( LRMMdias2 >= 365 ){
          alert("Use Formula mayor a 365 dias")
        }
     
     }
  

 


