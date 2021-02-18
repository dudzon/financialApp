<template>
    <div :class= "wrapperClass">
        <button :class= "buttonClass">{{buttonText}}</button>
    </div>
</template>
<script>
export default {
    name:'Button',
    props:{
        wrapperClass: String,
        buttonClass : String,
        buttonText : String
    }
}
</script>
<style scoped>

</style>