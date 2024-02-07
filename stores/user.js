import { defineStore } from "pinia";
import axios from "../plugins/axios";

const $axios = axios().provide.axios;
export const useUserStore = defineStore('user', {
    state: () => ({
        id: '',
        name: '',
        bio: '',
        image: ''
    }),
    actions: {
        async getTokens() {
            await $axios.get('/sanctum/csrf-cookie')
        },

        async login(email, password) {
            await $axios.post('/login', {
                email: email,
                password: password
            })
        },

        async register(name, email, password, confirmPassword) {
            await $axios.post('/register', {
                name: name,
                email: email,
                password: password,
                password_confirmation: confirmPassword
            })
        },

        async getUser() {
            let res = await $axios.get('/api/logged-in-user')

            this.$state.id = res.data.data.id;
            this.$state.name = res.data.data.name;
            this.$state.email = res.data.data.email;
            this.$state.bio = res.data.data.bio;
            this.$state.image = res.data.data.image;
            },

        async logout() {
            await $axios.post('/logout')
            this.resetUser()
        },

        resetUser() {
            this.$state.id = ''
            this.$state.name = ''
            this.$state.email = ''
            this.$state.bio = ''
            this.$state.image = ''
        }
    },
    persist: true
})