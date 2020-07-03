<template>
    <div class="dataBox">
        <NewTitle :data="data.title" />
        <NewFoot :data="data.comptingFoot" />
        <NewTimeBean :data="data.timeBean" />
    </div>
</template>

<script>
    import NewTitle from './title'
    import NewTimeBean from './timeBean'
    import NewFoot from './CompetingFoot'
    export default {
        name: "fangAn",
        props:[
          "data"
        ],
        components:{
            NewTitle,NewTimeBean,NewFoot
        },
        data(){
            return{

            }
        }
    }
</script>

<style scoped>

</style>
