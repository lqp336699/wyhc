<template>
    <div class="box">
        <div class="sellBox">
            <p class="sell"><span></span>最新方案(1)</p>
            <NewFangAn />
        </div>
        <div class="historyBox">
            <p class="sell"><span></span>历史方案</p>
            <div v-for="item in 5" :key="item" class="item">
                <NewFangAn />
            </div>
        </div>
    </div>
</template>

<script>
   import NewFangAn from './../fangAn'
    export default {
        name: "New",
        components:{
            NewFangAn
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
    .historyBox{
        margin-top: 10px;
        background-color: #fff;

    }
    .dataBox{
        padding: 0 10px 10px;
    }
    .box{
        overflow: hidden;
        margin-top: 10px;
    }
    .sellBox{
        border-bottom: 1px solid #eee;
        background-color: #fff;
    }
    .sell{
        display: flex;
        padding-top: 10px;
        justify-content: start;
        align-items: center;
        border-bottom: 1px solid #eee;
        font-weight: 600;
        padding-bottom: 15px;
        font-size: 15px;
    }
    .sell span{
        display: block;
        background-color: coral;
        width: 5px;
        height: 10px;
        margin-right: 10px;
    }
    .item{
        border-bottom: 1px solid #eee;
    }
</style>
