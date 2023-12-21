<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <!-- <p>Nome do Usuário: <strong> {{ nome }} </strong></p> -->
        <p>Nome do Usuário Invertido: <strong> {{ inverteNome() }} </strong></p>
        <p>Idade do usuário <strong>{{ idade }} </strong></p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="reiniciarFn()">Reiniciar Nome CallBack</button>

    </div>
</template>

<script>
import barramento from '@/barramento.js';


export default {
   //props: ['nome'],
   props: {
        nome: {
            type: String,
            default: 'anônimo'
        },
        reiniciarFn: Function,
        idade: Number
   },
   methods: {
    inverteNome() {
        return this.nome.split('').reverse().join('')
    },
    handleEventoPersonalizado(payload) {
      // Lógica para lidar com o evento personalizado
      this.mensagemRecebida = payload.mensagem;
    },
    reiniciarNome() {
        const antigo = this.nome;
        const novoNome = 'Alexandre';
        this.$emit('nomeMudou', { novoNome, antigo});
    }   
   },
   created() {
    barramento.$quandoIdadeMudar( idade => {
        this.idade = idade
    })
   }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
