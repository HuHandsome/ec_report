$(function () {
	var tags_data=[];
	var tags_data_temp=[];

	$.post("rest/asset/intface9",function(result){
		var resultData = JSON.parse(result);
		var total_ip = resultData.totalIP;
		var total_i = resultData.total;
		var total_s = resultData.totalTag;
		$("#ip_total").text(total_ip);
		$("#i_total").text(total_i);
		$("#s_total").text(total_s);
		$("#asset_areas").empty();
		$.each(resultData.areas, function(i, v){
			$("#asset_areas").append('<td>'+v.name+'</td><td>'+v.freq+'%</td>');
		});
		$("#asset_users").empty();
		$.each(resultData.users, function(i, v){
			$("#asset_users").append('<td>'+v.name+'</td><td>'+v.freq+'%</td>');
		});
		tags_data=resultData.tags;
		$("#asset_tags").empty();
		tags_data_temp=[];
		for(var i=0;i<tags_data.length;i++){
			if(tags_data_temp.length>=10){
				break;
			}
			tags_data_temp.push(tags_data[i]);
		}
		$.each(tags_data_temp, function(i, v){
			$("#asset_tags").append('<tr><td>'+v.name+'</td><td>'+v.count+'</td><td>'+v.freq+'%</td></tr>');
		});
		$("#total_count").text(tags_data.length);
	});
})
