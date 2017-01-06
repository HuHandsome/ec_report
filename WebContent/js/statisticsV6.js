var $body = $("body");
$body.css("font-size", $body.width() / 60);
$(window).on("resize", function() {
	$body.css("font-size", $body.width() / 60);
});
(function() {//Top10
	statisticsV6.controller("main_l1Controller", function ($scope) {
		ajaxPost(baseUrl, {"queryid": "6188fd63-edb9-4e98-8ec8-df48871ab248"}, function(data) {
			data = JSON.parse(data);
			dataList4 = data.data;
			$scope.dataList4 = dataList4;
			$scope.$apply();
		});
	});
})();
(function() {//左1

	statisticsV6.controller("main_l2Controller", function ($scope) {
		ajaxPost(baseUrl, {"queryid": "f4449cc4-e9c4-4f14-9a58-c2be3e6a618f"}, function(data) {
			data = JSON.parse(data);
			dataList = data.data;
			$scope.$apply();
			var max = 0;
			for(var i = 0; i < dataList.length; i++){
				max = dataList[i].v > max ? dataList[i].v : max;
			}
			max = max + 100;

			var myChart = echarts.init(document.getElementById('pie11'));
			option = {
				tooltip: {},
				radar: {
					// shape: 'circle',
					indicator: [
						{ name: dataList[1].n, max: max},
						{ name: dataList[2].n, max: max},
						{ name: dataList[3].n, max: max},
						{ name: dataList[4].n, max: max},
						{ name: dataList[5].n, max: max}
					],
					name: {
						textStyle: {
							color: '#fff',
							fontSize: 12
						}
					},
					splitLine: {
						lineStyle: {
							color:'#0A4B83',
							opacity:1
						}
					},
					splitArea: {
						show: true,
						areaStyle:{
							color:'transparent'
						}
					},
					axisLine: {
						show:true,
						lineStyle: {
							color:'#0A4B83',
							opacity:1
						}
					}
				},
				series: [{
					type: 'radar',
					itemStyle: {
						normal: {
							borderColor: '#fff',
							borderWidth:1
						}
					},
					areaStyle: {
						normal: {
							color: '#12568E',
							opacity: 0.5
						}
					},
					lineStyle: {
						normal: {
							type:'solid',
							color:"#1A8CE7"
						}
					},
					data : [
						{
							value : [dataList[1].v, dataList[2].v, dataList[3].v, dataList[4].v, dataList[5].v]
						}
					]
				}]
			};

			myChart.setOption(option);
		});
	});
})();

(function() {//左2
	var myChart = echarts.init(document.getElementById('pie12'));
	var colors = ['#ACD8E3', '#17B3DA', '#14499C', '#99D53C', '#FFF100', '#FF7D03', '#B00002']
	option = {
		tooltip : {
			trigger: 'axis',
			axisPointer : {            // 坐标轴指示器，坐标轴触发有效
				type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		legend: {
			bottom:0,
			data:['说明1','说明2','说明3','说明4','说明5','说明6','说明7']
		},
		textStyle:{color:"#fff"},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '23%',
			containLabel: true
		},
		xAxis : [
			{
				data : ['11-01','11-02','11-03','11-04','11-05','11-06','11-07']
			}
		],
		yAxis : [
			{
				axisLabel: {
					//formatter: ''
				},
				type : 'value'
			}
		],
		series : [
			{
				name:'说明1',
				type:'bar',
				barWidth : 10,
				stack: '搜索引擎',
				data:[190, 132, 101, 154, 190,130, 140],
				itemStyle: {
					normal: {
						color: colors[0]
					}
				}
			},
			{
				name:'说明2',
				type:'bar',
				stack: '搜索引擎',
				data:[120, 132, 101, 134, 290, 230, 220],
				itemStyle: {
					normal: {
						color: colors[1]
					}
				}
			},
			{
				name:'说明3',
				type:'bar',
				stack: '搜索引擎',
				data:[60, 72, 71, 74, 190, 130, 110],
				itemStyle: {
					normal: {
						color: colors[2]
					}
				}
			},
			{
				name:'说明4',
				type:'bar',
				stack: '搜索引擎',
				data:[62, 82, 91, 84, 109, 110, 120],
				itemStyle: {
					normal: {
						color: colors[3]
					}
				}
			},
			{
				name:'说明5',
				type:'bar',
				stack: '搜索引擎',
				data:[62, 82, 91, 84, 109, 110, 120],
				itemStyle: {
					normal: {
						color: colors[4]
					}
				}
			},
			{
				name:'说明6',
				type:'bar',
				stack: '搜索引擎',
				data:[62, 82, 91, 84, 109, 110, 120],
				itemStyle: {
					normal: {
						color: colors[5]
					}
				}
			},
			{
				name:'说明7',
				type:'bar',
				stack: '搜索引擎',
				data:[62, 82, 91, 84, 109, 110, 120],
				itemStyle: {
					normal: {
						color: colors[6]
					}
				}
			}
		]
	};

	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
})();
(function() {//中 日期
	$(".custom").on("click",function(){
		$("#timeStart").click();
	});
	var startDate = "";
	var start = {
		elem: '#timeStart',
		max: laydate.now(0, "YYYY-MM-DD"),
		format: 'YYYY-MM-DD',
		istime: true,
		istoday: false,
		choose: function (datas) {
			if($("#timeEnd").text()==""){
				$("#timeEnd").click();
				$(".custom_word").show();
			}
			startDate = datas.replace(/\-/g, "\/").split(" ")[0];
			startDate =  Date.parse(new Date(startDate));
			var end = {
				elem: '#timeEnd',
				min: laydate.now(startDate||0, "YYYY-MM-DD"),
				max: laydate.now(0, "YYYY-MM-DD"),
				format: 'YYYY-MM-DD',
				istime: true,
				istoday: false,
				choose: function (datas) {
					if($("#timeStart").text()==""){
						$("#timeStart").click();
						$(".custom_word").show();
					}
				}
			};
			laydate(end);
		}
	};
	laydate(start);
})();
(function() {//图13
	var myChart = echarts.init(document.getElementById('pie13'));

	var geoCoordMap = {
		'上海': [121.4648,31.2891],
		'东莞': [113.8953,22.901],
		'东营': [118.7073,37.5513],
		'中山': [113.4229,22.478],
		'临汾': [111.4783,36.1615],
		'临沂': [118.3118,35.2936],
		'丹东': [124.541,40.4242],
		'丽水': [119.5642,28.1854],
		'乌鲁木齐': [87.9236,43.5883],
		'佛山': [112.8955,23.1097],
		'保定': [115.0488,39.0948],
		'兰州': [103.5901,36.3043],
		'包头': [110.3467,41.4899],
		'北京': [116.4551,40.2539],
		'北海': [109.314,21.6211],
		'南京': [118.8062,31.9208],
		'南宁': [108.479,23.1152],
		'南昌': [116.0046,28.6633],
		'南通': [121.1023,32.1625],
		'厦门': [118.1689,24.6478],
		'台州': [121.1353,28.6688],
		'合肥': [117.29,32.0581],
		'呼和浩特': [111.4124,40.4901],
		'咸阳': [108.4131,34.8706],
		'哈尔滨': [127.9688,45.368],
		'唐山': [118.4766,39.6826],
		'嘉兴': [120.9155,30.6354],
		'大同': [113.7854,39.8035],
		'大连': [122.2229,39.4409],
		'天津': [117.4219,39.4189],
		'太原': [112.3352,37.9413],
		'威海': [121.9482,37.1393],
		'宁波': [121.5967,29.6466],
		'宝鸡': [107.1826,34.3433],
		'宿迁': [118.5535,33.7775],
		'常州': [119.4543,31.5582],
		'广州': [113.5107,23.2196],
		'廊坊': [116.521,39.0509],
		'延安': [109.1052,36.4252],
		'张家口': [115.1477,40.8527],
		'徐州': [117.5208,34.3268],
		'德州': [116.6858,37.2107],
		'惠州': [114.6204,23.1647],
		'成都': [103.9526,30.7617],
		'扬州': [119.4653,32.8162],
		'承德': [117.5757,41.4075],
		'拉萨': [91.1865,30.1465],
		'无锡': [120.3442,31.5527],
		'日照': [119.2786,35.5023],
		'昆明': [102.9199,25.4663],
		'杭州': [119.5313,29.8773],
		'枣庄': [117.323,34.8926],
		'柳州': [109.3799,24.9774],
		'株洲': [113.5327,27.0319],
		'武汉': [114.3896,30.6628],
		'汕头': [117.1692,23.3405],
		'江门': [112.6318,22.1484],
		'沈阳': [123.1238,42.1216],
		'沧州': [116.8286,38.2104],
		'河源': [114.917,23.9722],
		'泉州': [118.3228,25.1147],
		'泰安': [117.0264,36.0516],
		'泰州': [120.0586,32.5525],
		'济南': [117.1582,36.8701],
		'济宁': [116.8286,35.3375],
		'海口': [110.3893,19.8516],
		'淄博': [118.0371,36.6064],
		'淮安': [118.927,33.4039],
		'深圳': [114.5435,22.5439],
		'清远': [112.9175,24.3292],
		'温州': [120.498,27.8119],
		'渭南': [109.7864,35.0299],
		'湖州': [119.8608,30.7782],
		'湘潭': [112.5439,27.7075],
		'滨州': [117.8174,37.4963],
		'潍坊': [119.0918,36.524],
		'烟台': [120.7397,37.5128],
		'玉溪': [101.9312,23.8898],
		'珠海': [113.7305,22.1155],
		'盐城': [120.2234,33.5577],
		'盘锦': [121.9482,41.0449],
		'石家庄': [114.4995,38.1006],
		'福州': [119.4543,25.9222],
		'秦皇岛': [119.2126,40.0232],
		'绍兴': [120.564,29.7565],
		'聊城': [115.9167,36.4032],
		'肇庆': [112.1265,23.5822],
		'舟山': [122.2559,30.2234],
		'苏州': [120.6519,31.3989],
		'莱芜': [117.6526,36.2714],
		'菏泽': [115.6201,35.2057],
		'营口': [122.4316,40.4297],
		'葫芦岛': [120.1575,40.578],
		'衡水': [115.8838,37.7161],
		'衢州': [118.6853,28.8666],
		'西宁': [101.4038,36.8207],
		'西安': [109.1162,34.2004],
		'贵阳': [106.6992,26.7682],
		'连云港': [119.1248,34.552],
		'邢台': [114.8071,37.2821],
		'邯郸': [114.4775,36.535],
		'郑州': [113.4668,34.6234],
		'鄂尔多斯': [108.9734,39.2487],
		'重庆': [107.7539,30.1904],
		'金华': [120.0037,29.1028],
		'铜川': [109.0393,35.1947],
		'银川': [106.3586,38.1775],
		'镇江': [119.4763,31.9702],
		'长春': [125.8154,44.2584],
		'长沙': [113.0823,28.2568],
		'长治': [112.8625,36.4746],
		'阳泉': [113.4778,38.0951],
		'青岛': [120.4651,36.3373],
		'韶关': [113.7964,24.7028]
	};

	var BJData = [
		[{name:'北京'}, {name:'上海',value:195}],
		[{name:'北京'}, {name:'广州',value:190}],
		[{name:'北京'}, {name:'大连',value:180}],
		[{name:'北京'}, {name:'南宁',value:170}],
		[{name:'北京'}, {name:'南昌',value:160}],
		[{name:'北京'}, {name:'拉萨',value:150}],
		[{name:'北京'}, {name:'长春',value:140}],
		[{name:'北京'}, {name:'包头',value:130}],
		[{name:'北京'}, {name:'重庆',value:120}],
		[{name:'北京'}, {name:'常州',value:110}]
	];

	var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

	var convertData = function (data) {
		var res = [];
		for (var i = 0; i < data.length; i++) {
			var dataItem = data[i];
			var fromCoord = geoCoordMap[dataItem[0].name];
			var toCoord = geoCoordMap[dataItem[1].name];
			if (fromCoord && toCoord) {
				res.push({
					fromName: dataItem[0].name,
					toName: dataItem[1].name,
					coords: [fromCoord, toCoord]
				});
			}
		}
		return res;
	};

	var color = ['#a6c84c', '#ffa022', '#46bee9'];
	var series = [];
	[['北京', BJData]].forEach(function (item, i) {
		series.push({
				name: item[0] + ' Top10',
				type: 'lines',
				zlevel: 1,
				effect: {
					show: true,
					period: 6,
					trailLength: 0.7,
					color: '#fff',
					symbolSize: 3
				},
				lineStyle: {
					normal: {
						color: color[i],
						width: 0,
						curveness: 0.2
					}
				},
				data: convertData(item[1])
			},
			{
				name: item[0] + ' Top10',
				type: 'lines',
				zlevel: 2,
				effect: {
					show: true,
					period: 6,
					trailLength: 0,
					symbol: planePath,
					symbolSize: 15
				},
				lineStyle: {
					normal: {
						color: color[i],
						width: 1,
						opacity: 0.4,
						curveness: 0.2
					}
				},
				data: convertData(item[1])
			},
			{
				name: item[0] + ' Top10',
				type: 'effectScatter',
				coordinateSystem: 'geo',
				zlevel: 2,
				rippleEffect: {
					brushType: 'stroke'
				},
				label: {
					normal: {
						show: true,
						position: 'right',
						formatter: '{b}'
					}
				},
				symbolSize: function (val) {
					return val[2] / 8;
				},
				itemStyle: {
					normal: {
						color: color[i]
					}
				},
				data: item[1].map(function (dataItem) {
					return {
						name: dataItem[1].name,
						value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
					};
				})
			});
	});

	option = {
		backgroundColor: 'transparent',
		title : {
			left: 'center',
			textStyle : {
				color: '#fff'
			}
		},
		tooltip : {
			trigger: 'item'
		},
		legend: {
			orient: 'vertical',
			top: 'bottom',
			left: 'right',
			textStyle: {
				color: '#fff'
			},
			selectedMode: 'single'
		},
		geo: {
			map: 'china',
			label: {
				emphasis: {
					show: false
				}
			},
			roam: false,
			itemStyle: {
				normal: {
					areaColor: '#1B2448',
					borderColor: '#404a59'
				},
				emphasis: {
					areaColor: '#2a333d'
				}
			}
		},
		series: series
	};

	myChart.setOption(option);
})();
(function() {//右1
	$(".main_r1 div").each(function(){
		var _this = $(this).children(".sp2");
		_this.children("b").width((_this.children("b").attr("data")/_this.attr("base-data"))*100);
	});
})();
(function() {//图14
	var myChart = echarts.init(document.getElementById('pie14'));

	option = {
		baseOption: {
			tooltip : {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			color:['#FE4443','#FF7D03','#FCDE4A','#0FA358','#0272CC'],
			label: {
				normal: {
					formatter: "{c}"
				}
			},
			legend: {
				data:['SQL注入攻击','XSS攻击','暴力破解攻击','目录遍历攻击','不安全的对象']
			},
			calculable : true,
			series : [
				{
					name:'攻击分类',
					type:'pie',
					roseType : 'area',
					data:[
						{value:100, name:'SQL注入攻击'},
						{value:50, name:'XSS攻击'},
						{value:150, name:'暴力破解攻击'},
						{value:250, name:'目录遍历攻击'},
						{value:200, name:'不安全的对象'}
					]
				}
			]
		},
		media: [
			{
				query: {
					minAspectRatio: 1
				},
				option: {
					legend: {
						right: 0,
						bottom: 40,
						orient: 'vertical'
					},
					series: [
						{
							radius: [15, '40%'],
							center: ['35%', '45%']
						}
					]
				}
			}
		]
	};

	myChart.setOption(option);
})();
(function() {//图15
	var myChart = echarts.init(document.getElementById('pie15'));

	option = {
		baseOption: {
			tooltip : {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			color:['#B00002','#17B3DA','#14499C','#99D53C','#C241D6'],
			label: {
				normal: {
					formatter: "{c}"
				}
			},
			legend: {
				data:['Apache','Wordpress','Struts2','Discuz','Debian']
			},
			calculable : true,
			series : [
				{
					name:'资产分类',
					type:'pie',
					roseType : 'area',
					data:[
						{value:100, name:'Apache'},
						{value:50, name:'Wordpress'},
						{value:150, name:'Struts2'},
						{value:250, name:'Discuz'},
						{value:200, name:'Debian'}
					]
				}
			]
		},
		media: [
			{
				query: {
					minAspectRatio: 1
				},
				option: {
					legend: {
						right: 0,
						bottom: 40,
						orient: 'vertical'
					},
					series: [
						{
							radius: [15, '40%'],
							center: ['35%', '45%']
						}
					]
				}
			}
		]
	};

	myChart.setOption(option);
})();
