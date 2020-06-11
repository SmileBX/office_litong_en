(function(){

//初始化菜单栏
//ajax("get",port.getcolum,1,function(date){})


    
  
      $(function () {
        <!-- console.log($(".test"), 1111) -->
        $(document).ready(function () {
          $(document).off('click.bs.dropdown.data-api');
        });
        $(document).ready(function () {
          dropdownOpen();//调用
        });
        /**
         * 鼠标划过就展开子菜单，免得需要点击才能展开
         */
        function dropdownOpen() {
  
          var $dropdownLi = $('li.dropdown');
  
          $dropdownLi.mouseover(function () {
            $(".test").addClass('.mm');
          }).mouseout(function () {
            $(".test").removeClass('.mm');
          });
        }
  
      })




 
 



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

//公司分布点
ajax("get",port.banner,19,function(date){
  //console.log(date)
  var str="";
  for(var i=0;i<date.length;i++){
    str+=`<div><img src="${imgapi+date[i].bannerimage}" alt="">
      <div class="navbox1-name">
        <p>${date[i].name}</p>
      </div>
    </div>`
  }
  $(".navbox1").html(str)


})



//中间三张图片
ajax("get",port.banner,20,function(date){
  //console.log(date)
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

ajax("get",port.banner,21,function(date){
 $(".Choose-box1 img").attr("src",imgapi+date[0].bannerimage);
})
    


//新闻列表
ajax("get",port.artic,"23/p/1/s/10/type/2",function(date){
  //console.log(date,222)
})


//公司新闻
ajax("get",port.artic,"23/p/1/s/10/type/2",function(date){
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
      <a href="./component/explore_deta.html?tab=公司首页&id=${date[i].id}" class="journalism-news-list-center">
      <p class="span-text"><span>${timestampToTime2(date[i].createtime)}</span> <em>${timestampToTime1(date[i].createtime)}</em></p>
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
ajax("get",port.artic,"24/p/1/s/10/type/2",function(date){

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
      <a href="./component/explore_deta.html?tab=公司首页&id=${date[i].id}" class="journalism-news-list-center">
      <p class="span-text"><span>${timestampToTime2(date[i].createtime)}</span> <em>${timestampToTime1(date[i].createtime)}</em></p>
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
ajax("get",port.artic,"25/p/1/s/10/type/2",function(date){
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
      <a href="./component/explore_deta.html?tab=公司首页&id=${date[i].id}" class="journalism-news-list-center">
      <p class="span-text"><span>${timestampToTime2(date[i].createtime)}</span> <em>${timestampToTime1(date[i].createtime)}</em></p>
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