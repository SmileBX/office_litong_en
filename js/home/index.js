(function(){
	  //$('title').html("123");
	  //$("meta[name='og:description']").attr('content', "11111212121");
	  //$("meta[name='og:keywords']").attr('content', "1");
	 
     // 切换新闻
     $(function () {
		
        $(".journalism-tab li").click(function () {
          // 修改tab标签样式
          $(this).attr("class", "journalism-choice")
          $(this).siblings().attr("class", "")
  
          // 获取tab ID
          var itemId = $(this).attr("tabid") - 1;
  
          // 切换到指定tab
          $(".journalism-box .tab-item11").eq($(this).index()).show().siblings(".tab-item11").hide()
    
        })
  
      })
  
      
	//轮播图请求数据
    ajax("get",port.banner,3,function(date){
        var str="";
       //console.log(date,33636)
        for(var i=0;i<date.length;i++){
          str+=`<div class="swiper-slide"><img class="banner-img" src="${imgapi+date[i].bannerimage}" alt=""></div>`
        }
        
        $(".banner-box .swiper-wrapper").html(str)
        //  ----------------------banner功能
        var swiper = new Swiper('.swiper-container', {
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          //播放速度
          loop: true,
          // 自动播放时间
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
          },
          // 如果需要分页器，即下面的小圆点
          pagination: {
            el: '.swiper-pagination',
          },
        })
  

      })

//公司分布点图片模板
	ajax("get",port.banner,19,function(date){
	  //console.log(date)
	  var str="";
	  for(var i=0;i<date.length;i++){
		str+=`<div><img src="${imgapi+date[i].bannerimage}" alt="">
		  <div class="navbox1-name ho_img${i}">
			<img src="" alt="">

		  </div>
		</div>`
	  }
	  $(".navbox1").html(str)
	  //公司分布点移入模板
		ajax("get",port.banner,163,function(date){
		  //console.log(date,66)
		  for(var i=0;i<date.length;i++){
		  $(".navbox1>div").eq(i).find(".navbox1-name>img").attr("src",imgapi+date[i].bannerimage)
		  }
		})
	})

	//中间三张图片
	ajax("get",port.banner,20,function(date){
	 // console.log(date)
	  var str="";
	  str=`
	  <div class="Publicity_img1">
		<!-- 领先工厂 -->
		<a href="${date[0].banner_url}">
		<img class="nav-but-img" src="${imgapi+date[0].bannerimage}" alt="">
	  </a>
	  </div>
	  <div class="Publicity_img2">
		<div class="choice">
		  <div class="choice-img">
			<a href="${date[1].banner_url}">
			<img class="choice-img1" src="${imgapi+date[1].bannerimage}" alt="">
		  </a>
		  </div>
		  <div class="choice-img">
			<a href="${date[2].banner_url}">
			<img class="choice-img2" src="${imgapi+date[2].bannerimage}" alt="">
		  </a>
		  </div> 
		</div> `
		$(".nav-button-img").html(str)

	})

	//为什么选择我们
	/*显示滚动的数字*/
	// 循环计时函数, 多次调用自身函数, num为被传递的参数
	//$(window).scroll(function(event){
	//  //  //浏览器可见高度
	//  var winHeight = $(window).height();
	//   //该元素到顶部的距离
	// var itemOffsetTop =$('.Chose-box1-number').offset().top - $(window).scrollTop()
	// if(itemOffsetTop>0 &&itemOffsetTop<winHeight){
	//    var num = 0;
	//    // 调用计时函数
	//    var t = setTimeout(timedCount(num),100);
	//
	//   }
	//});
	//
	//function timedCount(num,name){
	//    num=num+1;
	// $(".Chose-box1-number .span0").text(num);
	//    // 设置条件使停止计时
	//    var t;
	//    if (num<5) {
	//         t = setTimeout(function(){timedCount(num)},100);
	//    };
	//}


	ajax("get",port.banner,21,function(date){
	  //console.log(date,11)
	 $(".Choose-box1 img").attr("src",imgapi+date[0].bannerimage);
	 $(".Chose-box1-number-nav img").attr("src",imgapi+date[1].bannerimage);
	})
		


	//新闻列表
	//ajax("get",port.artic,"23/p/1/s/10/type/2",function(date){
	//  //console.log(date,222)
	//})


    //公司新闻
	ajax("get",port.artic,"23/p/1/s/12/type/2",function(date){
	  //console.log(date,333)
	  //图片显示出来
	  var strimg="";
	  for (var i=0 ;i<2 ;i++){
		strimg+=`<div class="tab-item11-img-box2"><a href=""><img src="${imgapi+date[i].articleimage}" alt=""></a> </div>`
	  }
	 $(".tab-item11_box1 .tab-item11-img-box").html(strimg)
	  //列表显示出来
	  var strlist="";
	  for(var i=0;i<date.length;i++){
		strlist+=`
		<li>
		  <a href="./explore_deta.html?tab=HomePage&id=${date[i].id}" class="journalism-news-list-center">
		  <p class="span-text"><span>${timestampToTime3(date[i].createtime)}</span> <em>${timestampToTime4(date[i].createtime)}</em></p>
		  <h5 class="journalism-list-p">
			<p class="title">${date[i].name} </p>
			<p>${date[i].abstract}</p>
		  </h5>
		</a>
		</li>`
	  }
	  $(".tab-item11_box1 .journalism-news").html(strlist)


	})





	//国内外新闻
	ajax("get",port.artic,"24/p/1/s/12/type/2",function(date){

	  //图片显示出来
	  var strimg="";
	  for (var i=0 ;i<2 ;i++){
		strimg+=`<div class="tab-item11-img-box2"><a href=""><img src="${imgapi+date[i].articleimage}" alt=""></a> </div>`
	  }
	 $(".tab-item11_box2 .tab-item11-img-box").html(strimg)
	  //列表显示出来
	  var strlist="";
	  for(var i=0;i<date.length;i++){
		strlist+=`
		<li>
		  <a href="./explore_deta.html?tab=HomePage&id=${date[i].id}" class="journalism-news-list-center">
		  <p class="span-text"><span>${timestampToTime3(date[i].createtime)}</span> <em>${timestampToTime4(date[i].createtime)}</em></p>
		  <h5 class="journalism-list-p">
			<p class="title">${date[i].name} </p>
			<p>${date[i].abstract}</p>
		  </h5>
		</a>
		</li>`
	  }
	  $(".tab-item11_box2 .journalism-news").html(strlist)

	})

	//行业动态
	ajax("get",port.artic,"25/p/1/s/12/type/2",function(date){
	  //console.log(date,44)
	  //图片显示出来
	  var strimg="";
	  for (var i=0 ;i<2 ;i++){
		strimg+=`<div class="tab-item11-img-box2"><a href=""><img src="${imgapi+date[i].articleimage}" alt=""></a> </div>`
	  }
	 $(".tab-item11_box3 .tab-item11-img-box").html(strimg)
	  //列表显示出来
	  var strlist="";
	  for(var i=0;i<date.length;i++){
		strlist+=`
		<li>
		  <a href="./explore_deta.html?tab=HomePage&id=${date[i].id}" class="journalism-news-list-center">
		  <p class="span-text"><span>${timestampToTime3(date[i].createtime)}</span> <em>${timestampToTime4(date[i].createtime)}</em></p>
		  <h5 class="journalism-list-p">
			<p class="title">${date[i].name} </p>
			<p>${date[i].abstract}</p>
		  </h5>
		</a>
		</li>`
	  }
	  $(".tab-item11_box3 .journalism-news").html(strlist)

	})

})()