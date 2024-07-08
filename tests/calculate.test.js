import { describe, expect, it } from 'vitest';
import { calculate } from "/js/calculate.js";

describe('Calcular Suma de los items de 2 arrays, cada array tiene 3 numeros', () => {
    
    it('Array 1: [1, 2, 3] / Array 2: [4, 5, 6] should return : 21', () => {
        //Aceptance Criteria
        // Given
        const Array1 = [1, 2, 3];
        const Array2 = [4, 5, 6];
        //When - Action
        const result = calculate(Array1, Array2)
        //Then
        console.log(result);
        expect(result).toBe(21)
    });

    it('Array 1: [-, -2, -3] / Array 2: [-4, -5, -6] should return : -21', () => {
        //Aceptance Criteria
        // Given
        const Array1 = [-1, -2, -3];
        const Array2 = [-4, -5, -6];
        //When - Action
        const result = calculate(Array1, Array2)
        //Then
        console.log(result);
        expect(result).toBe(-21)
    });

    it('Array 1: [0, 0, 0] / Array 2: [4, 5, 6]  should return : 15', () => {
        //Aceptance Criteria
        // Given
        const Array1 = [0, 0, 0];
        const Array2 = [4, 5, 6];
        //When - Action
        const result = calculate(Array1, Array2)
        //Then
        console.log(result);
        expect(result).toBe(15)
    });

    it('Array 1: [100, 200, 300] / Array 2: [400, 500, 600] should return : 2100', () => {
        //Aceptance Criteria
        // Given
        const Array1 = [100, 200, 300];
        const Array2 = [400, 500, 600];
        //When - Action
        const result = calculate(Array1, Array2)
        //Then
        console.log(result);
        expect(result).toBe(2100)
    });
});