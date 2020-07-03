<template>
    <div class="box">
        <personalDetailsHeader :id="this.$router.history.current.params.id"/>
        <personalDetailsRecord />
        <PersonalDetailsChart :data="{height:'300px',width:'300px'}" />
        <personalDetailsNew />
    </div>
</template>

<script>
    import personalDetailsRecord from './../../components/Record'
    import personalDetailsHeader from './../../components/personDetails/Header'
    import personalDetailsNew from './../../components/personDetails/New'
    import PersonalDetailsChart from './../../components/personDetails/Chart'
    export default {
        name: "PersonalDetails",
        components:{
            personalDetailsHeader,personalDetailsRecord,personalDetailsNew,PersonalDetailsChart
        },
        props:[
        ],
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
            }
        }
    }
</script>

<style scoped>
    .chart{
        display: flex;
        background-color: #fff;
        margin-top: 10px;
        justify-content: center;
    }
</style>
