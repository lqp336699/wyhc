<template>
    <div>
        <expertFootNav />
        <expertHeaderTable :data="this.data.tuijianzhuangjia" />
    </div>
</template>

<script>
    import expertFootNav from './../../components/Nav'
    import expertHeaderTable from './../../components/expert/HeaderTable'
    export default {
        name: "Expert",
        data(){
          return{
              data:{
                  tuijianzhuangjia:[
                      {name:"胡敏娟",occupation:"足彩分析师",rate:"100",description:"【14连红！ 近20中19爆红】 英冠3场优惠：巴恩实力+女王巡游+威刚2293字",chuan:"[3串1]",time:"7小时前发布",bean:"58红豆",follow:true},
                      {name:"胡敏娟",occupation:"足彩分析师",rate:"100",description:"【14连红！ 近20中19爆红】 英冠3场优惠：巴恩实力+女王巡游+威刚2293字",chuan:"[3串1]",time:"7小时前发布",bean:"58红豆",follow:true},
                      {name:"胡敏娟",occupation:"足彩分析师",rate:"100",description:"【14连红！ 近20中19爆红】 英冠3场优惠：巴恩实力+女王巡游+威刚2293字",chuan:"[3串1]",time:"7小时前发布",bean:"58红豆",follow:true},
                      {name:"胡敏娟",occupation:"足彩分析师",rate:"100",description:"【14连红！ 近20中19爆红】 英冠3场优惠：巴恩实力+女王巡游+威刚2293字",chuan:"[3串1]",time:"7小时前发布",bean:"58红豆",follow:true},
                      {name:"胡敏娟",occupation:"足彩分析师",rate:"100",description:"【14连红！ 近20中19爆红】 英冠3场优惠：巴恩实力+女王巡游+威刚2293字",chuan:"[3串1]",time:"7小时前发布",bean:"58红豆",follow:true},
                      {name:"胡敏娟",occupation:"足彩分析师",rate:"100",description:"【14连红！ 近20中19爆红】 英冠3场优惠：巴恩实力+女王巡游+威刚2293字",chuan:"[3串1]",time:"7小时前发布",bean:"58红豆",follow:true},
                      {name:"胡敏娟",occupation:"足彩分析师",rate:"100",description:"【14连红！ 近20中19爆红】 英冠3场优惠：巴恩实力+女王巡游+威刚2293字",chuan:"[3串1]",time:"7小时前发布",bean:"58红豆",follow:true},
                  ]
              }
          }
        },
        components:{
            expertFootNav,expertHeaderTable
        }
    }
</script>

<style scoped>

</style>
