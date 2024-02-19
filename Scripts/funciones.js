function agregarCarrito(producto){
    const memoria=JSON.parse(localStorage.getItem("pizzas"));
    console.log(memoria)
    let cuenta=0;
if(!memoria){
const nuevaPizza=getNuevoProductoMemoria(producto);
    nuevaPizza.cantidad=1;
    localStorage.setItem("pizzas",JSON.stringify([nuevaPizza]))
cuenta=1;
}else{
const indicarProducto=memoria.findIndex(pizzas=>pizzas.id===producto.id);
console.log(indicarProducto)
const nuevaMemoria=memoria;
if(indicarProducto===-1){
    const nuevaMemoria=memoria;
    nuevaMemoria.push(getNuevoProductoMemoria(producto))
cuenta=1;   
}else{
nuevaMemoria[indicarProducto].cantidad++;
cuenta=nuevaMemoria[indicarProducto].cantidad;
}
localStorage.setItem("pizzas",JSON.stringify(nuevaMemoria));
}
actualizarNumCarrito();
 return cuenta;
}
function restarCarrito(producto){
const memoria=JSON.parse(localStorage.getItem("pizzas"));
const indicarProductos= memoria.findIndex(pizzas=>pizzas.id===producto.id);
if(memoria[indicarProductos].cantidad===1){
    memoria.splice(indicarProductos,1);
}else{Swal.fire({
    title:"Restando el Total",
    position:"top-end",
timer:"1000"})
    memoria[indicarProductos].cantidad--;
}
localStorage.setItem("pizzas",JSON.stringify(memoria));  
 actualizarNumCarrito();
}

function getNuevoProductoMemoria(producto){
    const nuevaPizza=producto;
    nuevaPizza.cantidad=1;
    return nuevaPizza;
    
}
const cuentaCarritosElement=document.getElementById("cantidad-pedido");
function actualizarNumCarrito(){
const memoria=JSON.parse(localStorage.getItem("pizzas"));
if(memoria&&memoria.length>0){
    const cuenta=memoria.reduce((acum,current)=>acum+current.cantidad,0)
    cuentaCarritosElement.innerText=cuenta;
    console.log(cuenta)
}else{
cuentaCarritosElement.innerText=0;
}
}
actualizarNumCarrito();