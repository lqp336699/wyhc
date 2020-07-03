<template>
    <div>
        <div v-for="(item, index) in this.Data" :key="index">
            <router-link :to="{name:'PersonalDetails', params:{ id: item.id }}">
                <div class="followBox">
                    <div class="left">
                        <img :src="item.img" alt="">
                        <div class="nostatus" v-if="!item.remind" @click="remind(item)">
                            <span class="iconfont icon">&#xe618;</span> 提醒
                        </div>
                        <div class="status" v-if="item.remind" @click="remind(item)" >
                            已提醒
                        </div>
                    </div>
                    <div class="center">
                        <div class="nameBox">
                            <div class="name">{{item.name}}</div>
                            <div class="position">
                                {{item.position}}
                            </div>
                        </div>
                        <p>近期命中 <span>{{item.near}}</span></p>
                        <p>平均赔率 <span>{{item.average}}</span></p>
                        <p class="long">擅长联赛
                            <span v-for="(good,index) in item.good" :key="index">
                        {{good}}
                    </span>
                        </p>
                    </div>
                    <div class="right">
                        <FollowExpertChart :data="{height:'100px',width:'100px'}" />
                    </div>
                </div>
            </router-link>
            <div class="new">
                <div class="newLeft">
                    <span class="red"></span>共有 <span>{{ item.newFanAn }}条最新方案</span>
                </div>
                <div class="more"><van-icon name="arrow" size="12" /></div>
            </div>
        </div>
    </div>
</template>

<script>
    import FollowExpertChart from './../../components/personDetails/Chart'
    export default {
        name: "followExpert",
        props:[
          "data"
        ],
        data(){
            return{
                Data:[]
            }
        },
        mounted(){
            let follow = this.$store.state.expert.user.follow;
            let that = this;
            this.$axios('/followedExpert.json').then(res=>{
                res.data.followed.map(item=>{
                    follow.map(item2=>{
                        if(item.id===item2){
                            that.Data.push(item);
                        }
                    })
                    }
                )
            });
        },
        components:{
            FollowExpertChart
        },
        methods:{
            remind(item){
                this.$store.commit('changeRemind',item);
            }
        }
    }
</script>

<style scoped>
    .followBox{
        display: flex;
        justify-content: space-between;
        padding:0 20px;
        align-items: center;
    }
    .left{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
    }
    .left img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: orange;
    }
    .status{
        margin-top: 8px;
        border-radius: 8px;

        border: 1px solid #aaa;
        text-align: center;
        width: 50px;
        height: 16px;
        color:#aaa;
    }
    .nostatus{
        background-color: red;
        width: 50px;
        border: 1px solid transparent;
        height: 18px;
        color:white;
        text-align: center;
        line-height: 20px;
        border-radius: 8px;
        margin-top: 5px;
    }
    .nameBox{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .name{
        font-size: 16px;
    }
    .position{
        font-size: 10px;
        color:#aaa;
        margin-top: 5px;
        margin-left: 10px;
    }
    .center p{
        margin-top: 5px;
    }
    .long span{
        background-color: #ccc;
        padding: 2px 5px;
        color:#333;
        border-radius: 4px;
    }
    .icon{
        font-size:7px;
    }
    .new{
        display: flex;
        align-items: center;
        margin: 0 0 0 20px ;
        border-top: 1px solid #ccc;
        justify-content: space-between;
        color:#333;
        padding: 10px 6px 10px 0;
    }
    .newLeft{
        display: flex;
        align-items: center;
    }
    .red{
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: red;
        margin-right: 3px;
    }
    .more{
        float: right;
    }
</style>
