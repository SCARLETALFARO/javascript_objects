function Hero(name) {
    this.name = name
    this.sayname = function () {
        return " mi nombre " + this.name
    }
}
const names = ['chapulin', 'stuart', 'kevin', 'nefario', 'vector']
const heroes = []
//for(let i = 0; i < names.length; i++){
//heroes.push(new Hero(names[i]))

names.forEach((name)=>{
    heroes.push(new Hero(name))
})
heroes.forEach((hero)=>{
    console.log(hero.sayname());

})


//console.log(heroes)

