<template>
	<div id="app" class="w-screen h-screen m-0">
		<Navigation />
		<transition name="fade" mode="out-in">
			<router-view :key="$route.path" />
		</transition>
		<Footer/>
	</div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";

export default {
	name: "App",
	components: {
		Navigation,
		Footer
	},
};
</script>

<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
