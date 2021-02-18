<template>
    <div class="input-field col s12">
        <input :placeholder = "placeholder" :id=  "id" :type= "type" class="validate" 
        :value = "modelValue" @input= "$emit('update:modelValue', $event.target.value)" />
         <label :for= "id">{{ placeholder }}</label>
    </div>
</template>
<script>
export default {
    name:'Input',
    props: {
        placeholder: String,
        id: String,
        type: String,
        modelValue: String
    },
    emits: ['update:modelValue'] 
}
</script>
<style scoped>

</style>