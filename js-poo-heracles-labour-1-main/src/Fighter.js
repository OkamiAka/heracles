/* Fighter class definition */
const MAX_LIFE = 100
class Fighter {
    constructor(name, strength, dexterity, life = MAX_LIFE) {
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.life = life;
    }
    fight(Fighter) {
        const S = Math.random() * this.strength;
        let def = S - Fighter.dexterity;
        if (def < 0) {
            def = 0;
        }
        Fighter.life -= def;
        console.log(`${this.name} ⚔️ ${Fighter.name} 💙 ${Fighter.name}: ${Fighter.life}`)
    }
}
module.exports = Fighter