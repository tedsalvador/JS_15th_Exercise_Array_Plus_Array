# JS_15th_Exercise_Array_Plus_Array
Javascript - Sumar 2 array ingresados

# Solucion:
1.- Para sumar dos vectore podriamos realizarlo una vez ingresado los 3 valores
para cada unos de los 2 array, hacemos dos loops anidados y sumamos cada items

2.- Para sumar los valores de una array podriamos utilizar la funcion javascript
array.reduce((suma, item)=>suma,item,0)
donde suma es la variable donde se va acumular los valores
y la variebla item es el valor de cada item del array, el 
ultimo parametro en el valor inicial del acumulador.