<template>
	<v-main>
		<v-container class="fill-height" fluid>
			<v-row align="center" justify="center">
				<v-col cols="4" v-for="post in postsToRender" :key="post._id">
					<v-card>
						<v-card-title>
							{{ post.title }}
						</v-card-title>
						<v-card-subtitle>
							{{ post.author.name }}
						</v-card-subtitle>
						<v-card-text>
							{{ post.description }}
						</v-card-text>
						<v-card-text>
							<code>{{ post.content }}</code>
						</v-card-text>
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
				content: '',
				posts: []
			};
		},
		computed: {
			token() {
				return this.$store.state.token
			},
			postsToRender() {
				return this.posts.map(post => {
					return {
						...post,
						content: post.content.split('NEW_LINE_MAYLOR').join('\n')
					}
				})
			}
		},
		methods: {
			getPosts() {
				const requestBody = {
					query: `
						query {
							posts {
								_id
								title
								description
								content
								createdAt
								updatedAt
								author {
									email
									name
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
						this.posts = resData.data.posts
					})
					.catch(err => console.log(err));
			}
		},
		created() {
			this.getPosts();
		}
	};
</script>
