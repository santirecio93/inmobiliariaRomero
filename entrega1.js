// es una funcion que me da el iesimo numero de la sucesion fibonacci. 
// la sucesion arranca con el el 0 y 1, y los siguiente terminos son la suma de los dos terminos anteriores
function fibonacci (){
    let ind = prompt("ingrese un numero: ")
    let i =0
    let a =0
    let b =1
    let c =0
    
    while ( i+2<ind){
        c=a+b
        a=b
        b=c
        i=i+1
        
    }
    
        
    console.log(c) 
    
    if (c<50){
        console.log( " menor a 50")
    }else{
        console.log("mayor a 50")
    }
    }



fibonacci()
