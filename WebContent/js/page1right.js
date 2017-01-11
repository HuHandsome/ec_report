$(function(){
	//右边列表
	var ul = $("#table2");
	var param = new Object();
	param.queryid = "2360c1b2-13f1-4906-aa38-48108c4ccbc8";
	param.cid = "";
	param.start = "";
	param.length = "";
	param.tmStart = "";
	param.tmEnd = "";
	
	$.post("/rest/asset/query", param, function(data){
		var li = "";
		data = JSON.parse(data);
		$.each(data.data, function(i,e){
			li += '<li class="item">' + 
									'<div class="item-text">' + 
									initStr(e.i) + 
									'</div>' + 
									'<div class="item-info">' + 
										'<span class="color-warning">'+initStr(e.t)+'</span>' + 
										'<span class="color-normal">故障源:</span>' + 
										'<span class="color-warning">'+initStr(e.s)+'</span>' + 
									'</div>' + 
								'</li>';
		});
		ul.html(li);
	});
	//列表
	showLeftTable("255");
	//K线
	kLine();
});

/**
 * 搜索
 * @returns
 */
function search(){
	var keyword = $("#keyword").val();
	if(isBlank(keyword)){
		showLeftTable();
	}
}

//左下查询列表
function showLeftTable(str, li){
	var param = new Object();
	param.queryid = "2360c1b2-13f1-4906-aa38-48108c4ccbc8";
	param.tmStart = "";
	param.tmEnd = "";
	if(!isBlank(str)){
		param.cid = str;
	}
	var pageNum = 1;
	if(li != undefined){
		param.start = $(li).attr("start");
		param.length = 10;
		pageNum = parseInt($(li).text());
	}
	var table = $(".table-c table tbody");
	var tableStr = '<tr>' + 
	 '<th></th>' + 
	 '<th></th>' + 
	 '<th>探测引擎</th>' + 
	 '<th>响应速度</th>' + 
	 '<th>响应代码</th>' + 
	 '<th>探测时间</th>' + 
	 '<th>异常等级</th>' + 
	 '</tr>';
	$.post("/rest/asset/query", param, function(data){
		data = JSON.parse(data);
		$.each(data.data, function(i,e){
			tableStr += '<tr>' +
				'<td>'+ (e.id + 1) +'</td>' +
				'<td><span class="icon" data-target="tb'+i+'">></span></td>' +
				'<td>'+ e.d.D +'</td>' +
				'<td>'+ e.speed +'</td>' +
				'<td>'+ e.speed +'</td>' +
				'<td>'+ formatDate(new Date(e.t), 'yyyy-MM-dd hh:mm:ss') +'</td>' +
				'<td>正常</td>' +
			'</tr>';
			tableStr += '<tr class="hide" id="tb'+i+'">' +
				'<td colspan="7">' +
					'<div class="more-info">' +
						'<p>浏览器标识:'+e.i.UA+'</p>' +
						'<p>A记录:'+e.d.A+'</p>' +
						'<p>NS记录:'+e.d.SN+'</p>' +
					'</div>' +
				'</td>' +
				'</tr>';
		});
		table.html(tableStr);
		initPage($("#page1"), data.recordsTotal, 10, pageNum, "showLeftTable(255, this)");
		var table_btn = $('.table').find('.icon');

	    table_btn.on('click', function () {
	        var _self = $(this);

	        _self.toggleClass('glyphicon-chevron-right');
	        _self.toggleClass('glyphicon-chevron-down');
	        var id = _self.attr('data-target');

	        var hide = _self.parents('.table').find('#' + id);

	        hide.toggleClass('hide');

	    });
	});
}

function initStr(str){
	if(typeof(str) != 'string'){
		return "";
	}else{
		return str;
	}
}

function isBlank(str){
	if(typeof(str) != 'string'){
		return true;
	}else{
		return false;
	}
}

function formatDate(date,fmt)   
{ //author: meizz   
  var o = {   
    "M+" : date.getMonth()+1,                 //月份   
    "d+" : date.getDate(),                    //日   
    "h+" : date.getHours(),                   //小时   
    "m+" : date.getMinutes(),                 //分   
    "s+" : date.getSeconds(),                 //秒   
    "q+" : Math.floor((date.getMonth()+3)/3), //季度   
    "S"  : date.getMilliseconds()             //毫秒   
  };   
  if(/(y+)/.test(fmt))   
    fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));   
  for(var k in o)   
    if(new RegExp("("+ k +")").test(fmt))   
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
  return fmt;   
}

function initPage(doc, totalSize, pageSize, pageNum, clickName){
	var pageTotal = Math.ceil(totalSize / pageSize);
	var pageList = new Array();
	if(pageNum <= 3){
		for(var i = 1; i <= pageTotal; i ++){
			pageList.push(i);
			if(pageList.length == 5){
				break;
			}
		}
	}else{
		//pageList = [(pageNum - 2), (pageNum - 1), pageNum];
		for(var i = (pageNum - 2); i <= pageTotal; i++){
			pageList.push(i);
			if(pageList.length == 5){
				break;
			}
		}
	}
	var lis = "<li class=‘page prev’ start='0' onclick='"+clickName+"'><</li>";
	for(var i in pageList){
		if(pageList[i] == pageNum){
			lis += "<li class='active' start='" + (pageList[i] * pageSize) + "' onclick='"+clickName+"'><a href='javascript:void(0)'>" + pageList[i] + "</a></li>";
		}else{
			lis += "<li start='" + (pageList[i] * pageSize) + "' onclick='"+clickName+"'><a href='javascript:void(0)'>" + pageList[i] + "</a></li>";
		}
	}
	lis += "<li class='page next' start='" + ((pageNum + 1) * pageSize) + "' onclick='"+clickName+"'>></li>";
	doc.html(lis);
}

/**
 * 折线图
 * @returns
 */
function kLine(){
	var param = new Object();
	param.queryid = "023ba092-4170-4c72-a936-e3efb09ebbd4";
	//param.start = "";
	//param.length = "";
	//param.tmStart = "";
	//param.tmEnd = "";
	param.cid = '255';
	$.post("/rest/asset/query", param, function(data){
		var line1x = new Array();
		var line1y = new Array();
		
		data = JSON.parse(data);
		
		$.each(data.data, function(i,e){
			line1x.push(e.t);
			line1y.push(parseInt(e.speed.replace('ms','')));
		});
		
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
	                    data: line1x
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
	                    data: line1y
	                }
	            ]
	        };
		 var line1 = echarts.init($('.top-charts-c').get(0));
	     line1.setOption(line1option);
	});
}