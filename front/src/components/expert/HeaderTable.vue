<template>
    <div class="box">
        <van-tabs  v-model="active" background="red" :animated="true" title-inactive-color="white" title-active-color="white"  :swipeable="true">
            <van-tab title="关注" name="a">
                <van-tabs v-model="active" line-width="25"  :animated="true" title-inactive-color="#666" title-active-color="red"  :swipeable="true"	>
                    <van-tab  title="关注的专家(0)">
                        <div class="follow">
                            你还没有关注任何专家
                        </div>
                        <div>
                            <p class="sell"><span></span>推荐关注</p>
                            <div v-for="(item,index) in this.data" :key="index" class="exports">
                                <HeaderTablePerson :data="item" />
                            </div>
                        </div>
                    </van-tab>
                    <van-tab title="关注的专家方案(0)">内容 2</van-tab>
                </van-tabs>
            </van-tab>
            <van-tab title="足球" name="b">内容 2</van-tab>
            <van-tab title="篮球" name="c">内容 3</van-tab>
        </van-tabs>
    </div>
</template>

<script>
    import HeaderTablePerson from './../Person'
    export default {
        name: "HeaderTable",
        props:[
          "data"
        ],
        components:{
            HeaderTablePerson
        },
        data() {
            return {
                activeName: 'div',
            };
        },
    }
</script>

<style scoped>
    .exports{
        margin-bottom: 10px;
        overflow: hidden;
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
</style>
