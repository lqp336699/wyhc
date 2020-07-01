<template>
    <div class="card">
        <div class="card-top">
            <img src="http://lqp336699.xyz/img/8.png" alt="">
            <div class="nameBox">
                <p class="name">Nelson</p>
                <p class="occupation">外籍分析师</p>
            </div>
            <div class="follow">
                <van-icon name="plus" size="8" class="addIcon" />
                关注
            </div>
            <div class="percentageBox">
                <p class="percentage">100 <span>%</span></p>
                <p class="much">近3场中3场</p>
            </div>
        </div>
        <p class="statistics">
            <span>13次进周盈利榜</span>
            <span>36次进周人气榜</span>
        </p>
        <div class="achievement">
            <span>近期成绩</span>
            <div>红</div>
            <div>红</div>
            <div>红</div>
            <div>红</div>
            <div>红</div>
            <div>红</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PersonCard"
    }
</script>

<style scoped>
    .card{
        border: 1px solid #ccc;
        width: 100%;
        padding:14px 6px;
        box-sizing: border-box;
        box-shadow: 1px  1px 1px #eee;
        border-radius: 5px;
    }
    .card-top{
        display: flex;
        justify-content: flex-start;
        position: relative;
        align-items: center;

    }
    .card-top img{
        width: 36px;
        height: 36px;
        border-radius: 50%;
    }
    .name{
        font-weight: 600;
    }
    .nameBox{
        margin-left: 20px;
    }
    .occupation{
        color:#888;
        font-size:8px;
    }
    .follow{
        height: 20px;
        width: 60px;
        color:white;
        font-size:8px;
        background-color: red;
        border-radius: 20px;
        text-align: center;
        line-height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 14px;
        margin-left: 4px;
    }
    .addIcon{
        margin-right: 3px;
        margin-bottom: 1px;
        color:white;
    }
    .percentageBox{
       position: absolute;
        right: 20px;
        color:red;
    }
    .percentage{
        font-size:28px;
        position: relative;
        text-align: right;
        font-weight: bold;
    }
    .percentage span{
        font-size:4px;
        position: absolute;
        right: -10px;
        top: 0;
    }
    .statistics{
        margin-top: 14px;
    }
    .statistics span{
        background-color: #fdd;
        color:red;
        margin-right: 10px;
        padding:2px 4px;
        border-radius: 2px;
    }
    .achievement{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 10px;
    }
    .achievement div{
        width: 20px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        border-radius: 50%;
        margin-left: 5px;
        color:white;
        background-color: red;
    }
</style>
