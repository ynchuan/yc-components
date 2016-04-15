$(function() {
	//菜单导航数据--uid 必须唯一
	var data = [{
		title: "案例页面1",
		uid: "demos1",
		sublist: [{
			title: "大表单",
			uid: "form",
			sublist: []
		}, {
			title: "查询列表",
			uid: "querylist",
			sublist: []
		}]
	}, {
		title: "案例页面2",
		uid: "demos2",
		sublist: [{
			title: "表单详情",
			uid: "detail",
			sublist: []
		}]
	}];
	//使用菜单导航数据初始化右侧菜单
	var $iframe = $("#iframe"),
		iframe = $iframe.get(0);
	window.ifm = iframe;
	$(".aside-collapse").grpcollapse({
		"data": data,
		"isHidePre": true,
		clickEvent: function(event, data) {
			$(this).data("bind").title;
			$(".div-bread").removeClass('vh');
			$iframe.attr("src", data + ".html");
			iframe.onload = function() {

			}
		}
	});
});