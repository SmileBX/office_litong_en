(function(){

  Introduction()
  warehouse()
  control_plan()
  //渲染头部nav
  //navlist()

  //解决轮播图不动问题
  var palnt_banner1,palnt_banner3,palnt_banner5,palnt_banner7;


  //判断进入那个页面
      var tab=getQueryString("tab")
 

      if(tab){    
        $(".plant_box_title_tab li").eq(tab).addClass("plant_box_title_tab_active").siblings().removeClass("plant_box_title_tab_active");
        $(".plant_content .plant_title_tab_con").eq(tab).show().siblings(".plant_content .plant_title_tab_con").hide()
          
      }else{
        //直接进入调取
        $(".plant_box_title_tab li").eq(0).addClass("plant_box_title_tab_active").siblings().removeClass("plant_box_title_tab_active");
        $(".plant_content .plant_title_tab_con").eq(0).show().siblings(".plant_content .plant_title_tab_con").hide()
      }





//<!-- 发明专利taber切换 -->
  $(function(){
    $(".palnt_info_title>li").click(function(){
      $(this).addClass("info_title_active").siblings().removeClass("info_title_active");
      $(".palnt_info>.palnt_info_con ").eq($(this).index()).show().siblings(".palnt_info_con").hide()
    })
  })












//初始化页面
ajax("get",port.getcolum,"6",function(date){
 // //console.log(date,11)
  var banenrimg=`<img src="${imgapi+date[0].smallimages}" alt=""> `;
  $(".plant_box .plant_box_banner").html(banenrimg);
  //获得列表
  var list=date[0].children;
  var strlist="";
  for(var i=0;i<list.length;i++){
    strlist+=`
    <li>${list[i].name}</li>
    `
  }
  $(".plant_box_title_tab").html(strlist);
  $(".plant_box_title_tab li").eq(tab).addClass("plant_box_title_tab_active");
  //最后一个没有右边的线
  $(".plant_box_title_tab li").eq(list.length-1).addClass("plant_box_title_tab_line")
  $(".plant_box_title_tab  li").off("click").on("click",function(){
    var index = $(this).index();
    switch(index){
      case 0:
      Introduction()
      　　　　break;       
      　　case 1:
      warehouse()
    　　　　break;  
    　　case 2:
    control_plan()
  　　　　break;   
      default:        
      　　　　break;
    }   ;   
    $(".plant_box_title_tab li").eq(index).addClass("plant_box_title_tab_active").siblings().removeClass("plant_box_title_tab_active");
    $(".plant_content .plant_title_tab_con").eq(index).show().siblings(".plant_content .plant_title_tab_con").hide(); 
    });
})


  



//工厂介绍
  function Introduction(){
    ajax("get",port.getcolum,"41/p/1/s/10/type/2",function(date){
   //   //console.log(date)
      var list=date[0].children;
      var strlist="";
      for(var i=0;i<2;i++){
        strlist+=`<li><span>${list[i].name}</span> </li>`;
      }
      bannerauto2()
      bannerauto1()
     // //console.log(list)
      $(".palnt_info_title ").html(strlist)
      //实例taber
      $(".palnt_info_title li ").eq(0).find("span").addClass("info_title_active")
      $(".palnt_info_title li ").eq(1).addClass("line_none")
      //taber切换

    $(".palnt_info_title li").off("click").on("click",function(){

       var index = $(this).index();
      // Introduction();
      bannerauto2()
      bannerauto1()
      $(".palnt_info_title li").find("span").removeClass("info_title_active");
        $(".palnt_info_title li").eq(index).find("span").addClass("info_title_active");
        $(".palnt_info .palnt_info_con").eq(index).show().siblings(".palnt_info .palnt_info_con").hide();
      });
     } )
   



//封装请求简介
function bannerauto1(){
  //简介
  ajax("get",port.artic,"44/p/1/s/10/type/2",function(date){
  // //console.log(date,44)
   var bannerlist=string_arr(date[0].attachfiles) ;
   var paln_text=date[0].articlecontent;
   var videolink=date[1].attachfiles;
   var videobox=`
   <video class="video-con" controls src="${imgapi+videolink}"></video>
   `

   var text=date[0].articlecontent;
   var strbanner="";
   for(var i=0;i<bannerlist.length;i++){
     strbanner+=`
     <div class="swiper-slide"><img src="${imgapi+bannerlist[i]}" alt=""> </div>     
     `
   }
     $("#palnt_banner1 .swiper-wrapper").html(strbanner)
     //实例化banner图
     if(palnt_banner1 !=undefined){
       palnt_banner1.destroy();
      // //console.log("清楚了11")
     }
     palnt_banner1= swiperbanner("palnt_banner1","#palnt_banner1")
     //文章内容
     $(".plant_banner_text_box").html(paln_text)
     //视频播放

     $(".video-box").html(videobox)
     $(".auto-video").click(function(){
       $(".video-box").show();
       $(".video-con").trigger('play');
     })

  })
  
  //底部轮播
  ajax("get",port.banner,"46",function(date){
    //console.log(date)
   //填充内容
     var banner="";
   for(var i=0;i<date.length;i++){
     banner+=`
     <div class="swiper-slide">
       <div class="swiper-slide-box box11">
         <img class="swiper-small-img" src="${imgapi+date[i].bannerimage}" alt="">
         <div class="swiper-small-moverbox"></div>
       </div>
     </div>     
     ` 
  }

  $("#palnt_banner22 .swiper-wrapper").html(banner)
  var palnt_banner22 = new Swiper('#palnt_banner22', {
    slidesPerView: 5,
    //centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  })



}
//haha
//生产车间函数,轮播加底部放大
function bannerauto2(){
  //生产车间展示
  ajax("get",port.artic,"45/p/1/s/10/type/2",function(date){
  // //console.log(date,333)
   var banner=string_arr(date[0].attachfiles) ;
   var strlist='';
   var bannertext=date[0].articlecontent;
  // //console.log(bannertext)
   for(var i=0;i<banner.length;i++){
   strlist+=`
     <div class="swiper-slide"><img src="${imgapi+banner[i]}" alt=""></div>
     `
   }
   if(palnt_banner3 !=undefined){
     palnt_banner3.destroy();
    // //console.log("清楚了11")
   }
  $("#palnt_banner3 .swiper-wrapper").html(strlist);
   //实例化banner图
   palnt_banner3= swiperbanner("palnt_banner3","#palnt_banner3") 
   $(".Workshop_show").html(bannertext)
  })

  //底部轮播放大
  //底部轮播
  //底部放大
  swiperbanner_footer("abo_swiper4","#abo_swiper4","143")
}


}






//质量检测
function warehouse(){
  ajax("get",port.artic,"47/p/1/s/10/type/2",function(date){
   //console.log(date,66611)
    var str=date[0].articlecontent;
    $(".Workshop_show2").html(str)


    var banner=string_arr(date[0].attachfiles) ;
    var strlist='';
   // //console.log(bannertext)
    for(var i=0;i<banner.length;i++){
    strlist+=`
      <div class="swiper-slide"><img src="${imgapi+banner[i]}" alt=""></div>
      `
    }
    if(palnt_banner5 !=undefined){
      palnt_banner5.destroy();

    }
   $("#palnt_banner5 .swiper-wrapper").html(strlist);
    //实例化banner图
    palnt_banner5= swiperbanner("palnt_banner5","#palnt_banner5") 
 






    })



//-----------------












    //底部轮播
    //底部放大
    swiperbanner_footer("palnt_banner6","#palnt_banner6","48")

}





//质量控制
function control_plan(){

  ajax("get",port.artic,"49/p/1/s/10/type/2",function(date){
   // //console.log(date,66611)
    var str=date[0].articlecontent;
    $(".Workshop_show3").html(str)

    var banner=string_arr(date[0].attachfiles) ;
    var strlist='';
   // //console.log(bannertext)
    for(var i=0;i<banner.length;i++){
    strlist+=`
      <div class="swiper-slide"><img src="${imgapi+banner[i]}" alt=""></div>
      `
    }
    if(palnt_banner7 !=undefined){
      palnt_banner7.destroy();

    }
   $("#palnt_banner7 .swiper-wrapper").html(strlist);
    //实例化banner图
    palnt_banner5= swiperbanner("palnt_banner7","#palnt_banner7") 
 

    })





    //底部轮播
    //底部轮播
    //底部放大
    swiperbanner_footer("palnt_banner8","#palnt_banner8","133")

}








})()