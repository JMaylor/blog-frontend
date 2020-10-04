<template>
	<v-app>
		<AppBar />

		<router-view></router-view>
	</v-app>
</template>

<script>
	import AppBar from "./components/AppBar";

	export default {
		components: {
			AppBar
		},
		created() {
			this.$store.dispatch('tryLogin')
		}
	};
</script>
