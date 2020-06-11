(function(){
  //渲染头部nav
 // navlist()
 
//判断进入那个页面
    var tab=getQueryString("tab")
   //console.log(tab)
    if(tab){
      //更换类名
      $(".solytion-tab-box-con>li").eq(tab).addClass("solytion-tab-con-active").siblings().removeClass("solytion-tab-con-active");
       //更换图标位置
       $(".solytion-tab-box-con>li").eq(tab).siblings().find('div').removeClass("soly-title-ico-active")
       $(".solytion-tab-box-con>li").eq(tab).find('div').addClass("soly-title-ico-active")
      $(".tab-con-box>.tab-con-box-list").eq(tab).show().siblings(".tab-con-box .tab-con-box-list").hide()
    }else{
      //更换类名
      $(".solytion-tab-box-con>li").eq(0).addClass("solytion-tab-con-active").siblings().removeClass("solytion-tab-con-active");
       //更换图标位置
       $(".solytion-tab-box-con>li").eq(0).siblings().find('div').removeClass("soly-title-ico-active")
       $(".solytion-tab-box-con>li").eq(0).find('div').addClass("soly-title-ico-active")
      $(".tab-con-box .tab-con-box-list ").eq(0).show().siblings(".tab-con-box .tab-con-box-list").hide()
    }

 





//系统案例
//首先调取解决方案banenr
  ajax("get",port.getcolum,"9",function(date){
    //console.log(date)
    var strbanenr=`
    <img src="${imgapi+date[0].smallimages}" alt=""> 
    `;

    $(".solution-banner").html(strbanenr);
    var list=date[0].children;
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
     //更换类名
    $(".solytion-tab-box-con>li").eq(index).addClass("solytion-tab-con-active").siblings().removeClass("solytion-tab-con-active");
     //更换图标位置
     $(".solytion-tab-box-con>li").find("img").removeClass("imgactive");
   $(".solytion-tab-box-con>li").eq(index).find("img").addClass("imgactive");

     $(".tab-con-box>.tab-con-box-list ").eq(index).show().siblings(".tab-con-box>.tab-con-box-list").hide()
   });
});
})







listfun2(65,".explore-con-list-box1",".press_page_list1",".press_page_prev1",".press_page_next1");
listfun2(66,".explore-con-list-box2",".press_page_list2",".press_page_prev2",".press_page_next2");
listfun2(67,".explore-con-list-box3",".press_page_list3",".press_page_prev3",".press_page_next3");
listfun2(68,".explore-con-list-box4",".press_page_list4",".press_page_prev4",".press_page_next4");
listfun2(157,".explore-con-list-box5",".press_page_list5",".press_page_prev5",".press_page_next5");
//其他类
listfun2(159,".explore-con-list-box61",".press_page_list61",".press_page_prev61",".press_page_next61");
listfun2(160,".explore-con-list-box62",".press_page_list62",".press_page_prev62",".press_page_next62");
listfun2(161,".explore-con-list-box63",".press_page_list63",".press_page_prev63",".press_page_next63");
listfun2(162,".explore-con-list-box64",".press_page_list64",".press_page_prev64",".press_page_next64");

ajax("get",port.getcolum,"158",function(date){
  //渲染taber
 // //console.log(date)
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





/*封装列表渲染
port_id, 请求的接口
//list_number 第几页
con_class  内容的容器类名
page_class  分页的盒子类名
prevclass,nextclass 上一页下一页的类名
*/

function listfun2(port_id,con_class,page_class,prevclass,nextclass){
  //当前选中的第几个数字
  var tab = 0;
  var port_page_number=1;
  ////分页按钮数量
  var number = 0;
  //初次渲page列表和内容
  ajax("get",port.artic,port_id+"/p/1/s/9/type/1",function(date,mm,ss){
    var detalength=ss.date.length;  
    //// 生成按钮数量
    var str = "";
    
    ////列表每次渲染的新闻条数
    var newsnumber = 9

    //假设请求过的数据为100条
    var test_bumber = ss.total;
    number = Math.ceil(test_bumber / newsnumber);

    //生成分页数量
    for (var i = 1; i < number + 1; i++) {
      str += "<li>" + i + "</li>"
    }
     //console.log(str)
     $(".press_page_list_box "+page_class).html(str);
     //默认渲染第一个
     $(page_class+" li").eq(0).addClass("tab-naext_active");
     //渲染内容
     list_con_con(1);
     //请求数据内容
     
    //上一页

    $(".footer_press_box>"+prevclass).click(function(){
      //console.log("点击了")
      //console.log(tab,port_page_number,"enen00");
     tab--;
     port_page_number--;
     // if(mm<=0){
     //   $(this).hide().siblings("span").show();
     //   mm=0;
     //   tab=1;
     // }
     if(tab<=0){
      $(this).hide().siblings("span").show();
      tab=0;
      port_page_number=1;
     }else{
      $(this).show();
     }
      $(page_class+">li").eq(tab).addClass("tab-naext_active").siblings("li").removeClass("tab-naext_active")
      list_con_con(port_page_number);
    })
  //下一页
    $(".footer_press_box>"+nextclass).click(function(){
      //选中类名的下标
     // //console.log(tab,port_page_number,"enen00");
     // //console.log("点击了")
 
        tab++;
       port_page_number++;
     // //console.log(mm,number,"2589363")
      if(tab>=number-1){
        $(this).hide().siblings("span").show();
        //mm=number-1;
        tab=number-1;
        port_page_number=number
      }else{
        $(this).show();
      }
      //console.log(tab,port_page_number,"enen")
      $(page_class+">li").eq(tab).addClass("tab-naext_active").siblings("li").removeClass("tab-naext_active");
      list_con_con(port_page_number); 
    })
 

    }) 

    function  list_con_con(list_number){
      ajax("get",port.artic,port_id+"/p/"+list_number+"/s/9/type/1",function(date,mm,ss){
        //内容
       // //console.log(ss)
        var detalength=ss.date.length;

        ////分页按钮数量
        var number = 0        
        ////列表每次渲染的新闻条数
        var newsnumber = 9
        //假设请求过的数据为100条
        var test_bumber = ss.total;
        number = Math.ceil(test_bumber / newsnumber);
          var str2="";
         for(var i=0;i<detalength;i++){
           str2+=`<li>

            <div class="exh_box"><img class="exh_box_img" src="${imgapi+date[i].articleimage}" alt=""></div>
            <p class="exh_title">${date[i].title}</p>
            <a class="exh_title_con_loc" href="./explore_deta.html?tab=系统案例&id=${date[i].id}">查看详情>></a>
          </li>`
         }
         $(con_class+">ul").html(str2)
       })
    }
}


//结束











})()