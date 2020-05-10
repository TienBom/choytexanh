$(document).ready(function() {
    $('#resizing_select').change(function(){
      $("#width_tmp_option").html($('#resizing_select option:selected').text()); 
      $(this).width($("#width_tmp_select").width());
      var ab = $(this).width() + 20;
      //alert(ab);
      document.getElementById("search-bar").style.width = "calc(100% - " + ab + "px)";
    });
    $('#resizing_select_res').change(function(){
        $("#width_tmp_option_res").html($('#resizing_select_res option:selected').text()); 
        $(this).width($("#width_tmp_select_res").width());
    });
    $('#res-cancel').click(function(){
       $("#responsive-menu").css("left","-261px");
    });  
    $('#menu-icon').click(function(){
       $("#responsive-menu").css("left","0px");
    });
    var firstChange = true;
    window.addEventListener("scroll", function(){
        var checkY = this.window.pageYOffset;
        if(checkY == 0){
            $('#header-details').css({
                "position":"absolute",
                "top" : "0px",
                "transition" : "unset"
            })
            firstChange = true;
        }
        if(checkY > 130 && checkY < 400){
            if(firstChange){
                $('#header-details').css({
                    "position":"fixed",
                    "top" : "-126px",
                })
            }
        }
        else if(checkY >= 400){
            firstChange = false;
            $('#header-details').css({
                "position":"fixed",
                "top" : "0px",
                "transition" : "top 1s"
            })
        }
    });
});
var kichthuoc = document.getElementById("img1").clientWidth;
var chuyen = 0;
function Next(id_slide) {
    var slide = document.getElementById(id_slide);
    if (chuyen < kichthuoc * 1)
      chuyen += kichthuoc;
    else
      chuyen = 0;
    slide.style.marginLeft = '-' + chuyen + 'px';
}
function PreNext(id_slide) {
    var slide = document.getElementById(id_slide);
    if (chuyen == 0)
        chuyen = kichthuoc
    else
        chuyen -= kichthuoc;
    slide.style.marginLeft = '-' + chuyen + 'px';
}
$('.quick-view').click(function(){
    $('.dialog').css({
        "opacity": "1",
        "visibility": "visible"
    })
    $('.fog-background').css({
        "opacity": "1",
        "visibility": "visible"
    })
    $('body').css("overflow-y","hidden");
})
$('.button-close').click(function(){
    $('.dialog').css({
        "opacity": "0",
        "visibility": "hidden"
    })
    $('.fog-background').css({
        "opacity": "0",
        "visibility": "hidden"
    })
    $('body').css("overflow-y","visible");
})