$(function(){
    //步骤分析：
    //1 通过顶部li点击操作，设置当前li的active类名(addClass)，其他li移除类名(removeClass)
    $("li").click(function(){
      $(this).addClass("active").siblings().removeClass("active");
      //2 根据当前li的索引值(index)找到底部对应的div，设置selected类名，其他div移除类名
      var index = $(this).index();//获取当前li的索引值
      $(".main").eq(index).addClass("selected").siblings().removeClass("selected");
    });
   

  });