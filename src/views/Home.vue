<template>
    <div>
        <p> 我是首页</p>
        <button @click='$router.go(-1)'>返回上一页</button>
       
    </div>
</template>

<script>
export default {
    name: 'MyclassHome',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>