<template>
    <div class="mytabs">
        <div class="more">更多<van-icon name="arrow" /> </div>
        <van-tabs v-model="active"  title-active-color="red" swipeable animated  line-width="25" >
            <van-tab title="足球专家">
                <van-grid :column-num="4"  :border="false">
                    <van-grid-item  v-for="(item,index) in exportData.footExport" :key="index">
                        <li class="footItem" >
                            <img :src="item.img" alt="">
                            <span>{{item.name}}</span>
                        </li>
                    </van-grid-item>
                </van-grid>
            </van-tab>
            <van-tab title="篮球专家">
                <van-grid  :border="false" class="box" >
                    <van-grid-item v-for="(item,index) in exportData.baskExport" :key="index" >
                        <li class="footItem" >
                            <img :src="item.img" alt="">
                            <span>{{item.name}}</span>
                        </li>
                    </van-grid-item>
                </van-grid>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    export default {
        name: "Export",
        props:[
            "exportData"
        ]
    }
</script>

<style scoped>
    .more{
        position: absolute;
        z-index: 10;
        right: 18px;
        font-size: 10px;
        color:#888;
        top:14px;
    }
    .mytabs{
        position: relative;
        background-color: #fff;
    }
    div.more .van-icon{
        font-size: 10px;
    }
    .footItem{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
    }
    .footItem img{
        width: 50px;
        height: 50px;
        margin-bottom: 5px;
        border-radius: 50%;
    }

</style>
