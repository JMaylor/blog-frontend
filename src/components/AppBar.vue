<template>
	<div>
		<v-app-bar app color="primary" dark>
			<div class="d-flex align-center">
				<v-btn text exact to="/">Home</v-btn>
				<v-btn text exact to="/about">About</v-btn>
				<v-btn v-if="!isAuth" text exact to="/login">Login</v-btn>
				<v-btn v-if="!isAuth" text exact to="/register">Register</v-btn>
				<v-btn text exact to="/blog">Blogs</v-btn>
				<v-btn v-if="isAuth" text exact to="/blog/new">Post</v-btn>
				<v-btn v-if="isAuth" text exact @click="$store.commit('logout')">Logout</v-btn>
			</div>

			<v-spacer></v-spacer>

			<v-btn
				href="https://github.com/vuetifyjs/vuetify/releases/latest"
				target="_blank"
				text
			>
				<span class="mr-2">Latest Release</span>
				<v-icon>mdi-open-in-new</v-icon>
			</v-btn>
		</v-app-bar>
	</div>
</template>

<script>
	import { mapGetters } from "vuex";
	export default {
		computed: {
			routes() {
				console.log(this.$router);
				return this.$router.options.routes;
			},
			...mapGetters(["isAuth"])
		}
	};
</script>