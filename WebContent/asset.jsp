<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% 
	String path = request.getContextPath(); 
	String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>  
<base href="<%=basePath %>" />  
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>资产管理</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link type="text/css" rel="stylesheet" href="css/bootstrap-theme.min.css" />
		<link type="text/css" rel="stylesheet" href="css/bootstrap.min.css" />
		<link type="text/css" rel="stylesheet" href="css/base.css" />
		<link type="text/css" rel="stylesheet" href="css/list.css" />
		<script src="js/jquery-1.11.1.min.js"></script>
		<script type="text/javascript" src="js/bootstrap.js"></script>
		<script src="js/echarts.min.js" type="text/javascript" charset="utf-8"></script>
		<script type="text/javascript" src="js/index.js"></script>
		<script type="text/javascript" src="js/common_top.js"></script>
	</head>
	<body>
		<div class="container-fluid">
			<!--header start-->
			<div class="header-bk"></div>
			<div id="header" class="header">
				<div class="row">
					<div class="first-part header-part">
						<div class="nav-icon"></div>
						<div class="logo">
							<div class="pic"></div>
							<a href="javascript:void(0)">天衍</a>
						</div>
					</div>
					<div class="second-part header-part">
						<div class="pie1"></div>
						<div class="pie1-label" id="count_asset">
							<ul>
								<li><span class="color-normal">资产总数</span>…………12359</li>
								<li><span class="color-success">正常资产</span>…………12000</li>
								<li><span class="color-warning">问题资产</span>…………359</li>
								<li><span class="color-danger">问题单位</span>…………59</li>
							</ul>
						</div>
					</div>
					<div class="third-part header-part">
						<div id="asset0" class="c1 mc-item" data-name="所有资产" data-num="80">

						</div>
						<div id="asset1" class="c2 mc-item" data-name="所有资产" data-num="70">

						</div>
						<div id="asset2" class="c3 mc-item" data-name="所有资产" data-num="60">

						</div>
						<div id="asset3" class="c4 mc-item" data-name="所有资产" data-num="50">

						</div>
						<div id="asset4" class="c5 mc-item" data-name="所有资产" data-num="44">

						</div>
						<div id="asset5" class="c6 mc-item" data-name="所有资产" data-num="11">

						</div>
					</div>
					<div class="last-part header-part">
						<div class="item">
							<div id="half0" class="half-c" data-name="所有资产" data-num="80" >

							</div>
						</div>
						<div class="item">
							<div id="half1" class="half-c" data-name="所有资产" data-num="50" >

							</div>
						</div>
						<div class="item">
							<div id="half2" class="half-c" data-name="所有资产" data-num="20" >

							</div>
						</div>
					</div>
				</div>
			</div>
			<!--header end-->
			<!--middle start-->
			<div class="container-fluid content">
				<div class="search-pan">
					<span class="glyphicon glyphicon-search"></span>
					<input class="sp-input" type="text" placeholder="搜索内容...">
					<button onclick='search()'>搜索</button>
				</div>
				<div class="row">
					<h6>搜索结果：找到<span id="totalSize">910</span>条  耗时:<span>40</span>毫秒</h6>
					<!--left start-->
					<div class="col-md-9 contentLeft">
						<ul id="list">
							<!--li start-->
							<li class="col-md-12">
								<div class="col-md-6">
									<p><img src=" img/icon_ip.png" />218.57.139.18</p>
									<p class="relationIp">218.57.139.18<a>关联网站</a></p>
									<p>更新时间：2016/01/05 12:29</p>
									<p class="labelings">
										<span class="label">Microsoft HTTPAPI 2.0</span>
									</p>
								</div>
								<div class="col-md-6 ">
									<p>218.57.139.18218.57.139.18</p>
									<p>218.57.139.18218.57.139.18</p>
									<p>218.57.139.18218.57.139.18</p>
									<p>218.57.139.18218.57.139.18</p>
									<p>218.57.139.18218.57.139.18</p>
									<p>218.57.139.18218.57.139.18</p>
								</div>											
							</li>
							<!--li end-->
							<!--li start-->
							<li class="col-md-12">
								<div class="col-md-6">
									<p><img src=" img/icon_ip.png" />218.57.139.18</p>
									<p class="relationIp">218.57.139.18<a>关联网站</a></p>
									<p>更新时间：2016/01/05 12:29</p>
									<p class="labelings">
										<span class="label">Microsoft HTTPAPI 2.0</span>
										<span class="label">Mi2.0</span>
									</p>
								</div>
								<div class="col-md-6 ">
									<p>218.57.139.18218.57.139.18</p>
									<p>218.57.139.18218.57.139.18</p>
									<p>218.57.139.18218.57.139.18</p>
									<p>218.57.139.18218.57.139.18</p>
									<p>218.57.139.18218.57.139.18</p>
									<p>218.57.139.18218.57.139.18</p>
								</div>											
							</li>
							<!--li end-->
							<!--li start-->
							<li class="col-md-12">
								<div class="col-md-6">
									<p><img src=" img/icon_ip.png" />218.57.139.18</p>
									<p class="relationIp">218.57.139.18<a>关联网站</a></p>
									<p>更新时间：2016/01/05 12:29</p>
									<p class="labelings">
										<span class="label">Microsoft HTTPAPI 2.0</span>
										<span class="label">Mi2.0</span>
									</p>
								</div>
								<div class="col-md-6 ">
									<p>218.57.139.18218.57.139.18</p>
									<p>218.57.139.18218.57.139.18</p>
									<p>218.57.139.18218.57.139.18</p>
									<p>218.57.139.18218.57.139.18</p>
									<p>218.57.139.18218.57.139.18</p>
									<p>218.57.139.18218.57.139.18</p>
								</div>											
							</li>
							<!--li end-->
							<!--li start-->
							<li class="col-md-12">
								<div class="col-md-6">
									<p><img src=" img/icon_ip.png" />218.57.139.18</p>
									<p class="relationIp">218.57.139.18<a>关联网站</a></p>
									<p>更新时间：2016/01/05 12:29</p>
									<p class="labelings">
										<span class="label">Microsoft HTTPAPI 2.0</span>
										<span class="label">Mi2.0</span>
									</p>
								</div>
								<div class="col-md-6 ">
									<p>218.57.139.18218.57.139.18</p>
									<p>218.57.139.18218.57.139.18</p>
									<p>218.57.139.18218.57.139.18</p>
									<p>218.57.139.18218.57.139.18</p>
									<p>218.57.139.18218.57.139.18</p>
									<p>218.57.139.18218.57.139.18</p>
								</div>											
							</li>
							<!--li end-->
							<!--li start-->
							<li class="col-md-12">
								<div class="col-md-6">
									<p><img src=" img/icon_ip.png" />218.57.139.18</p>
									<p class="relationIp">218.57.139.18<a>关联网站</a></p>
									<p>218.57.139.18218.57.139.18</p>
									<p class="labelings">
										<span class="label">Microsoft HTTPAPI 2.0</span>
										<span class="label">Mi2.0</span>
									</p>
								</div>
								<div class="col-md-6 ">
									<p>218.57.139.18218.57.139.18</p>
									<p>218.57.139.18218.57.139.18</p>
									<p>218.57.139.18218.57.139.18</p>
									<p>218.57.139.18218.57.139.18</p>
									<p>218.57.139.18218.57.139.18</p>
									<p>218.57.139.18218.57.139.18</p>
								</div>											
							</li>
							<!--li end-->							
						</ul>
					</div>
					<!--left end-->
					<!--right start-->
					<div class="col-md-3 contentRight">
						<!--pbox start-->
						<div class="p-box special-border">
							<span class="tl"></span>
							<span class="tr"></span>
							<span class="bl"></span>
							<span class="br"></span>
							<div class="styleLandR clearfix">
								<h5>
									<p class="yello">探测总数</p>
								</h5>
								<div class="styleLandR_right">
									<ul class="">
										<li class="clearfix">
											<p class="fl">ip总数</p>
											<em class="fr yello" id="ip_total">674</em>
										</li>
										<li class="clearfix">
											<p class="fl">网站总数</p>
											<em class="fr yello" id="i_total">674</em>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<!--pbox end-->
						<!--pbox start-->
						<div class="p-box special-border" style="height: 180px;">
							<span class="tl"></span>
							<span class="tr"></span>
							<span class="bl"></span>
							<span class="br"></span>
							<div class="styleLandR clearfix">
								<h5>
									<p class="orange">探测总数</p>
								</h5>
								<div class="styleLandR_right">
								<ul class="">
									<li class="clearfix">
										<p >操作系统、中间</p>
										<em class="fr orange" id="s_total">674</em>
										<p >件、建站组件等</p>
									</li>
								</ul>
								</div>
							</div>
						</div>
						<!--pbox end-->
						<!--styleTandB start-->
						<div class="p-box special-border" style="height:100px;">
							<span class="tl"></span>
							<span class="tr"></span>
							<span class="bl"></span>
							<span class="br"></span>
							<div class="styleTandB">
								<table border="" cellspacing="" cellpadding="">
									<thead>
										<tr>
											<td>区域</td>
											<td>主机</td>
											<td>频率</td>
										</tr>
									</thead>
									<tbody id="asset_areas">
										<tr class="nodata">
											<td colspan="100">没有发现资产</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<!--styleTandB end-->
						<!--styleTandB start-->
						<div class="p-box special-border" style="height:100px;">
							<span class="tl"></span>
							<span class="tr"></span>
							<span class="bl"></span>
							<span class="br"></span>
							<div class="styleTandB">
								<table border="" cellspacing="" cellpadding="">
									<thead>
										<tr>
											<td>人员</td>
											<td>主机</td>
											<td>频率</td>
										</tr>
									</thead>
									<tbody id="asset_users">
										<tr class="nodata">
											<td colspan="100">没有发现资产</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<!--styleTandB end-->
						<!--styleTandB start-->
						<div class="p-box special-border" style="height:300px;">
							<span class="tl"></span>
							<span class="tr"></span>
							<span class="bl"></span>
							<span class="br"></span>
							<div class="styleTandB">
								<table border="" cellspacing="" cellpadding="">
									<thead>
										<tr>
											<td>标签</td>
											<td>主机</td>
											<td>频率</td>
										</tr>
									</thead>
									<tbody id="asset_tags">
										<tr>
											<td>jQuery</td>
											<td>277</td>
											<td>100%</td>
										</tr>	
										<tr>
											<td>jQuery</td>
											<td>277</td>
											<td>100%</td>
										</tr>	
										<tr>
											<td>jQuery</td>
											<td>277</td>
											<td>100%</td>
										</tr>	
										<tr>
											<td>jQuery</td>
											<td>277</td>
											<td>100%</td>
										</tr>	
										<tr>
											<td>jQuery</td>
											<td>277</td>
											<td>100%</td>
										</tr>	
										<tr>
											<td>jQuery</td>
											<td>277</td>
											<td>100%</td>
										</tr>
									</tbody>
								</table>
								<div class="table-footer">
									<h6>从<span id="page_duan">1条到10</span>条的记录 总显示记录数为<span id="total_count">72</span>条</h6>
									<div class="pageWrap clearfix">
										<ul class="fr" id="page1">
											<li class="page prev"><</li>
											<li class="active">1</li>
											<li>2</li>
											<li>3</li>
											<li>4</li>
											<li>5</li>
											<li>...</li>
											<li class="page next">></li>
										</ul>										
									</div>
									
								</div>
							</div>
						</div>
						<!--styleTandB end-->
					</div>
					<!--right end-->
				</div>
			</div>
			<!--middle end-->
		</div>
	</body>
	<script type="text/javascript">

	var tags_data=[];
	var tags_data_temp=[];
	var rowStart = 0;
	var pageNum = 1;

	function showIntface(li){
		if(li != undefined){
			rowStart = $(li).attr("start");
			pageNum = parseInt($(li).text());
		}
		tags_data_temp=[];
		for(var i=rowStart;i<tags_data.length;i++){
			if(tags_data_temp.length>=10){
				break;
			}
			tags_data_temp.push(tags_data[i]);
		}
		$("#asset_tags").empty();
		$.each(tags_data_temp, function(i, v){
			$("#asset_tags").append('<tr><td>'+v.name+'</td><td>'+v.count+'</td><td>'+v.freq+'%</td></tr>');
		});
		$("#page_duan").text(rowStart+"条到"+rowStart+10);
		initPage($("#page1"), tags_data.length, 10, pageNum, "showIntface(this)");
	}
	
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
			$("#asset_areas").append('<tr><td>区域</td><td>'+v.name+'</td><td>'+v.freq+'%</td></tr>');
		});
		$("#asset_users").empty();
		$.each(resultData.users, function(i, v){
			$("#asset_users").append('<tr><td>区域</td><td>'+v.name+'</td><td>'+v.freq+'%</td></tr>');
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
		initPage($("#page1"), tags_data.length, 10, 1, "showIntface(this)");
	});
	
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
		var lis = "<li class='page prev' start='0' onclick='"+clickName+"'><</li>";
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
	
</script>
</html>
