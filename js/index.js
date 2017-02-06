var data = [{
	"uid": "components",
	"title": "常用组件",
	"sublist": [{
		"uid": "address-link",
		"title": "地址联想"
	}, {
		"uid": "carousel",
		"title": "轮播"
	}, {
		"uid": "catalog-side",
		"title": "文档目录"
	}, {
		"uid": "click-slide",
		"title": "点击轮播"
	}, {
		"uid": "collapse",
		"title": "折叠页"
	}, {
		"uid": "context-input",
		"title": "联想输入"
	}, {
		"uid": "datepicker",
		"title": "日期选择"
	}, {
		"uid": "droplist",
		"title": "下拉框"
	}, {
		"uid": "hoverdelay",
		"title": "hover延时"
	}, {
		"uid": "lazyload",
		"title": "图片懒加载"
	}, {
		"uid": "page",
		"title": "分页"
	}, {
		"uid": "popup",
		"title": "弹窗"
	}, {
		"uid": "scroll-emulate",
		"title": "模拟滚动"
	}, {
		"uid": "search",
		"title": "搜索"
	}, {
		"uid": "select-radio",
		"title": "模拟select"
	}, {
		"uid": "sitemap",
		"title": "树形"
	}, {
		"uid": "slidebar",
		"title": "滑动条"
	}, {
		"uid": "tab",
		"title": "tab切换页"
	}, {
		"uid": "table",
		"title": "表格"
	}, {
		"uid": "timeAxis",
		"title": "时间轴"
	}, {
		"uid": "tipbox",
		"title": "提示框"
	}, {
		"uid": "drag-item",
		"title": "拖拽电路"
	}]
}];

$(function() {
	var initclps = window.location.search.replace(/\?/g, "") || "components";
	$iframe = $("#iframe");
	$linkSrc = $("#link-src");
	$linkNote = $("#link-note");
	$(".aside-collapse").collapse({
		"data": data,
		"isHidePre": true,
		clickEvent: function(event, data) {
			var uid = $(this).data("uid"),
				tt = $(this).data("bind");
			$linkSrc.removeClass('hide').attr("href", "https://github.com/ynchuan/yc-components/tree/master/src/" + uid);
			$linkNote.removeClass('hide').attr("href", "https://github.com/ynchuan/yc-components#" + tt  + uid );
			$iframe.attr("src", "src/" + uid + "/" + uid + ".html?v=" + (+new Date));
			iframe.onload = function() {

			}
		}
	}).collapse(initclps);
});