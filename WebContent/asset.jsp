<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% 
	String path = request.getContextPath(); 
	String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
	<base href="<%=basePath %>" />  
%>  
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
											<em class="fr yello">674</em>
										</li>
										<li class="clearfix">
											<p class="fl">ip总数</p>
											<em class="fr yello">674</em>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<!--pbox end-->
						<!--pbox start-->
						<div class="p-box" style="height: 180px;">
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
										<p class="fl">ip总数</p>
										<em class="fr orange">674</em>
									</li>
									<li class="clearfix">
										<p class="fl">ip总数</p>
										<em class="fr orange">674</em>
									</li>
								</ul>
								</div>
							</div>
						</div>
						<!--pbox end-->
						<!--styleTandB start-->
						<div class="p-box" style="height:100px;">
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
									<tbody>
										<tr class="nodata">
											<td colspan="100">没有发现资产</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<!--styleTandB end-->
						<!--styleTandB start-->
						<div class="p-box" style="height:100px;">
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
									<tbody>
										<tr class="nodata">
											<td colspan="100">没有发现资产</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<!--styleTandB end-->
						<!--styleTandB start-->
						<div class="p-box" style="height:300px;">
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
									<tbody>
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
									<h6>从1条到10条的记录 总显示记录数为72条</h6>
									<div class="pageWrap clearfix">
										<ul class="fr">
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
</html>