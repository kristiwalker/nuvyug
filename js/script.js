$(document).ready(function(){

    $(function(){

       $(".dropdown-menu li a").click(function(){

         $(".btn:first-child").text($(this).text());
         $(".btn:first-child").val($(this).text());

      });

    });

    // Change nav background on scroll
   var scroll_start = 0;
   var startchange = $('#start-change');
   var offset = startchange.offset();

   console.log("scroll");
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      console.log("start");
      if(scroll_start > offset.top) {
          $('#nav-change').css('background-color', '#222');
       } else {
          $('#nav-change').css('background-color', 'transparent');
       }
   });

   $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.navbar-brand').fadeIn();
        $('.logo').fadeOut();

      }
      if ($(this).scrollTop() > 0) {
        $('.logo').fadeOut();
      }
      else {
        $('.navbar-brand').fadeOut();
        $('.logo').fadeIn();
      }
    });

    $(function() {
        $("a.cd-signin")
            .mouseover(function() {
                var src = $(".sign-in-icon").attr("src").match(/[^\.]+/) + "-hover.png";
                $(".sign-in-icon").attr("src", src);
            })
            .mouseout(function() {
                var src = $(".sign-in-icon").attr("src").replace("-hover.png", ".png");
                $(".sign-in-icon").attr("src", src);
            });
    });

    // $("a.cd-signin.dropbtn.hidden-xs").hover(function() {
    //     $(this).attr("src",".sign-in-icon.png");
    //     }, function() {
    //     $(this).attr("src","button.png");
    // });

});
