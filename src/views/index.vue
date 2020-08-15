<template>
    <div>
        index
    </div>
</template>
<script>
export default {
    data() {
        return {
            content: ''
        }
    },
    watch: {
        $route: {
            handler() {
                this.id = this.$route.params.id;
                this.getDetail(this.id);
                //深度监听，同时也可监听到param参数变化
            },
            deep: true,
        }
    },
    created() {
        this.id = this.$route.params.id;
        console.log(this.id)
    },
    methods: {
        getDetail(id){
            console.log(id)
        }
    }
}
</script>