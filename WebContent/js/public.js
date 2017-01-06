var statisticsV6 = angular.module("statisticsV6", []);

(function() {//头部环形图一
    statisticsV6.controller("header2Controller", function ($scope) {
        ajaxPost(baseUrl, {"queryid": "face5001-dd5f-4492-ae64-e08e971bed2d"}, function(data) {
            //data =  eval('(' + data + ')');
            data = JSON.parse(data);
            dataList = data.data;
            $scope.dataList = dataList;
            $scope.$apply();

            var myChart = echarts.init(document.getElementById('pie1'));
            var winW = $(window).width();//浏览器宽度
            var pie1H = $("#pie1").height();//容器高度
            var radiuW = 10;
            //初始化图一宽度
            var radiu = pie1H-70;
            if(winW<1300){
                radiu = pie1H-40;
                radiuW = 5;
                $(".pie1Text p span").each(function(){
                    $(this).text($(this).text().replace("…………",""));
                });
                $(".pie1Text p").css("line-height","20px");
            }
            var dataStyle = {
                normal: {
                    label: {show:false},
                    labelLine: {show:false},
                    shadowBlur: 40,
                    shadowColor: 'rgba(40, 40, 40, 0.5)'
                }
            };
            var placeHolderStyle = {
                normal : {
                    color: 'rgba(0,0,0,0)',
                    label: {show:false},
                    labelLine: {show:false}
                },
                emphasis : {
                    color: 'rgba(0,0,0,0)'
                }
            };
            option = {
                color: ['#1A8BE6', '#0FA058','#E8CF4A', '#D9790E'],
                tooltip : {
                    show: true,
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                series : [


                    {
                        name:dataList[0].n,
                        type:'pie',
                        clockWise:false,
                        radius : [radiu-radiuW,radiu],
                        itemStyle : dataStyle,
                        hoverAnimation: false,

                        data:[
                            {
                                value:dataList[0].v,
                                name:'01'
                            },
                            {
                                value:100,
                                name:'invisible',
                                itemStyle : placeHolderStyle
                            }

                        ]
                    },
                    {
                        name:dataList[1].n,
                        type:'pie',
                        clockWise:false,
                        radius : [radiu-radiuW*2,radiu-radiuW],
                        itemStyle : dataStyle,
                        hoverAnimation: false,

                        data:[
                            {
                                value:dataList[1].v,
                                name:'02'
                            },
                            {
                                value:100,
                                name:'invisible',
                                itemStyle : placeHolderStyle
                            }
                        ]
                    },
                    {
                        name:dataList[2].n,
                        type:'pie',
                        clockWise:false,
                        hoverAnimation: false,
                        radius : [radiu-radiuW*3,radiu-radiuW*2],
                        itemStyle : dataStyle,

                        data:[
                            {
                                value:dataList[2].v,
                                name:'03'
                            },
                            {
                                value:100,
                                name:'invisible',
                                itemStyle : placeHolderStyle
                            }
                        ]
                    },
                    {
                        name:dataList[3].n,
                        type:'pie',
                        clockWise:false,
                        hoverAnimation: false,
                        radius : [radiu-radiuW*4,radiu-radiuW*3],
                        itemStyle : dataStyle,

                        data:[
                            {
                                value:dataList[3].v,
                                name:'04'
                            },
                            {
                                value:100,
                                name:'invisible',
                                itemStyle : placeHolderStyle
                            }
                        ]
                    }
                ]
            };
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        });
    });
})();

(function() {//头部中间6个环形图
    statisticsV6.controller("header3Controller", function ($scope) {
        ajaxPost(baseUrl, {"queryid": "f4449cc4-e9c4-4f14-9a58-c2be3e6a618f"}, function(data) {
            data = JSON.parse(data);
            dataList = data.data;
            $scope.dataList2 = dataList;
            $scope.$apply();

            pie2();
            pie3();
            pie4();
            pie5();
            pie6();
            pie7();
            function pie2() {//图二
                var myChart = echarts.init(document.getElementById('pie2'));
                var pie1H = $("#pie2").height();
                var radiu = pie1H-70;
                var winW = $(window).width();//浏览器宽度
                var radiuW = 10;
                if(winW<1300){
                    radiu = pie1H-40;
                    radiuW = 5;
                }

                var dataStyle = {
                    normal: {
                        label: {show:false},
                        labelLine: {show:false},
                        shadowBlur: 40,
                        shadowColor: 'rgba(40, 40, 40, 0.5)'
                    }
                };
                var placeHolderStyle = {
                    normal : {
                        color: 'rgba(0,0,0,0)',
                        label: {show:false},
                        labelLine: {show:false}
                    },
                    emphasis : {
                        color: 'rgba(0,0,0,0)'
                    }
                };
                option = {
                    color: ['#103A5E', '#FD372F', '#08558F'],
                    tooltip : {
                        show: false,
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    series : [
                        {
                            name:dataList[0].n,
                            type:'pie',
                            clockWise:false,
                            radius : [radiu-radiuW,radiu],
                            itemStyle : dataStyle,
                            hoverAnimation: false,

                            data:[
                                {
                                    value:300
                                },
                                {
                                    value:0,
                                    itemStyle : placeHolderStyle
                                }

                            ]
                        },
                        {
                            name:dataList[0].n,
                            type:'pie',
                            clockWise:false,
                            radius : [radiu-radiuW,radiu],
                            itemStyle : dataStyle,
                            hoverAnimation: false,

                            data:[
                                {
                                    value:dataList[0].v
                                },
                                {
                                    value:100,
                                    itemStyle : placeHolderStyle
                                }
                            ]
                        },
                        {
                            name:dataList[0].n,
                            type:'pie',
                            clockWise:false,
                            radius : [0,radiu-radiuW-5],
                            itemStyle : dataStyle,
                            hoverAnimation: false,

                            data:[
                                {
                                    value:1
                                },
                                {
                                    value:0,
                                    itemStyle : placeHolderStyle
                                }
                            ]
                        }
                    ]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            }

            function pie3() {//图三
                var myChart = echarts.init(document.getElementById('pie3'));
                var pie1H = $("#pie3").height();
                var radiu = pie1H-70;
                var winW = $(window).width();//浏览器宽度
                var radiuW = 10;
                if(winW<1300){
                    radiu = pie1H-40;
                    radiuW = 5;
                }
                var dataStyle = {
                    normal: {
                        label: {show:false},
                        labelLine: {show:false},
                        shadowBlur: 40,
                        shadowColor: 'rgba(40, 40, 40, 0.5)'
                    }
                };
                var placeHolderStyle = {
                    normal : {
                        color: 'rgba(0,0,0,0)',
                        label: {show:false},
                        labelLine: {show:false}
                    },
                    emphasis : {
                        color: 'rgba(0,0,0,0)'
                    }
                };
                option = {
                    color: ['#103A5E', '#FD372F', '#08558F'],
                    tooltip : {
                        show: false,
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    series : [
                        {
                            name:dataList[1].n,
                            type:'pie',
                            clockWise:false,
                            radius : [radiu-radiuW,radiu],
                            itemStyle : dataStyle,
                            hoverAnimation: false,

                            data:[
                                {
                                    value:300
                                },
                                {
                                    value:0,
                                    itemStyle : placeHolderStyle
                                }

                            ]
                        },
                        {
                            name:dataList[1].n,
                            type:'pie',
                            clockWise:false,
                            radius : [radiu-radiuW,radiu],
                            itemStyle : dataStyle,
                            hoverAnimation: false,

                            data:[
                                {
                                    value:dataList[1].v
                                },
                                {
                                    value:100,
                                    itemStyle : placeHolderStyle
                                }
                            ]
                        },
                        {
                            name:dataList[1].n,
                            type:'pie',
                            clockWise:false,
                            radius : [0,radiu-radiuW-5],
                            itemStyle : dataStyle,
                            hoverAnimation: false,

                            data:[
                                {
                                    value:1
                                },
                                {
                                    value:0,
                                    itemStyle : placeHolderStyle
                                }
                            ]
                        }
                    ]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            }

            function pie4() {//图4
                var myChart = echarts.init(document.getElementById('pie4'));
                var pie1H = $("#pie4").height();
                var radiu = pie1H-70;
                var winW = $(window).width();//浏览器宽度
                var radiuW = 10;
                if(winW<1300){
                    radiu = pie1H-40;
                    radiuW = 5;
                }
                var dataStyle = {
                    normal: {
                        label: {show:false},
                        labelLine: {show:false},
                        shadowBlur: 40,
                        shadowColor: 'rgba(40, 40, 40, 0.5)'
                    }
                };
                var placeHolderStyle = {
                    normal : {
                        color: 'rgba(0,0,0,0)',
                        label: {show:false},
                        labelLine: {show:false}
                    },
                    emphasis : {
                        color: 'rgba(0,0,0,0)'
                    }
                };
                option = {
                    color: ['#103A5E', '#FD372F', '#08558F'],
                    tooltip : {
                        show: false,
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    series : [
                        {
                            name:dataList[2].n,
                            type:'pie',
                            clockWise:false,
                            radius : [radiu-radiuW,radiu],
                            itemStyle : dataStyle,
                            hoverAnimation: false,

                            data:[
                                {
                                    value:300
                                },
                                {
                                    value:0,
                                    itemStyle : placeHolderStyle
                                }

                            ]
                        },
                        {
                            name:dataList[2].n,
                            type:'pie',
                            clockWise:false,
                            radius : [radiu-radiuW,radiu],
                            itemStyle : dataStyle,
                            hoverAnimation: false,

                            data:[
                                {
                                    value:dataList[2].v
                                },
                                {
                                    value:100,
                                    itemStyle : placeHolderStyle
                                }
                            ]
                        },
                        {
                            name:dataList[2].n,
                            type:'pie',
                            clockWise:false,
                            radius : [0,radiu-radiuW-5],
                            itemStyle : dataStyle,
                            hoverAnimation: false,

                            data:[
                                {
                                    value:1
                                },
                                {
                                    value:0,
                                    itemStyle : placeHolderStyle
                                }
                            ]
                        }
                    ]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            }

            function pie5() {//图5
                var myChart = echarts.init(document.getElementById('pie5'));
                var pie1H = $("#pie5").height();
                var radiu = pie1H-70;
                var winW = $(window).width();//浏览器宽度
                var radiuW = 10;
                if(winW<1300){
                    radiu = pie1H-40;
                    radiuW = 5;
                }
                var dataStyle = {
                    normal: {
                        label: {show:false},
                        labelLine: {show:false},
                        shadowBlur: 40,
                        shadowColor: 'rgba(40, 40, 40, 0.5)'
                    }
                };
                var placeHolderStyle = {
                    normal : {
                        color: 'rgba(0,0,0,0)',
                        label: {show:false},
                        labelLine: {show:false}
                    },
                    emphasis : {
                        color: 'rgba(0,0,0,0)'
                    }
                };
                option = {
                    color: ['#103A5E', '#FD372F', '#08558F'],
                    tooltip : {
                        show: false,
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    series : [
                        {
                            name:dataList[3].n,
                            type:'pie',
                            clockWise:false,
                            radius : [radiu-radiuW,radiu],
                            itemStyle : dataStyle,
                            hoverAnimation: false,

                            data:[
                                {
                                    value:300
                                },
                                {
                                    value:0,
                                    itemStyle : placeHolderStyle
                                }

                            ]
                        },
                        {
                            name:dataList[3].n,
                            type:'pie',
                            clockWise:false,
                            radius : [radiu-radiuW,radiu],
                            itemStyle : dataStyle,
                            hoverAnimation: false,

                            data:[
                                {
                                    value:dataList[3].v
                                },
                                {
                                    value:100,
                                    itemStyle : placeHolderStyle
                                }
                            ]
                        },
                        {
                            name:dataList[3].n,
                            type:'pie',
                            clockWise:false,
                            radius : [0,radiu-radiuW-5],
                            itemStyle : dataStyle,
                            hoverAnimation: false,

                            data:[
                                {
                                    value:1
                                },
                                {
                                    value:0,
                                    itemStyle : placeHolderStyle
                                }
                            ]
                        }
                    ]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            }

            function pie6() {//图6
                var myChart = echarts.init(document.getElementById('pie6'));
                var pie1H = $("#pie6").height();
                var radiu = pie1H-70;
                var winW = $(window).width();//浏览器宽度
                var radiuW = 10;
                if(winW<1300){
                    radiu = pie1H-40;
                    radiuW = 5;
                }
                var dataStyle = {
                    normal: {
                        label: {show:false},
                        labelLine: {show:false},
                        shadowBlur: 40,
                        shadowColor: 'rgba(40, 40, 40, 0.5)'
                    }
                };
                var placeHolderStyle = {
                    normal : {
                        color: 'rgba(0,0,0,0)',
                        label: {show:false},
                        labelLine: {show:false}
                    },
                    emphasis : {
                        color: 'rgba(0,0,0,0)'
                    }
                };
                option = {
                    color: ['#103A5E', '#FD372F', '#08558F'],
                    tooltip : {
                        show: false,
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    series : [
                        {
                            name:dataList[4].n,
                            type:'pie',
                            clockWise:false,
                            radius : [radiu-radiuW,radiu],
                            itemStyle : dataStyle,
                            hoverAnimation: false,

                            data:[
                                {
                                    value:300
                                },
                                {
                                    value:0,
                                    itemStyle : placeHolderStyle
                                }

                            ]
                        },
                        {
                            name:dataList[4].n,
                            type:'pie',
                            clockWise:false,
                            radius : [radiu-radiuW,radiu],
                            itemStyle : dataStyle,
                            hoverAnimation: false,

                            data:[
                                {
                                    value:dataList[4].v
                                },
                                {
                                    value:100,
                                    itemStyle : placeHolderStyle
                                }
                            ]
                        },
                        {
                            name:dataList[4].n,
                            type:'pie',
                            clockWise:false,
                            radius : [0,radiu-radiuW-5],
                            itemStyle : dataStyle,
                            hoverAnimation: false,

                            data:[
                                {
                                    value:1
                                },
                                {
                                    value:0,
                                    itemStyle : placeHolderStyle
                                }
                            ]
                        }
                    ]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            }

            function pie7() {//图7
                var myChart = echarts.init(document.getElementById('pie7'));
                var pie1H = $("#pie7").height();
                var radiu = pie1H-70;
                var winW = $(window).width();//浏览器宽度
                var radiuW = 10;
                if(winW<1300){
                    radiu = pie1H-40;
                    radiuW = 5;
                }
                var dataStyle = {
                    normal: {
                        label: {show:false},
                        labelLine: {show:false},
                        shadowBlur: 40,
                        shadowColor: 'rgba(40, 40, 40, 0.5)'
                    }
                };
                var placeHolderStyle = {
                    normal : {
                        color: 'rgba(0,0,0,0)',
                        label: {show:false},
                        labelLine: {show:false}
                    },
                    emphasis : {
                        color: 'rgba(0,0,0,0)'
                    }
                };
                option = {
                    color: ['#103A5E', '#FD372F', '#08558F'],
                    tooltip : {
                        show: false,
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    series : [
                        {
                            name:dataList[5].n,
                            type:'pie',
                            clockWise:false,
                            radius : [radiu-radiuW,radiu],
                            itemStyle : dataStyle,
                            hoverAnimation: false,

                            data:[
                                {
                                    value:300
                                },
                                {
                                    value:0,
                                    itemStyle : placeHolderStyle
                                }

                            ]
                        },
                        {
                            name:dataList[5].n,
                            type:'pie',
                            clockWise:false,
                            radius : [radiu-radiuW,radiu],
                            itemStyle : dataStyle,
                            hoverAnimation: false,

                            data:[
                                {
                                    value:dataList[5].v
                                },
                                {
                                    value:100,
                                    itemStyle : placeHolderStyle
                                }
                            ]
                        },
                        {
                            name:dataList[5].n,
                            type:'pie',
                            clockWise:false,
                            radius : [0,radiu-radiuW-5],
                            itemStyle : dataStyle,
                            hoverAnimation: false,

                            data:[
                                {
                                    value:1
                                },
                                {
                                    value:0,
                                    itemStyle : placeHolderStyle
                                }
                            ]
                        }
                    ]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            }
        });
    });
})();


(function() {//头部右侧3个仪表盘
    statisticsV6.controller("header4Controller", function ($scope) {
        ajaxPost(baseUrl, {"queryid": "23286c2b-c1ce-46ec-893b-c5232948b29f"}, function(data) {
            data = JSON.parse(data);
            dataList3 = data.data;
            $scope.dataList3 = dataList3;
            $scope.$apply();
            var max = 0;
            for(var i = 0; i < dataList3.length; i++){
                max = dataList3[i].v > max ? dataList3[i].v : max;
            }
            max = max + 100;
            pie8();
            pie9();
            pie10();
            function pie8() {
                var myChart = echarts.init(document.getElementById('pie8'));
                var winW = $(window).width();//浏览器宽度
                var radiuW = 20;
                if (winW < 1300) {
                    radiuW = 10;
                }
                function detectionData(str) {
                    var color = '#FF372F';
                    return color;
                }

                var option = {
                    "tooltip": {
                        "formatter": "{a} <br/>{b} : {c}%"
                    },
                    "series": [{
                        "type": "gauge",
                        "splitNumber": -1,
                        "axisLine": {
                            "lineStyle": {
                                "color": [
                                    [0.31, "#F37B1D"],
                                    [1, "#07385E"]
                                ],
                                "width": radiuW
                            }
                        },
                        "axisTick": {
                            "lineStyle": {
                                "color": "#3bb4f2",
                                "width": 0
                            },
                            "length": -25,
                            "splitNumber": 1
                        },
                        "axisLabel": {
                            "distance": -80,
                            "textStyle": {
                                "color": "#000"
                            }
                        },
                        "splitLine": {
                            "show": false
                        },
                        "itemStyle": {
                            "normal": {
                                "color": "transparent"
                            }
                        },
                        "detail": {
                            "formatter": "{value}%",
                            "offsetCenter": [0, "160%"],
                            "textStyle": {
                                "fontSize": 0,
                                "color": "#F37B1D"
                            }
                        },
                        "data": [{
                            "value": 0
                        }]
                    }]
                }
                var value = 100/(max/dataList3[0].v);
                option.series[0].data[0].value = 0;
                option.series[0].axisLine.lineStyle.color[0][0] = value / 100;
                option.series[0].axisLine.lineStyle.color[0][1] = detectionData(value);
                myChart.setOption(option, true);
            }
            function pie9() {//图9
                var myChart = echarts.init(document.getElementById('pie9'));
                var winW = $(window).width();//浏览器宽度
                var radiuW = 20;
                if(winW<1300){
                    radiuW = 10;
                }
                function detectionData(str) {
                    var color = '#FE7D03';
                    return color;
                }
                var option = {
                    "tooltip": {
                        "formatter": "{a} <br/>{b} : {c}%"
                    },
                    "series": [{
                        "type": "gauge",
                        "splitNumber": -1,
                        "axisLine": {
                            "lineStyle": {
                                "color": [
                                    [0.31, "#F37B1D"],
                                    [1, "#07385E"]
                                ],
                                "width": radiuW
                            }
                        },
                        "axisTick": {
                            "lineStyle": {
                                "color": "#3bb4f2",
                                "width": 0
                            },
                            "length": -25,
                            "splitNumber": 1
                        },
                        "axisLabel": {
                            "distance": -80,
                            "textStyle": {
                                "color": "#000"
                            }
                        },
                        "splitLine": {
                            "show": false
                        },
                        "itemStyle": {
                            "normal": {
                                "color": "transparent"
                            }
                        },
                        "detail": {
                            "formatter": "{value}%",
                            "offsetCenter": [0, "160%"],
                            "textStyle": {
                                "fontSize": 0,
                                "color": "#F37B1D"
                            }
                        },
                        "data": [{
                            "value": 0
                        }]
                    }]
                }
                var value = 100/(max/dataList3[1].v);
                option.series[0].data[0].value = 0;
                option.series[0].axisLine.lineStyle.color[0][0] = value / 100;
                option.series[0].axisLine.lineStyle.color[0][1] = detectionData(value);
                myChart.setOption(option, true);

            }

            function pie10() {//图10
                var myChart = echarts.init(document.getElementById('pie10'));
                var winW = $(window).width();//浏览器宽度
                var radiuW = 20;
                if(winW<1300){
                    radiuW = 10;
                }
                function detectionData(str) {
                    var color = '#00D0FD';
                    return color;
                }
                var option = {
                    "tooltip": {
                        "formatter": "{a} <br/>{b} : {c}%"
                    },
                    "series": [{
                        "type": "gauge",
                        "splitNumber": -1,
                        "axisLine": {
                            "lineStyle": {
                                "color": [
                                    [0.31, "#F37B1D"],
                                    [1, "#07385E"]
                                ],
                                "width": radiuW
                            }
                        },
                        "axisTick": {
                            "lineStyle": {
                                "color": "#3bb4f2",
                                "width": 0
                            },
                            "length": -25,
                            "splitNumber": 1
                        },
                        "axisLabel": {
                            "distance": -80,
                            "textStyle": {
                                "color": "#000"
                            }
                        },
                        "splitLine": {
                            "show": false
                        },
                        "itemStyle": {
                            "normal": {
                                "color": "transparent"
                            }
                        },
                        "detail": {
                            "formatter": "{value}%",
                            "offsetCenter": [0, "160%"],
                            "textStyle": {
                                "fontSize": 0,
                                "color": "#F37B1D"
                            }
                        },
                        "data": [{
                            "value": 0
                        }]
                    }]
                }
                var value = 100/(max/dataList3[2].v);
                option.series[0].data[0].value = 0;
                option.series[0].axisLine.lineStyle.color[0][0] = value / 100;
                option.series[0].axisLine.lineStyle.color[0][1] = detectionData(value);
                myChart.setOption(option, true);

            }
        });
    });
})();

