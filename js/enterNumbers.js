import PromptSync from "prompt-sync";

export function enterNumbers (){
    let anadir_numero = "";
    let pri_NumbOK=0;
    let seg_NumbOK=0;
    let salir_validacion;
    let arrayA = [];
    let arrayB = [];
    const prompt = PromptSync();

    console.warn ("Introduce 3 numeros para cada array solicitado (2 arrays) ");
    for (let vector = 1; vector < 3; vector++){
    for (let index = 1; index < 4; index++) {
        salir_validacion = "NOK";        
        do{     
            anadir_numero = Number(prompt("Para el Array "+ vector + " El numero " + index + " es = "));
            if (isNaN(anadir_numero)) 
                {
                console.error("NO TEXTO - Ingrese solo numeros");
                } else 
                     {
                      if (Number.isInteger(anadir_numero) == false)
                         {
                          console.info("Ingrese solo numeros Enteros");
                         } else 
                              {salir_validacion = "OK";
                                if (vector==1){
                                             pri_NumbOK = anadir_numero;
                                             arrayA.push(pri_NumbOK);
                                   } else {
                                             seg_NumbOK = anadir_numero;
                                             arrayB.push(seg_NumbOK);
                                          }    
                               }            
                     }
          }while(salir_validacion != "OK") 
    }
    }
    console.info("Array_A : [" + arrayA + "] / Array_B : [" + arrayB + "]");
    return [arrayA, arrayB];
    }