<template>
    <div class="chart">
        <div id="myChart" :style="{width: data.width, height: data.height}"></div>
    </div>
</template>

<script>
    export default {
        name: "Chart",
        props:[
          "data"
        ],
        mounted(){
            this.drawLine();
        },
        methods: {
            drawLine(){
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('myChart'));
                // 绘制图表
                myChart.setOption({
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'red' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'rgba(255,0,0,0.2)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                    animation:true,
                    xAxis: {
                        type: 'category',
                        boundaryGap:false,
                        axisTick:{show:false},
                        data: ['近7场', '近5场', '近3场', '近2场']
                    },
                    yAxis: {
                        type: 'value',
                        // boundaryGap: false,
                        // axisTick:{show:false},
                    },
                    series: [{
                        // data: [ '60%', '80%','84%'],
                        data: [80,86, 100, 100],
                        type: 'line',
                        areaStyle: {}
                    }],
                    textStyle:{
                        color:"#888"
                    }
                });
            }
        }
    }
</script>

<style scoped>

</style>
