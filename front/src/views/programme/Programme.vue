<template>
    <div>
        <ProgrammeNav />         <!--导航条-->
        <ProgrammeHeader />        <!--头部-->
    </div>
</template>

<script>
    import ProgrammeNav from './../../components/programme/Nav'
    import ProgrammeHeader from './../../components/programme/Header'
    export default {
        name: "programme",
        components:{
            ProgrammeNav,ProgrammeHeader
        }
    }
</script>

<style scoped>

</style>
