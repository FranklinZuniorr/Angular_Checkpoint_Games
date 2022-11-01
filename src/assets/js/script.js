// Barra de categorias.
iniciar();

function iniciar(){
    cat = ["Hardware", "Periférico", "Games", "Computadores", "Smartphones", "Tv"];
    x = 0;
    catt = cat.length/2;
    
    bar = ["" + cat[0+x], "" + cat[1+x], "" + cat[2+x]];
    ct1.innerHTML = bar[0];
    ct2.innerHTML = bar[1];
    ct3.innerHTML = bar[2];

}

function mais(a = 0){

    if(a == 1 && x < catt){
        x++;
        console.log(x);
        bar = ["" + cat[0+x], "" + cat[1+x], "" + cat[2+x]];
        ct1.innerHTML = bar[0];
        ct2.innerHTML = bar[1];
        ct3.innerHTML = bar[2];
        $(".ct").addClass("fadeIn");
        $(".ct").removeClass("fadeIn", 300);
    }

    else if(a == 2 && x > 0){
        x = x - 1;
        bar = ["" + cat[0+x], "" + cat[1+x], "" + cat[2+x]];
        ct1.innerHTML = bar[0];
        ct2.innerHTML = bar[1];
        ct3.innerHTML = bar[2];
        $(".ct").addClass("fadeIn");
        $(".ct").removeClass("fadeIn", 300);
    }

}
// Barra de categorias.

$(".ct").click(function(){
   $(this).addClass("fadeIn");
   $(this).removeClass("fadeIn", 300);
});

$("button").click(function(){
    $(this).addClass("bounceIn");
    $(this).removeClass("bounceIn", 300);
 });

$("#pes").click(function(){
    $(this).addClass("bounceIn");
    $(this).removeClass("bounceIn", 300);
});

$(".ct").mouseenter(function(){
    $(this).animate({opacity: 0.5}, 100);;
 });

$(".ct").mouseleave(function(){
    $(this).animate({opacity: 1}, 100);;
 });

$("button").mouseenter(function(){
    $(this).animate({opacity: 0.5}, 100);;
 });

$("button").mouseleave(function(){
    $(this).animate({opacity: 1}, 100);;
 });

$(".menu").mouseenter(function(){
    $(this).animate({opacity: 0.5}, 100);;
 });

$(".menu").mouseleave(function(){
    $(this).animate({opacity: 1}, 100);;
 });

$(".menu").click(function(){
    $(this).addClass("bounceIn");
    $(this).removeClass("bounceIn", 300);
});