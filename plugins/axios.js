import  axios  from "axios";

export default defineNuxtPlugin((NuxtApp) => {
    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = 'http://tiktok-backend.test'

    return {
        provide : {
            axios: axios
        }
    }
})