<template>
	<v-main>
		<v-container class="fill-height" fluid>
			<v-row align="center" justify="center">
				<v-col cols="12" sm="8" md="4">
					<v-card class="elevation-12">
						<v-toolbar color="primary" dark flat>
							<v-toolbar-title>Login form</v-toolbar-title>
							<v-spacer></v-spacer>
						</v-toolbar>
						<v-form @submit.prevent="submit">
							<v-card-text>
								<v-text-field
									v-model="email"
									label="Email"
									name="email"
									prepend-icon="mdi-account"
									type="text"
								></v-text-field>

								<v-text-field
									v-model="password"
									label="Password"
									name="password"
									prepend-icon="mdi-lock"
									:append-icon="
										showPassword ? 'mdi-eye' : 'mdi-eye-off'
									"
									@click:append="showPassword = !showPassword"
									:type="showPassword ? 'text' : 'password'"
								></v-text-field>
							</v-card-text>
							<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn color="primary" type="submit"
									>Login</v-btn
								>
							</v-card-actions>
						</v-form>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</v-main>
</template>

<script>
	const axios = require("axios");
	export default {
		data() {
			return {
				email: "",
				password: "",
				showPassword: false
			};
		},
		methods: {
			submit() {
				console.log("submitting login request");
				console.log(this.email);
				console.log(this.password);

				axios.post("http://localhost:4000/graphql", {
					query: `query {
						login( 
							email: "joseph.maylor@gmail.com",
							password: "Bremer27!"`
				});
			}
		}
	};
</script>
