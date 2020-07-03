<template>
    <!--"newFanAn":[{"timeBean":{ "time":"7小时前发布","bean":"58红豆" },-->
    <!--"comptingFoot":{ "time":"07/03","type" :"西甲","red":"罗马","blue":"乌迪内斯" },-->
    <!--"title":{"name":"胡敏娟","occupation":"足彩分析师","rate":"100","description":"【14连红！ 近20中19爆红】 英冠3场优惠：巴恩实力+女王巡游+威刚2293字","chuan":"[3串1]"}-->
    <!--}]-->
    <div class="box">
        <div class="top">
            <van-icon size="24" name="arrow-left" @click="()=>{$router.go(-1)}" />
            <span class="iconfont share">&#xe639;</span>
        </div>
        <div class="person">
            <img :src="this.data.img" alt="">
            <div class="data">
                <div class="name">
                    <div class="namea">{{this.data.name}}</div>
                    <div class="red"> <span class="iconfont">&#xe611;</span>爆红期</div>
                </div>
                <div class="position">{{this.data.position}}<span>|</span>{{this.data.fans}}粉丝</div>
                <div class="follow" v-if="!this.data.follow" @click="addFollow(this.data.id)"><van-icon class="icon" size="16" style="font-weight: 600" name="plus" />关注</div>
                <div class="follow" v-if="this.data.follow" @click="addFollow(this.data.id)"><van-icon class="icon" size="16" name="success" style="font-weight: 600"  />已关注</div>
            </div>
        </div>
        <div class="description">
           {{this.data.description}}
        </div>
        <div class="bottom">
            <span v-for="(item,index ) in this.data.label" :key="index">{{ item }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data(){
            return{
                data:{}
            }
        },
        props:[
            "id",
        ],
        mounted(){
            let that = this;
            this.$axios('/programmeHeader.json')
                .then(response => {
                  that.data = response.data.data.find(item=>{
                      if(item.id === parseInt(that.$props.id)) {
                           return item
                       }
                  });
                })
        },
        methods:{
            addFollow(id){
                this.$store.commit('addFollow',id)
            }
        }
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
