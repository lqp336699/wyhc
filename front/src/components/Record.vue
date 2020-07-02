<template>
    <div class="record">
        <p class="sell"><span></span>方案战绩(8连红)</p>
            <div class="details" :v-touch:swipeleft="onSwipeLeft">
                <div class="item" v-for="item in 8" :key="item" >
                   红
                </div>
            </div>
    </div>
</template>

<script>
    export default {
        name: "Record",
        components:{
        },
        methods:{
            onSwipeLeft(){
                console.log("666");
            },
            onSwipeRight(){
                console.log("777");
            }
        }
    }
</script>

<style scoped>
    .record{
        background-color: #fff;
        margin-top: 10px;
        overflow: hidden;
        padding-bottom: 20px;
    }
    .sell{
        margin-top: 10px;
        display: flex;
        justify-content: start;
        align-items: center;
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
    .details{
        overflow: hidden;
        width: 2000px;
    }
    .item{
        margin-left: 20px;
        text-align: center;
        line-height: 30px;
        float: left;
        width: 30px;
        color:white;
        height: 30px;
        border-radius: 50%;
        background-color: red;
    }
</style>
