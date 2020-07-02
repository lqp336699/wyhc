<template>
    <div class="foot">
        <div class="jinzu">竞足</div>
        <span class="time">{{data.time}}</span>
        <span>{{data.type}}</span>
        <span>|</span>
        <span>{{data.blue}}</span>
        <span>VS</span>
        <span>{{data.red}}</span>
        <van-icon class="more" name="arrow" />
    </div>
</template>

<script>
    export default {
        name: "CompetingFoot",
        props:[
            "data"
        ]
    }
</script>

<style scoped>
    .foot{
        display: flex;
        justify-content: start;
        align-items: center;
        background-color: #f5f5f5;
        border-radius: 2px;
        font-size: 8px;
        position: relative;
    }
    .jinzu{
        padding: 2px;
        border: 1px solid cornflowerblue;
        color:cornflowerblue;
        transform: scale(0.6);
    }
    .foot span{
        margin-left: 5px;
        color:#999;
    }
    .more{
        font-size: 8px;
        position: absolute;
        right: 6px;
        color:#999;
    }
</style>
