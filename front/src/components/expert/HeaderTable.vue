<template>
    <div class="box">
        <van-tabs  v-model="active" background="red" :animated="true" title-inactive-color="white" title-active-color="white"  :swipeable="true">
            <van-tab title="关注" name="a">
                <van-tabs v-model="active" line-width="25"  :animated="true" title-inactive-color="#666" title-active-color="red"  :swipeable="true"	>
                    <van-tab  title="关注的专家(0)">
                        <div class="noneFollow" v-if="!user_follow.length">
                            <div class="follow">
                                你还没有关注任何专家
                            </div>
                            <div >
                                <div>
                                    <p class="sell"><span></span>推荐关注</p>
                                </div>
                                <div class="recommend">
                                    <HeaderTablePersonFollow  />                    <!--推荐关注的列表-->
                                </div>
                            </div>
                        </div>
                        <div class="hasFollow" v-if="user_follow.length">
                            <HeaderTableFollowExpert />
                        </div>
                    </van-tab>
                    <van-tab title="关注的专家方案(0)">
                        <HeaderTableNoProgramme v-if="!user_follow.length" />       <!--//没有关注的专家方案-->
                        <HeaderTableHasProgramme v-if="user_follow.length" />       <!--//有关注的专家方案-->
                    </van-tab>
                </van-tabs>
            </van-tab>
            <van-tab title="足球" name="b">
                <van-tabs v-model="active" line-width="25"  :animated="true" title-inactive-color="#666" title-active-color="red"  :swipeable="true"	>
                    <van-tab  title="周盈利榜">
                        <div class="ZhouProfitBox">
                            <div v-for="(item) in this.ZhouProfit" :key="item.id" class="ZhouProfit">
                                <HeaderTableAvatarNamePosition :data="item"/>
                            </div>
                        </div>
                    </van-tab>
                    <van-tab title="周人气榜">
                        <div class="ZhouProfitBox">
                            <div v-for="(item) in this.ZhouProfit" :key="item.id" class="ZhouProfit">
                                <HeaderTableAvatarNamePosition :data="item"/>
                            </div>
                        </div>
                    </van-tab>
                    <van-tab title="全部">
                        <div class="allBox">
                            <div v-for="(item) in this.ZhouProfit" :key="item.id" class="all">
                                <HeaderTableAvatarNamePosition :data="item"/>
                            </div>
                        </div>
                    </van-tab>
                </van-tabs>
            </van-tab>
            <van-tab title="篮球" name="c">
                <van-tabs v-model="active" line-width="25"  :animated="true" title-inactive-color="#666" title-active-color="red"  :swipeable="true"	>
                    <van-tab  title="周人气榜">
                        <div class="ZhouProfitBox">
                            <div v-for="(item) in this.ZhouProfit" :key="item.id" class="ZhouProfit">
                                <HeaderTableAvatarNamePosition :data="item"/>
                            </div>
                        </div>
                    </van-tab>
                    <van-tab title="全部">
                        <div class="ZhouProfitBox">
                            <div v-for="(item) in this.ZhouProfit" :key="item.id" class="ZhouProfit">
                                <HeaderTableAvatarNamePosition :data="item"/>
                            </div>
                        </div>
                    </van-tab>

                </van-tabs>

            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    import HeaderTablePersonFollow from './PersonFollow'                    //推荐关注的列表
    import HeaderTableFollowExpert from './FollowExpert'                    //有关注的专家区域
    import HeaderTableHasProgramme from './HasProgramme'                     //有关注的专家方案区域
    import HeaderTableNoProgramme from './NoProgramme'                      //没有有关注的专家方案区域
    import HeaderTableAvatarNamePosition from './../AvatarNamePosition'                      //没有有关注的专家方案区域
    export default {
        name: "HeaderTable",
        components:{
            HeaderTablePersonFollow,HeaderTableNoProgramme,HeaderTableFollowExpert,HeaderTableHasProgramme,HeaderTableAvatarNamePosition
        },
        data(){
            return{
                activeName:'div',
                Data:[],
                ZhouProfit:[]
            }
        },
        mounted(){
            let that = this;
            this.$axios('/followedExpert.json').then(res=>{
                res.data.followed.map(item=>{
                    this.$store.state.expert.user.follow.map(item2=>{
                            if(item.id===item2){
                                that.Data.push(item);
                            }
                        })
                    }
                )
            });
            this.$axios('/ZhouProfit.json').then(res=>{
                that.ZhouProfit = res.data.data;
                console.log(that.ZhouProfit);

            });
        },
        computed: {
            user_follow () {
                return this.$store.state.expert.user.follow
            }
        }
    }
</script>

<style scoped>
    .recommend{
        padding: 0 20px 200px;
    }
    .box{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background-color: #fff;
    }
    .follow{
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .sell{
        display: flex;
        justify-content: start;
        align-items: center;
        border-bottom: 1px solid #ccc;
        font-size:14px;
        padding-bottom: 15px;
    }
    .sell span{
        display: block;
        background-color: coral;
        width: 5px;
        height: 10px;
        margin-right: 10px;
    }
    .ZhouProfitBox{
        background-color: rgb(245,245,245);
    }
    .ZhouProfit{
        background-color: #fff;
        padding: 0 10px;
        margin-top: 10px;
    }
    .allBox{
        background-color: rgb(245,245,245);

    }
    .all{
        margin-top: 12px;
        padding:0 10px;
        background-color: #fff;
    }
</style>
