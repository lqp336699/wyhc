<template>
    <p class="tt"> <span class="time">{{data.time}}前发布</span>  <span class="bean">{{data.bean}}红豆</span></p>
</template>

<script>
    export default {
        name: "timeBean",
        props:[
            "data"
        ]
    }
</script>

<style scoped>
    .tt{
        margin-top: 8px;
    }
    .time{
        color:#999;
    }
    .bean{
        color:coral;
        float: right;
    }
</style>
