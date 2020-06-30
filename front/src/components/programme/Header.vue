<template>
    <div class="header">
        <p class="count">方案售卖倒计时 07:30:20</p>
        <p class="title"><span class="chuan">[3串1]</span>【14连红！ 近20中19爆红】 英冠3场优惠：巴恩实力+女王巡游+威刚2293字</p>
        <p class="time"> <span class="tim">2小时前发布</span> <span class="num"><span class="iconfont ico">&#xe64c;</span> <span class="much">20人</span>查看</span> </p>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    .header{
        margin-top: 47px;
        overflow: hidden;
        padding:0 10px;
    }
    .count{
        width: 150px;
        text-align: right;
        border-radius: 5px;
        color:blue;
        font-size:5px;
        padding: 0 10px;
        background-color: #ccc;
        transform: translateX(-26px);
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
</style>
