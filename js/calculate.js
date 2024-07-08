
/* export function calculateAngle(angleOne, angleTwo) { */
export function calculate(array1, array2) { 
    let sumatotal = 0;
    let sum1=array1.reduce((sum1, item1) =>  sum1 + item1, 0);
    let sum2=array2.reduce((sum2, item2) =>  sum2 + item2, 0);
    let mensaje = "";

    sumatotal = (sum1 + sum2);
    mensaje = sumatotal;
    return mensaje;
}