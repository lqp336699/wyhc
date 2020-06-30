<template>
    <van-swipe :autoplay="3000" class="swiper">
        <van-swipe-item v-for="(item, index) in swiperData" :key="index">
            <img v-lazy="item.img" />
        </van-swipe-item>
    </van-swipe>
</template>

<script>
    export default {
        name: "Swiper",
        props: [     //prop接收传过来的参数
           "swiperData"
        ],
        data(){
            return{

            }
        }
    }
</script>

<style scoped>
    .swiper{
        overflow: hidden;
        width: 100%;
        height: 120px;
    }
    .swiper img{
        width: 100%;
        height: 120px;
    }
    div .van-swipe__indicators{
        left: 85%;
    }
</style>
