<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Idade do usúario <strong>{{ idade }} </strong></p>
        <button @click="alterarIdade()">Alterar Idade</button>
    </div>
</template>


<script>
import barramento from '@/barramento.js';

export default {
    props: {
       idade: Number
    }, 
    methods:{
        alterarIdade() {
            const novaIdade = 73
            barramento.alterarIdade(this.novaIdade);
        }
    } 
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
