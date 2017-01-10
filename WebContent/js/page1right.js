$(function(){
	//右边列表
	var ul = $(".right .item-list");
	
	$.post("http://localhost:8080/ec_ui/rest/asset/intface6",function(data){
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
	
	showLeftTable("255");
});


//左下查询列表
function showLeftTable(str){
	var param = new Object();
	if(!isBlank(str)){
		param.cid = str;
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
	$.post("http://localhost:8080/ec_ui/rest/asset/intface11", param, function(data){
		data = JSON.parse(data);
		$.each(data.data, function(i,e){
			tableStr += '<tr>' +
				'<td>'+ (e.id + 1) +'</td>' +
				'<td><span class="icon" data-target="tb2">a</span></td>' +
				'<td>'+ e.d.D +'</td>' +
				'<td>'+ e.speed +'</td>' +
				'<td>'+ e.speed +'</td>' +
				'<td>'+ formatDate(new Date(e.t), 'yyyy-MM-dd hh:mm:ss') +'</td>' +
				'<td>正常</td>' +
			'</tr>';
			tableStr += '<tr class="hide" id="tb2">' +
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
