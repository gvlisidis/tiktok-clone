<template>
  <div class="text-center text-[28px] mb-4 font-bold"> Log in</div>

  <div class="px-6 pb-2">
    <TextInput
        placeholder="Email address"
        v-model:input="email"
        inputType="email"
        :autofocus="true"
        error=""
    />
  </div>

  <div class="px-6 pb-2">
    <TextInput
        placeholder="Password"
        v-model:input="password"
        inputType="password"
    />
  </div>

  <div class="px-6 text-[12px] text-gray-600">Forgot password?</div>

  <div class="px-6 pb-2 mt-6">
    <button
        :disabled="(!email || !password)"
        :class="(!email || !password) ? 'bg-gray-200' : 'bg-[#F02C56]'"
        @click="$event => login()"
        class="w-full text-[17px] font-semibold text-white py-3 rounded-sm"
    >
      Log in
    </button>
  </div>
</template>

<script setup>
const { $axios } = useNuxtApp();
let email = ref(null)
let password = ref(null)
let errors = ref(null)

const login = async () => {
  try {
    await $axios.get('/sanctum/csrf-cookie')

    await $axios.post('/login', {
      email: 'gv@mail.com',
      password: 'password'
    })

    let response = await $axios.get('/api/user')

    console.log(response);
  } catch (error) {
    console.log(error)
  }
}
</script>
