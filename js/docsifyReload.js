<!-- 跳转页 -->
   var referrer = document.referrer;
   var url = window.location.href
   console.log(document.referrer) ;
   console.log(referrer) ;

  <!--  有上个url    -->
    if (referrer) {
        <!--  不是当前页面    -->
      if(url != referrer){
              <!--  不是404页面    -->
          if(referrer.indexOf("404.html") == -1){
                var spath = referrer.substring(window.location.origin.length);
                var selecturl = "a[href=\'"+spath+"\']";
                console.log("模拟跳转");
                console.log(selecturl);
                Docsify.dom.find(selecturl).click();

          }
      }

    }