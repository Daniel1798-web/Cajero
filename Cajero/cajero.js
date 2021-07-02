


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
          resultado.innerHTML += e.cantidad + " " + " Billetes de $" + " " + e.valor + "<br />";

       }
    }
  console.log(entregar)
  entregar.pop(new billete(bi.valor, papeles));

}};


function sonido()
{
    alert("bip , bip , bip, cajero fm")
};

var caja = [];
caja.push(new billete(100, 5));
caja.push(new billete(50, 10));
caja.push(new billete(20, 10));
caja.push(new billete(10, 10));
caja.push(new billete(5, 15));
caja.push(new billete(2, 20));
caja.push(new billete(1, 30));
var entregar = [];
var boton = document.getElementById("extraer");
boton.addEventListener("click", extraer);
var papeles = 0;
var dinero = 0;
var div = 0;
var resultado = document.getElementById("resultado");
var image = document.getElementById("image");
image.addEventListener("click", sonido);
