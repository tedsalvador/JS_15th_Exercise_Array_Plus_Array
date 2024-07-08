import { calculate } from "./js/calculate.js";
import { enterNumbers } from "./js/enterNumbers.js";
import { printTerminal } from "./js/printData.js";

function app(){
    let result;
    const [numb1 , numb2] = enterNumbers();
    result = calculate(numb1, numb2);
    printTerminal(result);
}
app()