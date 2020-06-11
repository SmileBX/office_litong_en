(function(){
  industry ()
  //渲染头部nav
  //navlist()
  



//判断进入那个页面
    var tab=getQueryString("tab")
  // //console.log(tab)
    if(tab){
      //更换类名
      $(".solytion-tab-box-con>li").eq(tab).addClass("solytion-tab-con-active").siblings().removeClass("solytion-tab-con-active");
       //更换图标位置
       //更换类名
    $(".solytion-tab-box-con>li").eq(tab).addClass("solytion-tab-con-active").siblings().removeClass("solytion-tab-con-active");
     //更换图标位置
     $(".solytion-tab-box-con>li").find("img").removeClass("imgactive");
   $(".solytion-tab-box-con>li").eq(tab).find("img").addClass("imgactive");
  
      $(".tab-con-box>.tab-con-box-list").eq(tab).show().siblings(".tab-con-box .tab-con-box-list").hide()
    }else{
      //更换类名
      $(".solytion-tab-box-con>li").eq(0).addClass("solytion-tab-con-active").siblings().removeClass("solytion-tab-con-active");
      //更换图标位置
      $(".solytion-tab-box-con>li").find("img").removeClass("imgactive");
    $(".solytion-tab-box-con>li").eq(0).find("img").addClass("imgactive");
    


      $(".tab-con-box .tab-con-box-list ").eq(0).show().siblings(".tab-con-box .tab-con-box-list").hide()
    }









//首先调取解决方案banenr
  ajax("get",port.getcolum,"8",function(date){
   // //console.log(date,123456)
    var strbanenr=`
    <img src="${imgapi+date[0].smallimages}" alt=""> 
    `;

    $(".solution-banner").html(strbanenr);
    var list=date[0].children;
   // //console.log(list,00)
    var strlist="";
    for(var i=0;i<list.length;i++){
      strlist+=`
      <li><div class="soly-title-ico">
        <img class="" src="${imgapi+list[i].smallimages}" alt="">
      </div><span>${list[i].name}</span></li>      
      `
    };
    $(".solytion-tab-box-con").html(strlist);
    //更换类名
    $(".solytion-tab-box-con>li").eq(tab).addClass("solytion-tab-con-active").siblings().removeClass("solytion-tab-con-active");
     //更换图标位置
     $(".solytion-tab-box-con>li").find("img").removeClass("imgactive");
   $(".solytion-tab-box-con>li").eq(tab).find("img").addClass("imgactive");


    //<!-- 解决方案一级taber切换 -->
$(function(){
  $(".solytion-tab-box-con li").off("click").on("click",function(){
     var index = $(this).index();
     //更换类名
     $(".solytion-tab-box-con>li").eq(index).addClass("solytion-tab-con-active").siblings().removeClass("solytion-tab-con-active");
      //更换图标位置
      $(".solytion-tab-box-con>li").find("img").removeClass("imgactive");
    $(".solytion-tab-box-con>li").eq(index).find("img").addClass("imgactive");
     $(".tab-con-box>.tab-con-box-list ").eq(index).show().siblings(".tab-con-box .tab-con-box-list").hide()
   });
});
  })





function industry (){
//初始化页面分页
listfun(50,".explore-con-list-box1",".press_page_list1",".press_page_prev1",".press_page_next1");
listfun(51,".explore-con-list-box2",".press_page_list2",".press_page_prev2",".press_page_next2");
listfun(52,".explore-con-list-box3",".press_page_list3",".press_page_prev3",".press_page_next3");
listfun(53,".explore-con-list-box4",".press_page_list4",".press_page_prev4",".press_page_next4");
listfun(151,".explore-con-list-box5",".press_page_list5",".press_page_prev5",".press_page_next5");


//其他页面
listfun(153,".explore-con-list-box61",".press_page_list61",".press_page_prev61",".press_page_next61");
listfun(154,".explore-con-list-box62",".press_page_list62",".press_page_prev62",".press_page_next62");
listfun(155,".explore-con-list-box63",".press_page_list63",".press_page_prev63",".press_page_next63");
listfun(156,".explore-con-list-box64",".press_page_list64",".press_page_prev64",".press_page_next64");

ajax("get",port.getcolum,"152",function(date){
    //渲染taber
    //console.log(date)
    var date=date[0].children;
    var strlist="";
    for(var i=0;i<date.length;i++){
      strlist+=`
      <li><span>${date[i].name}</span></li>
      `
    }
    $(".glory_title_two0 ul").html(strlist);
    //默认选中
    $(".glory_title_two0 ul li").eq(0).find("span").addClass("glory_active");
    $(".tab_box_two_con>ul>li").eq(0).show();
    //taber切换
    $(".glory_title_two0 ul li").click(function(){
      var index=$(this).index();
      //清空样式
      $(".glory_title_two0 ul li").find("span").removeClass("glory_active");
      $(".glory_title_two0 ul li").eq(index).find("span").addClass("glory_active");
      $(".tab_box_two_con>ul>li").eq(index).show().siblings(".tab_box_two_con>ul>li").hide();
    })

})









}
















})()