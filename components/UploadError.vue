<template>
  <div class="w-[100%] relative flex justify-center">
    <div
        :class="errorType ? 'visible' : 'invisible'"
        class="absolute z-50 top-6 mx-auto bg-black bg-opacity-70 text-white px-14 py-3 rounded-sm">
      {{ error }}
    </div>
  </div>
</template>

<script setup>
const  props = defineProps(['errorType'])
const {errorType} = toRefs(props);

let error = ref('')

watch(() => errorType.value, () => {
  if (errorType.value === 'caption') {
    error.value = 'Maximum 150 characters.'
  } else if (errorType.value === 'bio') {
    error.value = 'Maximum 80 characters.'
  } else if (errorType.value === 'file') {
    error.value = 'Unsupported file. Use MP4 instead.'
  } else {
    error.value = ''
  }
})
</script>
