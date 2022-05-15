    
    $("#SelectComunas").hide(); 
    $("#LblComunas").hide(); 
    
    
   
    $.ajax({ 
        url: 'https://apis.digital.gob.cl/dpa/regiones',
        dataType: 'json', 
        type: 'GET', 
        success: function(response) { 
            
            response.forEach(function(valor_actual) {  
                var nombre_region = valor_actual.nombre; 
                var codigo_region = valor_actual.codigo; 
                $("#SelectRegiones").append("<option value="+codigo_region+">"+nombre_region+"</option>"); 
            });
        }
    });




    function cambiar_comunas(region){ 
        
        var id_region = region.value; 
        if(id_region!== null && id_region!==""){ 
            var selectobject = document.getElementById("SelectComunas");
            $("#SelectComunas").show(); 
            $("#LblComunas").show();
            
            var i, L = selectobject.options.length - 1;
            for(i = L; i >= 1; i--) {
                selectobject.remove(i);
            }
            
            $.ajax({
            url: 'https://apis.digital.gob.cl/dpa/regiones/'+id_region+'/comunas', 
            dataType: 'json',
            type: 'GET',
            success: function(response) {
                response.forEach(function(valor_actual) {
                    var nombre_comuna = valor_actual.nombre;
                    var codigo_comuna = valor_actual.codigo;
                    $("#SelectComunas").append("<option value="+codigo_comuna+">"+nombre_comuna+"</option>");
                });
                
                $('#SelectComunas option').prop('selected', function() {
                    return this.defaultSelected;
                });
            }
        });
        }
    }