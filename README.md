# yc-components
整理开发中常用组件、插件

为实现页面切图和交互效果快速实现，将项目中常用组件半封装，（**主要封装事件，可根据设计定制dom和样式**），实现快速个性化定制开发页面。

跟随项目需求增多，组件会持续积累，在未来最大提升开发效率。

样式与设计存在差别，可以拷贝对应目录/less下的样式到工程less目录下进行修改；对于dom的修改，可以修改对应js文件的渲染部分或者静态html标签，进行组件定制。其中核心还是封装事件，对dom和style进行修改，实现冗余代码最小化，简化整洁代码。

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
##### 代码
[查看演示](http://ynchuan.github.io/yc-components/?address-link) 
[查看源码](https://github.com/ynchuan/yc-components/tree/master/src/address-link)

----------
### 轮播(carousel) 
##### 说明 
页面banner轮播
##### 调用方法  
1、引入jquery.carousel.js，html布局中创建盒子，存放html标签：

	<div class="grp_section_carousel">
		<div class="grp_carousel_box">
			<span class="grp_carousel_page grp_carousel_prev">上一张</span>
			<dl class="grp_carousel_imgcoll">
				<dd class="grp_carousel_img" id="g1">
				<img src="images/a.jpg" alt=""></dd>
				<dd class="grp_carousel_img" id="g2">
				<img src="images/b.jpg" alt=""></dd>
				<dd class="grp_carousel_img"  id="g3">
				<img src="images/c.jpg" alt=""></dd>
				<dd class="grp_carousel_img"  id="g4">
				<img src="images/d.jpg" alt=""></dd>
				<dd class="clear"></dd>
			</dl>
			<span class="grp_carousel_page grp_carousel_next">下一张</span>
			<div class="grp_carousel_index">
				<div>
					<a href="#" class="grp_carousel_link active"></a>
					<a href="#" class="grp_carousel_link"></a>
					<a href="#" class="grp_carousel_link"></a>
					<a href="#" class="grp_carousel_link"></a>
				</div>
			</div>
		</div>
	</div>

2、将页面less代码拷贝到工程less中，配置addressConfig参数，然后根据设计稿修改细节 

	$(".grp_section_carousel").carousel({
		interval:3000
	});

##### 代码
[查看演示](http://ynchuan.github.io/yc-components/?address-link) 
[查看源码](https://github.com/ynchuan/yc-components/tree/master/src/address-link)

----------
###  文档目录(catalog-side)
##### 说明
仿照百度文库浏览位置目录 
##### 调用方法
1、引入jquery.carousel.js，html布局中创建盒子，存放html标签：

	<div class="container"> 
        <article class="article" >
            <h2 class="h2-tl">
            详细1
            </h2>
            <div class="div-content">
                
            </div>
        </article> 
        <article class="article" >
            <h2 class="h2-tl">
            详细5
            </h2>
            <div class="div-content">
                <h3 class="h3-tl">
                子详细1
                </h3>
                <div class="div-h3-detail">
                    
                </div>
                <h3 class="h3-tl">
                子详细2
                </h3>
                <div class="div-h3-detail"></div> 
            </div>
        </article> 
    </div>
    <div class="d-catalog"></div>
2、将页面less代码拷贝到工程less中，配置addressConfig参数，然后根据设计稿修改细节

	$(".d-catalog").catalogBar()
##### 代码
[查看演示](http://ynchuan.github.io/yc-components/?catalog-side) 
[查看源码](https://github.com/ynchuan/yc-components/tree/master/src/catalog-side)

----------
###  点击轮播(click-slide)

##### 说明 
点击切换式轮播
##### 调用方法 
1、引入jquery.carousel.js，html布局中创建盒子，存放html标签：

2、将页面less代码拷贝到工程less中，配置addressConfig参数，然后根据设计稿修改细节
##### 代码
[查看演示](http://ynchuan.github.io/yc-components/?click-slide) 
[查看源码](https://github.com/ynchuan/yc-components/tree/master/src/click-slide)

---------- 
###  折叠页(collapse)
##### 说明 
折叠目录，点击折叠条进行对应折叠和对应操作
##### 调用方法  
1、引入jquery.carousel.js，html布局中创建盒子，存放html标签：

2、将页面less代码拷贝到工程less中，配置addressConfig参数，然后根据设计稿修改细节
##### 代码
[查看演示](http://ynchuan.github.io/yc-components/?collapse) 
[查看源码](https://github.com/ynchuan/yc-components/tree/master/src/collapse)

----------
###  联想输入(context-input)
##### 说明 
根据输入关键字关联用户想要输入的文本
##### 调用方法  
1、引入jquery.carousel.js，html布局中创建盒子，存放html标签：

2、将页面less代码拷贝到工程less中，配置addressConfig参数，然后根据设计稿修改细节
##### 代码
[查看演示](http://ynchuan.github.io/yc-components/?context-input) 
[查看源码](https://github.com/ynchuan/yc-components/tree/master/src/context-input)

----------
###  日期选择(datepicker)
##### 说明 
日期选择器
##### 调用方法  
1、引入jquery.carousel.js，html布局中创建盒子，存放html标签：

2、将页面less代码拷贝到工程less中，配置addressConfig参数，然后根据设计稿修改细节
##### 代码
[查看演示](http://ynchuan.github.io/yc-components/?datepicker) 
[查看源码](https://github.com/ynchuan/yc-components/tree/master/src/datepicker)

----------
###  下拉框(droplist)
##### 说明 
点击展示下拉条
##### 调用方法  
1、引入jquery.carousel.js，html布局中创建盒子，存放html标签：

2、将页面less代码拷贝到工程less中，配置addressConfig参数，然后根据设计稿修改细节
##### 代码
[查看演示](http://ynchuan.github.io/yc-components/?droplist) 
[查看源码](https://github.com/ynchuan/yc-components/tree/master/src/droplist)

----------
###  hover延时(hoverdelay) 
##### 说明 
hover事件的函数节流
##### 调用方法  
1、引入jquery.carousel.js，html布局中创建盒子，存放html标签：

2、将页面less代码拷贝到工程less中，配置addressConfig参数，然后根据设计稿修改细节
##### 代码
[查看演示](http://ynchuan.github.io/yc-components/?hoverdelay) 
[查看源码](https://github.com/ynchuan/yc-components/tree/master/src/hoverdelay)

----------
###  图片懒加载(lazyload)
##### 说明 
判断图片当前是否展示在窗口进行加载，节省带宽提高体验
##### 调用方法  
1、引入jquery.carousel.js，html布局中创建盒子，存放html标签：

2、将页面less代码拷贝到工程less中，配置addressConfig参数，然后根据设计稿修改细节
##### 代码
[查看演示](http://ynchuan.github.io/yc-components/?lazyload) 
[查看源码](https://github.com/ynchuan/yc-components/tree/master/src/lazyload)

----------
###  分页(page)
##### 说明 
仿照百度搜索结果的分页组件
##### 调用方法  
1、引入jquery.carousel.js，html布局中创建盒子，存放html标签：

2、将页面less代码拷贝到工程less中，配置addressConfig参数，然后根据设计稿修改细节
##### 代码
[查看演示](http://ynchuan.github.io/yc-components/?page) 
[查看源码](https://github.com/ynchuan/yc-components/tree/master/src/page)

----------
###  弹窗(popup)
##### 说明 
简单弹窗，主要封装事件。
##### 调用方法  
1、引入jquery.carousel.js，html布局中创建盒子，存放html标签：

2、将页面less代码拷贝到工程less中，配置addressConfig参数，然后根据设计稿修改细节
##### 代码
[查看演示](http://ynchuan.github.io/yc-components/?popup) 
[查看源码](https://github.com/ynchuan/yc-components/tree/master/src/popup)

----------
###  模拟滚动(scroll-emulate)
##### 说明 
仿百度地图搜索后结果展示的滚动条。即重写滚动条
##### 调用方法  
1、引入jquery.carousel.js，html布局中创建盒子，存放html标签：

2、将页面less代码拷贝到工程less中，配置addressConfig参数，然后根据设计稿修改细节
##### 代码
[查看演示](http://ynchuan.github.io/yc-components/?scroll-emulate) 
[查看源码](https://github.com/ynchuan/yc-components/tree/master/src/scroll-emulate)

----------
###  搜索(search)
##### 说明 
仿百度的搜索框模式
##### 调用方法  
1、引入jquery.carousel.js，html布局中创建盒子，存放html标签：

2、将页面less代码拷贝到工程less中，配置addressConfig参数，然后根据设计稿修改细节
##### 代码
[查看演示](http://ynchuan.github.io/yc-components/?search) 
[查看源码](https://github.com/ynchuan/yc-components/tree/master/src/search)

----------
###  模拟select(select-radio)
##### 说明
重谢浏览器的select组件 
##### 调用方法  
1、引入jquery.carousel.js，html布局中创建盒子，存放html标签：

2、将页面less代码拷贝到工程less中，配置addressConfig参数，然后根据设计稿修改细节
##### 代码
[查看演示](http://ynchuan.github.io/yc-components/?select-radio) 
[查看源码](https://github.com/ynchuan/yc-components/tree/master/src/select-radio)

----------
###  树形(sitemap)
##### 说明 
一个展示层级结构的树形组件
##### 调用方法  
1、引入jquery.carousel.js，html布局中创建盒子，存放html标签：

2、将页面less代码拷贝到工程less中，配置addressConfig参数，然后根据设计稿修改细节
##### 代码
[查看演示](http://ynchuan.github.io/yc-components/?sitemap) 
[查看源码](https://github.com/ynchuan/yc-components/tree/master/src/sitemap)

----------
###  滑动条(slidebar)
##### 说明
仿照html5中input[type=range]范围选择器的组件，但是可以实现双向范围选择
##### 调用方法  
1、引入jquery.carousel.js，html布局中创建盒子，存放html标签：

2、将页面less代码拷贝到工程less中，配置addressConfig参数，然后根据设计稿修改细节
##### 代码
[查看演示](http://ynchuan.github.io/yc-components/?slidebar) 
[查看源码](https://github.com/ynchuan/yc-components/tree/master/src/slidebar)

----------
###  tab切换页(tab)
##### 说明 
简单tab切换，封装动作，dom和样式可以定制
##### 调用方法  
1、引入jquery.carousel.js，html布局中创建盒子，存放html标签：

2、将页面less代码拷贝到工程less中，配置addressConfig参数，然后根据设计稿修改细节
##### 代码
[查看演示](http://ynchuan.github.io/yc-components/?tab) 
[查看源码](https://github.com/ynchuan/yc-components/tree/master/src/tab)

----------
###  表格(table)
##### 说明
通用表格，主要为实现快速切图提供修改模板。 
##### 调用方法  
1、引入jquery.carousel.js，html布局中创建盒子，存放html标签：

2、将页面less代码拷贝到工程less中，配置addressConfig参数，然后根据设计稿修改细节
##### 代码
[查看演示](http://ynchuan.github.io/yc-components/?table) 
[查看源码](https://github.com/ynchuan/yc-components/tree/master/src/table)

----------
###  时间轴(timeAxis)
##### 说明 
时间轴组件
##### 调用方法  
1、引入jquery.carousel.js，html布局中创建盒子，存放html标签：

2、将页面less代码拷贝到工程less中，配置addressConfig参数，然后根据设计稿修改细节
##### 代码
[查看演示](http://ynchuan.github.io/yc-components/?timeAxis) 
[查看源码](https://github.com/ynchuan/yc-components/tree/master/src/timeAxis)

----------
###  提示框(tipbox)
##### 说明 
仿照标签的title属性重写该组件。
##### 调用方法  
1、引入jquery.carousel.js，html布局中创建盒子，存放html标签：

2、将页面less代码拷贝到工程less中，配置addressConfig参数，然后根据设计稿修改细节
##### 代码
[查看演示](http://ynchuan.github.io/yc-components/?tipbox) 
[查看源码](https://github.com/ynchuan/yc-components/tree/master/src/tipbox)

----------

## 结尾
以上组件主要实现半封装目的，为了实现业务代码冗余最小和快速切图，总结了以上代码块、js插件以及轻量级可修改less样式表。