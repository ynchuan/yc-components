# yc-components
整理开发中常用组件、插件

为实现页面切图和交互效果快速实现，将项目中常用组件半封装，（**主要封装事件，可根据设计定制dom和样式**），实现快速个性化定制开发页面。

跟随项目需求增多，组件会持续积累，在未来最大提升开发效率。

样式与设计存在差别，可以拷贝对应目录/less下的样式到工程less目录下进行修改；对于dom的修改，可以修改对应js文件的渲染部分或者静态html标签，进行组件定制。其中核心还是封装事件，对dom和style进行修改。

## 使用说明（API） 

### 地址联想(address-link)
##### 说明
仿照淘宝收件地址交互组件，实现省市县联动选择输入。
##### 调用方法  
1、引入address-link.js，html布局中创建盒子，存放html标签：

	<div class="address-link">
		<div class="adr-input-area">
			<div class="adr-text-area">
			</div>
			<i class="icon-dw"></i>
			<i class="icon-mask"></i>
		</div>
		<div class="adr-select-area hide">
			<ul class="ul-tabs-tt">
				<li class="li-tab-tt active adr-tt-pro">省份</li>
				<li class="li-tab-tt adr-tt-city">城市</li>
				<li class="li-tab-tt adr-tt-area">县区</li>
				<li class="li-tab-tt adr-tt-street hide">街道</li>
			</ul>
			<ul class="ul-tabs-bd">
				<li class="li-tab-bd active">
					<dl class="dl-adr dl-province">
					</dl>
				</li>
				<li class="li-tab-bd">
					<div class="adr-itms adr-itms-city">
					</div>
				</li>
				<li class="li-tab-bd">
					<div class="adr-itms adr-itms-area">
					</div>
				</li>
				<li class="li-tab-bd">
					<div class="adr-itms adr-itms-street hide">
					</div>
				</li>
			</ul>
		</div>
	</div>

2、将页面less代码拷贝到工程less中，配置addressConfig参数，然后根据设计稿修改细节

	var addressConfig={
		street:true,//是否有街道
		getTargetAddress:function(code){//获取最后点中的区县的code
			alert(code);
		}
	}

### 轮播(carousel)

### 文档目录(catalog-side)
### 点击轮播(click-slide)
### 折叠页(collapse)
### 联想输入(context-input)
### 日期选择(datepicker)
### 下拉框(droplist)
### hover延时(hoverdelay) 
### 图片懒加载(lazyload)
### 分页(page)
### 弹窗(popup)
### 模拟滚动(scroll-emulate)
### 搜索(search)
### 模拟select(select-radio)
### 树形(sitemap)
### 滑动条(slidebar)
### tab切换页(tab)
### 表格(table)
### 时间轴(timeAxis)
### 提示框(tipbox)