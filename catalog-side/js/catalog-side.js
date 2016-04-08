/**
 * 右侧目录列表插件
 * @return {[type]} [description]
 */
$.fn.catalogBar = function() {
	var catalog = {},
		headlist = [];
	$(".h2-tl").each(function(index, el) {
		var self = $(this),
			sub = [];
		index++;
		catalog[self.text().replace(/\s*/g, "")] = {
			"index": index,
			"sub": sub
		}
		headlist.push(self);
		self.attr("id", index).next().children(".h3-tl").each(function(idx, el) {
			var self = $(this),
				tmp = {};
			idx++;
			self.attr("id", index + "-" + idx);
			tmp[self.text().replace(/\s*/g, "").replace(/\(\d*\)/, "")] = index + "-" + idx;
			sub.push(tmp);
			headlist.push(self);
		});
	});
	new CatalogBar(catalog, $(this), headlist);
	return this;
}
var CatalogBar = function(catalog, $tar, headlist) {
	this.data = catalog;
	this.tar = $tar;
	this.headlist = headlist;
	this.$doc = $(document);
	this.render();
	this.addScrollEvent();
	this.addClickEvent();
};
CatalogBar.prototype.render = function() {
	var data = this.data,
		domStr = '<div class="yc-side-catalog">  <i class="icon-circle-top"></i><div class="yc-catalog-show"><div class="d-catalog-content"> <dl class="dl-catalog">';
	for (var key in data) {
		domStr +=
			'<dt class="dt-catalog-root">' +
			'<i class="icon-point"></i>' +
			'<a href="#' + data[key].index + '" class="a-catalog">' +
			'<strong class="st-cat">' + data[key].index + '</strong> ' + key +
			'</a>' +
			'</dt>';

		for (var i = 0; i < data[key].sub.length; i++) {
			var obj = data[key].sub[i];
			for (var k in obj) {
				domStr +=
					'<dd class="dd-catalog-child">' +
					'<a href="#' + obj[k] + '" class="a-catalog">' +
					'<strong class="st-cat">' + obj[k] + '</strong> ' + k +
					'</a>' +
					'</dd>';
			}
		}
	}
	domStr += '</dl><div class="d-index-axis"><span class="sp-index"></span> </div></div></div><i class="icon-circle-bottom"></i><div class="yc-catalog-hide"> <i class="icon-toggle-catalog"></i> <i class="icon-scroll-top"></i> </div></div>';
	this.tar.html(domStr);
};
CatalogBar.prototype.addScrollEvent = function() {
	catlist = this.catlist = this.tar.find(".dl-catalog").children(),
		pointer = this.pointer = this.tar.find(".sp-index"),
		h = this.h = catlist.height(),
		headlist = this.headlist,
		_this = this;
	console.log(h);
	this.scrollbar = this.tar.find(".d-catalog-content");
	this.scrollH = this.scrollbar.parent().height();
	$(window).on("scroll", function(e) {
		var offsetH = $(this).scrollTop();
		if (headlist[0].offset().top > offsetH) {
			_this.scrollPointBar(0);
			_this.scrollCatalog(0);
		} else {
			for (var i = 0, len = headlist.length - 1; i < len; i++) {
				if (headlist[i].offset().top < offsetH && headlist[i + 1].offset().top > offsetH) {
					_this.scrollPointBar(i + 1);
					_this.scrollCatalog(i + 1);
					break;
				}
			}
		}
	});
	var offH = this.scrollbar.height() - this.scrollH,
		perwheel = 80,
		wheelcount = Math.ceil(offH / perwheel);
	if (offH > 0) {
		this.scrollbar.parent().on("mousewheel", function(event) {
			event.preventDefault();
			event = event ? event : window.event;
			var wheel = event.delta = (event.originalEvent.wheelDelta) ? event.originalEvent.wheelDelta / 120 : -(event.detail || 0) / 3; //上正下负
			var h = parseInt(_this.scrollbar.css("margin-top")) + wheel * perwheel;
			h = h < -offH ? -offH : h > 0 ? 0 : h;
			_this.scrollbar.css("margin-top", h + "px");
		});
	}
};
CatalogBar.prototype.addClickEvent = function() {
	var $doc = this.$doc,
		_this = this;
	this.tar.on("click", ".icon-toggle-catalog,.icon-scroll-top,.dt-catalog-root,.dd-catalog-child", function(e) {
		var tar = $(this);
		tar.hasClass("icon-toggle-catalog") && (function() {
			tar.parent().prevAll().toggleClass('hide');
		}());
		tar.hasClass("icon-scroll-top") && (function() {
			$doc.scrollTop(0);
		}());
		(tar.hasClass("dt-catalog-root") || tar.hasClass("dd-catalog-child")) && (function() {
			var idx = tar.index();
			_this.scrollPointBar(idx);

		}());
	});
};

CatalogBar.prototype.scrollPointBar = function(i) {
	this.catlist.removeClass('cat-hover').eq(i).addClass("cat-hover");
	var h = this.h * i + 6;
	this.pointer.css("top", h + "px");
};
CatalogBar.prototype.scrollCatalog = function(i) {
	var h = this.h * i + 6,
		t = (h - this.scrollH);
	if (t >= 0) {
		this.scrollbar.css("margin-top", -(t + this.h) + "px");
	} else {
		this.scrollbar.css("margin-top", "0px");
	}
};