//ajax请求的方式 json 或 jsonp
var jsonTypy = 'json';
//根域名
var baseUrl = "http://localhost:8888/kuangjia/order/query";
//var baseUrl = "http://114.215.19.227:8803/query";

function ajaxGet(uri, qdata, callback, timeout) {
    $.ajax({
        async : true,
        url : uri,
        type : "GET",
        dataType : jsonTypy,
        jsonp : 'callback',
        data : qdata,
        timeout : timeout || 20000,
        beforeSend : function() {//ajax 请求之前
        },
        success : function(data) {//ajax 请求成功
            if (callback) {
                callback(data);
            }
        },
        complete : function(xhr) {//ajax 请求完成

        },
        error : function(xhr) {//ajax 请求失败

        }
    });
}

function ajaxPost(uri, qdata, callback, timeout) {
    $.ajax({
        async : true,
        url : uri,
        type : "POST",
        dataType : jsonTypy,
        jsonp : 'callback',
        data : qdata,
        timeout : timeout || 20000,
        beforeSend : function() {//ajax 请求之前
        },
        success : function(data) {
            if (callback) {
                callback(data);
            }
        },
        complete : function(xhr) {

        },
        error : function(xhr) {

        }
    });
}

function setCookie(info,day){
    day = day || 7;
    if(info.username){
        $.Cookie('username',info.username, { expires: day});
    }
    if(info.userpwd){
        $.Cookie('userpwd',info.userpwd, { expires: day});
    }
}

function getCookie(name) {
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}

//截取地址栏中的数据
function GetQueryString(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return unescape(r[2]); return null;
}

$(window).resize(function(){
    styleInit();
});
styleInit();
function styleInit(){
    var winW = $(window).width();
    var headerH = winW/7.63;
    $(".header").css("height",headerH);
    var chaH = 100;
    if(winW<1300){
        chaH = 60;
    }
    $(".header1").css("height",headerH-20-chaH);
    $(".header2").css("height",headerH-20-chaH);
    $(".header3").css("height",headerH-25-chaH);
    $(".header4").css("height",headerH-chaH);
    $(".h_search").css("top",headerH-chaH).show();
}


























