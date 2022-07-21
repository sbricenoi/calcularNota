let start=document.querySelector(".start")
let totalizar=document.querySelector(".totalizar")
let pantalla = document.querySelector(".pantalla")
let ingresar = document.querySelector(".ingresar")
let resultadoFinal=0
let creditosT=0
let limite=100
let evento=true




start.addEventListener("click",()=>{
   
    cantidadNotas = document.querySelector(".cantidadNotas").value
    ingresar.innerHTML=""
    pantalla.innerHTML=""
    
    

   
 
  
    if(cantidadNotas>=1){
        if(cantidadNotas>limite){
            alert(`el limite es de ${limite} notas`)
            cantidadNotas = document.querySelector(".cantidadNotas").value=100
        }else{
            let fragment = new DocumentFragment()
            let prueba=document.createElement("div")
        
        
        for(let i=1;i<=cantidadNotas;i++){
            
            
        
            
            
            prueba.innerHTML+=`<div>
     
            <input type="text"  placeholder="nota${i}" class="n${i}">
       </div>
            `
    
            fragment.appendChild(prueba)

        }
        ingresar.appendChild(fragment)
        totalizar.removeAttribute("hidden")

        }
      

            
        
      
        
        

    }
  
   
})


totalizar.addEventListener("click",()=>{
    
    operar=()=>{
      
        resultadoFinal=0
        sumaT=0
        
    

    


    



    //Calcular  notas 
    
       
    

        
    
    if(cantidadNotas>=1){
        for(let i=1;i<=cantidadNotas;i++){

            let nota=document.querySelector(`.n${i}`).value
            sumaT+=parseFloat(nota)
        }
      
        

        resultadoFinal=sumaT/cantidadNotas
     
        
        if(isNaN(resultadoFinal)){
    
            resultadoFinal=0
        }
        console.log(cantidadNotas)
        //mostrar tabla de resultados
        
        if(resultadoFinal>=4.0){
            estado=`<td class="aprobado">aprobado</td>`
            
        }else{
            estado=`<td class="reprobado">reprobado</td>`    
        }
        pantalla.innerHTML=""

        let fragment = new DocumentFragment()
        let texto=document.createElement("div")

        
         texto.innerHTML=`
        
        <table class="default" align="center">
          
        
        <tr>
      
          <th>Notas</th>
      
          <td>${cantidadNotas}</td>
      
      
        </tr>
      
        <tr>
      
          <th>Promedio</th>
      
          <td>${resultadoFinal}</td>
    
      
        </tr>
        <tr>
      
            <th>Estado</th>
        
            ${estado}
      
        
          </tr>
      
      </table>`
     
        fragment.appendChild(texto)
        pantalla.appendChild(fragment)
  

    }
    

    


    }
   
    operar();


})

