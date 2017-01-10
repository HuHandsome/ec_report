$(function() {
	$.post("http://127.0.0.1:8080/ec_report/rest/asset/intface1",function(result){
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
	
	$.post("http://127.0.0.1:8080/ec_report/rest/asset/intface2",function(result){
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
});