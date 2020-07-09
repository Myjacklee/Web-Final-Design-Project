	// 当网页向下滑动 20px 出现"返回顶部" 按钮
	window.onscroll = function() {scrollFunction()};
	function scrollFunction() {
			var topScroll =document.documentElement.scrollTop;//滚动的距离,距离顶部的距离
			//window.alert(topScroll);
			var header=document.getElementById("header");
			
			var header_width=header.offsetWidth;
		//	window.alert(header_width);
			var nav=document.getElementById("topnav")
			var distance=getElementToPageTop(nav);
            var bignav  = document.getElementById("topnav");//获取到导航栏id
		//	window.alert(distance);
            if(distance<topScroll){  //当滚动距离大于distance时执行下面的东西
                bignav.style.position = 'fixed';
				bignav.style.top = '0';
                bignav.style.zIndex = '0';
			//	bignav.style.width=5px;
				bignav.style.left = '0';
				bignav.style.width='100%';
            }else{//当滚动距离小于250的时候执行下面的内容，也就是让导航栏恢复原状
                bignav.style.position = 'static';
                }
	}
	function getElementToPageTop(el) {
	  if(el.parentElement) {
	    return this.getElementToPageTop(el.parentElement) + el.offsetTop
	  }
	  return el.offsetTop
	}