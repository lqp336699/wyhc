<template>
    <div class="dataBox">
        <NewTitle :data="this.title" />
        <NewFoot :data="this.comptingFoot" />
        <NewTimeBean :data="this.timeBean" />
    </div>
</template>

<script>
    import NewTitle from './title'
    import NewTimeBean from './timeBean'
    import NewFoot from './CompetingFoot'
    export default {
        name: "fangAn",
        components:{
            NewTitle,NewTimeBean,NewFoot
        },
        data(){
            return{
                timeBean:{ time:"7小时前发布",bean:"58红豆" },
                comptingFoot:{ time:"07/03",type :"西甲",red:'罗马',blue:'乌迪内斯' },
                title:{name:"胡敏娟",occupation:"足彩分析师",rate:"100",description:"【14连红！ 近20中19爆红】 英冠3场优惠：巴恩实力+女王巡游+威刚2293字",chuan:"[3串1]",},
            }
        }
    }
</script>

<style scoped>

</style>
