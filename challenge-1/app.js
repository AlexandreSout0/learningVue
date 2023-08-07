new Vue({
    el: '#challenge',
    data:{
        name: 'Alexandre',
        age: 30,
        imagem: 'http://files.cod3r.com.br/curso-vue/vue.jpg',
    },

    methods:{
        idadeVezes3(){
            return this.age * 3
        },
        random(){
            return Math.random()
        },
        


    }


})