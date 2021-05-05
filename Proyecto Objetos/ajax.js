
//Se cargan los datos cuando se carga la pagina

$(document).ready(() => { 

    $.getJSON("datos.json", (response, status)=>{
          if(status === "success"){
            let datosTasas = response;
            for (const tasas of datosTasas) {
              $("#ContenedorLogueo").append(
                                `<div>
                                <p> ${tasas.NombreTasa6M}</p>                                  
                                <p> ${tasas.TasaCuponCero6M}</p>
                                </div>
                                <div>
                                <p> ${tasas.NombreTasa2A}</p>                                  
                                <p> ${tasas.TasaCuponCero2A}</p>
                                </div>
                                <div>
                                <p> ${tasas.NombreTasa3A}</p>                                  
                                <p> ${tasas.TasaCuponCero3A}</p>
                                </div>
                                <div>
                                <p> ${tasas.NombreTasa5A}</p>                                  
                                <p> ${tasas.TasaCuponCero5A}</p>
                                </div>
                                <div>
                                <p> ${tasas.NombreTasa7A}</p>                                  
                                <p> ${tasas.TasaCuponCero7A}</p>
                                </div>
                                <div>
                                <p> ${tasas.NombreTasa10A}</p>                                  
                                <p> ${tasas.TasaCuponCero10A}</p>
                                </div>
                                <div>
                                <p> ${tasas.NombreTasa20A}</p>                                  
                                <p> ${tasas.TasaCuponCero20A}</p>
                                </div>`
                                );              

            }  
          }

          else {
            
            const contenidoError = `<div class="center red-text">
                                     <h4 >No se pudo recuperar el contenido</h4>
                                    </div>`
            $("#ContenedorLogueo").append(contenidoError);

          }
    });
});





$(document).ready(function() {
   $.ajax({
       url: "https://api.chucknorris.io/jokes/random"
   }).then(function(data) {
         Tabla = `<div class= "container border miMargen"><div class="row justify-content-center align-items-center text-center miMargen"><p>"${data.value}"</p></div>
         <div class="row justify-content-center align-items-center text-center"><img src="${data.icon_url}" class="responsive-img"></div></div>`
         $('#app').append(Tabla);       

   });
});
