<template>
    <div class="box">
        <div class="matchBox" @touchstart="start($event)">
            <div class="matchLeft">
                <p class="match">周三026  <span>|</span> [竞足]  意甲 <span>|</span>  2020.07.02 03:45</p>
                <div class="name">
                    <div class="team">
                        <img src="http://lqp336699.xyz/img/8.png" alt="">
                        <div>费拉拉</div>
                    </div>
                    <div class="time">
                        <div>据开始 16:12:14</div>
                        <div>VS</div>
                    </div>
                    <div class="team">
                        <img src="http://lqp336699.xyz/img/8.png" alt="">
                        <div>AC米兰</div>
                    </div>
                </div>
                <div class="detailed" v-for="item in 2" :key="item">
                    <div class="Letball">
                        <span>让球</span>
                        <span>0</span>
                    </div>
                    <div class="Record">
                        <div>
                            <span>主胜</span>
                            <span>2.50</span>
                        </div>
                        <div>
                            <span>主胜</span>
                            <span>2.50</span>
                        </div>
                        <div>
                            <span>主胜</span>
                            <span>2.50</span>
                        </div>
                    </div>
                </div>
                <button class="seeMore">查看更多赛事信息 <van-icon class="icon" name="arrow" size="12" /></button>
            </div>
            <div class="matchRight">

                <button class="seeMore">查看更多赛事信息 <van-icon class="icon" name="arrow" size="12" /></button>
            </div>
        </div>
    </div>

</template>

<script>
    var $ = require('jquery');
    export default {
        data(){
            return{
                currentX:0,
                mRL:0//第一屏第二屏标示
            }
        },
        name: "match",
        methods:{
            start(e) {
                let eve = e.targetTouches[0];
                this.currentX = eve.clientX; //按下的坐标
                $(".matchBox")[0].addEventListener('touchmove', this.move);
                $(".matchBox")[0].addEventListener('touchend', this.end);

            },
            move(e){
                let eve = e.targetTouches[0];
                this.nowX = eve.clientX; //滑动后的坐标
                if(this.mRL===0&&this.nowX-this.currentX<0){
                    document.getElementsByClassName("matchBox")[0].style.marginLeft=parseInt(this.nowX-(this.currentX))+"px";
                }
                else if(this.mRL!==0&&this.nowX-this.currentX>0){
                    document.getElementsByClassName("matchBox")[0].style.marginLeft=-parseInt(407-(this.nowX-this.currentX))+"px";
                }
            },
            end(){
                let X = this.currentX-this.nowX;
                if(this.mRL===0){//第一屏运动
                        let time1 = setInterval(()=>{
                            if(X>230){//第一屏向右滑动
                                X += 5;
                                if(X >= 407){
                                    X=407;
                                    clearInterval(time1);
                                    this.mRL=X;
                                }
                            }else{
                                X -= 5;
                                if(X <= 0){//第一屏向左滑动
                                    X=0;
                                    clearInterval(time1);
                                    this.mRL=X;
                                }
                            }
                            document.getElementsByClassName("matchBox")[0].style.marginLeft= -X+"px";
                        },0.1)
                    }else{//第二屏运动

                        let left =407+X;
                        let time3 = setInterval(() => {
                            if(X>-230) { //右滑
                                left += 5;
                                if(left>=407){
                                    left=407;
                                    clearInterval(time3);
                                    this.mRL = left;
                                }
                            }else{
                                left -= 5;
                                if(left<=0){
                                    left=0;
                                    clearInterval(time3);
                                    this.mRL = left;
                                }
                            }
                            document.getElementsByClassName("matchBox")[0].style.marginLeft = -left + "px";
                        }, 0.1)
                }
            }
        }
    }
</script>

<style scoped>
    .box{
        overflow: hidden;
    }
    .matchBox{
        overflow: hidden;
        width: 750px;
    }
    .matchLeft{
        width: 340px;
            float: left;
    }
    .match{
        margin-top: 20px;
        color:#888;
    }
    .match span{
        margin: 0 12px;
    }
    .name{
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .team{
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
    }
    .team img{
        height: 26px;
        width: 26px;
        border-radius: 50%;
    }
    .team div{
        font-weight: 600;
        font-size: 14px;
        margin-top:6px;
    }
    .time{
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
    }
    .time div:nth-of-type(1){
        color:blue;
        font-size:8px;
    }
    .time div:nth-of-type(2){
        font-size:20px;
        margin-top: 10px;
        font-weight: 600;
    }
    .detailed{
        overflow: hidden;
        margin-top: 10px;
    }
    .Letball{
        float:left;
        width:40px;
        height: 30px;
        background-color: #ddd;
        text-align: center;
        border-radius: 3px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        margin-left: 2px;
    }
    .Record{
        float: right;
        display: flex;
        justify-content: space-between;
        border-radius: 3px;
        overflow: hidden;
    }
    .Record div{
        width: 80px;
        height: 30px;
        background-color: #ddd;
        text-align: center;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        margin-left: 2px;
    }
    .seeMore{
        width: 100%;
        height: 30px;
        border: 1px solid #ccc;
        border-radius:40px;
        background-color: #fff;
        margin-top: 20px;
        align-items: center;
        display: flex;
        justify-content: center;
    }
    .matchRight{
        float: right;
        width: 340px;
        border: 1px solid #000;
        padding: 0 10px;
    }

</style>
