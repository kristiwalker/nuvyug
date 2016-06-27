$(function(){

   $(".dropdown-menu li a").click(function(){

     $(".btn:first-child").text($(this).text());
     $(".btn:first-child").val($(this).text());

  });

});

$(document).ready(function(){
    $(".dropdown-toggle").dropdown();
});
