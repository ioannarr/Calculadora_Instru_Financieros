function BonoCupon (PrecioBonoCupon, FaceValue, AVencimiento, TasaCupon){
    
    this.PrecioBonoCupon = Number(PrecioBonoCupon);
    this.FaceValue = Number(FaceValue);
    this.AVencimiento = AVencimiento;
    this.TasaCupon = TasaCupon;

    //calculo la rentabilidad
    this.rentabilidad_BonoCupon = function (){
        return ( ( (this.TasaCupon/100) * this.FaceValue ) + ((this.FaceValue-this.PrecioBonoCupon) / (this.AVencimiento)) ) / ((this.FaceValue + this.PrecioBonoCupon) / 2 );             
     }
 
     //imprimo la rentabilidad en la consola
     this.imprimo_rentabilidad_BonoCupon = function() {
          console.log(( ( (this.TasaCupon/100) * this.FaceValue ) + ((this.FaceValue-this.PrecioBonoCupon) / (this.AVencimiento)) ) / ((this.FaceValue + this.PrecioBonoCupon) / 2 ));
     }
     
     // redondeo a 3 decimales
     this.rentabilidad_Redondeo_BonoCupon = function (){
         return redondeado_bonocupon = ((( ( (this.TasaCupon/100) * this.FaceValue ) + ((this.FaceValue-this.PrecioBonoCupon) / (this.AVencimiento)) ) / ((this.FaceValue + this.PrecioBonoCupon)/2))*100).toFixed(3);
     }
 
    //imprimo la rentabilidad de 3 decimales en consola para ver que este todo en orden
     this.imprimir_BonoCupon = function(){
         console.log(redondeado_bonocupon);
     }
 
     //imrpimo la rentabilidad en html para el usuario
     this.BonoCuponCeroUsuario = function(){
         document.getElementById("rentabilidadBonoCupon").value = redondeado_bonocupon;
     }


     //calculo current yield
     this.CurrentYield = function(){
         return currentyield = (((this.TasaCupon/100) * (this.FaceValue)) / (this.PrecioBonoCupon))*100;
     }


     //redondeo la currentyield
     this.redondeo_CurrentYield = function(){
        return redondeo_currentyield = ((((this.TasaCupon/100) * (this.FaceValue)) / (this.PrecioBonoCupon))*100).toFixed(3)
    }


     //imprimo current yield 
     this.imprimir_CurrentYield = function(){
         console.log(currentyield);
     }

}