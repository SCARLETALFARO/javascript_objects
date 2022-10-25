# OBJETOS EN JAVASCRIPT

HEMOS VISTO LOS OBJETOS PRIMITIVOS DE LAS JAVASCRIPT COMO :

- NUMBERS
- BOOLEANS
- STRINGS
- SYMBOLS
- NULL
- UNDEFINED

OTROS ELEMENTOS DE JAVASCRIPT MUY UTILIZADOS PERO QUE NO SON PRIMITIVOS, YA QUE TIENEN "SUPERPODERES"I (METODOS) SON:
- ARREGLOS 
- OBJETOS

EJEMPLOS
```JAVASCRIPT
var arr = []
var obj = {}
```
los arreglos se declaran utilizando`[]` y los objetos se declaran con llaves `{}` .


los arreglos tienen sus elementos ordenados por indice en cambio los objetos no tienen indice. sus elementos se rescatan u obtienen mediante **llaves**. ejemplo 

```javascript
var heroe = {
    name: "thor",
    weapon: "martillo",
    hear: "rubio"
}
console.log(hero["name"])
console.log(hero["weapon"])
console.log(hero["hair"])

```javascript
console.log(hero.name)
console.log(hero.weapon)
console.log(hero.hair)

```

