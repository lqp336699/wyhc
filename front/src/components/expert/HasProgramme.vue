<template>
    <div class="hbox">
        <div class="top" v-for="item in this.data" :key="item.id">
            <div>
                <ANP :data="item.top"/>
            </div>
            <div>
                <Title :data="item.center" />
            </div>
            <div>
                <CompetingFoot :data="item.competingFoot"/>
            </div>
            <div>
                <timeBean :data="item.tb"/>
            </div>
        </div>
    </div>
</template>

<script>
    import ANP from './../AvatarNamePosition'
    import Title from './../title'
    import CompetingFoot from './../CompetingFoot'
    import timeBean from './../timeBean'
    export default {
        name: "HasPrograme",
        components:{
            ANP,Title,CompetingFoot,timeBean
        },
        data(){
            return{
                data:[]
            }
        },
        mounted(){
            let that = this;
            this.$axios('/programme.json').then(res=>{
                that.data = res.data;
            })
        }
    }
</script>

<style scoped>
    .hbox{
        background-color: rgb(245,245,245);
    }
    .top{
        padding: 10px 6px;
        background-color: #fff;
        margin-top: 10px;
    }
    .top div{
        margin-top: 10px;
    }
</style>
