export default {
	namespaced: true,
	state: {
		token: {},
		userInfo: {},
	},
	mutations: {
		SET_USER_TOKEN(state, token) {
			state.token = token;

			console.log('set token', state.token);
		},
		SET_USER_INFO(state, userInfo) {
			state.userInfo = userInfo;

			console.log('set user info');
		},
	},
	actions: {},
};
