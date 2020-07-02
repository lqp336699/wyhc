<template>
    <div class="other">
        <OtherOptionTitle :data="this.title" />
        <OtherOptionComptingFoot  :data="this.comptingFoot"/>
        <OtherOptionTimeBean  :data="this.timeBean" />
    </div>
</template>

<script>
    import OtherOptionTitle from './../title'    // 【14连红！ 近20中19爆红】 英冠3场优惠：巴恩实力+女王巡游+威刚2293字",chuan:"[3串1]
    import OtherOptionTimeBean from './../timeBean'
    import OtherOptionComptingFoot from './../CompetingFoot'
    export default {
        name: "otherOption",
        components:{
            OtherOptionTitle,OtherOptionTimeBean,OtherOptionComptingFoot
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
    .other{
        padding-bottom: 10px;
        border-bottom: 1px solid #eee;
    }
</style>
