			function detail_4(){
				x=document.getElementById("demo");  //查找元素
				x.innerHTML="Hello JavaScript";    //改变内容
			}
			function detail_5(){
				element=document.getElementById('myImage');
				element.src="img/zhenxiang_2.png";
			}
			function detail_6(){
				x=document.getElementById("detail_6_button");  //找到元素 
				x.style.color="orangered";           //改变样式
			}
			function detail_7(){
				var x=document.getElementById("detail_7_input").value;
				for(var i=1;i<x.length;i++){
					if(isNaN(x[i])){
						window.alert("输入的内容不是纯数字；")
						exit(0);
					}
				}
				window.alert("输入的内容是纯数字；")
			}