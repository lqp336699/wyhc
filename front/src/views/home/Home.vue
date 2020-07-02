<template>
    <div class="home">
        <HomeSwiper :swiperData="this.homeData.homeSwiper" />          <!--轮播图-->
        <HomeExport  :exportData="this.homeData.homeExport"/>          <!--专家-->
        <HomeSelected :selectedData="this.homeData.selected" />        <!--精选-->
        <HomeNav  :navData="this.homeData.nav"/>                       <!--导航条-->
        <HomeCard :cardData="this.homeData.card" />                    <!--card-->
        <HomeFootNav />
    </div>
</template>

<script>

    import HomeExport from './../../components/home/Export'
    import HomeSwiper from './../../components/home/Swiper'
    import HomeSelected from './../../components/home/Selected'
    import HomeNav from './../../components/home/Nav'
    import HomeCard from './../../components/home/Card'
    import HomeFootNav from './../../components/Nav'

    export default {
        name: "Home",
        data(){
            return{
                homeData:{
                    homeSwiper:[
                        {img:"https://gw.alicdn.com/imgextra/i3/77/O1CN01MwxmEl1CRJ6VGyCyZ_!!77-0-lubanu.jpg"},
                        {img:"https://gw.alicdn.com/imgextra/i3/77/O1CN01MwxmEl1CRJ6VGyCyZ_!!77-0-lubanu.jpg"},
                        {img:"https://gw.alicdn.com/imgextra/i3/77/O1CN01MwxmEl1CRJ6VGyCyZ_!!77-0-lubanu.jpg"},
                        {img:"https://gw.alicdn.com/imgextra/i3/77/O1CN01MwxmEl1CRJ6VGyCyZ_!!77-0-lubanu.jpg"},
                        {img:"https://gw.alicdn.com/imgextra/i3/77/O1CN01MwxmEl1CRJ6VGyCyZ_!!77-0-lubanu.jpg"},
                        {img:"https://gw.alicdn.com/imgextra/i3/77/O1CN01MwxmEl1CRJ6VGyCyZ_!!77-0-lubanu.jpg"},
                        {img:"https://gw.alicdn.com/imgextra/i3/77/O1CN01MwxmEl1CRJ6VGyCyZ_!!77-0-lubanu.jpg"},
                        {img:"https://gw.alicdn.com/imgextra/i3/77/O1CN01MwxmEl1CRJ6VGyCyZ_!!77-0-lubanu.jpg"},
                        {img:"https://gw.alicdn.com/imgextra/i3/77/O1CN01MwxmEl1CRJ6VGyCyZ_!!77-0-lubanu.jpg"},
                    ],
                    homeExport:{
                        footExport:[
                            { img:"https://gw.alicdn.com/imgextra/i3/77/O1CN01MwxmEl1CRJ6VGyCyZ_!!77-0-lubanu.jpg",name:"张璐" },
                            { img:"https://gw.alicdn.com/imgextra/i3/77/O1CN01MwxmEl1CRJ6VGyCyZ_!!77-0-lubanu.jpg",name:"张璐" },
                            { img:"https://gw.alicdn.com/imgextra/i3/77/O1CN01MwxmEl1CRJ6VGyCyZ_!!77-0-lubanu.jpg",name:"张璐" },
                            { img:"https://gw.alicdn.com/imgextra/i3/77/O1CN01MwxmEl1CRJ6VGyCyZ_!!77-0-lubanu.jpg",name:"张璐" },
                            { img:"https://gw.alicdn.com/imgextra/i3/77/O1CN01MwxmEl1CRJ6VGyCyZ_!!77-0-lubanu.jpg",name:"张璐" },
                            { img:"https://gw.alicdn.com/imgextra/i3/77/O1CN01MwxmEl1CRJ6VGyCyZ_!!77-0-lubanu.jpg",name:"张璐" },
                            { img:"https://gw.alicdn.com/imgextra/i3/77/O1CN01MwxmEl1CRJ6VGyCyZ_!!77-0-lubanu.jpg",name:"张璐" },
                            { img:"https://gw.alicdn.com/imgextra/i3/77/O1CN01MwxmEl1CRJ6VGyCyZ_!!77-0-lubanu.jpg",name:"张璐" },
                        ],
                        baskExport:[
                            { img:"https://gw.alicdn.com/imgextra/i3/77/O1CN01MwxmEl1CRJ6VGyCyZ_!!77-0-lubanu.jpg",name:"张璐" },
                            { img:"https://gw.alicdn.com/imgextra/i3/77/O1CN01MwxmEl1CRJ6VGyCyZ_!!77-0-lubanu.jpg",name:"张璐" },
                            { img:"https://gw.alicdn.com/imgextra/i3/77/O1CN01MwxmEl1CRJ6VGyCyZ_!!77-0-lubanu.jpg",name:"张璐" },
                            { img:"https://gw.alicdn.com/imgextra/i3/77/O1CN01MwxmEl1CRJ6VGyCyZ_!!77-0-lubanu.jpg",name:"张璐" },
                            { img:"https://gw.alicdn.com/imgextra/i3/77/O1CN01MwxmEl1CRJ6VGyCyZ_!!77-0-lubanu.jpg",name:"张璐" },
                            { img:"https://gw.alicdn.com/imgextra/i3/77/O1CN01MwxmEl1CRJ6VGyCyZ_!!77-0-lubanu.jpg",name:"张璐" },
                            { img:"https://gw.alicdn.com/imgextra/i3/77/O1CN01MwxmEl1CRJ6VGyCyZ_!!77-0-lubanu.jpg",name:"张璐" },
                            { img:"https://gw.alicdn.com/imgextra/i3/77/O1CN01MwxmEl1CRJ6VGyCyZ_!!77-0-lubanu.jpg",name:"张璐" },
                        ]
                    },
                    selected:{
                        selectedItem: {
                                selectedItem1:[
                                    {img:"https://gw.alicdn.com/imgextra/i3/77/O1CN01MwxmEl1CRJ6VGyCyZ_!!77-0-lubanu.jpg",person:'浙江光大银行',naum:'54'},
                                    {img:"https://gw.alicdn.com/imgextra/i3/77/O1CN01MwxmEl1CRJ6VGyCyZ_!!77-0-lubanu.jpg",person:'浙江光大银行',naum:'54'},
                                ],
                                selectedItem2:[
                                    {img:"https://gw.alicdn.com/imgextra/i3/77/O1CN01MwxmEl1CRJ6VGyCyZ_!!77-0-lubanu.jpg",person:'浙江光大银行',naum:'54'},
                                    {img:"https://gw.alicdn.com/imgextra/i3/77/O1CN01MwxmEl1CRJ6VGyCyZ_!!77-0-lubanu.jpg",person:'浙江光大银行',naum:'54'},
                                ]
                            },
                        classification:[
                            { name:"任九&胜负彩",new:false,status:"即时解读" },
                            { name:"任九&胜负彩",new:true,status:"即时解读" },
                            { name:"任九&胜负彩",new:false,status:"即时解读" },
                            { name:"任九&胜负彩",new:true,status:"即时解读" }
                        ]
                    },
                    nav:{
                        footList:[
                            { name:"全部足球" },
                            { name:"西甲" },
                            { name:"意甲" },
                            { name:"英超" },
                            { name:"奥加" },
                            { name:"丹麦杯" },
                            { name:"俄超" },
                            { name:"全部足球" },
                            { name:"西甲" },
                            { name:"意甲" },
                            { name:"英超" },
                            { name:"奥加" },
                            { name:"丹麦杯" },
                            { name:"俄超" },
                            { name:"意甲" },
                            { name:"英超" },
                            { name:"奥加" },
                            { name:"丹麦杯" },
                            { name:"俄超" },
                        ],
                        baskList:[
                            { name:'全部篮球' },
                            { name:'西蓝甲' },
                        ]
                    },
                    card:[
                        {name:"胡敏娟",occupation:"足彩分析师",rate:"100",description:"【14连红！ 近20中19爆红】 英冠3场优惠：巴恩实力+女王巡游+威刚2293字",chuan:"[3串1]",time:"7小时前发布",bean:"58红豆"},
                        {name:"胡敏娟",occupation:"足彩分析师",rate:"100",description:"【14连红！ 近20中19爆红】 英冠3场优惠：巴恩实力+女王巡游+威刚2293字",chuan:"[3串1]",time:"7小时前发布",bean:"58红豆"},
                        {name:"胡敏娟",occupation:"足彩分析师",rate:"100",description:"【14连红！ 近20中19爆红】 英冠3场优惠：巴恩实力+女王巡游+威刚2293字",chuan:"[3串1]",time:"7小时前发布",bean:"58红豆"},
                        {name:"胡敏娟",occupation:"足彩分析师",rate:"100",description:"【14连红！ 近20中19爆红】 英冠3场优惠：巴恩实力+女王巡游+威刚2293字",chuan:"[3串1]",time:"7小时前发布",bean:"58红豆"},
                        {name:"胡敏娟",occupation:"足彩分析师",rate:"100",description:"【14连红！ 近20中19爆红】 英冠3场优惠：巴恩实力+女王巡游+威刚2293字",chuan:"[3串1]",time:"7小时前发布",bean:"58红豆"},
                        {name:"胡敏娟",occupation:"足彩分析师",rate:"100",description:"【14连红！ 近20中19爆红】 英冠3场优惠：巴恩实力+女王巡游+威刚2293字",chuan:"[3串1]",time:"7小时前发布",bean:"58红豆"},
                        {name:"胡敏娟",occupation:"足彩分析师",rate:"100",description:"【14连红！ 近20中19爆红】 英冠3场优惠：巴恩实力+女王巡游+威刚2293字",chuan:"[3串1]",time:"7小时前发布",bean:"58红豆"},
                        {name:"胡敏娟",occupation:"足彩分析师",rate:"100",description:"【14连红！ 近20中19爆红】 英冠3场优惠：巴恩实力+女王巡游+威刚2293字",chuan:"[3串1]",time:"7小时前发布",bean:"58红豆"},
                        {name:"胡敏娟",occupation:"足彩分析师",rate:"100",description:"【14连红！ 近20中19爆红】 英冠3场优惠：巴恩实力+女王巡游+威刚2293字",chuan:"[3串1]",time:"7小时前发布",bean:"58红豆"},
                        {name:"胡敏娟",occupation:"足彩分析师",rate:"100",description:"【14连红！ 近20中19爆红】 英冠3场优惠：巴恩实力+女王巡游+威刚2293字",chuan:"[3串1]",time:"7小时前发布",bean:"58红豆"},
                        {name:"胡敏娟",occupation:"足彩分析师",rate:"100",description:"【14连红！ 近20中19爆红】 英冠3场优惠：巴恩实力+女王巡游+威刚2293字",chuan:"[3串1]",time:"7小时前发布",bean:"58红豆"},
                        {name:"胡敏娟",occupation:"足彩分析师",rate:"100",description:"【14连红！ 近20中19爆红】 英冠3场优惠：巴恩实力+女王巡游+威刚2293字",chuan:"[3串1]",time:"7小时前发布",bean:"58红豆"},
                        {name:"胡敏娟",occupation:"足彩分析师",rate:"100",description:"【14连红！ 近20中19爆红】 英冠3场优惠：巴恩实力+女王巡游+威刚2293字",chuan:"[3串1]",time:"7小时前发布",bean:"58红豆"},
                        {name:"胡敏娟",occupation:"足彩分析师",rate:"100",description:"【14连红！ 近20中19爆红】 英冠3场优惠：巴恩实力+女王巡游+威刚2293字",chuan:"[3串1]",time:"7小时前发布",bean:"58红豆"},
                        {name:"胡敏娟",occupation:"足彩分析师",rate:"100",description:"【14连红！ 近20中19爆红】 英冠3场优惠：巴恩实力+女王巡游+威刚2293字",chuan:"[3串1]",time:"7小时前发布",bean:"58红豆"},
                        {name:"胡敏娟",occupation:"足彩分析师",rate:"100",description:"【14连红！ 近20中19爆红】 英冠3场优惠：巴恩实力+女王巡游+威刚2293字",chuan:"[3串1]",time:"7小时前发布",bean:"58红豆"},
                        {name:"胡敏娟",occupation:"足彩分析师",rate:"100",description:"【14连红！ 近20中19爆红】 英冠3场优惠：巴恩实力+女王巡游+威刚2293字",chuan:"[3串1]",time:"7小时前发布",bean:"58红豆"},
                        {name:"胡敏娟",occupation:"足彩分析师",rate:"100",description:"【14连红！ 近20中19爆红】 英冠3场优惠：巴恩实力+女王巡游+威刚2293字",chuan:"[3串1]",time:"7小时前发布",bean:"58红豆"},
                        {name:"胡敏娟",occupation:"足彩分析师",rate:"100",description:"【14连红！ 近20中19爆红】 英冠3场优惠：巴恩实力+女王巡游+威刚2293字",chuan:"[3串1]",time:"7小时前发布",bean:"58红豆"},
                        {name:"胡敏娟",occupation:"足彩分析师",rate:"100",description:"【14连红！ 近20中19爆红】 英冠3场优惠：巴恩实力+女王巡游+威刚2293字",chuan:"[3串1]",time:"7小时前发布",bean:"58红豆"},
                    ]
                }
            }
        },
        components:{
            HomeExport,HomeSwiper,HomeSelected,HomeNav,HomeCard,HomeFootNav
        },
    }
</script>

<style >

</style>
