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
import axios from 'axios';

export default {
	name: 'login',
	data() {
		return {
			accessCode: null,
		};
	},
	created() {
		this.hasAccessCode();
	},
	methods: {
		hasAccessCode() {
			if (this.$route.query.code) {
				const accessCode = this.$route.query.code;

				this.getAuthToken(accessCode);
				return;
			}

			this.initializeKakaoObject();
		},
		initializeKakaoObject() {
			window.Kakao.init(process.env.VUE_APP_KAKAO_JAVASCRIPT_KEY);
			window.Kakao.isInitialized();
		},
		kakaoLogin() {
			const params = {
				redirectUri: 'http://localhost:8080/login',
			};

			console.log(window.Kakao.Auth.authorize(params));
		},
		async getAuthToken(accessCode) {
			const headers = {
				'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
			};

			const data = {
				grant_type: 'authorization_code',
				redirect_url: 'http://localhost:8080/',
				client_id: process.env.VUE_APP_KAKAO_REST_API_KEY,
				client_secret: process.env.VUE_APP_KAKAO_CLIENT_SECRET_KEY,
				code: accessCode,
			};

			try {
				const response = await axios.post(
					'https://kauth.kakao.com/oauth/token',
					{ headers },
					{ params: data },
				);

				this.$store.commit('auth/SET_USER_TOKEN', response.data);
				this.getUserInfo(response.data.access_token);
			} catch (error) {
				// TODO: error handling
				console.log(error);
			}
		},
		async getUserInfo(accessToken) {
			let userInfo = {};

			try {
				window.Kakao.Auth.setAccessToken(accessToken);
				await window.Kakao.API.request({
					url: '/v2/user/me',
					success: function (response) {
						userInfo = response;
					},
					fail: function (error) {
						// TODO: error handling
						console.log(error);
					},
				});

				this.$store.commit('auth/SET_USER_INFO', userInfo);
				this.$router.push('/');
			} catch (error) {
				// TODO: error handling
				console.log(error);
			}
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
