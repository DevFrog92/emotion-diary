<template>
	<section class="login-form-wrapper">
		<button type="button" @click="kakaoLogin">
			<img
				src="@/assets/images/login/kakao_login_s.png"
				alt="kakao login icon"
			/>
		</button>
	</section>
</template>

<script>
export default {
	data() {
		return {
			accessToken: null,
		};
	},
	created() {
		this.initKakaoKey();
		if (this.$route.query.code) {
			console.log(this.$route.query.code);
			this.accessToken = this.$route.query.code;
			this.getAuthToken();
		}
	},
	methods: {
		initKakaoKey() {
			window.Kakao.init('a4ac9e1a4d9ab460f31052e21a92e2b2');
			window.Kakao.isInitialized();
		},
		kakaoLogin() {
			const params = {
				redirectUri: 'http://localhost:8080/login',
			};

			console.log(window.Kakao.Auth.authorize(params));
		},
		async getAuthToken() {
			window.Kakao.Auth.setAccessToken(this.accessToken);
			await window.Kakao.API.request({
				url: '/v2/user/me',
				success: function (response) {
					console.log(response);
				},
				fail: function (error) {
					console.log(error);
				},
			});
		},
	},
};
</script>

<style scoped>
.login-form-wrapper {
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
