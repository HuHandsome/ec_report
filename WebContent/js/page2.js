$(function(){
	$.post("http://localhost:8080/ec_ui/rest/asset/intface8?isExtra=true",function(data){
		var list = $("#list");
		var li = "";
		data = JSON.parse(data);
		$("#totalSize").text(data.recordsTotal);
		$.each(data.data, function(i,e){
			li += '<li class="col-md-12">'+
							'<div class="col-md-6">'+
						'<p><img src=" img/icon_ip.png" />'+ e.url+'</p>'+
						'<p class="relationIp">'+ e.ip+'<a>关联网站</a></p>'+
						'<p>更新时间：'+ e.tm +'</p>'+
						'<p class="labelings">';
			for(var j in e.tags){
				li += '<span class="label">' + e.tags[j] +'</span>';
			}
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
	});
});


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