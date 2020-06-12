(function () {
  //渲染头部nav
  //navlist()
  //获取url地址
  function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象  
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return decodeURI(r[2]); return null;
  }
  //判断进入那个页面
  var tab = getQueryString("tab")
  var id=getQueryString("id")
  console.log(tab,"tab")
 console.log(id,"id")
  if(tab=="解决方案" || tab=="系统案例"){
    $(".exp_box_img").hide();
  }else{

    $(".exp_box_img").show();
    ajax("get",port.getcolum,"10",function(date){
      // //console.log(date,123456)
       var strbanenr=`
       <img src="${imgapi+date[0].smallimages}" alt=""> 
       `;
       $(".exp_box_img").html(strbanenr);
      });

  }

  ajax("get",port.arctidetial,id,function(date,date2){
    $(".particular_box_title").html(date.title);
    $(".particular_box_timer").html(timestampToTime(date.createtime) )

    //console.log(date2,"文章")
    //渲染banenr图
    var strbanner="";
    var banner=string_arr(date.attachfiles);
    for(var i=0;i<banner.length;i++){
      strbanner+=`
      <div class="swiper-slide"><img src=${imgapi+banner[i]} alt=""></div>
      `
    }
    $("#particular_box_swiper5 .swiper-wrapper").html(strbanner);
    //实例化banner图
    swiperbanner("particular_box_swiper5","#particular_box_swiper5")

    $(".list_deta_box").html(date.articlecontent)
    //渲染上一篇和下一篇
    var prev=date2.first;
    var next=date2.next;
    //console.log(tab,"23")
    var strprev=`
    <a href="./explore_deta.html?tab=${tab}&id=${prev.id}"><span>上一篇</span> <em>${prev.name}</em></a> 
    `;
    var strnext=`
    <a href="./explore_deta.html?tab=${tab}&id=${next.id}"><span>下一篇</span> <em>${next.name}</em></a> 
    `;
    $(".par_footer p").eq(0).html(strprev);
    $(".par_footer p").eq(1).html(strnext);
    if($(".par_footer p").eq(0).find("em").html()=="undefined"){
      $(".par_footer p").eq(0).hide();
    };
    if($(".par_footer p").eq(1).find("em").html()=="undefined"){
      $(".par_footer p").eq(1).hide();
    }


  })




  switch(tab){
    case "行业动态":
          //console.log(tab);
          $(".ret").html("返回"+tab+"列表").attr("href","./explore.html?tab=0");
          $(".exp_box_title_tab>a").eq(0).addClass("exp_box_title_tab_active").siblings().removeClass("exp_box_title_tab_active");
       
          break;
    case "公司动态":
         // //console.log(tab);
          $(".ret").html("返回"+tab+"列表").attr("href","./explore.html?tab=0");
          $(".exp_box_title_tab>a").eq(0).addClass("exp_box_title_tab_active").siblings().removeClass("exp_box_title_tab_active");
          break;
    case "国内展会":
         // //console.log(tab);
          $(".ret").html("返回"+tab+"列表").attr("href","./explore.html?tab=1");;
          $(".exp_box_title_tab>a").eq(1).addClass("exp_box_title_tab_active").siblings().removeClass("exp_box_title_tab_active");
          break;
    case "精彩活动":
         // //console.log(tab);
          $(".ret").html("返回"+tab+"列表").attr("href","./explore.html?tab=1");
          $(".exp_box_title_tab>a").eq(1).addClass("exp_box_title_tab_active").siblings().removeClass("exp_box_title_tab_active");
          break;
    case "公司首页":
          // //console.log(tab);
           $(".ret").html("返回"+tab).attr("href","./index.html");
           //$(".exp_box_title_tab>a").eq(1).addClass("exp_box_title_tab_active").siblings().removeClass("exp_box_title_tab_active");
           break;
    case "解决方案":
           // //console.log(tab);
      
           $(".exp_box_title").hide();
           ajax("get",port.getcolum,"8",function(date){
            // //console.log(date,123456)
             var strbanenr=`
             <img src="${imgapi+date[0].smallimages}" alt=""> 
             `;
             $(".exp_box_img").html(strbanenr);
             $(".exp_box_img").show();
            });
            $(".ret").html("返回"+tab).attr("href","./solution.html");
            break;
    case "系统案例":
            // //console.log(tab);
      
            ajax("get",port.getcolum,"9",function(date){
              // //console.log(date,123456)
               var strbanenr=`
               <img src="${imgapi+date[0].smallimages}" alt=""> 
               `;
               $(".exp_box_img").html(strbanenr);
               $(".exp_box_img").show();
              });
         
            $(".exp_box_title").hide();
             $(".ret").html("返回"+tab).attr("href","./case.html");
             break;
    defauit:
          console.log("错误")
;

            
            }


 




  //封装选中taber切换
  //activename 事件源的类名  activeclassname选中添加的类名  activebox需要显示和消失的类名
  function tab_active(activename, activeclassname, activebox) {
    $(activename).click(function () {
      // <!-- //console.log("运行了") -->
      $(this).addClass(activeclassname).siblings().removeClass(activeclassname);
      $(activebox).eq($(this).index()).show().siblings(activebox).hide();
    })
  }




  //新闻中心内容
  $(".press_page_next").click(function(){

  })










})()