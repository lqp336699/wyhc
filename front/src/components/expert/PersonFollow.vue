<template>
    <div>
       <div  class="exports" v-for="(item,index) in this.listData" :key="index">
           <div class="card-top">
               <div>
                   <img :src="item.img" alt="">
               </div>
               <div class="card-top-center">
                   <div class="nameBox">
                       <div class="name">{{item.name}}</div>
                       <div class="position">{{item.position}}</div>
                   </div>
                   <p class="occupation">{{item.description }}</p>
               </div>
               <div class="card-top-right" >
                   <div class="follow" @click="addFollow(item.id)">
                       关注
                   </div>
               </div>
           </div>
       </div>
    </div>
</template>

<script>
    export default {
        name: "personFollow",
        props:[
            "data"
        ],
        data(){
          return{
              listData:[]
          }
        },
        mounted(){
          this.$axios('/Recommended_attention.json').then(
              res=>{
                  this.listData = res.data.Recommended_attention;
              }
          )
        },
        methods:{
            addFollow(id){
                this.$store.commit('addFollow',id);
            }
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
        font-size:16px;
    }
    .occupation{
        color:#888;
        font-size:8px;
        margin-top: 2px;
    }
    div.card-top-right{
        float: right;
        margin-top: 10px;
        border-radius: 20px;
        overflow: hidden;
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

    .follow{
        background-color: red;
        padding: 5px 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        color:white;
    }

    .nameBox{
        display: flex;
        justify-content: start;
    }
    .position{
        margin-left: 10px;
    }
    .occupation{
        width: 180px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    .exports{
        margin-top: 13px;
        overflow: hidden;
    }
</style>
