/*
let martin = 1999
let variable1 = 49
let variable2 = "River plate"
let variable3 = martin
console.log(variable3)
console.log(variable2)
console.log(variable1)
martin = 2018
console.log(martin)
let equipos = {
   "nombre": "river",              array
   "estadio": "monumental",
   "fundación": 1929,
   "capacidad": 45000,
   "valor" : 55000

}
console.log(equipos.estadio)        
console.log(equipos.fundación)
console.log(equipos.capacidad + equipos.valor)
console.log(`el valor definitivo es ${equipos.capacidad+equipos.valor}`)

let marcas = ["river","boca","racing"]
console.log=(marcas[1])                  arreglo


let river = 2010

let river = true
if(river == true){console.log(river)  booleano
}else{console.log("error")}


let valor1 =10
let valor2 =20
let valor3=39

if(valor1 <valor2){console.log("river plate")
}else if(valor2 ==valor3){console.log("boca")
}else{console.log("error")}
*/
$(document).ready(()=>{

   $("#botonComprar").click(()=>{
      console.log(200+399)
   })

    $("#botonCalzado").click(()=>{
        $(".pelotas,.calzado,.guantes,.vestimenta,.camisetas").show()
        $(".pelotas,.guantes,.vestimenta,.camisetas").hide()

    })

    $("#botonGuantes").click(()=>{
        $(".pelotas,.calzado,.guantes,.vestimenta,.camisetas").show()
        $(".pelotas,.calzado,.vestimenta,.camisetas").hide()
 
     })


     $("#botonPelotas").click(()=>{
        $(".pelotas,.calzado,.guantes,.vestimenta,.camisetas").show()
        $(".guantes,.calzado,.vestimenta,.camisetas").hide()
 
 
     })

     $("#botonVestimenta").click(()=>{
        $(".pelotas,.calzado,.guantes,.vestimenta,.camisetas").show()
        $(".pelotas,.calzado,.guantes,.camisetas").hide()
     })

     $("#botonCamisetas").click(()=>{
        $(".pelotas,.calzado,.guantes,.vestimenta,.camisetas").show()
        $(".pelotas,.calzado,.guantes,.vestimenta").hide()
     })


     $("#todos").click(()=>{
       
        $(".pelotas,.calzado,.guantes,.vestimenta,.camisetas").show()

     })



})


