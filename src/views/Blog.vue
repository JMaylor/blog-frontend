<template>
	<v-main>
		<v-container class="fill-height" fluid>
			<v-row align="center" justify="center">
				<v-col cols="12" sm="8" md="4">
					<v-card class="elevation-12">
						<v-toolbar color="secondary" flat>
							<v-toolbar-title>New Post</v-toolbar-title>
							<v-spacer></v-spacer>
						</v-toolbar>
						<v-form @submit.prevent="submit">
							<v-card-text>
								<v-text-field
									v-model="title"
									label="Title"
									name="title"
									type="text"
								></v-text-field>
								<v-text-field
									v-model="description"
									label="Description"
									name="description"
									type="text"
								></v-text-field>
								<v-textarea
									v-model="content"
									label="Content"
									name="content"
									outlined
								></v-textarea>
							</v-card-text>
							<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn color="accent" type="submit"
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
	export default {
		data() {
			return {
				title: '',
				description: '',
				content: ''
			};
		},
		computed: {
			token() {
				return this.$store.state.token
			}
		},
		methods: {
			submit() {
				console.log("submitting new post");

				const requestBody = {
					query: `
						mutation {
							createPost(
								postInput: {
									title: "${this.title}",
									description: "${this.description}",
									content: "${this.content}"
								}
							) {
								_id
								title
								description
								content
								author {
									email
								}
							}
						}
					`
				};

				fetch(process.env.VUE_APP_API_URL, {
					method: "POST",
					body: JSON.stringify(requestBody),
					headers: {
						"Content-Type": "application/json",
						'Authorization': `Bearer ${this.token}`
					}
				})
					.then(res => res.json())
					.then(resData => {
						console.log(resData)
					})
					.catch(err => console.log(err));
			}
		}
	};
</script>
