<template>
        <div class="none">
            <div class="box">
                <div class="iconfont icon">&#xe621;</div>
                <div>还没有关注任何专家</div>
            </div>
        </div>
</template>

<script>
    export default {
        name: "FollowProgramme",
        data(){
            return{
            }
        },
        computed: {

        },
        mounted(){

        }
    }
</script>

<style scoped>
    .none{
         display: flex;
        justify-content: center;
        height: 640px;
        align-items: center;
    }
    .box{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 250px;
    }
    .icon{
        font-size: 50px;
    }
</style>
