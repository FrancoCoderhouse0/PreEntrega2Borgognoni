const productos = [
    {id: 1, nombre: "jostickps4", precio: 7000},
    {id: 2, nombre: "jostickps5", precio: 10000},
    {id: 3, nombre: "playstation 4", precio: 50000},
    {id: 4, nombre: "cargadordejostick", precio: 2000},
];
let carrito = []

let seleccion = prompt("Hola desea comprar algun producto?")

while(seleccion != "si" && "no"){
    alert("Porfavor ingresa si o no")
    seleccion = prompt("Hola desea comprar algo si o no") 
}

if(seleccion == "si"){
    alert("A continuacion nuestros productos")
    let todoslosProductos = productos.map
    ((producto) => producto.nombre + "" +producto.precio + "$");
    alert(todoslosProductos.join(" - "))
}

while(seleccion != "no"){
    let numProducto = prompt('1-jostickps4\n2-jostickps5\n3-playstation 4\n4-cargadordejostick');

    
        switch(numProducto){
            case '1':
                alert("Agregaste Jostick de Ps4 a tu carro ... $7000")
                break;
            case '2':
                alert("Agregaste Jostick de Ps5 a tu carro ... $10000")
                break;
            case '3':
                alert("Agregaste Play Station 4 a tu carro ... $50000")
                break;
            case '4':
                alert("Agregaste Cargador de Jostick a tu carro ... $2000")
                break;
            default:
                alert('Codigo Inexistente');
                break;
        }
    let unidades = parseInt(prompt ("Cuantas unidades necesita??"))

    const producto = productos.find(p => p.id == parseInt(numProducto))
    console.log(producto)
    
    carrito.push({producto: producto, unidades: unidades})
    console.log(carrito)

    seleccion = prompt("Quiere algun otro producto??")
    
    while(seleccion === "no"){
    alert("Gracias por su compra!!! Vuelva pronto")
    carrito.forEach((carritoFinal) => {
        console.log(`procutos: ${carritoFinal.producto.nombre}, unidades: ${carritoFinal.unidades}, total a pagar por procuto${carritoFinal.unidades * carritoFinal.producto.precio}`)
    })
    break;
    }
}