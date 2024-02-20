const contenedorinicio=document.getElementById("productos-container");
const unidadesElement=document.getElementById("unidades");
const precioElement=document.getElementById("precio");
const mensajeYaElement=document.getElementById("mensaje-ya");
const totalesElement=document.getElementById("Totales");
const ReiniciarElement=document.getElementById("Reiniciar");


function crearPedidos(){
    const productos=JSON.parse(localStorage.getItem("pizzas"));
    console.log(productos)
    if(productos&&productos.length>0){
    productos.forEach(producto=>{
        const nuevaPizza=document.createElement("div");
        nuevaPizza.classList="crear-pedidos";
nuevaPizza.innerHTML=
      `<p>N°${producto.id}</p>
      <img src=${producto.img}</img>
      <h1>${producto.nombre}</h1>
      <p>$ ${producto.precio}</p>
      <div>
      <button>-</button>
      <span class="cantidad">${producto.cantidad}</span>
      <button>+</button>
      
      </div>
      `
      contenedorinicio.appendChild(nuevaPizza);
      nuevaPizza
      .getElementsByTagName("button")[1]
      .addEventListener("click",(e)=>
      {const cuentaCarritosElement=e.target.parentElement.getElementsByTagName("span")[0];
cuentaCarritosElement.innerText=agregarCarrito(producto);
actualizarNumCarrito();
})
      nuevaPizza
      .getElementsByTagName("button")[0]
      .addEventListener("click",(e)=> {
const cuentaCarritosElement=e.target.parentElement.getElementsByTagName("span")[1];
cuentaCarritosElement.innerText=restarCarrito(producto);
    crearPedidos();
    actualizarNumCarrito();}
  
    )})
}
}

crearPedidos();
actualizarNumCarrito();


function actualizarNumCarrito(){
    const productos=JSON.parse(localStorage.getItem("pizzas"));
    let unidades=0;
    let precio=0;
    if(productos&&productos.length>0){
        productos.forEach(producto=>{
            unidades+=producto.cantidad;
            precio+=producto.precio*producto.cantidad;



        })
        unidadesElement.innerText=unidades;
        precioElement.innerText=precio;
    }
}
function mensajeYa(){
    const productos=JSON.parse(localStorage.getItem("pizzas"));
    console.log(productos,productos==true)
    mensajeYaElement.classList.toggle("escondido",productos&&productos.length>0);
    totalesElement.classList.toggle("escondido",!(productos&&productos.length>0));
}
mensajeYa();
ReiniciarElement.addEventListener("click",Reiniciar);
function Reiniciar(){
    localStorage.removeItem("pizzas");
    actualizarNumCarrito();
    crearPedidos();
    contenedorinicio();
    }

 const botonclick=document.querySelector('#click')


 
 const otroBoton=document.querySelector('#consulta')

 otroBoton.addEventListener("click",()=>{
     console.log("Bienvenido!!! En breve te contestamos")
     Swal.fire({
      title:"En breve te contestamos",
    timer:"1000"})
 })
 const input=document.querySelector('#usuario')
let usuario=""
 
 input.addEventListener("change",(event)=>{
     usuario=event.target.value
     console.log(usuario)
 })

  
 const PromoDelMenu=[
    {id:"N°1",menu:"Muzzarrella + 6 Empanadas Variadas + 1,5L de Cocacola",precio:18000},
    {id:"N°2", menu:"Fugazzeta + 3 Empanadas Variadas + 1L de Cerveza Quilme", precio:16000},
    {id:"N°3", menu:"12 Empanadas + 1L de Cocacola", precio:13000},
    {id:"N°4", menu:"Pizza Vegetariana + 3 empanadas variada + 1L Cepita", precio:16000},
    {id:"N°5",menu:"Bebidas 1L DE COCA + 1L DE CERVEZA QUILME", Precio:12000},
    {id:"N°6", menu:"6 Empanadas de Verduras + 1L Paso De Lo Toro", Precio:15000}

  ];
  
  const PromoMenu=()=>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(PromoDelMenu);
      },2000);
  })
    }
  let menu=[];
  const listaProductos=document.querySelector("#lista-productos")
  function mostrarMenu(array){
    array.forEach(item=>{
      const li=document.createMenuElement("li")
      li.id=item.id;
      li.textContent=`${item.menu} - ${item.precio}`
      listaProductos.append(li);
  
    })
  }
  PromoMenu()
  .then((res)=>{
    menu=res;
  console.log(menu);
  
  })

  let GraciasPorElegirnos=0;
  const GRACIAS=setInterval(()=>{
    GraciasPorElegirnos++;
    console.log(GraciasPorElegirnos);
    if(GraciasPorElegirnos===10){
      clearInterval(GRACIAS)
      console.log("GRACIAS POR ELEGIRNOS.... HOY Y SIEMPRE")

      console.log("TE ESPERAMOS CON MAS OFERTAR!!!")
    }
  },2000)



Swal.fire({
    title: "Forma de pago",
    text: "Solo; EFECTIVO - MERCADO LIBRE.",
    imageUrl: "./assets/199509741_788856571814856_7448139025641522081_n.jpg",
    imageWidth: 400,
    imageHeight: 200,
    position:"center",
    background: "black",
timer:"2500",
    confirmButtonColor:"red",
    footer:"BUENISIMO NO¡?¡?"
  
  });