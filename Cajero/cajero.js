


class billete 
{
constructor(v,c)
  {

    this.valor = v;
    this.cantidad = c;   

   }
};



function extraer()
{
var d = document.getElementById("dineroUsuario");
dinero = parseInt(d.value);

for(var bi of caja)
{

    if(dinero > 0)
    {
        
        div = Math.floor( dinero / bi.valor);

        
    if(div > bi.cantidad)
    {

        papeles = bi.cantidad

    }

    else
    {
        papeles = div;

    }
    dinero -= (bi.valor * papeles);

    entregar.push(new billete(bi.valor, papeles));

    }


  }

  if( dinero > 0)
  {
    resultado.innerHTML = "soy un Cajero pobre que no tiene un centavito :(";
  }

  else
  {
    for(var e of entregar)
    {
      
      if(e.cantidad > 0)
      
       {
      
        
        resultado.innerHTML += e.cantidad + " Billetes de $ " + e.valor + "<br />";
        

       }
       opcionesTexto.innerHTML =  "¿Desea realizar otra Operacion?" +  "<br />";
       opcionesButton.innerHTML = "<button id ='botoncito'>"+"Sí"+"</button>" + " "+ "<button id= 'ExitBro'>" + "No" + "</button>" + "<br />";
       var botoncito = document.getElementById("botoncito");
        botoncito.addEventListener("click", OtraOperacion)
    }
  console.log(entregar)
  entregar.pop( new billete(bi.valor, papeles));

}};


function sonido()
{
    alert("bip , bip , bip, cajero fm")
};

function OtraOperacion()
{
  location.reload();
}

function retiradaEfectivo()
{
  
  
  primerTexto.innerHTML = "<input type='number' id='dineroUsuario' />" + " <input type='button' id='extraer' value='extraer' />";
  var boton = document.getElementById("extraer");
  boton.addEventListener("click", extraer);
}

function showInfo()
{


  book.innerHTML = "<img src='info.jpg' </img>"






  cosa.innerHTML = "<p>" + "En Banco ATM nos preocupamon por usted, " + "<br />" + "Llamenos al  0351 487-8343" + "</p>" + "<br />";
  advertencia.innerHTML =  "<h1>" + "<strong>" + "Ningun Banco Le solicitara claves ni datos personales" + "</strong>" +" </h1>" ;         
  infoText.innerHTML = "<button id='boton2'>" + "volver" + "</button>";
 var boton2 = document.getElementById("boton2");
 boton2.addEventListener("click", OtraOperacion);
}



var caja = [];
caja.push(new billete(100, 5));
caja.push(new billete(50, 10));
caja.push(new billete(20, 10));
caja.push(new billete(10, 10));
caja.push(new billete(5, 15));
caja.push(new billete(2, 20));
caja.push(new billete(1, 30));
var entregar = [];

var cosa = document.getElementById("cosa")
var book = document.getElementById("book")
var primerTexto = document.getElementById("primerTexto");
var retiro = document.getElementById("retiro");
retiro.addEventListener("click", retiradaEfectivo)
var info = document.getElementById("informacion");
info.addEventListener("click", showInfo);

var infoText = document.getElementById("infoText");
var advertencia = document.getElementById("advertencia");
var body = document.getElementById("body")
var papeles = 0;
var dinero = 0;
var div = 0;
var resultado = document.getElementById("resultado");
var opcionesButton = document.getElementById("botonOpciones");
var opcionesTexto = document.getElementById("texto");
var image = document.getElementById("image");
image.addEventListener("click", sonido);
