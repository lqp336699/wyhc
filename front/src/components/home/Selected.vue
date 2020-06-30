<template>
    <div class="selecteds">
        <div class="selected">
            <div   class="selectedItem">
                <p>
                    <span>[蓝]</span> <span>进行中</span> <span>第二节完</span>
                </p>
                <div class="Bubble">精选</div>
                <div v-for="(item,index) in selectedData.selectedItem.selectedItem1" :key="index" class="data">
                    <img :src="item.img" alt="">
                    <span class="person">{{ item.person }}</span>
                    <span>{{ item.num }}</span>
                </div>
            </div>
            <div  class="selectedItem">
                <p>
                    <span>[蓝]</span> <span>进行中</span> <span>第二节完</span>
                </p>
                <div class="Bubble">精选</div>
                <div  v-for="(item,index) in selectedData.selectedItem.selectedItem2" :key="index" class="data">
                    <img :src="item.img" alt="">
                    <span class="person">{{item.person}}</span>
                    <span>{{ item.num }}</span>
                </div>
            </div>
        </div>

        <div class="classification">
            <li v-for="(item,index) in selectedData.classification" :key="index">
                <div>{{ item.name }}</div>
                <div class="classificationTwo">{{ item.status }}</div>
                <span class="iconfont new" v-if="item.new">&#xe610;</span>
            </li>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Selected",
        props:[
            "selectedData"
        ]
    }
</script>

<style scoped>
    .selecteds{
        background-color: #fff;
        height: 146px;
        margin-top: 10px;
        overflow: hidden;
        width: 100%;
    }
    .selected{
        display: flex;
        justify-content: space-around;
        margin-top: 10px;
    }
    .selectedItem{
        width: 170px;
        border-radius: 5px;
        padding: 5px;
        box-sizing: border-box;
        height: 80px;
        border: 1px solid #ccc;
        position: relative;
        overflow: hidden;
    }
    .person{
        margin-right: 34px;
    }
    .selectedItem p{
        color:red;
        background-color: #fff;
        font-size: 10px;
        margin-bottom: 6px;
    }
    .data{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top:5px;
    }
    .data span{
        font-weight: 600;
    }
    .data img{
        width: 20px;
        height: 20px;
        border-radius: 50%;
        overflow: hidden;
    }
    .Bubble{
        width: 50px;
        height: 30px;
        background-color: red;
        position: absolute;
        text-indent: 5px;
        right: -20px;
        font-size: 10px !important;
        top: -10px;
        line-height:40px;
        color:white;
        border-radius: 10px;
    }
    .classification{
        overflow: hidden;
    }
    .classification li{
        float: left;
        border-right: 1px solid #ccc;
        width: 25%;
        box-sizing: border-box;
        text-align: center;
        margin-top: 12px;
        position: relative;
    }

    .classification li:last-child{
        border:0;
    }
    .classificationTwo{
        font-size: 0.2rem;
        color:#888;
        margin-top: 2px;
    }
    div .new{
        color:red;
        position: absolute;
        top: -16px;
        left: 30px;
        font-size: 24px;
    }
</style>
