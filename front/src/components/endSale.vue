<template>
    <div class="sale">
        <div class="saleTop">
            <span class="font">距售卖截止</span>
            <p class="time"><span>09</span> : <span>07</span>: <span>13</span></p>
        </div>
        <div class="desc">
            购买后查看专业分析，购买请到线下
        </div>
    </div>
</template>

<script>
    export default {
        name: "endSale",
        data(){
            return{
                time:0
            }
        },
        mounted(){
            var day1 = new Date();
            console.log(day1.getFullYear(),day1.getMonth()+1, day1.getDate());
        }
    }
</script>

<style scoped>
    .sale{
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
    }
    .saleTop{
        display: flex;
        margin-top: 20px;
        justify-content: center;
        align-items: center;
    }
    .font{
        font-size:14px;
        font-weight: 600;
    }
    .time{
        display: flex;
        justify-content: center;
        margin-left: 10px;
        font-weight: 600;
        line-height: 30px;
    }
    .time span{
        margin: 5px;
        width: 20px;
        height: 20px;
        display: block;
        text-align: center;
        line-height: 20px;
        background-color: black;
        color:white;
    }
    .desc{
        margin:6px 0 20px;
        color:red;
    }
</style>
