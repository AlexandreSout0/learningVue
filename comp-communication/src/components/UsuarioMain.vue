<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p>Nome é <strong>{{ nome }}</strong></p>
        <p>Idade <strong>{{ idade }}</strong></p>

        <button @click="alterarNome"> Alterar Nome</button>
        <hr>
        <div class="componentes">
            <app-UsuarioInfo :nome="nome" :idade="idade" @nomeMudou="nome = $event.novoNome + $event.antigo" :reiniciarFn="reiniciarNome2callbak"/>
            <app-AppUsuarioEditar :idade="idade"  />  
            <!-- @idadeMudou="idade = $event" -->
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { 'app-UsuarioInfo': AppUsuarioInfo, 'app-AppUsuarioEditar': AppUsuarioEditar },
    data() {
        return {
            nome: 'Alexandre',
            idade: 31
        }
    },
    methods: {
        alterarNome() {
            this.nome = 'Souto'
        },

        reiniciarNome2callbak() {
            this.nome = "Alexandre"
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
