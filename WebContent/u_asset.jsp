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
		<title>统一资产管理</title>
		<link type="text/css" rel="stylesheet" href="css/bootstrap-theme.min.css" />
		<link type="text/css" rel="stylesheet" href="css/bootstrap.min.css" />
		<link type="text/css" rel="stylesheet" href="css/base.css" />
		<link type="text/css" rel="stylesheet" href="css/list.css" />
		<script src="js/jquery.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/echarts.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/index.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/common_top.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/page1right.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/common_top.js" type="text/javascript" charset="utf-8"></script>
	</head>
	<body>
		<div class="container-fluid">
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
			<div id="index-page" class="container-fluid content">
				<div class="search-pan">
					<span>查询</span>
					<input class="sp-input" type="text">
					<button>搜索</button>
				</div>
				<div class="row">
					<div class="col-md-9 contentLeft">
						<div class="top-charts special-border">
							<span class="tl"></span>
							<span class="tr"></span>
							<span class="bl"></span>
							<span class="br"></span>
							<div class="clearfix top-charts-content">
								<div class="title">
									响应速度趋势
								</div>
								<div class="top-charts-c"></div>
							</div>
						</div>
						<div class="middle-table">
							<div class="title">
								详细数据
								<span class="up-arrow"></span>
							</div>
							<div class="toolbar">
								<div class="search-bar">
									<span>模糊查询</span>
									<input class="input" id="keyword" type="text" placeholder="在这里输入进行检索">
									<button onclick='search()'>搜索</button>
								</div>
								<div class="pagination-bar">
									<div class="pagi-sel">
										<span>显示</span>
										<select class="select" name="" id="">
											<option value="1">1</option>
											<option value="2">2</option>
											<option value="3">3</option>
											<option value="4">4</option>
											<option value="5">5</option>
											<option value="6">6</option>
											<option value="7">7</option>
										</select>
									</div>
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
									<div class="pagi-list-next  pagi-list-btn">

									</div>
								</div>
							</div>
							<div class="table-c">
								<table class="table" border=0 cellspacing=1>
									<tr>
										<th></th>
										<th></th>
										<th>探测引擎</th>
										<th>响应速度</th>
										<th>响应代码</th>
										<th>探测时间</th>
										<th>异常等级</th>
									</tr>
									<tr>
										<td>1</td>
										<td><span class="icon glyphicon glyphicon-chevron-right"></span></td>
										<td>default</td>
										<td>151.235ms</td>
										<td>200</td>
										<td>2017-1-8 18:15:04</td>
										<td>正常</td>
									</tr>
									<tr>
										<td>2</td>
										<td><span class="icon glyphicon glyphicon-chevron-right" data-target="tb2"></span></td>
										<td>default

										</td>
										<td>151.235ms</td>
										<td>200</td>
										<td>2017-1-8 18:15:04</td>
										<td>正常</td>
									</tr>
									<tr class="hide" id="tb2">
										<td colspan="7">
											<div class="more-info">
												<p>浏览器标识:Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36</p>
												<p>A记录:[128.1.1.0]</p>
												<p>NS记录:["ns8.cnmsn.net"]</p>
											</div>
										</td>
									</tr>
									<tr>
										<td>3</td>
										<td><span class="icon glyphicon glyphicon-chevron-right" data-target="#2"></span></td>
										<td>default

										</td>
										<td>151.235ms</td>
										<td>200</td>
										<td>2017-1-8 18:15:04</td>
										<td>正常</td>
									</tr>
								</table>
							</div>
						</div>
					</div>
					<div class="col-md-3 contentRight">
						<div class="sidebar special-border">
							<span class="tl"></span>
							<span class="tr"></span>
							<span class="bl"></span>
							<span class="br"></span>
							<div class="sidebar-t">
								威胁详细
							</div>
							<div class="sidebar-c">
								<ul class="item-list">
									<li class="item">
										<div class="item-text">
											网站无法正常响应
										</div>
										<div class="item-info">
											<span class="color-warning">故障威胁</span>
											<span class="color-normal">故障源:</span>
											<span class="color-warning">1.2.3.4</span>
										</div>
									</li>
									<li class="item">
										<div class="item-text">
											网站无法正常响应
										</div>
										<div class="item-info">
											<span class="color-warning">故障威胁</span>
											<span class="color-normal">故障源:</span>
											<span class="color-warning">1.2.3.4</span>
										</div>
									</li>
									<li class="item">
										<div class="item-text">
											网站无法正常响应
										</div>
										<div class="item-info">
											<span class="color-warning">故障威胁</span>
											<span class="color-normal">故障源:</span>
											<span class="color-warning">1.2.3.4</span>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</body>
</html>