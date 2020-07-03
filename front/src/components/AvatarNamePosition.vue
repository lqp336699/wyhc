<template>
    <div>
        <div class="card-top" >
            <div>
                <img :src="data.img" alt="">
                <div class="follow">关注</div>
            </div>
            <div class="card-top-center">
                <div class="name">{{data.name}}</div>
                <p class="position">{{data.position}} <span>{{ data.record }}</span></p>
                <p >{{data.Odds}}</p>
                <p class="long">
                    擅长联赛
                    <span v-for="(item2) in data.long" :key="item2">
                        {{item2}}
                    </span>
                </p>
            </div>
            <div class="card-top-right" v-if="data.profitRate">
                <p>{{data.profitRate}}</p>
                <span class="ico">%</span>
                <p>盈利率</p>
                <p class="iconfont icon">&#xe607;</p>
            </div>
            <div class="card-top-right" v-if="!data.profitRate">
                <Chart :data="{height:'100px',width:'100px'}"/>
            </div>
        </div>
        <div></div>
    </div>
</template>

<script>
    import Chart from './personDetails/Chart'
    export default {
        name: "AvatarNamePosition",
        props:[
            "data"
        ],
        components:{
            Chart
        }
    }
</script>

<style scoped>
    .card-top{
        padding-top: 10px;
        overflow: hidden;
        padding-bottom: 10px;
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
        background-color: red;
        border-radius: 50%;
    }
    .name{
        font-weight: 700;

       font-size:16px;
    }
    .card-top-center p{
        margin-top: 4px;
        color:#888;
    }
    .position{
        font-size:8px;
        margin-top: 2px;
    }
    .position span{
        border: 1px solid cornflowerblue;
        background-color: rgba(0,0,255,0.1);
        padding:1px 4px;
    }
    div.card-top-right{
        float: right;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .card-top-right p:nth-of-type(1){
        font-size:20px;
        color:red;
        font-weight:800;
        position: relative;
        margin-right: 10px;
    }
    .card-top-right p:nth-of-type(2){
        font-size:8px;
        color:red;
    }
    .long span{
        background-color: #eee;
        text-align: center;
        padding: 2px 5px;
        margin-left: 3px;
        color:#333;
        border-radius: 4px;
    }
    .follow{
        background-color: red;
        text-align: center;
        border-radius: 7px;
        padding:0 2px;
        color:white;
        margin-top: 10px;
    }
    .ico{
        position: absolute;
        top: 0;
        right: 0;
        color:red;
    }
    .icon{
        color:orange;
        margin-top:5px;
    }

</style>
