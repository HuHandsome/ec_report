$(function () {
	alert(baseUrl);
	var pie1 = echarts.init($('.pie1').get(0));
	// 指定图表的配置项和数据
    var pie1option = {
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['74%', '90%'],
                avoidLabelOverlap: false,
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
                        value: 25,
                        name: 'empty',
                        itemStyle: {
                            normal: {
                                opacity: 0
                            }
                        }
                    },
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
                    }
                ]
            },
            {
                name: '访问来源',
                type: 'pie',
                radius: ['54%', '70%'],
                avoidLabelOverlap: false,
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
                        name: 'empty',
                        itemStyle: {
                            normal: {
                                opacity: 0
                            }
                        }
                    },
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
                    }
                ]
            },
            {
                name: '访问来源',
                type: 'pie',
                radius: ['34%', '50%'],
                avoidLabelOverlap: false,
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
                        value: 70,
                        name: 'empty',
                        itemStyle: {
                            normal: {
                                opacity: 0
                            }
                        }
                    },
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
                    }
                ]
            },
            {
                name: '访问来源',
                type: 'pie',
                radius: ['14%', '30%'],
                avoidLabelOverlap: false,
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
                        value: 85,
                        name: 'empty',
                        itemStyle: {
                            normal: {
                                opacity: 0
                            }
                        }
                    },
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
                    }
                ]
            }
        ]
    };
    
	//页头圆形表
    var carr = $('.mc-item');

    var c1option = {
        series: [
            {
                type: 'pie',
                radius: ['90%', '100%'],
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
                radius: ['0', '80%'],
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
        var c = echarts.init(v);
        var n = parseInt($(v).attr('data-num'));
        c1option.series[1].name = $(v).attr('data-name');
        c1option.series[1].data[0].name = $(v).attr('data-name');
        c1option.series[0].data[0].value = n;
        c1option.series[0].data[1].value = 100 - n;
        c.setOption(c1option);
    });

    var harr = $('.half-c');
    //页头半环形表
    var hoption = {
        series: [
            {
                type: 'pie',
                radius: ['80%', '100%'],
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
                radius: ['0', '70%'],
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
    
	var param = new Object();
	param.queryid = "face5001-dd5f-4492-ae64-e08e971bed2d";
    $.post(baseUrl, param, function(result){
		var resultData = JSON.parse(result);
		$("#count_asset").find('ul').empty();
		var total = 0;
		$.each(resultData.data, function(index, item) {
			total+=item.v
		});
		$.each(resultData.data, function(index, item) {
			$("#count_asset").find('ul').append(
					'<li><span class="color-normal">' + item.n
							+ '</span>…………' + item.v + '</li>');
			var ratio = total/100;
			var value1 = item.v/ratio;
			pie1option.series[index].data[0].value=100-value1;
			pie1option.series[index].data[1].value=value1;
		});
		pie1.setOption(pie1option);
	});
    
    var param = new Object();
	param.queryid = "f4449cc4-e9c4-4f14-9a58-c2be3e6a618f";
	$.post(baseUrl, param, function(result){
		var resultData = JSON.parse(result);
		var total = 0;
		$.each(resultData.data, function(index, item) {
			total+=item.v
		});
		$.each(resultData.data, function(index, item) {
			$("#asset"+index).attr("data-name",item.n);
			var ratio = total/100;
			var value1 = item.v/ratio;
			$("#asset"+index).attr("data-num",value1);
		});
		$.each(carr, function (k, v) {
	        var c = echarts.init(v);
	        var n = parseInt($(v).attr('data-num'));
	        c1option.series[1].name = $(v).attr('data-name');
	        c1option.series[1].data[0].name = $(v).attr('data-name');
	        c1option.series[0].data[0].value = n;
	        c1option.series[0].data[1].value = 100 - n;
	        c.setOption(c1option);
	    });
	});
	
	var param = new Object();
	param.queryid = "23286c2b-c1ce-46ec-893b-c5232948b29f";
	$.post(baseUrl, param, function(result){
		var resultData = JSON.parse(result);
		var total = 0;
		$.each(resultData.data, function(index, item) {
			total+=item.v
		});
		$.each(resultData.data, function(index, item) {
			$("#half"+index).attr("data-name",item.n);
			var ratio = total/100;
			var value1 = item.v/ratio;
			$("#half"+index).attr("data-num",value1);
		});
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
});