new Vue({
    el:'#app',

    data: {
        running: false,
        playerLife: 100,
        monsterLife: 100,
        logs: []
    },

    computed: {
        hasResult (){
            return this.playerLife == 0 || this.monsterLife == 0
        }
    },

    methods: {
        startGame(){
            this.running = true
            this.playerLife = 100
            this.monsterLife = 100
            this.logs = []
        },
        
        attack(especial) {
            this.hurt('playerLife',7,12,false, 'Jogador', 'Monstro', 'player')
            if (this.monsterLife > 0 ){
                this.hurt('monsterLife',5,10, especial, 'Monstro', 'Jogador', 'monster')
            }
        },

        hurt(atr,min, max, especial, source, target, clss){
            let plus;
            if (especial) {
            plus = 5;
            } else {
            plus = 0;
            } 
            const hurt = this.getRandom(min + plus, max + plus)
            this[atr] = Math.max(this[atr] - hurt, 0)
            this.registerLog(`${source} atingiu ${target} com ${hurt}.`, clss)
        },

        healAndHurt(){
            this.heal(10, 15)
            this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster')
        },

        heal (min, max){
            const heal = this.getRandom(min, max)
            this.playerLife = Math.min(this.playerLife + heal, 100)
            this.registerLog(`Jogador ganhou força de ${heal}.`, 'player')
        },

        getRandom(min, max) {
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        },

        registerLog(text, clss){
            this.logs.unshift({text, clss})
        },
        

    },

    watch: {
        hasResult(value){
            if (value == true){
                this.running = false
            } 
        }
    }

})