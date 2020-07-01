<template>
    <div class="programme">
        <ProgrammeNav />                                             <!--导航条-->
        <ProgrammeHeader />                                          <!--头部-->
        <ProgrammeMatch v-for="item in 2" :key="item" />             <!--比赛信息-->
        <ProgrammeEndSale />
        <ProgrammeOrider />
    </div>
</template>

<script>
    import ProgrammeNav from './../../components/programme/Nav'
    import ProgrammeHeader from './../../components/programme/Header'
    import ProgrammeMatch from './../../components/match'
    import ProgrammeEndSale from './../../components/endSale'
    import ProgrammeOrider from './../../components/Orider'
    export default {
        name: "programme",
        components:{
            ProgrammeNav,ProgrammeHeader,ProgrammeMatch,ProgrammeEndSale,ProgrammeOrider
        }
    }
</script>

<style scoped>
    .programme{
        padding:0 10px;
        box-sizing: border-box;
        background-color: #fff;
    }
</style>
