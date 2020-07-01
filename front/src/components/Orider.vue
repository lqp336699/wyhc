<template>
    <div class="oriderBox">
        <div class="desc"><van-icon name="warning" class="icon" size="6" /><p> 观点仅供参考，投注需谨慎，如需购买彩请前往彩票店</p></div>
        <div class="Orider">
            <div class="one">需支付:</div>
            <div>58红豆</div>
            <div class="three">首单不中退</div>
            <div class="four">立即支付</div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Orider",
    }
</script>

<style scoped>
    .oriderBox{
        position: fixed;
        z-index: 100;
        bottom: 0;
        left: 0;
        background-color: #fff;
        right: 0;
    }
    .Orider{
        height: 50px;
        background-color: #f2f2f2;
        display: flex;
        justify-content: start;
        align-items: center;
        font-size:14px;
        font-weight: 600;
    }
    .one{
        margin-left: 10px;
        margin-right: 10px;
    }
    .three{
        background-color: red;
        color:white;
        border-radius: 10px;
        padding: 1px 6px;
        font-weight: normal;
        margin-left: 7px;
        font-size: 4px;
    }
    .four{
        position: absolute;
        right: 0;
        width: 90px;
        height: 50px;
        font-weight: normal;
        text-align: center;
        line-height: 50px;
        color:white;
        background-color: red;
    }
    .desc{
        padding: 10px;
        color:#444;
        font-size: 8px;
        display: flex;
        justify-content: start;
        align-items: center;
    }
    .icon{
        margin-top: 1px;
        margin-right: 4px;
    }
</style>
