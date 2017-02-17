$(function(){
	showIntface8();
});

/**
 * 搜索
 * @returns
 */
function search(){
	var keyword = $("#keyword").val();
	if(isBlank(keyword)){
		showIntface8();
	}
}

function showIntface8(li){
	var param = new Object();
	var pageNum = 1;
	if(li != undefined){
		param.start = $(li).attr("start");
		param.length = 10;
		pageNum = parseInt($(li).text());
	}
	param.queryid = "83897eb4-7b57-432b-a20d-05aa87dc57ef";
	param.extra = "header";
	param.qbase64 = "Kg==";
	
	$.post(baseUrl, param, function(data){
		var list = $("#list");
		var li = "";
		data = JSON.parse(data);
		$("#totalSize").text(data.recordsTotal);
		var count = 0;
		$.each(data.data, function(i,e){
			count ++;
			if(count >= 7){return}
			li += '<li class="col-md-12">'+
							'<div class="col-md-6">'+
						'<p><img src=" img/icon_ip.png" />'+ e.url+'</p>'+
						'<p class="relationIp">'+ e.ip+'<a>关联网站</a></p>'+
						'<p>更新时间：'+ e.tm +'</p>';
			li += '<p class="labelings">';
			for(var j in e.tags){
				li += '<span class="label">' + e.tags[j] +'</span>';
			}
			li += '</p></div>';
			
			li += '<div class="col-md-6 ">'+e.header+'</div>';
//			li += '</p>'+
//					'</div>'+
//					'<div class="col-md-6 ">'+
//						'<p>218.57.139.18218.57.139.18</p>'+
//						'<p>218.57.139.18218.57.139.18</p>'+
//						'<p>218.57.139.18218.57.139.18</p>'+
//						'<p>218.57.139.18218.57.139.18</p>'+
//						'<p>218.57.139.18218.57.139.18</p>'+
//						'<p>218.57.139.18218.57.139.18</p>'+
//					'</div>	'+										
//				'</li>';
		});
		list.html(li);
		
		initPage($("#page1"), data.recordsTotal, 10, pageNum, "showIntface8(this)");
	});
}
//定时刷新左边table
setInterval("showIntface8()", 3000);


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