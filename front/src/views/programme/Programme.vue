<template>
    <div class="programme">
        <ProgrammeNav />                                             <!--导航条-->
        <ProgrammeHeader />                                          <!--头部-->
        <ProgrammeMatch v-for="item in 2" :key="item" />             <!--比赛信息-->
        <ProgrammeEndSale />                                         <!--距离售卖截止-->
        <ProgrammeOrider />                                          <!--底部购买导航-->
        <ProgrammeOtherSell />                                       <!--其它方案标题-->
        <ProgrammeOtherOption v-for="item in 4" :key="item"  />      <!--其它方案内容-->
    </div>
</template>

<script>
    import ProgrammeNav from './../../components/programme/Nav'
    import ProgrammeHeader from './../../components/programme/Header'
    import ProgrammeMatch from './../../components/match'
    import ProgrammeEndSale from './../../components/endSale'
    import ProgrammeOrider from './../../components/Orider'
    import ProgrammeOtherOption from './../../components/programme/otherOption'
    import ProgrammeOtherSell from './../../components/sell'
    export default {
        name: "programme",
        components:{
            ProgrammeNav,ProgrammeHeader,ProgrammeMatch,ProgrammeEndSale,ProgrammeOrider,ProgrammeOtherOption,ProgrammeOtherSell
        },

    }
</script>

<style scoped>
    .programme{
        padding:0 10px 80px;
        box-sizing: border-box;
        background-color: #fff;
    }
</style>
