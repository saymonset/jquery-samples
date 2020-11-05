(function(){
    $.smallBox = function(opciones){

        opciones=$.extend({
                  
            titulo: undefined,
            subTitulo: undefined,
            contenido: undefined,
            fa:"fa-envelope-o",
            img: undefined

        }, opciones);

        var html = "";
        
                 html +=   '<div class="smallBox-contenedor">'
                 html +=   '    <div class="smallBox-foto">'
                 html +=   '        <img src="'+opciones.img+'">'
                 html +=   '    </div>'
                 html +=   '    <div class="smallBox-contenido" align="center">'
                 html +=   '        <div class="smallBox-textoContenedor" align="left">'
                 html +=   '            <span class="smallBox-titulo">'+opciones.titulo+'</span>'
                 html +=   '            <span class="smallBox-subTitulo">'+opciones.subTitulo+'</span>'
                 html +=   '        </div>'
                 html +=   '        <div class="smallBox-pico"></div>'
                 html +=   '        <div class="smallBox-cajaColor">'
                 html +=   '            <div class="smallBox-colorTexto">'
                 html +=                    opciones.contenido;
                 html +=   '            </div>'
                 html +=   '            <div class="smallBox-colorIcon">'
                 html +=   '                <i class="fa '+opciones.fa+' fa-2x" ></i>'
                 html +=   '            </div>'
                 html +=   '        </div>'
                 html +=   '        <div class="smallBox-sombra"></div>'
                 html +=   '    </div>'
                 html +=   '</div>'


                 $("body").append(html);
    };
function animar_entrada(){
    var $smallBox = $(".smallBox-contenedor");
    
    var tl = new TimeLineMax();
    
    /* tl.from($smallBox, 1.6, {x:"+=100px", opacity:0,  ease: Bounce.easeOut})
    .from($smallBox, 1, {opacity:0}, "-=1.3");


    var $smallBox = $("#"+sbID); */

	var tl = new TimelineMax();
		tl.from( $smallBox, 1, { x:"+= 100px", ease: Bounce.easeOut } )
		  .from( $smallBox, 1, { opacity: 0 }, "-=1" );
}

})()