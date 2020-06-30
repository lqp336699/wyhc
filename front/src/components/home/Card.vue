<template>
    <div class="CardBox">
        <router-link to="/Programme">
            <div class="card" v-for="(item,index) in cardData" :key="index">
                <div class="card-top">
                    <div>
                        <img src="http://lqp336699.xyz/img/3.png" alt="">
                    </div>
                    <div class="card-top-center">
                        <div class="name">{{item.name}}</div>
                        <div class="occupation">{{item.occupation }}</div>
                    </div>
                    <div class="card-top-right">
                        <p>{{item.rate}}<span class="ic">%</span></p>
                        <p>命中率</p>
                    </div>
                </div>
                <p class="font"><span class="chuan">{{item.chuan}}</span>{{item.description}}</p>
                <p class="tt"> <span class="time">{{item.time}}</span>  <span class="bean">{{item.bean}}</span></p>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "Card",
        props:[
            "cardData"
        ]
    }
</script>

<style scoped>
    .CardBox{
        margin-top: 50px;
    }
    .card{
        background-color: #fff;
        padding:1px 5px 15px;
        border-bottom: 1px solid #eee;
    }
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
    .chuan{
        color:blue;
    }
    .font{
        font-size:15px;
    }
    .tt{
        margin-top: 8px;
    }
    .time{
        color:#999;
    }
    .bean{
        color:coral;
        float: right;
    }
</style>
