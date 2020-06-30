<template>
    <div class="info">
        <div class="nav">
            <van-sticky >
                <div class="statusBar" >
                    <div  @click="cupping($event)">
                        <a href="javascript:void(0);" :class="{'fontActive': this.item === 'all'}">全部</a>
                    </div>
                    <div  class="foot" @click="cupping($event)">
                      <span>
                          <a href="javascript:void(0);"  :class="{'fontActive': this.item === 'foot'}">
                              足球
                              <span :class="['iconfont', 'icon', { 'rote':this.footFlag  } ]" >&#xe60a;</span>
                        </a>
                      </span>
                    </div>
                    <div  class="bask" @click="cupping($event)">
                       <span>
                           <a href="javascript:void(0);" :class="{'fontActive': this.item === 'bask'}">
                               篮球
                               <span :class="['iconfont', 'icon', { 'rote':this.baskFlag  } ]">&#xe60a;</span>
                           </a>
                       </span>
                    </div>
                </div>
            </van-sticky>
        </div>
        <van-popup lock-scroll v-model="footFlag" position="top" :style="{ height: '30%',width:'100%' }" @click-overlay="chBar">
           <ul class="footList">
               <li v-for="(item,index) in navData.footList" :key="index">{{ item.name }}</li>
           </ul>
        </van-popup>
        <van-popup lock-scroll v-model="baskFlag" position="top" :style="{ height: '30%',width:'100%' }" @click-overlay="chBar">
            <ul class="footList">
                <li v-for="(item,index) in navData.baskList" :key="index">{{ item.name }}</li>
            </ul>
        </van-popup>
    </div>
</template>

<script>
    export default {
        name: "Nav",
        props:[
          "navData"
        ],
        data() {
            return {
                item:'all',//导航栏类型状态
                footFlag:false,//导航栏点击状态
                baskFlag:false,//导航栏点击状态
            };
        },
        methods:{
            // 点击弹出层恢复状态
            chBar(){
                this.footFlag = false;
                this.baskFlag = false;
                this.item = 'all';
            },
            //吸顶
            cupping(e){
                let Ctop = document.getElementsByClassName("info")[0].offsetTop;//距离顶部的距离
                let top = document.documentElement.scrollTop;
                let type =  e.currentTarget.className;
                let time = setInterval(()=>{
                    if(top<Ctop){
                        top +=8;
                    }else{
                        top = Ctop;
                        clearInterval(time);
                        //弹出层和样式
                        if(type==="foot"){
                            this.foot()
                        }else if(type==="bask"){
                            this.bask()
                        }else{
                            this.all()
                        }
                    }
                    document.documentElement.scrollTop = top;
                },1);
            },
            all(){
                this.item = 'all';
                this.footFlag = false;
                this.baskFlag = false;
            },
            foot(){
                this.footFlag = !this.footFlag;
                this.baskFlag = false;
                if(this.footFlag){
                    this.item = 'foot';
                    this.footFlag=true;
                }else{
                    this.item = 'all';
                    this.footFlag=false;
                }

            },
            bask(){
                this.baskFlag = !this.baskFlag;
                this.footFlag = false;
                if(this.baskFlag){
                    this.item = 'bask';
                    this.baskFlag = true;
                }else{
                    this.item = 'all';
                    this.baskFlag = false;
                }
            }
        }
    }
</script>

<style scoped>


    .info{
        margin-top: 10px;
        /*background-color: #fff;*/
        position: relative;
        /*overflow: hidden;*/
        background-color: red;
    }
    .statusBar{
        height: 40px;
        border-bottom: 1px solid #ddd;
        display: flex;
        justify-content: space-around;
        background-color: #fff;
        position: relative;
        z-index: 5000;
        align-items: center;
    }
    .statusBar div{
        height: 40px;
        width: 100%;
        text-align: center;
        line-height: 40px;
    }
    .fontActive{
        color:red;
    }
    span.icon{
        font-size:4px;
        position: absolute;
        transition: all 0.5s;
    }
    /*//图标旋转*/

    .rote{
        transform: rotate(180deg);
        transition: all 0.3s;
    }
    .footList{
        position: absolute;
        width: 100%;
        height: 200px;
        top: 0;
        left: 0;
        margin: 0;
        background-color: #fff;
    }

    .footList li{
        float: left;
        width: 70px;
        margin-top: 10px;
        text-align: center;
        line-height: 26px;
        height: 26px;
        margin-left: 17px;
        border-radius: 10px;
        background-color: rgb(255,245,245);
        color:#888;
    }
    .nav{
        position: absolute;
        z-index: 500;
        width: 100%;
    }

</style>
