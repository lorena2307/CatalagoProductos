var item = `<div class="card col-md-3" style="width: 18rem;">
                  <img class="card-img-top" src="..." alt="Card image cap">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Cantidad: <span class="cantidad"></span></p>
                    <p class="card-text">Precio: <span class="precio"></span></p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>`;

    var itemtabla =`<tr class="item-car"><td><img>Imagen</td>
                <td class="nombre">Nombre</td>
                <td class=""><span class="cantida">Cantidad</span></td>
                <td class="">Precio</td>
                <td> Acciones

                </td>
                <td class="">Subtotal</td></tr>`;

    var productos = [
            {
            imagen : "img/arduino.jpg",
            nombre : "Arduino",
            precio : 33,
            cantidad : 5,
            estaEnCarrito : false,
            cantidadEnCarrito: 0,
            },
        {
            imagen : "img/conec.jpg",
            nombre : "Conector Jr45",
            precio : 12,
            cantidad : 10,
            estaEnCarrito : false,
            cantidadEnCarrito: 0,
          },
            {
           imagen : "img/dupont.jpg",
            nombre : "Dupont",
            precio : 33,
            cantidad : 6,
            estaEnCarrito : false,
            cantidadEnCarrito: 0,
            },
            {
            imagen : "img/led.jpg",
            nombre : "Led",
            precio : 1,
            cantidad : 23,
            estaEnCarrito : false,
            cantidadEnCarrito: 0,
            },
            {
            imagen : "img/punteH.jpg",
            nombre : "Puente H",
            precio : 64,
            cantidad : 9,
            estaEnCarrito : false,
            cantidadEnCarrito: 0,
            },
            {

            imagen : "img/resi.jpg",
            nombre : "Resistencia",
            precio : 3,
            cantidad : 8,
            estaEnCarrito : false,
            cantidadEnCarrito: 0,
            },
            {

            imagen : "img/sensorLuz.jpg",
            nombre : "Sensor de Luz",
            precio : 10,
            cantidad : 8,
            estaEnCarrito : false,
            cantidadEnCarrito: 0,
            },
            {

            imagen : "img/sensorHumedad.jpg",
            nombre : "Sensor Humedad",
            precio : 120,
            cantidad : 4,
            estaEnCarrito : false,
            cantidadEnCarrito: 0,
            },

        ];

    for(i=0; i < productos.length; i++){
        $("#productos").append(item);
        card = $(".card").get(i);
        $(card).find(".card-img-top").attr("src", productos[i].imagen);
        $(card).find(".card-title").html(productos[i].nombre);
        $(card).find(".cantidad").html(productos[i].cantidad);
        $(card).find(".precio").html(productos[i].precio);
        $(card).find(".btn").attr("onClick", "botonpresionado("+i+")").html("Agregar al carrito");

    }
      //Empeuiezan las funciones
    function botonpresionado(idProducto){
      alert(productos[idProducto].nombre);
               alert("Cantidad "+productos[idProducto].cantidad);
                if(productos[idProducto].cantidad>0)
                {
                  if (productos[idProducto].estaEnCarrito==true)
                  {
               productos[idProducto].cantidadEnCarrito= productos[idProducto].cantidadEnCarrito+1;
               productos[idProducto].cantidad=productos[idProducto].cantidad-1;
               subtotal=productos[idProducto].cantidadEnCarrito*productos[idProducto].precio;
               $("#posi"+idProducto).find(".cantida").html(productos[idProducto].cantidadEnCarrito)
               $("#posi"+idProducto).find(".subtotal .subtotal").html(subtotal);

               card=$(".card").get(idProducto);
               $(card).find(".cantidad").html(productos[idProducto].cantidad)


                calculartotal();




                }else {
                  alert("agregar al carrito");
                       productos[idProducto].cantidad= productos[idProducto].cantidad-1;
                       card=$(".card").get(idProducto);
                        $(card).find(".cantidad").html(productos[idProducto].cantidad)

                      // alert("Cantidad Disponible " + productos[idProducto].cantidad);

                       productos[idProducto].cantidadEnCarrito=productos[idProducto].cantidadEnCarrito+1;
                       //alert("Cantidad en carrito " + productos[idProducto].cantidadEnCarrito);

                       subtotal=productos[idProducto].cantidadEnCarrito*productos[idProducto].precio;


                       itemtabla+='<tr id="posi'+idProducto+'" class="item-car"><td><img width="50" height="50" src="'+productos[idProducto].imagen+'"></td>'
                                   +'<td class="nombre">'+productos[idProducto].nombre+'</td>'
                                   +'<td class="cantidad"><span class="cantida">'+productos[idProducto].cantidadEnCarrito+'</span></td>'
                                   +'<td class="precio">'+productos[idProducto].precio+'</td>'
                                   +'<td>'
                                       +'<button onClick="mas('+idProducto+')" class="sumar-cantidad btn btn-success">+</button>'
                                       +'<button onClick="menos('+idProducto+')" class="restar-cantidad btn btn-danger">-</button>'
                                   +'</td>'
                                  +'<td class="subtotal"><span class="subtotal">'+subtotal+'</span></td></tr>'
                                  $(".table").html(itemtabla);



      calculartotal();

  }
 }
 else
 {
   alert("No se encuentra mas"+ productos[idProducto].nombre +" Disponible")
 }
  productos[idProducto].estaEnCarrito=true;
  //alert("carro"+productos[idProducto].estaEnCarrito)
}

function calculartotal(){
var subtt=0;
var iva=0;
var total=0;

 $(".subtotal .subtotal").each(function(index){
   console.log(index+" : "+ $(this).text());
   var sub=parseInt($(this).text());

   subtt=subtt+sub;
 });

iva=subtt*0.16;
total=subtt+iva;
$("#iva").html(iva);
$("#total").html(total);
  }
 function mas(idProducto){
   if (productos[idProducto].cantidad==0) {
     alert("Ya no se encuentran mas"+productos[idProducto].nombre+"Disponible");
   }
else {
  productos[idProducto].cantidadEnCarrito=productos[idProducto].cantidadEnCarrito+1;
  productos[idProducto].cantidad= productos[idProducto].cantidad-1;
  subtotal=productos[idProducto].cantidadEnCarrito*productos[idProducto].precio;
            $("#posi"+idProducto).find(".cantida").html(productos[idProducto].cantidadEnCarrito)
            $("#posi"+idProducto).find(".subtotal .subtotal").html(subtotal)

            card = $(".card").get(idProducto);
             $(card).find(".cantidad").html(productos[idProducto].cantidad) //Actualizar stock


              calculartotal();
}

 }
 function menos(idProducto){
if (productos[idProducto].cantidadEnCarrito==0) {
  $("#posi"+idProducto).remove();
    productos[idProducto].estaEnCarrito=false;
calculartotal();
}else {
   productos[idProducto].cantidad= productos[idProducto].cantidad+1;
   subtotal=productos[idProducto].cantidadEnCarrito*productos[idProducto].precio;
             $("#posi"+idProducto).find(".cantida").html(productos[idProducto].cantidadEnCarrito)
             $("#posi"+idProducto).find(".subtotal .subtotal").html(subtotal)

             card = $(".card").get(idProducto);
              $(card).find(".cantidad").html(productos[idProducto].cantidad) //Actualizar stock
              productos[idProducto].cantidadEnCarrito=productos[idProducto].cantidadEnCarrito-1;

               calculartotal();

 }
}
