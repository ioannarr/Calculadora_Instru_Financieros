//Funcion Constructora del Cupon Cero

function CuponCero (precioCompra, precioReembolso, periodo ){
    
    this.precioCompra = Number(precioCompra);
    this.precioReembolso = Number(precioReembolso);
    this.periodo = periodo;

    //calculo la rentabilidad
    this.rentabilidad = function (){
       return resultado = (((this.precioReembolso/this.precioCompra)**(1/this.periodo))-1)*100;             
    }

    //imprimo la rentabilidad en la consola
    this.imprimo_rentabilidad = function() {
         console.log((((this.precioReembolso/this.precioCompra)**(1/this.periodo))-1)*100);
    }
    
    // redondeo a 3 decimales
    this.rentabilidadRedondeo = function (){
        return redondeado = (((((this.precioReembolso/this.precioCompra)**(1/this.periodo))-1))*100).toFixed(3);
    }

   //imprimo la rentabilidad de 3 decimales en consola para ver que este todo en orden
    this.imprimir_cuponcero = function(){
        console.log(redondeado);
    }

    //imrpimo la rentabilidad en html para el usuario
    this.CuponCeroUsuario = function(){
        document.getElementById("rentabilidadCuponCero").value = resultadoCalculo;
    }

    //calculo rendimiento equivalente BEY = [(PReembolso - PCompra) × 365] / (PCompra × DiasAlVencimiento)

    this.BEY = function(){
        return  ((this.precioReembolso - this.precioCompra)*365) / (this.precioCompra * (this.periodo*365))
    }

    this.redondeoBEY = function(){
        return resultadoBEYredondeo =  (((this.precioReembolso - this.precioCompra)*365) / (this.precioCompra * (this.periodo*365))*100).toFixed(3);
    }
}

      
