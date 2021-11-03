$(document).ready(()=>{

    $("#botonCalzado").click(()=>{
        $(".pelotas,.calzado,.guantes").show()
        $(".pelotas,.guantes").hide()

    })

    $("#botonGuantes").click(()=>{
        $(".pelotas,.calzado,.guantes").show()
        $(".pelotas,.calzado").hide()
 
     })


     $("#botonPelotas").click(()=>{
        $(".pelotas,.calzado,.guantes").show()
        $(".guantes,.calzado").hide()
 
 
     })

     $("#todos").click(()=>{
       
        $(".pelotas,.calzado,.guantes").show()

     })



})


