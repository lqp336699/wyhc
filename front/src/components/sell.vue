<template>
    <div>
        <p class="sell"><span></span>张宁其它在售方案(2)</p>
    </div>
</template>

<script>
    export default {
        name: "sell",
        props:[
            "data"
        ]
    }
</script>

<style scoped>
    .sell{
        display: flex;
        justify-content: start;
        align-items: center;
        font-weight: 600;
        border-bottom: 1px solid #ccc;
        padding-bottom: 15px;
    }
    .sell span{
        display: block;
        background-color: coral;
        width: 5px;
        height: 10px;
        transform: translateX(-10px);
    }
</style>
