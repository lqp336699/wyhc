<template>
    <div class="card-top">
        <div>
            <img src="http://lqp336699.xyz/img/3.png" alt="">
        </div>
        <div class="card-top-center">
            <div class="name">{{data.name}}</div>
            <div class="occupation">{{data.occupation }}</div>
        </div>
        <div class="card-top-right" v-if="!data.follow">
            <p>{{data.rate}}<span class="ic">%</span></p>
            <p>命中率</p><span>{{data.show}}</span>
        </div>
        <div class="card-top-right" v-if="data.follow">
            <div class="follow">
                <van-icon name="plus" class="icon" />关注
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Person",
        props:[
            "data"
        ],
        mounted(){
            console.log(this.data);
        }
    }
</script>

<style scoped>
    .card-top{
        margin-top: 10px;
        overflow: hidden;
        margin-bottom: 6px;
    }
    .card-top-center{
        margin-left: 10px;
    }
    .card-top>div{
        float:left;
    }
    .card-top img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
    .name{
        font-weight: 700;
        font-size:16px;
    }
    .occupation{
        color:#888;
        font-size:8px;
        margin-top: 2px;
    }
    div.card-top-right{
        float: right;
        margin-right: 10px;
    }
    .card-top-right p:nth-of-type(1){
        font-size:20px;
        color:red;
        font-weight:800;
        position: relative;
    }
    .card-top-right p:nth-of-type(2){
        font-size:8px;
        color:red;
    }
    .ic{
        font-size:5px;
        position: absolute;
        top: 0;
        right: -10px;
    }
    .follow{
        background-color: red;
        padding: 5px 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        color:white;
    }
    .icon{
        margin-right: 5px;
    }
</style>
