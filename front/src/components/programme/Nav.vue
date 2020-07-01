<template>
    <div class="nav">
        <van-nav-bar title="方案详情"  left-arrow style="background-color: red;">
            <template #right>
                <van-icon  class="love"    name="like-o" color="white" size="24" />
                <van-icon name="ellipsis" color="white" size="18" />
            </template>
        </van-nav-bar>
    </div>
</template>

<script>
    export default {
        name: "Nav"
    }
</script>

<style scoped>
    .love{
        margin-right: 10px;
    }
    .nav{
        position: fixed;
        z-index: 100;
        top: 0;
        left: 0;
        right: 0;
    }
</style>
