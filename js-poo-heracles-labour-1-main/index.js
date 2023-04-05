// First Labour : Heracles vs Nemean Lion
// use your Figher class here

const Fighter = require("./src/Fighter");
const combattant = [
    new Fighter("🧔 Heracles", 20, 6),
    new Fighter("🦁 Nemean Lion", 11, 13),
]

console.log(combattant)
let round = 0
while (combattant[0].life > 0 && combattant[1].life > 0) {
    console.log(`🕛 round: #${++round}`)
    if (combattant[0].life > 0) {combattant[0].fight(combattant[1])}
    if (combattant[1].life > 0) {combattant[1].fight(combattant[0])}
}
console.log("")
if (combattant[0].life < 0) {
    console.log(`💀 ${combattant[0].name} is dead.`)
    console.log(`🏆 ${combattant[1].name} wins (💙 ${combattant[1].life}).`)
} else {
    console.log(`💀 ${combattant[1].name} is dead.`)
    console.log(`🏆 ${combattant[0].name} wins (💙 ${combattant[0].life}).`)
}