<template>
    <div class="CardBox">
        <router-link to="/Programme">
            <div class="card" v-for="(item,index) in this.Data" :key="index">
                <CardPerson :data="item" />
               <CardFangAn :data="item"/>
            </div>
        </router-link>
    </div>
</template>

<script>
    import CardFangAn from './../fangAn'
    import CardPerson from './../AvatarNamePosition'
    export default {
        name: "Card",
        props:[
            "card"
        ],
        data(){
            return{
                Data:[]
        }
        },
        mounted(){
            this.$axios('/homeList.json').then(res=>{
                    this.Data = res.data.data;
                }
            )},
        components:{
            CardFangAn,CardPerson
        }
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
</style>
