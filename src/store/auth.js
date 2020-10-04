import router from "../router/index";

export default {
    name: "auth",
    state: () => ({
        token: null,
        userID: null,
        tokenExpiration: null,
    }),
    mutations: {
        setUser(state, payload) {
            const token = payload.token;
			const userID = payload.userID;
			const tokenExpiration = payload.tokenExpiration
            state.token = token;
			state.userID = userID;
			state.tokenExpiration = tokenExpiration
            localStorage.setItem("token", token);
			localStorage.setItem("userID", userID);
			localStorage.setItem("tokenExpiration", tokenExpiration)
			router.push('/blog')
        },
        logout(state) {
            localStorage.removeItem("token");
            localStorage.removeItem("userID");
            localStorage.removeItem("tokenExpiration");
            state.token = null;
            state.userID = null;
            state.tokenExpiration = null;
            router.push("/login");
        },
    },
    actions: {
        tryLogin(context) {
            const token = localStorage.getItem("token");
            const userID = localStorage.getItem("userID");
            if (token && userID) {
                context.commit("setUser", {
                    token,
                    userID,
                    tokenExpiration: null,
                });
            }
        },
    },
    getters: {
        isAuth(state) {
            return state.token != null;
        },
    },
};
