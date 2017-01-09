$(function(){
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
});

function initStr(str){
	if(typeof(str) != 'string'){
		return "";
	}else{
		return str;
	}
}