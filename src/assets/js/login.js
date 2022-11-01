$("#lg").click(function(){
  $("#entrar").show();
  $("#cadastrar").hide();
  $(".apresenta").html("Tela de login");
  $("#lg").animate({opacity: 0.5}, 100);
  $("#lg2").animate({opacity: 1}, 100);
  
  $(".apresenta").addClass("ann");
  $(".apresenta").removeClass("ann", 500);

  $("#entrar").addClass("bounce");
  $("#entrar").removeClass("bounce", 1000);
});

$("#lg2").click(function(){
    $("#entrar").hide();
    $("#cadastrar").show();
    $(".apresenta").html("Tela de cadastro");
    $("#lg").animate({opacity: 1}, 100);
    $("#lg2").animate({opacity: 0.5}, 100);

    $(".apresenta").addClass("ann");
    $(".apresenta").removeClass("ann", 500);

    $("#cadastrar").addClass("bounce");
    $("#cadastrar").removeClass("bounce", 1000);
  });

$("#inicial").click(function(){
$(this).addClass("bounceIn");
$(this).removeClass("bounceIn", 300);
  });

$("#inicial").mouseenter(function(){
    $(this).animate({opacity: 0.5}, 100);;
 });

$("#inicial").mouseleave(function(){
    $(this).animate({opacity: 1}, 100);;
 });

 function alter(x) {

  if(x == 0){
    document.getElementById("lg").style.opacity = "0.5";
    document.getElementById("lg2").style.opacity = "1";

    cadastroLogin = 1;

  }

  else if(x == 1){
    document.getElementById("lg2").style.opacity = "0.5";
    document.getElementById("lg").style.opacity = "1";

    cadastroLogin = 0;
  }

}