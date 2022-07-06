$(function(){
    var banner_slider=$('#banner_slider_pics'),
		pics=$('#banner_slider_pics'),
		items=$('#banner_slider_pics a'),
		pic_width=items.eq(0).width(),
		dots=$('#banner_slider_dots a'),
		current=0,
		timmer=null;
	var size=4;
	// 定义一个鼠标滑过判断事件
	banner_slider.hover(function(){
		clearInterval(timmer);
	},function(){
		timmer=setInterval(slider,4000);
	});
	function slider(){
		current++;
		doSlider();
	}
	function doSlider(){
		// 圆点按钮轮播
		dots.removeClass('dots_active').eq(current%size).addClass('dots_active');
		// 图片轮播
		pics.stop().animate({
			left:-(current)*pic_width
		},1000,function(){
			if(current==size){
				current=0;
				pics.css('left',-(current)*pic_width+'px');
			}else if(current === 0){				
				current=0;
				pics.css('left',-(0)*pic_width+'px');
			}
		});
	}
	var timmer=setInterval(slider,4000);
	// 点击圆点切换图片
	dots.click(function(){
		clearInterval(timmer);
		current=$(this).index();
		timmer=setInterval(slider,4000);
		doSlider();
	});
	
	// 企业荣誉轮播图
	var hornorImageCount = 7;
	var imageContainer = $('.image_item_container');
	var leftButton = $('.button_left');
	var rightButton = $('.button_right');
	let currentCount = 3;
	leftButton.click(debounce(function(){
		slidemageContainer('left');
	}));
	rightButton.click(debounce(function () {
		slidemageContainer('right');
	}));
	leftButton.hover(function(){
		clearInterval(honorTimer);
	},function(){
		honorTimer=setInterval(function () {
			slidemageContainer('right');
		},3500);;
	});
	rightButton.hover(function(){
		clearInterval(honorTimer);
	},function(){
		honorTimer=setInterval(function () {
			slidemageContainer('right');
		},3500);;
	});
	var honorTimer = setInterval(function () {
		slidemageContainer('right');
	},3500);
	imageContainer.hover(function(){
		clearInterval(honorTimer);
	},function(){
		honorTimer=setInterval(function () {
			slidemageContainer('right');
		},3500);
	});
	function slidemageContainer (d) {
		d === 'left' ? currentCount-- : currentCount++;
		imageContainer.stop().animate({
			left:-(currentCount) * 410 + 'px'
		},500,function(){
			if(currentCount === hornorImageCount + 3){
				currentCount = 3;
				imageContainer.css('left',-(currentCount)*410+'px');
			}else if(currentCount === 0){				
				currentCount = 7;
				imageContainer.css('left',-(currentCount)*410+'px');
			}
		});
	}
	function debounce(fn) {
		let t = null
		return function () {
		 if (t) {
		  clearTimeout(t)
		 }
	  
		 t = setTimeout(() => {
		  fn.apply(this, arguments)                    
		 }, 510)
		}
	}
	document.addEventListener('visibilitychange', () => {
		if (document.hidden) {
			clearInterval(timmer);
			clearInterval(honorTimer);
		} else {
			honorTimer = setInterval(function () {
				slidemageContainer('right');
			},3500);
			timmer=setInterval(slider,4000);
		}
	})
})

