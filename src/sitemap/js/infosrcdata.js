var src = {
	"title": "首页",
	"url": "home.htm",
	"isChildUrl": false,
	"class": "r1",
	"childList": [{
		"title": "平台管理",
		"url": "od/admin/adminIndex.htm",
		"isChildUrl": false,
		"class": "r2",
		"childList": [{
			"title": "数据资源管理",
			"url": "od/index.htm",
			"isChildUrl": false,
			"class": "r3",
			"childList": []
		}, {
			"title": "应用资源管理",
			"url": "acweb/index.htm",
			"isChildUrl": true,
			"class": "r3",
			"childList": [{
				"title": "首页",
				"url": "acweb/index.htm",
				"isChildUrl": false,
				"class": "r4",
				"childList": [{
					"title": "详细",
					"url": "acweb/store/detail.htm",
					"isChildUrl": false,
					"class": "r5",
					"childList": []
				}]
			}]
		}, {
			"title": "应用管理",
			"url": "acweb/manager/unAuditedApps.htm",
			"isChildUrl": true,
			"class": "r4",
			"childList": [{
				"title": "应用管理",
				"url": "acweb/manager/unAuditedApps.htm",
				"isChildUrl": true,
				"class": "r5",
				"childList": []
			}, {
				"title": "已下线列表",
				"url": "acweb/manager/offlineApps.htm",
				"isChildUrl": false,
				"class": "r6",
				"childList": []
			}, {
				"title": "应用推荐",
				"url": "acweb/manager/recommendApps.htm",
				"isChildUrl": false,
				"class": "r6",
				"childList": [{
					"title": "查看详情",
					"url": "acweb/manager/approveAppView.htm",
					"isChildUrl": false,
					"class": "r7",
					"childList": []
				}]
			}]
		}]
	}]
}