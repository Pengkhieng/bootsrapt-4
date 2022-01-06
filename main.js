// button menu
document.getElementById("btn_menu").addEventListener("click",function(){
    document.getElementById("bg_popup").style.top = "0px";
});
document.getElementById("bg_popup").addEventListener("click",function(){
    document.getElementById("bg_popup").style.top = "-900px";
});



//love active
$(document).ready(function(){
    var like = $('.fa-heart');
    like.click(function(){
        $(this).css({"color":"red"});
    });
});

//love active
// var n=0;
// function getHert(){
//     $(document).ready(function(){
//         var like = $('.fa-heart');
//         like.click(function(){
//             if(n==0){
//                 $(this).css({"color":"red"});
//                 n=1;
//             }else{
//                 $(this).css({"color":"white"});
//                 n=0;
//             }
//         });
//     });
// }
// getHert();