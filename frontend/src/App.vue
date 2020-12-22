<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png" />
		<AddBook />
		<FilterBooks />
		<Books />
    
	</div>
</template>

<script>
import AddBook from "./components/AddBook.vue";
import FilterBooks from "./components/FilterBooks.vue";
import Books from "./components/Books.vue";

export default {
	name: "App",
	components: {
		AddBook,
		FilterBooks,
		Books,
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
