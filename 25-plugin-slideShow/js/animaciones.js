(function(){
    var $cajaRoja = $(".cajaRoja");
    var $cajaAzul = $(".cajaAzul");

    var tl = new TimelineMax();
    

    function mover(dir){
        $cajaRoja.clearQueue();
        switch(dir){
              case "evento":
                $cajaRoja.animate(
                    {
                        top:"-=50px"
                    }
                );
                tl.to( $cajaAzul, 1.2, { marginLeft: margen, ease: Elastic.easeOut.config(1, 0.75) } );
              break;
              case "continuar":
                $cajaRoja.animate(
                    {
                        top:"+=50px"
                    }
                );
                tl.to( $cajaAzul, 1.2, { marginLeft: margen, ease: Elastic.easeOut.config(1, 0.75) } );
              break;
        }
    }


     $(".btn").on("click",function(){
          var dir = $(this).data("dir");
          mover(dir);
     });

})();