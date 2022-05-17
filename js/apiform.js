
    /* evento carga de documento*/
    document.addEventListener("DOMContentLoaded", () => {
        console.log("El documento se ha cargado");
    });

    const form = document.querySelector('#form')


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

    
/*evento teclado*/
 $(".form-control").on("keypress",function(){
     $(this).css("background-color","#111111");
     $(this).css("color","#ffffff");
 });

/*evento mouse*/
 $(".card").on("mouseenter",function(){
    $(this).css("opacity","0.5");
 }).on("mouseleave",function(){
    $(this).css("opacity","1");
 });

 /* evento ventana*/
 $(".card .btn").on("click",function(e){
    e.preventDefault();
    var w = window.open("", "popupWindow", "width=600, height=400, scrollbars=yes");
    var $w = $(w.document.body);
    $w.html("Producto agregado al carrito");
});


/* capturamos el vento*/
  $("#sendform").on("click",function(e){
    e.preventDefault();
    var email  = $("#email-usuario"),
    nombre = $("#nombre-usuario"),
    apellido = $("#apellido-usuario"),
    telefono = $("#telefono-usuario"),
    selregion = $("#SelectRegiones option:selected"),
    selcomuna  = $("#SelectComunas option:selected"),
    check = $("#invalidCheck2");
    
/* validamos*/
    if(email.val() == ""){
        alert("el campo email es obligatorio");
        return false;
    }
    if(nombre.val() == ""){
        alert("el campo nombre es obligatorio");
        return false;
    }
    if(apellido.val() == ""){
        alert("el campo apellido es obligatorio");
        return false;
    }
    if(telefono.val() == ""){
        alert("el campo teléfono es obligatorio");
        return false;
    }
    if(selregion.val() == "0"){
        alert("debes seleccionar una region");
        return false;
    }
    if(selcomuna.val() == "0"){
        alert("debes seleccionar una comuna");
        return false;
    }
    if(check.is(":checked")){
    }else{
        alert("debes aceptar enviar tus datos");
        return false;
    }

    alert("se envio el contacto con los siguentes datos: \n "+email.val()+" \n"+nombre.val()+" \n"+apellido.val()+" \n"+telefono.val()+" \n"+selregion.text()+"\n"+selcomuna.text());


  });