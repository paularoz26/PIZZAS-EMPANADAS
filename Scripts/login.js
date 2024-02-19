const BBDD=[
    { 
      usuario:"paula",
      contraseña:"raton"
    },
  
    {
      usuario:"sabrina",
      contraseña:"pomni"
    },
  
    {
      usuario:"nahuel",
      contraseña:"buho"
    }
  ]
  
  
  const botonIniciar=document.querySelector("#btn-iniciar");
  const contenedor=document.querySelector("#contenedor");
  const inputs=document.querySelectorAll("input");
  
  const usuarioALoguear={
    usuario:``,
    password:``
  }
  
  
  inputs.forEach((input)=>{
   input.addEventListener("input",(event)=>{
  usuarioALoguear[event.target.name]=event.target.value})
   })
  botonIniciar.addEventListener("click",()=>{
    const siExiste=BBDD.find((persona)=>{
      return persona.usuario===usuarioALoguear.usuario && persona.contraseña===usuarioALoguear.password
    })
  if(siExiste!==undefined){
   contenedor.innerHTML=`<h1>Bienvenido a PizzeriaRoz Sr/Sra <strong> ${siExiste.usuario}</strong></h1>
   -------------------------------------------------------------


   <h2>PERSONAS YA REGISTRADOS...</h2>
    ______________________________

   <p>N°1;</p>
  <p>Nombre: Maria Laura Perez.</p>
   <p>DNI: 34.555.555</p>
   <p>Barrio: Almagro</p>
   <p>Fecha Registrada: 2023/10/15</p>

__________________________________________________

   <p>N°2;</p>
  <p>Nombre: Adrian Tauro.</p>
   <p>DNI: 34.666.666</p>
   <p>Barrio: Palermo</p>
   <p>Fecha Registrada: 2024/08/12</p>

______________________________________________________

   <p>N°3;</p>
  <p>Nombre: Cleopatra Roz.</p>
   <p>DNI: 34.777.777</p>
   <p>Barrio: Flores</p>
   <p>Fecha Registrada: 2023/12/20</p>
   

___________________________________________________

   <p>N°4;</p>
   <p>Nombre: Sofia Maz.</p>
   <p>DNI: 34.888.888</p>
   <p>Barrio: Congreso</p>
   <p>Fecha Registrada: 2024/02/01</p>

__________________________________________________

   <p>N°5;</p>
   <p>Nombre: Jazmin Sanchez.</p>
   <p>DNI: 34.999.999</p>
   <p>Barrio: Once</p>
   <p>Fecha Registrada: 2023/11/12</p>

__________________________________________________

   <p>N°6;</p>
   <p>Nombre: Juan Manuel Padilla.</p>
   <p>DNI: 34.111.111</p>
   <p>Barrio:Palermo</p>
   <p>Fecha Registrada: 2023/12/23</p>

________________________________________________

   <p>N°7;</p>
   <p>Nombre: Laura Martinez.</p>
   <p>DNI: 34.222.222</p>
   <p>Barrio: San Cristobal</p>
   <p>Fecha Registrada: 2023/10/11</p>

________________________________________________
   
   <p>N°8;</p>
   <p>Nombre: Andres Login.</p>
   <p>DNI: 34.333.333</p>
   <p>Barrio: Flores</p>
   <p>Fecha Registrada: 2024/01/12</p>

__________________________________________________

   <p>N°9;</p>
   <p>Nombre: Smeranda Roz.</p>
   <p>DNI: 34.444.444</p>
   <p>Barrio: Almagro</p>
   <p>Fecha Registrada: 2023/07/21</p>

________________________________________________
   
   <p>N°10;</p>
   <p>Nombre: Joanna Jur.</p>
   <p>DNI: 33.111.111</p>  
   <p>Barrio: Once</p>
   <p>Fecha Registrada: 2024/01/01</p>

________________________________________________

   <p>N°11;</p>
   <p>Nombre: Abril Sanchez.</p>
   <p>DNI: 33.555.555</p>
   <p>Barrio: Almagro</p>
   <p>Fecha Registrada: 2023/08/12</p>

_______________________________________________

   <p>N°12;</p>
   <p>Nombre: Manuel Perdido.</p>
   <p>DNI: 33.800.222</p>
   <p>Barrio: Palermo</p>
   <p>Fecha Registrada: 2023/09/23</p>

_______________________________________________

   <p>N°13;</p>
   <p>Nombre: Jurgen Martinez.</p>
   <p>DNI: 33.600.200</p>
   <p>Barrio: Almagro</p>
   <p>Fecha Registrada: 2023/10/11</p>

________________________________________________

   <main>
   <form action="">
   <fieldset>
   <legend> Cargar Datos </legend><br>
   
   <label for="nombre">Nombre:</label><br>
   <input type="text" id="nombre" placeholder="Ingresar Nombre Completo" required><br>
   <label for="DNI">DNI:</label><br>
   <input type="text" id="DNI" placeholder="Ingresar DNI" required><br>
   <label for="barrio">Barrio:</label><br>
   <input type="text" id="barrio" placeholder="Ingresar barrio" required><br>
   <label for="fechaRegistrado">Fecha Registrado:</label><br>
   <input type="text" id="fechaRegistrado" placeholder="Ingresar fecha" required><br>
   </fieldset><br>
   <button type="submit">ENVIAR</button>
   </form>
   </main>

   

   
   `
   console.log("Te mostraremos en brevedad las Ofertas!!!")
  }else{
    Swal.fire({
    title:"Error",
    text:"El Usuario/Contraseña es Incorrecta....INTENTE DE NUEVO!!",
    icon:"error",
    heightAuto:false
  })
  console.log("No estas Registrado/a!!")}
}
 )






   Swal.fire({
  title:"¡Para clientes Registrados!",
    text:"Quieres Registrarte??",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Registrar",
    denyButtonText: `No,Gracias`,
    icons:"warnig",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("¡En breve, te enviamos una planilla!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("Gracias A Ustedes", "", "info")
    }
  });


  console.log("Clientes-Registrados;")
  const clientesRegistrados=[
    {id:"N°1",Nombre:"Maria Laura Perez",FechaRegistrado:"2023/10/15"},
    {id:"N°2",Nombre:"Adrian Tauro", FechaRegistrado:"2024/08/12"},
    {id:"N°3",Nombre:"Cleopatra Roz",FechaRegistrado:"2023/12/20"},
    {id:"N°4",Nombre:"Sofia Maz",FechaRegistrado:"2024/02/01"},
    {id:"N°5",Nombre:"Jazmin Sanchez",FechaRegistrado:"2023/11/12"},
    {id:"N°6",Nombre:"Juan Manuel Padilla",FechaRegistrado:"2023/12/23"},

    {id:"N°7",Nombre:"Laura Martinez",FechaRegistrado:"2023/10/11"},
    {id:"N°8",Nombre:"Andres Login", FechaRegistrado:"2024/01/12"},
    {id:"N°9",Nombre:"Smeranda Roz",FechaRegistrado:"2023/07/21"},
    {id:"N°10",Nombre:"Joanna Jur",FechaRegistrado:"2024/01/01"},
    {id:"N°11",Nombre:"Abril Sanchez",FechaRegistrado:"2023/08/12"},
    {id:"N°12",Nombre:"Manuel Perdido",FechaRegistrado:"2023/09/23"},
    {id:"N°13",Nombre:"Jurgen Martinez",FechaRegistrado:"2023/10/11"}

  ];
  
  const ClientesRegistrados=()=>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(clientesRegistrados);
      },2000);
  })
    }
  let clientes=[];
  const listaRegistrados=document.querySelector("#lista-Registrados")
  function mostrar(array){
    array.forEach(item=>{
      const li=document.createElement("li")
      li.id=item.id;
      li.textContent=`${item.Nombre} - ${item.FechaRegistrado}`
      listaRegistrados.append(li);
  
    })
  }
  ClientesRegistrados()
  .then((res)=>{
    clientes=res;
  console.log(clientes);
  
  })

  let GraciasPorRegistrarte=0;
  const GRACIAS=setInterval(()=>{
    GraciasPorRegistrarte++;
    console.log(GraciasPorRegistrarte);
    if(GraciasPorRegistrarte===10){
      clearInterval(GRACIAS)
      console.log("GRACIAS POR REGISTRARTE.... ")

      console.log("APROVECHEN!!! NO PIERDAS TU OPORTUNIDAD!!!")
    }
  },2000)
