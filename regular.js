$(function() {
	$(window).scroll(function() {//为页面添加页面滚动监听事件
		var wst = $(window).scrollTop() //滚动条距离顶端值
		console.log("滚动条距离顶端值:" + wst)
		console.log("section0距离顶端值:" + $("#section0").offset().top);
		var HeaderShowOffsetTop = $("#section0").offset().top;
		var condition = HeaderShowOffsetTop <= wst;
		if (condition) { //判断滚动条位置
			$('#FlexHeader').removeClass("flex-header-hide");//清除c类
		}else{
			$("#FlexHeader").addClass("flex-header-hide"); //给header加c类
		}
	})
});
var darkmode = 0;
var greenmode = 0;
$(function() {
	$("#darkmode-chb").click(function() {
		if (this.checked) {
			$("#greenmode-chb").attr("checked",false);greenmode=0;
			$("#darkmode-chb").attr("checked",true);darkmode=1;
		} else {
			$("#darkmode-chb").attr("checked",false);darkmode=0;
		}
		theme_select();
	})
	$("#greenmode-chb").click(function() {
		alert("The theme \"Greenmode\" is unfinished!")
		/*if (this.checked) {
			$("#darkmode-chb").attr("checked",false);darkmode=0;
			$("#greenmode-chb").attr("checked",true);greenmode=1;
		} else {
			$("#greenmode-chb").attr("checked",false);greenmode=0;
		}
		theme_select();*/
	})
})
function theme_select() {
	console.log("select theme");console.log("darkmode" + darkmode);console.log("greenmode" + greenmode);
	if (darkmode==0 & greenmode==0) {$("body").addClass("colorfulmode");} else {$("body").removeClass("colorfulmode");}
	if (darkmode==1) {//darkmode
		$("body").addClass("darkmode");
	} else {
		$("body").removeClass("darkmode");
	}
	if (greenmode==1) {//greenmode
		$("body").addClass("greenmode");
	} else {
		$("body").removeClass("greenmode");
	}
}
function text_print (str){
	document.write (str);
}
function connect_way (str){
	switch (str){
	case "问题反馈":
		text_print("<font color=#ff0000;>error: no data<br></font>");
		break;
	case "":
		text_print("<font color=#3264ff;>GitHub提交pr<br>E-mail:（不推荐）<br></font>");
		break;
	default:
		text_print("<font color=#ff0000;>error: unknown str input<br></font>");
	}
}
function footer_notice() {
	text_print("人人都可开始的Web页面");
}
function sidebox_notice() {
	text_print("人人都可开始的Web页面");
}
function footer_links() {
	text_print("<a href='https://www.github.com'>GitHub</a><br>");
}
function sidebox_links() {
	text_print("<p class='main-sidebox-section-text'><a href='https://www.github.com'>GitHub</a></p>");
}
function copyright() {
	text_print("Copyright © 2020-2024 域空Hollow.All Rights Reserved.<br>域空Hollow 2020-2024 版权所有。保留所有权利。")
}