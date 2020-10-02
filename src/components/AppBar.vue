<template>
	<div>
		<v-app-bar app color="primary" dark>
			<div class="d-flex align-center">
				<v-btn to="/" text>Home</v-btn>
				<v-btn to="/about" text>About</v-btn>
				<v-btn to="/register" text>Register</v-btn>
				<v-btn to="/login" text>Login</v-btn>
				<v-btn to="/blog" text exact>Blog</v-btn>
				<v-btn to="/blog/new" text>New Post</v-btn>
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
	export default {};
</script>