function JS() { // js web 脚本语言上下文环境 context，所有 js 代码都被包含在这个环境里面

	// js native class
	function Object(){}
	function Function(){}
	function Array(){}
	function String(){}
	function Boolean(){}
	function Number(){}
	function Date(){}
	function RegExp(){}
	function Error(){}
	function SyntaxError(){}
	
	// js buildin class
	function Global(){}
	function Math(){}
	function Arguments(){} 
	
	
	// js parasitifer object
	var window = {};
	var navigator = {};
	var screen = {};
	var history = {};
	var location = {};
	var event = {};
	var document = {};
	
	//################################################ Dependence ####################################################################
	document.write('<script type="text/javascript" src="../jquery-3.2.1.js"></script>');  // 引入该文件所依赖的 js 文件
	
	//################################################ Global Variable ###############################################################
	var globalVar;

	//################################################ Global Function ###############################################################
	function globalFunc(){
		alert("当前 js 全局函数");
	}

	//################################################ Automatic Execution Code ######################################################
	//############## During Loading ########################
	globalFunc();
	window.alert("如果想要已进入页面就执行该代码，那么就把该代码放在 <head></head> 中的 script 中");

	//############## After Loading #########################
	window.onload = function(){
		alert("JS Execute");
	};
	 
	function jQuery(document){	} // jquery 原码开头，所以 jquery 只是 js 中的一个函数，或者说类
	$(document).ready(function(){
		alert("JQuery Execute");
	});

	//################################################ Event Code ####################################################################
	var demo = document.getElementById("demo");
	demo.onclick = function(){
		
	}

	// jQuery 事件代码... 
	$(function(){	
		$("#demo").click(function(){
			
		});
	});	
}
