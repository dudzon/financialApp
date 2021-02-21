<template>
     <textarea :placeholder = "placeholder" :id= "id" :class= "inputClass" 
        :value = "modelValue" @input= "$emit('update:modelValue', $event.target.value)"  />  
</template>
<script>
export default {
    name:'Textarea',
    props: {
        placeholder: String,
        id: String,
        modelValue: String,
        inputClass: String
    },
    emits: ['update:modelValue'] 
}
</script>
<style scoped>

</style>