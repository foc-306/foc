$(function(){
	//页面初始化
	//绑定 posted   发帖按钮
	$("#show-posted").click(()=>{
		layer.open({
		  type: 2,
		  title: "发帖",
		  area: ['60%', '360px'],
		  shade: 0.8,
		  anim: 1, //0-6的动画形式，-1不开启
		  shadeClose: true,
		  content: 'posted.html'
		});
	})
	
	$("#posted").click(()=>{
		var urlParam = $("#postedForm").serialize();
		layer.msg('正在传递请求数据：</br>'+urlParam);
		setTimeout(()=>{
			//异步延时
			layer.msg('发帖成功，即将跳转', {icon: 1},()=>{
				//防止提前跳转
				parent.location.reload();
			});
		},1000);
	})
})