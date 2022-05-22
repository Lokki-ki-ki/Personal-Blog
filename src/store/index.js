import { createStore } from "vuex";
import { auth } from "../firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";

export default createStore({
    state: {
        user: null,
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
            console.log("user state change", state.user);
        },
    },
    actions: {
        async signup(context, { email, password }) {
            try {
                const response = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );
                context.commit("setUser", response.user);
            } catch (error) {
                throw new Error(error.code);
            }
        },

        async login(context, { email, password }) {
            try {
                const response = await signInWithEmailAndPassword(
                    auth,
                    email,
                    password
                );
                context.commit("setUser", response.user);
                alert("Welcome!");
            } catch (error) {
                throw new Error(error.code);
            }
        },

        async logout(context) {
            console.log("log out");

            await signOut(auth);
            context.commit("setUser", null);
        },
    },
    modules: {},
});
