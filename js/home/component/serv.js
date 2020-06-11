(function(){
  product_support()
  download_center()
  contact_us()
  //渲染头部nav
 // navlist()

  //判断进入那个页面
      var tab=getQueryString("tab")


      if(tab){
        $(".exp_box_title_tab>span").eq(tab).addClass("exp_box_title_tab_active").siblings().removeClass("exp_box_title_tab_active");
        $("#exp_particular>.particular_box").eq(tab).show().siblings(".particular_box").hide()
      }else{
        $("exp_box_title_tab>span").eq(0).addClass("exp_box_title_tab_active").siblings().removeClass("exp_box_title_tab_active");
        $("#exp_particular>.particular_box").eq(0).show().siblings(".particular_box").hide()
      }
    //一级tab切换
    $(".exp_box_title_tab>span").click(function(){
      $(this).addClass("exp_box_title_tab_active").siblings().removeClass("exp_box_title_tab_active");
      $("#exp_particular>.particular_box").eq($(this).index()).show().siblings(".particular_box").hide()
  
    })




  
  //封装选中taber切换
  //activename 事件源的类名  activeclassname选中添加的类名  activebox需要显示和消失的类名
    function tab_active(activename,activeclassname,activebox){
      $(activename).click(function(){
        // <!-- //console.log("运行了") -->
        $(this).addClass(activeclassname).siblings().removeClass(activeclassname);
        $(activebox).eq($(this).index()).show().siblings(activebox).hide();
      })
    }
    //新闻中心taber切换
   // tab_active(".dynamic_title>li","dynamic_title_active",".press_dynamic_box")
  
  
  




//初始化页面
ajax("get",port.getcolum,"11",function(date){
  //console.log(date,"2021111")
  var banner=`<img src="${imgapi+date[0].smallimages}" alt="">`;
  $(".exp_box_img").html(banner);
  var listchildren=date[0].children;
  var strlist="";
  for(var i=0;i<listchildren.length;i++){
    strlist+=`
    <span >${listchildren[i].name}</span>
`
  }
  $(".exp_box_title_tab").html(strlist);
  $(".exp_box_title_tab span").eq(tab).addClass("exp_box_title_tab_active");
  //最后一个没有右边的线
  $(".exp_box_title_tab span").eq(listchildren.length-1).addClass("exp_title_line")
  $(".exp_box_title_tab span").off("click").on("click",function(){
    var index = $(this).index();
    switch(index){
      case 0:
          product_support();    
          break;       
      case 1:
           download_center()
    　　　　break;  
    　case 2:
      
          $(location).attr('href', "./service.html?tab=2");
          contact_us();
  　　　　  break;  
      default:        
      　　　　break;
    }   ;   
    $(".exp_box_title_tab span").eq(index).addClass("exp_box_title_tab_active").siblings().removeClass("exp_box_title_tab_active");
    $("#exp_particular .particular_box").eq(index).show().siblings("#exp_particular .particular_box").hide(); 
    });
})






//产品支持
function product_support(){
  //渲染







  ajax("get",port.quesion,"77/p/1/s/10000",function(date){
  str="";
  //console.log(date,"常见问题")
  for(var i=0;i<date.length;i++){
    str+=`
    <li class="question_con_box">
      <p class="question_con_box_p"><span>${i+1}.&nbsp; ${date[i].name}</span> <span class="que_list_unfold">+</span>
      </p>
      <div class="question_con_box_con">
        ${date[i].articlecontent}
      </div>
    </li>
    `
  }
  $(".question_con").html(str);
  //实例化
  //问题展开收缩
  $(".question_con>.question_con_box").click(function(){
    var display =$(this).find(".question_con_box_con").css('display')
    if(display=="none"){
      $(this).find(".que_list_unfold").html("-")
      $(this).find(".question_con_box_con").toggle(500,"swing")
    }else{
      $(this).find(".que_list_unfold").html("+")
      $(this).find(".question_con_box_con").toggle(500,"swing")
    }
  })

})
//搜索功能
$.ajax({
  "url":searchapi+"/lan/"+lan,
  "type":"get",
  dataType : "json",
  "success":function(date){

    var str0="<option value='0'>选择产品型号</option>";
    var str1="<option value='0'>选择产品类型</option>";
    var str2="<option value='0'>选择产品系列</option>";
    var str3="<option value='0'>选择产品分类</option>";
    for(var i=0;i<date.model2.length;i++){
      str0+=`
      <option value="${date.model2[i].id}">${date.model2[i].name}</option> 
      `
    };
    for(var i=0;i<date.type.length;i++){
      str1+=`
      <option value="${date.type[i].id}">${date.type[i].name}</option> 
      `
    };
    for(var i=0;i<date.series.length;i++){
      str2+=`
      <option value="${date.series[i].id}">${date.series[i].name}</option> 
      `
    };
    for(var i=0;i<date.class2.length;i++){
      str3+=`
      <option value="${date.class2[i].id}">${date.class2[i].name}</option> 
      `
    };
    $(".down_box_title0>.down_box_title_box0 select").html(str0)
    $(".down_box_title0>.down_box_title_box1 select").html(str1)
    $(".down_box_title0>.down_box_title_box2 select").html(str2)
    $(".down_box_title0>.down_box_title_box3 select").html(str3)
    //点击确定搜索

    $(".down_box_title0>.down_box_title_box2 .btn_serch").click(function(){
      var strnumber0 =$(".down_box_title0>.down_box_title_box0 select").val();//产品型号 modell
      var strnumber1 =$(".down_box_title0>.down_box_title_box1 select").val();//产品类型 type
      var strnumber2 =$(".down_box_title0>.down_box_title_box2 select").val();//产品系列 servies
      var strnumber3 =$(".down_box_title0>.down_box_title_box3 select").val();//产品分类 class2
      //请求数据
      //console.log(strnumber0,strnumber1,strnumber2,strnumber3)
      var str_con="";
      ajax("get",port.quesion,"77/p/1/s/10000/class2/"+strnumber3+"/series/"+strnumber2+"/type/"+strnumber1+"/model2/"+strnumber0,function(date2){
         // //console.log(date2,"内容221587")
          for(var i=0;i<date2.length;i++){
            str_con+=`
            <li class="question_con_box">
              <p class="question_con_box_p"><span>${i+1}.&nbsp; ${date2[i].name}</span> <span class="que_list_unfold">+</span>
              </p>
              <div class="question_con_box_con">
                ${date2[i].articlecontent}
              </div>
            </li>
            `
          }

         // //console.log(str_con,"内容")
          $(".question_con").html(str_con);
          //问题展开收缩
          $(".question_con>.question_con_box").click(function(){
            var display =$(this).find(".question_con_box_con").css('display')
            if(display=="none"){
              $(this).find(".que_list_unfold").html("-")
              $(this).find(".question_con_box_con").toggle(500,"swing")
            }else{
              $(this).find(".que_list_unfold").html("+")
              $(this).find(".question_con_box_con").toggle(500,"swing")
            }
          })



          

      })



    })

    
  }
})



}













//下载中心
function download_center(){

  ajax("get",port.getcolum,"17/p/1/s/10/type/2",function(date){
    //console.log(date,30000)
    var listchildren=date[0].children;
   
    var str="";
    for(var i=0;i<listchildren.length;i++){
     // //console.log(i)
      str+=`
      <span><em>${listchildren[i].name}</em> </span>
      `
    }
   $(".download_center_box_title").html(str);
  // //实例化
   $(".download_center_box_title span").eq(0).find("em").addClass("down_title_active");
   $(".download_center_box_title span").eq(listchildren.length-1).addClass("download_center_box_title_line");
    //软件下载taber
  //  tab_active(".download_center_box_title>span","down_title_active",".down_box_com")
    $(".download_center_box_title>span").click(function(){
      var index=$(this).index();
      $(".download_center_box_title span").find("em").removeClass("down_title_active");
      $(".download_center_box_title span").eq(index).find("em").addClass("down_title_active");
      $(".down_box_com").eq(index).show().siblings(".down_box_com").hide();

    })


  })



//下载函数
down_fun(78,".down_box_list_con1",".down_box_title1")
down_fun(79,".down_box_list_con2",".down_box_title2")
down_fun(80,".down_box_list_con3",".down_box_title3")
/*
port_id
dow_big_box
*/
function down_fun(port_id,con_class,active_class){


  ajax("get",port.quesion,port_id+"/p/1/s/100",function(date){

    var str="";
    for(var i=0;i<date.length;i++){
      str+=`
      <li class="">
        <div class="down_box_list_con_big">${date[i].name}</div>
        <span>${date[i].size}</span>
        <span>${timestampToTime(date[i].createtime)}</span>
        <p class="down_box_list_con_img">
          <a href="${imgapi+date[i].attachfiles}"  download="${imgapi+date[i].attachfiles}">
          <img class="btn" 
          src="./img/down_ico1.png" alt="">
        </a>
        </p>
      </li>
      `
    }
    $(con_class).html(str)
  
    var classtaber="";
    for(var i=0;i<date.length;i++){
    }
  });


  $.ajax({
    "url":searchapi+"/lan/"+lan,
    "type":"get",
    dataType : "json",
    "success":function(date){

      var str0="<option value='0'>选择产品型号</option>";
      var str1="<option value='0'>选择产品类型</option>";
      var str2="<option value='0'>选择产品系列</option>";
      var str3="<option value='0'>选择产品分类</option>";
      for(var i=0;i<date.model2.length;i++){
        str0+=`
        <option value="${date.model2[i].id}">${date.model2[i].name}</option> 
        `
      };
      for(var i=0;i<date.type.length;i++){
        str1+=`
        <option value="${date.type[i].id}">${date.type[i].name}</option> 
        `
      };
      for(var i=0;i<date.series.length;i++){
        str2+=`
        <option value="${date.series[i].id}">${date.series[i].name}</option> 
        `
      };
      for(var i=0;i<date.class2.length;i++){
        str3+=`
        <option value="${date.class2[i].id}">${date.class2[i].name}</option> 
        `
      };
      $(active_class+">.down_box_title_box0 select").html(str0)
      $(active_class+">.down_box_title_box1 select").html(str1)
      $(active_class+">.down_box_title_box2 select").html(str2)
      $(active_class+">.down_box_title_box3 select").html(str3)
      //点击确定搜索
        $(active_class+">.down_box_title_box2 .btn_serch").click(function(){
            var strnumber0 =$(active_class+">.down_box_title_box0 select").val();//产品型号 modell
            var strnumber1 =$(active_class+">.down_box_title_box1 select").val();//产品类型 type
            var strnumber2 =$(active_class+">.down_box_title_box2 select").val();//产品系列 servies
            var strnumber3 =$(active_class+">.down_box_title_box3 select").val();//产品分类 class2
            //if(strnumber0 &&)
            //console.log(strnumber0,strnumber1,strnumber2,strnumber3)
            ajax("get",port.quesion,port_id+"/p/1/s/100/class2/"+strnumber3+"/series/"+strnumber2+"/type/"+strnumber1+"/model2/"+strnumber0,function(date2){
              
              var str="";
  
              for(var i=0;i<date2.length;i++){
                str+=`
                <li class="">
                  <div class="down_box_list_con_big">${date2[i].name}</div>
                  <span>${date2[i].size}</span>
                  <span>${timestampToTime(date2[i].createtime)}</span>
                  <p class="down_box_list_con_img">
                    <a href="${imgapi+date2[i].attachfiles}"  download >
                    <img class="btn" 
                    src="../img/down_ico1.png" alt="">
                  </a>
                  </p>
                </li>
                `
              }
              $(con_class).html(str)
            })         


        })

      
 
    },
    "error":function(req){

    }
  });




}
//下载函数结束


  




}







//联系我们
function contact_us(){

   
  ajax("get",port.artic,"81/p/1/s/10/type/2",function(date){
      
      var str="";
        for(var i=0;i,i<date.length;i++){
          str+=`
          <li class="par-con-box">
            <p>${date[i].title}</p>
            <ul>
              ${date[i].articlecontent}
            </ul>
          </li>   
          `
        }
      $(".use-box .par-con").html(str)
  })


  ajax("get",port.banner,"82",function(date){

    //console.log(date,32323211111)
    var str="";
    for(var i=0;i<date.length;i++){
      str+=`
      <li>
        <div><img src="${imgapi+date[i].bannerimage}" alt=""></div><a href="${date[i].banner_url}">${date[i].name} </a>
      </li>
      `
    };
    $(".email-box-con ul").html(str);


  })







}









 
  
  
  })()