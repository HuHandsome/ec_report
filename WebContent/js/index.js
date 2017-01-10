$(function () {
    var $body = $("body");

    var w_height = $body.height();
    var w_width =$body.width();



    $('.sidebar').css('height',w_height-250);
    $('.search-pan').css('left',(w_width-331)/2-200);
    var pie1 = echarts.init($('.pie1').get(0));

    var table_btn = $('.table').find('.icon');

    table_btn.on('click', function () {
        var _self = $(this);

        _self.toggleClass('glyphicon-chevron-right');
        _self.toggleClass('glyphicon-chevron-down');
        var id = _self.attr('data-target');

        var hide = _self.parents('.table').find('#' + id);

        hide.toggleClass('hide');

    });

    // 指定图表的配置项和数据
    var pie1option = {

        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['74%', '90%'],
                avoidLabelOverlap: false,
                clockwise: false,
                silent: true,
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
                data: [

                    {
                        value: 75,
                        name: '资产总数',
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0, color: '#198be4' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'rgba(0,0,0,0)' // 100% 处的颜色
                                }], false),
                                borderColor: '#198be4'
                            }
                        }
                    },
                    {
                        value: 25,
                        name: 'empty',
                        itemStyle: {
                            normal: {
                                opacity: 0
                            }
                        }
                    }
                ]
            },
            {
                name: '访问来源',
                type: 'pie',
                radius: ['54%', '70%'],
                avoidLabelOverlap: false,
                clockwise: false,
                silent: true,
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
                data: [
                    {
                        value: 50,
                        name: '正常资产',
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0, color: '#0fa055' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'rgba(0,0,0,0)' // 100% 处的颜色
                                }], false),
                                borderColor: '#0fa055'
                            }
                        }
                    },
                    {
                        value: 50,
                        name: 'empty',
                        itemStyle: {
                            normal: {
                                opacity: 0
                            }
                        }
                    }
                ]
            },
            {
                name: '访问来源',
                type: 'pie',
                radius: ['34%', '50%'],
                avoidLabelOverlap: false,
                clockwise: false,
                silent: true,
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
                data: [

                    {
                        value: 30,
                        name: '问题资产',
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0, color: '#e2c948' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'rgba(0,0,0,0)' // 100% 处的颜色
                                }], false),
                                borderColor: '#e2c948'
                            }
                        }
                    },
                    {
                        value: 70,
                        name: 'empty',
                        itemStyle: {
                            normal: {
                                opacity: 0
                            }
                        }
                    }
                ]
            },
            {
                name: '访问来源',
                type: 'pie',
                radius: ['14%', '30%'],
                avoidLabelOverlap: false,
                clockwise: false,
                silent: true,
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
                data: [
                    {
                        value: 15,
                        name: '问题单位',
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0, color: '#c06516' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'rgba(0,0,0,0)' // 100% 处的颜色
                                }], false),
                                borderColor: '#c06516'
                            }
                        }
                    },
                    {
                        value: 85,
                        name: 'empty',
                        itemStyle: {
                            normal: {
                                opacity: 0
                            }
                        }
                    },
                ]
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    pie1.setOption(pie1option);


    //主页中间线表

    if($('.top-charts-c').length>0){
        var line1 = echarts.init($('.top-charts-c').get(0));

        var line1x = function (a) {
            var arr = [];
            for (var i = 1; i <= a; i++) {
                arr.push(i);
            }
            return arr;
        };

        var line1y = function (a) {
            var arr = [];
            for (var i = 1; i <= a; i++) {
                arr.push(parseInt(Math.random(0, 1) * 1000));
            }
            return arr;
        };

        var line1option = {
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    axisTick: {
                        interval: 10
                    },
                    data: line1x(130)
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '邮件营销',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data: line1y(130)
                }
            ]
        };

        line1.setOption(line1option);
        //end
    }

    //页头圆形表
    var carr = $('.mc-item');

    var c1option = {
        series: [
            {
                type: 'pie',
                radius: ['80%', '90%'],
                clockwise: false,
                silent: true,
                label: {
                    normal: {
                        position: 'center',
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {
                        value: 80,
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 2, 1, [{
                                    offset: 0, color: '#fd342d' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'transparent' // 100% 处的颜色
                                }], false)
                            }
                        }
                    },
                    {
                        value: 20,
                        itemStyle: {
                            normal: {
                                color: 'rgba(255,255,255,.1)'
                            }
                        }
                    }
                ]
            },
            {
                name: '问题资产',
                type: 'pie',
                radius: ['0', '70%'],
                clockwise: false,
                silent: true,
                label: {
                    normal: {
                        show: true,
                        position: 'center',
                        textStyle: {
                            fontSize: '14',
                            fontWeight: 'bold',
                            color: '#198be4'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {
                        value: 100,
                        name: '12350',
                        label: {
                            normal: {
                                show: true,
                                position: 'center',
                                textStyle: {
                                    fontSize: '14',
                                    fontWeight: 'bold',
                                    color: '#FFF'
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.RadialGradient(0.5, 0.5, 3, [{
                                    offset: 0, color: '#093456' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#fff' // 100% 处的颜色
                                }], false)
                            }
                        }
                    }
                ]
            }
        ]
    };

    $.each(carr, function (k, v) {
        console.log(v);
        var c = echarts.init(v);
        var n = parseInt($(v).attr('data-num'));
        c1option.series[1].name = $(v).attr('data-name');
        c1option.series[1].data[0].name = $(v).attr('data-name');
        c1option.series[0].data[0].value = n;
        c1option.series[0].data[1].value = 100 - n;
        c.setOption(c1option);
    });


    //页头半环形表
    var hoption = {
        series: [
            {
                type: 'pie',
                radius: ['60%', '80%'],
                startAngle:233,
                silent: true,
                label: {
                    normal: {
                        position: 'center',
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {
                        value: 50,
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 2, 1, [{
                                    offset: 0, color: '#fd342d' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'transparent' // 100% 处的颜色
                                }], false),
                                borderColor:'#198be4'
                            }
                        }
                    },
                    {
                        value:30,
                        itemStyle: {
                            normal: {
                                color:'transparent',
                                borderColor:'#198be4'
                            }
                        }
                    },
                    {
                        value: 20,
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(1, 0, 1, 1, [{
                                    offset: 0, color: 'transparent' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#28a4d8' // 100% 处的颜色
                                }], false)
                            }
                        }
                    }
                ]
            },
            {
                name: '问题资产',
                type: 'pie',
                radius: ['0', '50%'],
                silent: true,
                label: {
                    normal: {
                        show: true,
                        position: 'center',
                        textStyle: {
                            fontSize: '14',
                            fontWeight: 'bold',
                            color: '#198be4'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {
                        value: 100,
                        name: '所有资产',
                        label: {
                            normal: {
                                show: true,
                                position: 'center',
                                textStyle: {
                                    fontSize: '14',
                                    fontWeight: 'bold',
                                    color: '#FFF'
                                }
                            }
                        },
                        itemStyle: {
                            normal: {

                                color: new echarts.graphic.LinearGradient(1, 0, 1, 1, [{
                                    offset: 0, color: '#28a4d8' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'transparent' // 100% 处的颜色
                                }], false)
                            }
                        }
                    }
                ]
            }
        ]
    };

    var harr = $('.half-c');

    $.each(harr,function(k,v){
        var h = echarts.init(v);
        var n = parseInt($(v).attr('data-num'));
        hoption.series[1].name = $(v).attr('data-name');
        hoption.series[1].data[0].name = $(v).attr('data-name');
        hoption.series[0].data[0].value = n*0.8;
        hoption.series[0].data[1].value = 80 - n*0.8;
        h.setOption(hoption);
    })

});