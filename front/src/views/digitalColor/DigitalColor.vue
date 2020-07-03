<template>
    <div>
        <van-tabs v-model="active" :animated="true">
            <van-tab title="全部">
                <div class="colorBox">
                    <div v-for="item in this.data" :key="item.id" class="item">
                        <AvatarNamePosition :data="item.top" />
                        <DigitalColorFanAn :data="item.bottom" />
                    </div>
                </div>
            </van-tab>
            <van-tab title="大乐透">
                <div class="colorBox">
                    <div v-for="item in this.data" :key="item.id" class="item">
                        <AvatarNamePosition :data="item.top" />
                        <DigitalColorFanAn :data="item.bottom" />
                    </div>
                 </div>
            </van-tab>
        </van-tabs>
        <DigitalColorFootNav />
    </div>
</template>

<script>
    import DigitalColorFootNav from './../../components/Nav'
    import AvatarNamePosition from './../../components/AvatarNamePosition'
    import DigitalColorFanAn from './../../components/fangAn'
    export default {
        name: "DigitalColor",
        data(){
          return{
              data:[]
          }
        },
        components:{
            DigitalColorFootNav,AvatarNamePosition,DigitalColorFanAn
        },
        mounted(){
            let that = this;
            this.$axios('/color.json').then(res=>{
                console.log(res.data.data);
                that.data = res.data.data;

            })
        }
    }
</script>

<style scoped>
.colorBox{
    background-color: rgb(245,245,245);
}
    .item{
        background-color: #fff;
        margin-bottom: 10px;
        padding: 10px 10px;
    }
</style>
