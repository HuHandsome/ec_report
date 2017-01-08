$(function(){
    var $body = $("body");
    var pie1 = echarts.init($('.pie1').get(0));

    // 指定图表的配置项和数据
    var pie1option = {
        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['74%', '90%'],
                avoidLabelOverlap: false,
                silent:true,
                label: {
                    normal: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {
                        value: 25,
                        name:'empty',
                        itemStyle:{
                            normal:{
                                opacity:0
                            }
                        }
                    },
                    {
                        value:75,
                        name:'资产总数',
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0, color: '#198be4' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'rgba(0,0,0,0)' // 100% 处的颜色
                                }], false),
                                borderColor:'#198be4'
                            }
                        }
                    }
                ]
            },
            {
                name:'访问来源',
                type:'pie',
                radius: ['54%', '70%'],
                avoidLabelOverlap: false,
                silent:true,
                label: {
                    normal: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {
                        value: 50,
                        name:'empty',
                        itemStyle:{
                            normal:{
                                opacity:0
                            }
                        }
                    },
                    {
                        value:50,
                        name:'正常资产',
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0, color: '#0fa055' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'rgba(0,0,0,0)' // 100% 处的颜色
                                }], false),
                                borderColor:'#0fa055'
                            }
                        }
                    }
                ]
            },
            {
                name:'访问来源',
                type:'pie',
                radius: ['34%', '50%'],
                avoidLabelOverlap: false,
                silent:true,
                label: {
                    normal: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {
                        value: 70,
                        name:'empty',
                        itemStyle:{
                            normal:{
                                opacity:0
                            }
                        }
                    },
                    {
                        value:30,
                        name:'问题资产',
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0, color: '#e2c948' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'rgba(0,0,0,0)' // 100% 处的颜色
                                }], false),
                                borderColor:'#e2c948'
                            }
                        }
                    }
                ]
            },
            {
                name:'访问来源',
                type:'pie',
                radius: ['14%', '30%'],
                avoidLabelOverlap: false,
                silent:true,
                label: {
                    normal: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {
                        value: 85,
                        name:'empty',
                        itemStyle:{
                            normal:{
                                opacity:0
                            }
                        }
                    },
                    {
                        value:15,
                        name:'问题单位',
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0, color: '#c06516' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'rgba(0,0,0,0)' // 100% 处的颜色
                                }], false),
                                borderColor:'#c06516'
                            }
                        }
                    }
                ]
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    pie1.setOption(pie1option);



    var line1 = echarts.init($('.top-charts-c').get(0));

    var line1x = function (a) {
        var arr = [];
        for (var i=1;i<=a;i++){
            arr.push(i);
        }
        return arr;
    };

    var line1y = function (a) {
        var arr = [];
        for (var i=1;i<=a;i++){
            arr.push(parseInt(Math.random(0,1)*1000));
        }
        return arr;
    };

    var line1option = {
        tooltip : {
            trigger: 'axis'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                axisTick:{
                  interval:10
                },
                data:line1x(130)
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'邮件营销',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data:line1y(130)
            }
        ]
    };

    line1.setOption(line1option);
});