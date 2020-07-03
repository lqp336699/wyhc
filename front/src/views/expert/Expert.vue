<template>
    <div>
        <expertFootNav />
        <expertHeaderTable />
    </div>
</template>

<script>
    import expertFootNav from './../../components/Nav'
    import expertHeaderTable from './../../components/expert/HeaderTable'
    export default {
        name: "Expert",
        components:{
            expertFootNav,expertHeaderTable
        },
        mounted(){
            this.$store.dispatch('get_user')
        }
    }
</script>

<style scoped>

</style>
