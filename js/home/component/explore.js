(function () {

  press_center()
  sp_activity()
  team_activity()
  invite()
  //渲染头部nav
 // navlist()

  //判断进入那个页面
      var tab=getQueryString("tab")
 

      if(tab){    
        $(".plant_box_title_tab li").eq(tab).addClass("plant_box_title_tab_active").siblings().removeClass("plant_box_title_tab_active");
        $("#exp_particular .particular_box").eq(tab).show().siblings(".plant_content .plant_title_tab_con").hide()
          
      }else{
        //直接进入调取
        $(".plant_box_title_tab li").eq(0).addClass("plant_box_title_tab_active").siblings().removeClass("plant_box_title_tab_active");
        $("#exp_particular .particular_box").eq(0).show().siblings(".plant_content .plant_title_tab_con").hide()
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
  //新闻中心taber切换
  tab_active(".dynamic_title>li", "dynamic_title_active", ".press_dynamic_box")

  //新闻中心taber切换
  tab_active(".dynamic_title>li", "dynamic_title_active", ".ex-dy-box>.exhibition_box_con")




 














  //新闻中心内容
  $(".press_page_next").click(function(){

  })



 


















  //初始化页面
ajax("get",port.getcolum,"10",function(date){
 // //console.log(date,11)
  var banenrimg=`<img src="${imgapi+date[0].smallimages}" alt=""> `;
  $(".exp_box_img").html(banenrimg);

  //获得列表
  var list=date[0].children;
  var strlist="";
  for(var i=0;i<list.length;i++){
    strlist+=`
    <span>${list[i].name}</span>
    `
  }
  $(".exp_box_title_tab").html(strlist);
  $(".exp_box_title_tab span").eq(tab).addClass("exp_box_title_tab_active");
  //最后一个没有右边的线
  $(".exp_box_title_tab span").eq(list.length-1).addClass("exp_title_line")
  $(".exp_box_title_tab span").off("click").on("click",function(){
    var index = $(this).index();
    switch(index){
      case 0:
          press_center()
          break;       
      case 1:
            sp_activity()
    　　　　break;  
    　case 2:
          team_activity()
  　　　　  break;  
  　　case 3:
          invite()
　　　　    break;  
      default:        
      　　　　break;
    }   ;   
    $(".exp_box_title_tab span").eq(index).addClass("exp_box_title_tab_active").siblings().removeClass("exp_box_title_tab_active");
    $("#exp_particular .particular_box").eq(index).show().siblings("#exp_particular .particular_box").hide(); 
    });
})














//新闻中心
  function press_center(){
    ajax("get",port.getcolum,"12/p/1/s/10/type/2",function(date){
      // //console.log(date,000)
         var list=date[0].children;
         var strlist="";
         for(var i=0;i<2;i++){
           strlist+=`<li><span>${list[i].name}</span></li>`;

         }
        // //console.log(list)
         $(".dynamic_title1 ").html(strlist)
         //实例taber
         $(".dynamic_title1 li").eq(0).find("span").addClass("dynamic_title_active");
         $(".dynamic_title1 li").eq(1).addClass("line_none");
         //taber切换
         $(".dynamic_title1 li ").click(function(){
           var index=$(this).index();
           $(".dynamic_title1 li").find("span").removeClass("dynamic_title_active");
          $(".dynamic_title1 li").eq(index).find("span").addClass("dynamic_title_active");
          $(".press_center_box .press_dynamic_box").eq(index).show().siblings(".press_center_box .press_dynamic_box").hide();

         })


       //  taberone(".dynamic_title1 li ","dynamic_title_active ",".press_center_box .press_dynamic_box")

        } )
//参数 分页的类名  内容的类名
industry(73,".press_page_list1",".press_list1")
industry(74,".press_page_list2",".press_list2")
function industry(idnumber,contentclass1,contentclass2){
  
  ajax("get",port.artic,idnumber+"/p/1/s/10000000/type/1",function(date){
  // //console.log(date,"hah11")
    //实现分页效果----新闻中心 行业动态
$(function () {

//分页按钮数量
var number = 0
// 生成按钮数量
var str = "";
//当前选中的第几个数字
var tab = 0;
//列表每次渲染的新闻条数
var newsnumber = 20
//假设请求过的数据为100条
var test_bumber = date.length;
number = Math.ceil(test_bumber / newsnumber)

//console.log(number, "按钮数量")
//初次渲染页面
$(function () {
for (var i = 1; i < number + 1; i++) {
str += "<li>" + i + "</li>"
}
// //console.log(str)
$( contentclass1 ).html(str)
tab_page()

$(contentclass1+">li").eq(tab).addClass("tab-naext_active").siblings("li").removeClass("tab-naext_active")
})
function tab_page() {
//避免多渲染
var list = "";
if (tab == number-1) {
  var tabnumber= tab * newsnumber + 1
    if(newsnumber >=date.length){
      tabnumber=0
    }
for (var i =tabnumber; i < date.length; i++) {
 // //console.log(tabnumber ,666333)
 // //console.log(date ,666333)
  list += `<li class="press_list_box">
    <div class="press_list_left_time">
      <em>${timestampToTime2(date[i].createtime)}</em>
      <span>${timestampToTime1(date[i].createtime)}</span>
    </div>

    <div class="press_list_content">
      <ul>
        <li>
        <h5>${date[i].name}</h5>
        </li>
        <li>
        <p>${date[i].abstract}</p>
        </li>
        <li><a href="./explore_deta.html?tab=行业动态&&id=${date[i].id}">查看详情>></a></li>
      </ul>
    </div>
    <div class="press_list_right_img">
         <img src="${imgapi+date[i].articleimage}" alt="">
    </div>
  </li>`
}
} else {
var newnumber_legth=newsnumber * (tab + 1) + 1;
var tabnewnumber=tab * newsnumber + 1;
//数量太少的处理方法，重新赋值
if(newnumber_legth>date.length){
newnumber_legth=date.length;
tabnewnumber=0
}

for (var i =tabnewnumber ; i <newnumber_legth ; i++) {

  //console.log(tabnewnumber ,666)
  list += `<li class="press_list_box">
    <div class="press_list_left_time">
    <em>${timestampToTime2(date[i].createtime)}</em>
    <span>${timestampToTime1(date[i].createtime)}</span>
    </div>
    <div class="press_list_content">
      <ul>
        <li>
          <h5>${date[i].name}</h5>
        </li>
        <li>
          <p>${date[i].abstract}</p>
        </li>
        <li><a href="./explore_deta.html?tab=行业动态&&id=${date[i].id}">查看详情>></a></li>
      </ul>
    </div>
    <div class="press_list_right_img">
      <img src="${imgapi+date[i].articleimage}" alt="">
    </div>

  </li>`
}
}

$(contentclass2).html(list)
}
//点击上一页
$(".press_page_prev").click(function () {
// //console.log(tab,"上")
if (tab == 0) {
tab = 0
} else {
tab--;
}
tab_page()
$(".press_page_list>li").eq(tab).addClass("tab-naext_active").siblings("li").removeClass("tab-naext_active")
})
//点击下一页
$(".press_page_next").click(function () {
if (tab >= (number-1)) {
tab = number-1
} else {
tab++;
}
tab_page()
//点击更换类名
// //console.log(active_number)
$(".press_page_list>li").eq(tab).addClass("tab-naext_active").siblings("li").removeClass("tab-naext_active")

})

})

})

}

//结束
}





  //精彩活动
  function sp_activity(){

    ajax("get",port.getcolum,"13/p/1/s/10/type/2",function(date){
      //console.log(date,000)
        var list=date[0].children;
        var strlist="";
        for(var i=0;i<2;i++){
          strlist+=`<li><span>${list[i].name}</span> </li>`;
        }
       // //console.log(list)
        $(".dynamic_title2 ").html(strlist)
        //实例taber
       // $(".dynamic_title2 li").eq(0).addClass("dynamic_title_active ")
        //taber切换
       // taberone(".dynamic_title2 li","dynamic_title_active ",".ex-dy-box .exhibition_box_con")


        //实例taber
        $(".dynamic_title2 li").eq(0).find("span").addClass("dynamic_title_active");
        $(".dynamic_title2 li").eq(1).addClass("line_none");
        //taber切换
        $(".dynamic_title2 li ").click(function(){
          var index=$(this).index();
          $(".dynamic_title2 li").find("span").removeClass("dynamic_title_active");
         $(".dynamic_title2 li").eq(index).find("span").addClass("dynamic_title_active");
         $(".ex-dy-box .exhibition_box_con").eq(index).show().siblings(".ex-dy-box .exhibition_box_con").hide();

        })






       })
//idnumber参数,contentclass1分页名字class,contentclass2填充内容的class
       company(75,".active_prev_number1",".container-fluid1");
       company(76,".active_prev_number2",".container-fluid2");



       function company(idnumber,contentclass1,contentclass2){
        //  国内展会
        ajax("get",port.artic,idnumber+"/p/1/s/10000000/type/1",function(date){
            //国内展会---精彩活动
           // //console.log(date,256)
   $(function () {
 
     //分页按钮数量
     var number = 0
     // 生成按钮数量
     var str = "";
     //当前选中的第几个数字
     var tab = 0;
     //列表每次渲染的新闻条数
     var newsnumber = 9;
     //假设请求过的数据为100条
     var test_bumber = date.length;
     number = Math.ceil(test_bumber / newsnumber)
 
     //console.log(number, "按钮数量")
     //初次渲染页面
     $(function () {
       for (var i = 1; i < number + 1; i++) {
         str += "<li>" + i + "</li>"
       }
       //console.log(str)
       $(contentclass1).html(str)
       tab_page()
       $(contentclass1+">li").eq(tab).addClass("fluid-btn_active").siblings("li").removeClass("fluid-btn_active")
     })
     function tab_page() {
         //避免多渲染
         var list = "";
       if (tab == number-1) {
        var newnumber_legth=newsnumber * (tab + 1) + 1;
        var tabnewnumber=tab * newsnumber + 1;
       // //console.log(tab,555555555555555555)
        //数量太少的处理方法，重新赋值
        if(newnumber_legth>date.length){
        newnumber_legth=date.length;
        tabnewnumber=0
        }
        
        for (var i =tabnewnumber ; i <newnumber_legth ; i++) {
         
           list += `<li class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
             <div class="exh_box"><img class="exh_box_img" src="${imgapi+date[i].articleimage}" alt=""></div>
             <p class="exh_title">${date[i].title}</p>
             <p class="exh_title_con">
                   ${date[i].abstract}
             </p>
             <a class="exh_title_con_loc" href="./explore_deta.html?tab=国内展会&&id=${date[i].id}">了解更多</a>
           </li>`
         }
 
 
       } else {
         // 当数据较少的处理
         var newnumber_legth2= newsnumber * (tab + 1) + 1;
         var tabnewnumber=tab * newsnumber + 1;
         if(newnumber_legth2>date.length){
           newnumber_legth2=date.length;
           tabnewnumber=0
         };
         for (var i =tabnewnumber ; i <newnumber_legth2; i++) {
           list += `<li class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
             <div class="exh_box"><img class="exh_box_img" src="${imgapi+date[i].articleimage}" alt=""></div>
             <p class="exh_title">${date[i].title}</p>
             <p class="exh_title_con">
                   ${date[i].abstract}
             </p>
             <a class="exh_title_con_loc" href="./explore_deta.html?tab=国内展会&&id=${date[i].id}">了解更多</a>
           </li>`
         }
 
       }
       $(contentclass2+">.row").html(list)
     }
 
 
 
     //点击上一页
     $(".active_prev").click(function () {
       // //console.log(tab,"上")
       if (tab == 0) {
         tab = 0
       } else {
         tab--;
       }
       tab_page()
       $(".active_prev_number>li").eq(tab).addClass("fluid-btn_active").siblings("li").removeClass("fluid-btn_active")
     })
     //点击下一页
     $(".active_next").click(function () {
       if (tab >= (number-1)) {
         tab = number-1
       } else {
         tab++;
       }
       // //console.log(tab, 2221111111111111111111111111)
       tab_page()
       //点击更换类名
       // //console.log(active_number)
       $(".active_prev_number>li").eq(tab).addClass("fluid-btn_active").siblings("li").removeClass("fluid-btn_active")
 
     })
 
   })
           
 })
 



       }
//结束
  }






//团队活动
  function team_activity(){
    ajax("get",port.artic,"14/p/1/s/10/type/2",function(date){
    //  //console.log(date,661235)
      var str="";
      var strimg="";
      for(var i=0;i<date.length;i++){
        str+=`
        <li class=" active_li">
                    <div class="group_taber_banner_box">
                      <div class="group_taber_banner_img"><img src="${imgapi+date[i].articleimage}" alt=""></div>
                      <div class="group_taber_banner_text"><span>${date[i].title}</span>
                        <p>${date[i].abstract}</p>             
                      </div>
                    </div>
        </li>
        `;
        strimg+=`
        <div class="swiper-slide">
          <img src="${imgapi+date[i].articleimage}" alt="">
          <p>${date[i].name}</p>
        
        </div> 
        
        `;        
      }
    $(".group_taber_box .group_taber_banner").html(str);
    $("#group_banner_box1 .swiper-wrapper").html(strimg);
    //实例化内容
    $(".group_taber_box .group_taber_banner li").eq(0).show().siblings("li").hide()
  //团建互动taber
  tab_active("#group_banner_box1>.swiper-wrapper>.swiper-slide", "swiper-slide-active", ".group_taber_banner>li")
 //底部无限滚动
 var group_banner_box1 = new Swiper('#group_banner_box1', {
  slidesPerView: 5,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


    })
  }






//招聘精英

function invite(){

  ajax("get",port.artic,"140/p/1/s/100/type/2",function(date){
      //console.log(date,111);
      var str0=`${date[0].articlecontent}`
      $(".job_vacancy_title2").html(str0);
      //console.log(date,11132323);
      var strcon="";
      var strcon1="";
      var strcon2="";
   
        strcon1+=  `
        <li class="job_title_box job_title_box12">
          <div class="job_title_box_img job_title_box_img_flag1"><img src="${imgapi+date[1].articleimage}" alt=""></div>
          <div class="job_title_box_text">
            <span>${date[1].name}</span>
            ${date[1].articlecontent} 
          </div>
          <div class="job_title_box_img_flag2"><img src="${imgapi+date[1].articleimage}" alt=""></div>
        </li>  `;

        strcon2=`
        <li class="job_title_box job_title_box2">
          <div class="job_title_box_text2 job_title_box_text23">
            <span>${date[2].name}</span>
           
            ${date[2].articlecontent} 

    
          </div>
          <div class="job_title_box_img"><img src="${imgapi+date[2].articleimage}" alt=""></div>

        </li>
        `


        strcon=strcon1+strcon2
   
      $(".job_recommend").html(strcon)
  




    


  })

  
  ajax("get",port.artic,"141/p/1/s/1000/type/2",function(date){
    //console.log(date,0202)
    var str="";
   

    for(var i=0;i<date.length;i++){
    
      str+=`
      <li class="job-list-con">
        <div class="job-list-con-box">
          <span class="job-list-con-box-sm2">${string_arr2(date[i].name)[0]}</span>
          <span>${string_arr2(date[i].name)[1]}</span>
          <span>${string_arr2(date[i].name)[2]}</span>
          <span>${string_arr2(date[i].name)[3]}</span>
          <span>${timestampToTime(date[i].updatetime) }</span>
          <span>查看详情<span class="caret1 "></span></span>
        </div>
  
        <div class="job-list-con-box2">
            ${date[i].articlecontent}
  
        </div>
      </li> `
    }
 $(".job-content-box .job-content-box-con").html(str)
 //招聘详情
 $(".job-list-con-box").click(function(){
   var display =$(this).next(".job-list-con-box2").css('display')
   // //console.log(display)
   if(display == 'none'){
     $(this).find(".caret1").removeClass("caret1").addClass("caret2")

   }else{
     $(this).find(".caret2").removeClass("caret2").addClass("caret1")

   }
     $(this).next(".job-list-con-box2").toggle(500,"swing")

  

 })
 

  })






}









})()