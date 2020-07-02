<template>
    <p class="font"><span class="chuan">{{data.chuan}}</span>{{data.description}}</p>
</template>

<script>
    export default {
        name: "title",
        props:[
            "data"
        ]
    }
</script>

<style scoped>
    .font{
        font-size:15px;
        margin: 10px 0;
    }
    .chuan{
        color:blue;
    }
</style>
