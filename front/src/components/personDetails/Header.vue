<template>
    <div class="box">
        <div class="top">
            <van-icon size="24" name="arrow-left" @click="()=>{$router.go(-1)}" />
            <span class="iconfont share">&#xe639;</span>
        </div>
        <div class="person">
            <img src="https://img.yzcdn.cn/public_files/2017/12/18/fd78cf6bb5d12e2a119d0576bedfd230.png" alt="">
            <div class="data">
                <div class="name">
                    <div class="namea">洪鹰</div>
                    <div class="red"> <span class="iconfont">&#xe611;</span>爆红期</div>
                </div>
                <div class="position">足彩分析师<span>|</span>1761粉丝</div>
                <div class="follow"><van-icon class="icon" size="16" style="font-weight: 600" name="plus" />关注</div>
            </div>
        </div>
        <div class="description">
            深度啊但是发射点士大夫发生的发生的阀手动阀反倒是安抚规划对方口令熬过给哦啊是个哦啊
        </div>
        <div class="bottom">
            <span>3次进足球周盈利榜</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    .bottom{
        background-color: #fff;
        color:red;
        height: 50px;
        display: flex;
        align-items: center;
        border: 1px solid transparent;
    }
    .bottom span{
        background-color: #fcc;
        margin-left: 20px;
        padding: 2px;
        border-radius: 4px;
    }
    .box{
        background-color: red;
        padding-top: 1px;
    }
    .top{
        display: flex;
        margin-top: 10px;
        justify-content: space-between;
        align-items: center;
        color:white;
    }
    .share{
        font-size:24px;
    }
    .person{
        padding:0 20px;
        display: flex;
        justify-content: start;
        align-items: center;
        position: relative;
    }
    .position{
        color:white;
        margin-top: 2px;
        font-size: 10px;
    }
    .position span{
        margin: 0 10px;
    }
    .data{
        margin-left:4px;
    }
    .name{
        display: flex;
        justify-content: start;
        align-items: center;
    }
    .follow{
        position: absolute;
        right: 20px;
        top: 0;
        padding: 6px 10px;
        background-color: #fff;
        border-radius: 12px;
        color:red;
        display: flex;
        align-items: center;
        font-weight: 600;
    }
    .red{
        background-color: #fff;
        padding: 1px 2px;
        border-radius: 5px;
        margin-left: 5px;
        color:red;
    }
    .namea{
        font-size: 14px;
        font-weight: 600;
        color:white;

    }
    .person img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border:2px solid #fff;
        background-color: #fff;
    }
    .description{
        margin-top: 20px;
        padding: 0 20px;
        font-size: 14px;
        color:white;
        margin-bottom: 20px;
    }
</style>
