const contenedorinicio=document.getElementById("productos-container");

function crearPedidos(productos){
    productos.forEach(producto=>{
        const nuevaPizza=document.createElement("div");
        nuevaPizza.classList="crear-pedidos";
nuevaPizza.innerHTML=
      `<p>N°${producto.id}</p>
      <img src=${producto.img}></img>
      <h1>${producto.nombre}</h1>
      <p>$${producto.precio}</p>
      <button>Agregar al carrito</buuton>
      `
      contenedorinicio.appendChild(nuevaPizza);
      nuevaPizza.getElementsByTagName("button")[0]
      .addEventListener("click",()=>agregarCarrito(producto))
    });
}

crearPedidos(pizzas);


console.log("Bienvenido a la PIZZERIA-ROZ!! Hoy tenemos super promo!");
console.log("PizzasVariadas")
console.log("Promo!! Pizza+Empanadas")
function pizzasVariadas(Nombre,Id,Menu,Precio,) {
  this.Nombre =Nombre;
  this.Id=Id;
  this.Menu=Menu;
  this.Precio=Precio;
  this.saludar=function(){console.log("MUY BUENOS DIAS!!! Te saluda" + " " + this.Nombre)}
  }
  
   const PizzasVariadas1= new pizzasVariadas("Paula Rodriguez", "#°1","Pizza De Anana","$ 8.000")
   console.log("Pizzas",PizzasVariadas1)
  PizzasVariadas1.saludar();

   const PizzasVariadas2= new pizzasVariadas("Paula Rodriguez", "#°2","Pizza De Calabresa","$ 9.000")
  console.log("Pizzas", PizzasVariadas2)
PizzasVariadas2.saludar();


const PizzasVariadas3= new pizzasVariadas( "Paula Rodriguez","#°3","Pizza Napolitana","$ 12.000")
console.log("Pizzas",PizzasVariadas3)
PizzasVariadas3.saludar();

const PizzasVariadas4= new pizzasVariadas( "Paula Rodriguez","#°4","Pizza De fugazzeta","$ 10.000")
console.log("Pizzas", PizzasVariadas4)
PizzasVariadas4.saludar();


const PizzasVariadas5= new pizzasVariadas("Paula Rodriguez", "#°5","Pizza De Jamon y Morron","$ 14.000")
console.log("Pizzas",PizzasVariadas5)
PizzasVariadas5.saludar();



const PizzasVariadas6= new pizzasVariadas( "Paula Rodriguez","#°6","Pizza De Hongo","$ 11.000")
console.log("Pizzas", PizzasVariadas6)
PizzasVariadas6.saludar();


const PizzasVariadas7= new pizzasVariadas("Paula Rodriguez", "#°7","Pizza Con Jamon y Huevo","$ 12.000")
console.log("Pizzas",PizzasVariadas7)
PizzasVariadas7.saludar();

const PizzasVariadas8= new pizzasVariadasizzasVariadas("Paula Rodriguez", "#°8","Pizza Con Atun","$ 10.000")
console.log("Pizzas", PizzasVariadas8)
PizzasVariadas8.saludar();

const PizzasVariadas9= new pizzasVariadas( "Paula Rodriguez","#°9","Pizza Vegetariana","$ 14.000")
console.log("Pizzas", PizzasVariadas9)
PizzasVariadas9.saludar();


const PizzasVariadas10= new pizzasVariadas( "Paula Rodriguez","#°10","Pizza Con Jamon y Huevo","$ 12.000")
console.log("Pizzas",PizzasVariadas10)
PizzasVariadas10.saludar();



const PizzasVariadas11= new pizzasVariadas( "Paula Rodriguez","#°11","Pizza Con Huevo,Cebolla y Morron","$ 15.000")
console.log("Pizzas", PizzasVariadas11)
PizzasVariadas11.saludar();


const PizzasVariadas12= new pizzasVariadas( "Paula Rodriguez","#°12","Empanada De Carne Cuchillo","$ 800")
console.log("Pizzas",PizzasVariadas12)
PizzasVariadas12.saludar();

const PizzasVariadas13= new pizzasVariadas( "Paula Rodriguez","#°13","Empanada De Jamon Y Queso","$ 800")
console.log("Pizzas", PizzasVariadas13)
PizzasVariadas13.saludar();



const PizzasVariadas14= new pizzasVariadas( "Paula Rodriguez","#°14","Empanada De Humita","$ 800")
console.log("Pizzas", PizzasVariadas14)
PizzasVariadas14.saludar();



 console.log("EMPANADAS")
 let Gusto=parseInt
 console.log("1- De Pollo ; / 2- De Carne; / 3- De Jamon y Queso; / 4- De Verdura; / 5-De Cebolla y Queso;")
 switch (Gusto)

 {case 1:console.log("Empanada De Pollo:")
 break
 case 2:console.log("Empanada De Carne:")
 break
 case 3:console.log("Empanada De Jamon y Queso:")
 break
 case 4:console.log("Empanada De Verdura:")
 break
 case 5:console.log("Empanada De Cebolla y Queso:")
 break
 }



let precioPorUnidad1 =800;
const cantidad1= 1;
let precioPorUnidad = precioPorUnidad1 * cantidad1;
const PRECIOPORUNIDAD=("El precio por unidad es: $ " + precioPorUnidad);
precioPorUnidad1= 800;
for (let i =1; i <= 1; i++){
  const precioPorUnidad = precioPorUnidad1 * i;
 console.log("El precio por unidad de " + i + " el total es: " + precioPorUnidad);}

 const fechaCita=("Local abierto!!")
 if(fechaCita=='domingo');
 else{console.log("LOCAL ABIERTO!!!")}
 console.log("lunes", "Martes", "Miercoles","Jueves", "Viernes" , "Sabado");
 console.log("LOCAL CERRADO!")
 console.log("Domingo")

 console.log("DIA Y HORARIO;")
const DateTime = luxon.DateTime;
const now=DateTime.now();
console.log(now.toLocaleString(DateTime.DATETIME_HUGE_WITH_SECONDS));



console.log("LLEGAMOS CON LA SUPER-PROMO!!!")
 console.log ("Promo N°1;");
let precioTotallPizzaConDosEmpanadas =9500;
const cantidaddPromo = 1;
let precioPromo1PorUnidadd = precioTotallPizzaConDosEmpanadas * cantidaddPromo;
constPRECIOSPROMO=("El precio por unidad es: " + precioPromo1PorUnidadd);
precioTotallPizzaConDosEmpanadas= 8500;
for (let i =1; i <= 1; i++){
 const precioPromo1PorUnidad = precioTotallPizzaConDosEmpanadas * i;
console.log("Una Muzzarella + 2 Empanadas;" + i + " el total es: " + precioPromo1PorUnidad);

}


console.log ("Promo N°2;");
let precioTotallPizzaConDosEmpanadas1 =11000;
const cantidaddPromo1 = 1;
let precioPromo1PorUnidadd1 = precioTotallPizzaConDosEmpanadas1 * cantidaddPromo1;
constPRECIOSPROMO1=("El precio por unidad es: " + precioPromo1PorUnidadd1);
precioTotallPizzaConDosEmpanadas1= 110000;
for (let i =1; i <= 1; i++){
 const precioPromo1PorUnidad1 = precioTotallPizzaConDosEmpanadas1 * i;
console.log(" Una Pizza Caprese Con Queso + 2 Empanadas;" + i + " el total es: " + precioPromo1PorUnidad1);

}


console.log ("Promo N°3;");
let precioTotallPizzaConDosEmpanadas2 =15000;
const cantidaddPromo2 = 1;
let precioPromo1PorUnidadd2 = precioTotallPizzaConDosEmpanadas2 * cantidaddPromo2;
constPRECIOSPROMO2=("El precio por unidad es: " + precioPromo1PorUnidadd2);
precioTotallPizzaConDosEmpanadas2= 15000;
for (let i =1; i <= 1; i++){
 const precioPromo1PorUnidad2 = precioTotallPizzaConDosEmpanadas2 * i;
console.log(" Una Pizza Caprese Con Queso + 2 Empanadas;" + i + " el total es: " + precioPromo1PorUnidad2);

}



console.log ("Promo N°4;");
let precioTotallPizzaConDosEmpanadas3 =10000;
const cantidaddPromo3 = 1;
let precioPromo1PorUnidadd3 = precioTotallPizzaConDosEmpanadas3 * cantidaddPromo3;
constPRECIOSPROMO3=("El precio por unidad es: " + precioPromo1PorUnidadd3);
precioTotallPizzaConDosEmpanadas3= 10000;
for (let i =1; i <= 1; i++){
 const precioPromo1PorUnidad3 = precioTotallPizzaConDosEmpanadas3 * i;
console.log(" Una Pizza Caprese Con Queso + 2 Empanadas;" + i + " el total es: " + precioPromo1PorUnidad3);

}

console.log("Vendedores/Envio:")
const AtencionAlCliente=["Juaquin Ayala Benitez","Juan Manuel Perez","Marcela Alejandra Alvarez"]
const joinString=AtencionAlCliente.join()
console.log("Vendedores;",AtencionAlCliente)
console.log("MONTO ADOMICILIO ES + $300")

const Vendedores1={
  nombre:"Juaquin Ayala",
  apellido:"Benitez"
}

const Vendedores2={
  nombre:"Marcela Alejandra",
  apellido:"Alvarez"
}

const Vendedores3={
  nombre:"Juan Manuel",
  apellido:"Perez"
}

const Vendedores4={
    nombre:"Adrian Andres",
    apellido:"Tauro"
  }

  const Vendedores5={
    nombre:"Sabrina Jazmin",
    apellido:"Renga"
  }
  
  


const VendedoresADomicilio=[Vendedores2,Vendedores3]
console.log("Enviados por:")
for(let i=0; i < VendedoresADomicilio.length; i++){
  console.log(VendedoresADomicilio[i])
}
const horarioAtencionDomiciliario0={
    dia:"Lunes",
    horario:"20 a 22hs"
    
  }
  
  const horarioAtencionDomiciliaria1={
    dia:"Martes",
    horario:"10 a 22hs"
  }
  
  const horarioAtencionDomiciliaria2={
    dia:"Miercoles",
    horario:"20 a 22hs"
  }

  const horarioAtencionDomiciliaria3={
    dia:"Jueves",
    horario:"no disponible"
  }

  const horarioAtencionDomiciliaria4={
    dia:"Viernes",
    horario:"no disponible"
  }

  
  const horarioAtencionDomiciliaria5={
    dia:"Sabado",
    horario:"20 a 23:30hs"
  }

const horarios=[horarioAtencionDomiciliario0, horarioAtencionDomiciliaria1, horarioAtencionDomiciliaria2, horarioAtencionDomiciliaria3, horarioAtencionDomiciliaria4,horarioAtencionDomiciliaria5];
console.log("HORARIO DISPONIBLE A DOMICILIO")
for(let i=0; i<horarios.length;i++){
  console.log(horarios[i])
}


const puntuacionCliente=("INGRESE EL PUNTAJE DE NUESTRO SERVICIO")
const GRACIASPORVISITARNOS='GRACIAS POR ELEGIRNOS'
const graciass='¡'+ GRACIASPORVISITARNOS +' ' +'!' 
console.log(graciass)




{console.log("Pizzerria-Roz");
setTimeout(()=>{ 
console.log("Con Muy Buenos Precios")
},1000);
console.log("Pizzas & Empanas")};




let tiempoParaRegistrarte=0;
const tiempo=setInterval(()=>{
  tiempoParaRegistrarte++;
  console.log(tiempoParaRegistrarte);
  if(tiempoParaRegistrarte===10){
    clearInterval(tiempo)
    console.log("QUE ESPERAS PARA............. REGISTRARTE!!!")
    console.log("Y TENES LAS MEJORES PROMOS A UN BUEN PRECIO!!!")
  }
},3000)

 const productosContainer=document.querySelector("#productos-container")
 productosContainer.addEventListener("click",()=>{
  Toastify({
    text: "SUMANDO AL CARRITO",
    duration: 3000,
    destination:"file:///C:/Users/paual/OneDrive/Escritorio/pizzas-empanadas/Pages/pedido.html" ,
    newWindow: true,
    close: true,
    gravity: "top", 
    position: "left", 
    stopOnFocus: true, 
    style: {
      background: "pink",
    },
    onClick: function(){} 
  }).showToast();

 })