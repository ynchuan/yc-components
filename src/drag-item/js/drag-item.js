;
$(function() {
	var $offers = $(".li-offer").find(".d-line"),
		$roads = $(".div-road").find(".d-line"),
		referPos = $(".div-road").position(),
		referOffsetX = parseInt($(".div-road").css("margin-left")),
		referOffsetY = parseInt($(".div-road").css("margin-top"));

	function Drag($dom) {
		this.tar = $dom;
		this.currTar;
		this.cx;
		this.cy;
		this.dragflag = false;
		this.x;
		this.y;
		this.ox;
		this.oy;
		this.maxH = 25;
		this.maxW = 15;
	}
	Drag.prototype.startDragListen = function() {
		var _this = this;
		this.tar.on("mousedown", function(event) {
			console.log("mousedown");
			_this.dragflag = true;
			_this.x = event.clientX;
			_this.y = event.clientY;
			_this.ox = _this.x;
			_this.oy = _this.y;
			_this.currTar = $(this);
			_this.cx = _this.currTar.position().left + 5;
			_this.cy = _this.currTar.position().top + 10; 
		});
	}
	Drag.prototype.dragingListen = function() {
		var _this = this;
		$(document).on("mousemove", function(event) {
			if (_this.dragflag) {
			console.log("mousemove");

				var ox = event.clientX - _this.ox;
				var oy = event.clientY - _this.oy;
				_this.targetMove(ox, oy);
			}
		});
	}
	Drag.prototype.endDragListen = function() {
		var _this = this;
		$(document).on("mouseup", function() {
			console.log("mouseup");

			if (_this.dragflag) {
			console.log("dragflag");

				_this.dragflag = false;
				_this.checkMatch();
				_this.currTar = null;
			}
		});
	}
	Drag.prototype.initDrag = function() {
		this.startDragListen();
		this.dragingListen();
		this.endDragListen();
	}
	Drag.prototype.targetMove = function(ox, oy) {
		this.currTar.css({
			"position": "absolute",
			"left": this.cx + ox + "px",
			"top": this.cy + oy + "px"
		});
	}
	Drag.prototype.targetRecover = function() {
		this.currTar.css({
			"position": "relative",
			"left": "0px",
			"top": "0px"
		});
		console.log("位置拖放错误，请重新放置");
	}
	Drag.prototype.checkMatch = function() {
		var i = this.isMatch();
		console.log(i);
		if (this.isMatch() !== null) {
			var pos = $roads.eq(i).position();
			this.currTar.css({
				"position": "absolute",
				"left": referPos.left + referOffsetX + pos.left + "px",
				"top": referPos.top + referOffsetY + pos.top + "px"
			});
		} else {
			this.targetRecover();
		}
	}
	Drag.prototype.isMatch = function() {
		var currTarPos = this.currTar.offset(),
			currIndex = this.currTar.parent().index();
		for (var i = 0, l = $roads.length; i < l; i++) {
			var offset = $roads.eq(i).offset();
			var pos = $roads.eq(i).position();
			if (Math.abs(offset.left - currTarPos.left) < this.maxW && Math.abs(offset.top - currTarPos.top) < this.maxH) {
				if (i == currIndex) {
					return i;
				}
				break;
			}
		}
		return null;
	}
	new Drag($offers).initDrag();
})