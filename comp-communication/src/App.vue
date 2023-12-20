<template>
	<div id="app">
		<app-usuariomain />
	</div>
</template>

<script>
import UsuarioMain from './components/UsuarioMain.vue';

export default {
	name: "app",
	components: { 'app-usuariomain': UsuarioMain}
}
</script>

<style>
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 1.7rem;
}

h1, h2, p {
	margin: 10px;
	padding: 0px;
}

button {
	font-size: 1.5rem;
	padding: 5px 15px;
	border-radius: 4px;
	margin: 10px;
}
</style>
