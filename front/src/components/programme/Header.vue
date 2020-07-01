<template>
    <div class="header">
        <p class="count">方案售卖倒计时 07:30:20</p>
        <p class="title"><span class="chuan">[3串1]</span>【14连红！ 近20中19爆红】 英冠3场优惠：巴恩实力+女王巡游+威刚2293字</p>
        <p class="time"> <span class="tim">2小时前发布</span> <span class="num"><span class="iconfont ico">&#xe64c;</span> <span class="much">20人</span>查看</span> </p>
        <p class="description">此方案享有不中退特权，若比赛结果方案结果不一致，红豆或点卡会 <span>在比赛结束后12小时自动返回账户</span> ，请注意查看</p>
        <HeaderCard />
    </div>
</template>

<script>
    import HeaderCard from './../PersonCard'
    export default {
        name: "Header",
        components:{
            HeaderCard
        }
    }
</script>

<style scoped>
    .header{
        margin-top: 47px;
        border: 1px solid transparent;
    }
    .count{
        width: 150px;
        text-align: right;
        border-radius: 5px;
        color:blue;
        font-size:5px;
        padding: 0 10px;
        background-color: #ccc;
        transform: translateX(-30px);
        margin: 20px 0 10px 0;
    }
    .title{
        font-size:18px;
        font-weight: 600;
    }
    .time{
        margin-top: 10px;
    }
    .chuan{
        color:dodgerblue;;
    }
    span.num{
        float: right;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .ico{
        margin: 2px 8px 0 0 ;
    }
    .much{
        color:red;
    }
    .tim{
        color:#888;
    }
    .description{
        color:#aaa;
        font-size:8px;
        margin-top: 14px;
        margin-bottom: 20px;
    }
    .description span{
        color:red;
    }

</style>
