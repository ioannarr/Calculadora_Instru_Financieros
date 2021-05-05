
class MiLetraMenor {

    constructor (precioAdqui1,precioVentaMenor, diasMenor) {
        this.precioAdqui1 = precioAdqui1;
        this.precioVentaMenor = precioVentaMenor;
        this.diasMenor = diasMenor;
        }

    // Funciones de la Letra de menos de 365 dias

    //calculo la rentabilidad
    rentabilidadLetraMenor() { 
        return ((this.precioVentaMenor - this.precioAdqui1)/(this.precioAdqui1*this.diasMenor))*360;  
    }
    
    //imprimo la rentabilidad en la consola
    imprimo_rentabilidadLetraMenor(){
        console.log(((this.precioVentaMenor - this.precioAdqui1)/(this.precioAdqui1*this.diasMenor))*360);
    }

    // redondeo a 3 decimales
    rentabilidadLetraMenorRedondeo(){ 
        return (((this.precioVentaMenor - this.precioAdqui1)/(this.precioAdqui1*this.diasMenor))*360).toFixed(3);   
    }

    //imprimo la rentabilidad de 3 decimales en consola para ver que este todo en orden
    imprimir_letraMenor(){
       let redondeadoLetraMenor = (((((this.precioVentaMenor - this.precioAdqui1)/(this.precioAdqui1*this.diasMenor))*360))*100).toFixed(3);
       console.log(redondeadoLetraMenor);
    }

    //imrpimo la rentabilidad en html para el usuario

    LetraMenorUsuario (){
       document.getElementById("rentabilidadLetraMenor").value = resultadoCalculo2;

    }


}

class MiLetraMayor{

    constructor( precioAdqui2, precioVentaMayor, diasMayor){
        this.precioAdqui2 = precioAdqui2;
        this.precioVentaMayor = precioVentaMayor;
        this.diasMayor = diasMayor;
    }

    //Funciones de la Letra de mas de 365 dias

    //calculo la rentabilidad
    rentabilidadLetraMayor(){
      let resultadoLetraMayor = ((this.precioVentaMayor/this.precioAdqui2)**(360/this.diasMayor)-1)*100; 
      return resultadoLetraMayor;
    }

    //imprimo la rentabilidad en la consola
    imprimo_rentabilidadLetraMayor(){
        console.log(((this.precioVentaMayor/this.precioAdqui2)**(360/this.diasMayor)-1)*100);
    }

    // redondeo a 3 decimales
    rentabilidadLetraMayorRedondeo (){
       let redondeadoLetraMayor = ((this.precioVentaMayor/this.precioAdqui2)**(360/this.diasMayor)-1).toFixed(3);
        return redondeadoLetraMayor;
    }

    //imprimo la rentabilidad de 3 decimales en consola para ver que este todo en orden
    imprimir_letraMayor(){
        console.log (((((this.precioVentaMayor/this.precioAdqui2)**(360/this.diasMayor)-1))*100).toFixed(3));
    }


    //imrpimo la rentabilidad en html para el usuario
    LetraMayorUsuario (){
     document.getElementById("rentabilidadLetraMayor").innerHTML = ((((this.precioVentaMayor/this.precioAdqui2)**(360/this.diasMayor)-1))*100).toFixed(3);
    }

    
    UnidadIndexada(){
        let resultadoUI = (((((this.precioVentaMayor * 365)/(this.precioAdqui2)) - 365)* (1/this.diasMayor))*100).toFixed(3); 
        return resultadoUI;
    }

    imprimo_UnidadIndexada(){
        let imprimo_resultadoUI = console.log(resultadoUI)
    }


}

