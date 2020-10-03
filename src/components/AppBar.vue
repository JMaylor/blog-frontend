<template>
	<div>
		<v-app-bar app color="primary" dark>
			<div class="d-flex align-center">
				<v-btn v-for="route in routes" :key="route.path" :to="route.path" text exact>{{ route.name }}</v-btn>
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
	export default {
		computed: {
			routes() {
				return this.$router.options.routes
			}
		}
	};
</script>