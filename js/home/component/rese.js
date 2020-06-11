(function(){
  //渲染头部nav
 // navlist()
  //判断进入那个页面
      var tab=getQueryString("tab")
      Core_technical()
      patent_invention()

      if(tab){    
        $(".res_title_con2 .res_title_con2 li").eq(tab).addClass("res_title_con2_active").siblings().removeClass("res_title_con2_active");
        $(".res_content .res_content_box").eq(tab).show().siblings(".res_content .res_content_box").hide()
          
      }else{
        //直接进入调取
        Core_technical()
        $(".res_title_box .res_title_con2 li").eq(0).addClass("res_title_con2_active");
        $(".res_content .res_content_box").eq(0).show().siblings(".res_content .res_content_box").hide()
      }

//解决swiper切换后不动问题
var swiper_res1,swiper_res3,swiper_res5,swiper_res7,palnt_banner1,palnt_banner12;











  //首次加载
  //首先调取关于力同banenr
  ajax("get",port.getcolum,"5",function(date){
        //console.log(date,"首页logo")
        var strlogo=` <img class="banner-img" src="${imgapi+date[0].smallimages}" alt="">`
        $(".rese-box-banner").html(strlogo)
        //列表
        let taberlist=date[0].children;
        let stritem="";
       // //console.log(taberlist,"孩子")
        for(var i=0;i<taberlist.length;i++){
         stritem+=`<li class="res_title_con2_txt">${taberlist[i].name}</li>`
        }
        $(".res_title_box .res_title_con2").html(stritem)
   
       $(".res_title_box .res_title_con2 li").eq(tab).addClass("res_title_con2_active");
        //最后一个没有右边的线
        $(".res_title_box .res_title_con2 li").eq(taberlist.length-1).addClass("line_none")
       
        $(".res_title_box .res_title_con2 li").off("click").on("click",function(){
          var index = $(this).index();
          switch(index){
            case 0:
            Core_technical()
 
            　　　　break;       
            　　case 1:
            patent_invention()
          　　　　break;     
            default:        
            　　　　break;
          }   ;   
          $(".res_title_box .res_title_con2 li").eq(index).addClass("res_title_con2_active").siblings().removeClass("res_title_con2_active");
          $(".res_content .res_content_box").eq(index).show().siblings(".res_content .res_content_box").hide(); 
          });





     var childenrtaber1=taberlist[1].children;
     var strpatent="";
     for(var i=0;i<childenrtaber1.length;i++){
      strpatent+=`
      <p><span>${childenrtaber1[i].name}</span></p> 
      `

     }
     $(".patent_title").html(strpatent);
     $(".patent_title p").eq(childenrtaber1.length-1).addClass("line_none")
     //默认第一个选中
     $(".patent_title span").eq(0).addClass("invention_active");
     $(".patent_box_con li").eq(0).show().siblings(".patent_box_con li").hide();
    //taber切换实例化
    //taberone(".patent_title span","invention_active",".patent_box_con li")
      $(".patent_title p").click(function(){
            var index=$(this).index();
            patent_invention();
            $(".patent_title p").find("span").removeClass("invention_active")
            $(".patent_title p").eq(index).find("span").addClass("invention_active");
            $(".patent_box_con li").eq(index).show().siblings("li").hide()

      })
  

  
  
})



function Core_technical(){

  ajax("get",port.artic,"35/p/1/s/10/type/2",function(date){
    //console.log(date,35)
    var date=date;
    bannertab(0)
    function bannertab(index){
     // //console.log("chufa")

      var brief=date[index].articlecontent;
      $(".brief-box").html(brief);
      //轮播图
      var bannerswiepr=string_arr(date[index].attachfiles);
      var strbanner12="";
      for(var i=0;i<bannerswiepr.length;i++){
        strbanner12+=`
        <div class="swiper-slide"><img class="res_banner_img" src="${imgapi+bannerswiepr[i]}" alt=""></div>
        `
      } 
      if(palnt_banner1 !=undefined){
        palnt_banner1.destroy();
     }

if(palnt_banner12 !=undefined){
  palnt_banner12.destroy();
}

     $("#palnt_banner12 .swiper-wrapper").html(strbanner12);
     palnt_banner12=swiperbanner("palnt_banner12","#palnt_banner12") 
    }
    //渲染下面图片
    var strimg=""
    for(var i=1;i<date.length;i++){
      strimg+=`
      <li><img src="${imgapi+date[i].articleimage}" alt=""></li>
      `
    }

    $(".core_invention_img_box23").html(strimg);

$(".core_invention_img_box23 li").click(function(){
  //console.log(12123)
  var index2=$(this).index()
  var index=$(this).index()+1;
  bannertab(index)
  $(".core_invention_img_box23 li").eq(index2).addClass("imgactive").siblings("li").removeClass("imgactive")
})



    //$(".core_invention_img_box23").html(strtitle);
    //$(".brief-box-taber").html(strtext);
    //实例化选中第一个
   // $(".core_invention_img_box23 li").eq(0).addClass("imgactive");
   // $(".brief-box-taber li").eq(0).show().siblings(".brief-box-taber li").hide();

    //taberone(".core_invention_img_box23 li","imgactive",".brief-box-taber li")
  })
}



//发明专利
function  patent_invention(){


//发明专利
  //行业荣誉证书
  ajax("get",port.artic,"38/p/1/s/10/type/2",function(date){
    var strbanner="";
    for(var i=0;i<date.length;i++){
      strbanner+=`<div class="swiper-slide">
        <div class="swiper-img-box0">
          <img class="res_banner_img" src="${imgapi+date[i].articleimage}" alt="">
        </div>
        <div class="swiper-text-box0"><p class="swiper-text-box0-title">${date[i].title}</p>
              <div class="abo_swipe1_swiper_text-box">
                ${date[i].articlecontent} </div></div></div> `;   
    }
//公司资质banner和实例化
if(swiper_res1 !=undefined){
  swiper_res1.destroy();
}
  $("#swiper_res1 .swiper-wrapper").html(strbanner);
  swiper_res1= swiperbanner(swiper_res1,"#swiper_res1")
})
//底部放大
swiperbanner_footer("swiper_res2","#swiper_res2","147")








//第二个实用新型专利
  ajax("get",port.artic,"39/p/1/s/10/type/2",function(date){
    //console.log(date,7777771111)
    var strbanner="";

    for(var i=0;i<date.length;i++){
      strbanner+=`<div class="swiper-slide">
        <div class="swiper-img-box0">
          <img class="res_banner_img" src="${imgapi+date[i].articleimage}" alt="">
        </div>
        <div class="swiper-text-box0"><p class="swiper-text-box0-title">${date[i].title}</p>
              <div class="abo_swipe1_swiper_text-box">
                ${date[i].articlecontent} </div></div></div> `;

     
    }
//公司资质banner和实例化
if(swiper_res3 !=undefined){
  swiper_res3.destroy();
}

  $("#swiper_res3 .swiper-wrapper").html(strbanner);
  swiper_res3=swiperbanner("swiper_res3","#swiper_res3")
})
//底部放大
swiperbanner_footer("swiper_res4","#swiper_res4","148")




  ajax("get",port.artic,"40/p/1/s/10/type/2",function(date){
    //console.log(date,7777771111)
    var strbanner="";
    for(var i=0;i<date.length;i++){
      strbanner+=`<div class="swiper-slide">
        <div class="swiper-img-box0">
          <img class="res_banner_img" src="${imgapi+date[i].articleimage}" alt="">
        </div>
        <div class="swiper-text-box0"><p class="swiper-text-box0-title">${date[i].title}</p>
              <div class="abo_swipe1_swiper_text-box">
                ${date[i].articlecontent} </div></div></div> `;

   
    }
//公司资质banner和实例化
if(swiper_res5 !=undefined){
  swiper_res5.destroy();
}

  $("#swiper_res5 .swiper-wrapper").html(strbanner);
  swiper_res5= swiperbanner("swiper_res5","#swiper_res5")
  })
  //底部放大
swiperbanner_footer("swiper_res6","#swiper_res6","149")




  ajax("get",port.artic,"142/p/1/s/10/type/2",function(date){
    //console.log(date,7777771111)
    var strbanner="";
    var footerbanner="";
    for(var i=0;i<date.length;i++){
      strbanner+=`<div class="swiper-slide">
        <div class="swiper-img-box0">
          <img class="res_banner_img" src="${imgapi+date[i].articleimage}" alt="">
        </div>
        <div class="swiper-text-box0"><p class="swiper-text-box0-title">${date[i].title}</p>
              <div class="abo_swipe1_swiper_text-box">
                ${date[i].articlecontent} </div></div></div> `;

    }
//公司资质banner和实例化
if(swiper_res7 !=undefined){
  swiper_res7.destroy();
}

  $("#swiper_res7 .swiper-wrapper").html(strbanner);
  swiper_res7= swiperbanner("swiper_res7","#swiper_res7")

  })
}
//底部放大
swiperbanner_footer("swiper_res8","#swiper_res8","150")
  




  
 
 










})()