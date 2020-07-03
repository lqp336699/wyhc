<template>
    <p class="font"><span class="chuan">{{data.blue}}</span>{{data.describe}}</p>
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
