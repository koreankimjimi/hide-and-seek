var tp=0;
var left =0;

var tp_2 = 460;
var lt_2 = 470;

var map_with = 500;
var map_hei = 500;

window.onload = user_position;



$(function () {
    $("#map").css({"width":map_with+"px","height":map_hei+"px"});
    var map_r = map_with;
    var map_b = map_hei;
	 
    /*user 1 position*/
    tp = Math.floor(Math.random() * 500) + 1;
    left = Math.floor(Math.random() * 500) + 1;
	/*user 2 position*/
	tp_2 = Math.floor(Math.random() * 500) + 1;
	lt_2 = Math.floor(Math.random() * 10) + 1;
	
	
// box size   var timer = setInterval(function(){
//        map();
//    },5000)

    
    
    $('body').keydown(function (e) {
        
        var maps = $("#map").offset();
        var user = $("#user").offset();
        var two_user = $("#user_2").offset();
        console.log(e.keyCode);
        var key = e.keyCode;
        
        if(key === 37){
            if(user.left > maps.left+10){
                left -= 10 ;
                $("#user").css({"left":left+"px"});
			}
        }else if(key === 38){
            if(user.top > maps.top+10){
                tp -= 10 ;
                $("#user").css({"top":tp+"px"});
			}
        }else if(key === 39){
            if(user.left < maps.left+map_hei-20){
                left += 10 ;
                $("#user").css({"left":left+"px"});
			}
        }else if(key === 40){
            if(user.top < maps.top+map_with-20){
                tp += 10 ;
                $("#user").css({"top":tp+"px"});
			}
        }
        
        /*user 2*/
        if(key === 65){
            if(two_user.left > maps.left+10){
                lt_2 -= 10 ;
                $("#user_2").css({"left":lt_2+"px"});
			}
        }else if(key === 87){
            if(two_user.top > maps.top+10){
                tp_2 -= 10 ;
                $("#user_2").css({"top":tp_2+"px"});
            }    
        }else if(key === 68){
            if(two_user.left < maps.left+map_with-20){
                lt_2 += 10 ;
                $("#user_2").css({"left":lt_2+"px"});
            }    
        }else if(key === 83){
            if(two_user.top < maps.top+map_hei-20)
                tp_2 += 10 ;
                $("#user_2").css({"top":tp_2+"px"});
        }
        
        
        
        if(user.top === two_user.top && user.left === two_user.left){
            alert("죽음");
        }
    });
});



//function map(a){
//    map_with -=50;
//    map_hei -=50;
//    var u = $("#user").offset();
//    var m = $("#map").offset();
////    $("#map").css({"width":map_with+"px","height":map_hei+"px"});
//    $("#map").animate({width:map_with,height:map_hei});
//     if(user.left > maps.left+10){}else{alert();}
//	
//	
//	
//    console.log($("#map").attr("style"),a);
//    
//    
//    
//}


function user_position(){
	 /*user 1 position*/
    tp = Math.floor(Math.random() * 480) + 1;
    left = Math.floor(Math.random() * 480) + 1;
	/*user 2 position*/
	tp_2 = Math.floor(Math.random() * 480) + 1;
	lt_2 = Math.floor(Math.random() * 480) + 1;
	
	$("#user").css({"top":tp+"px","left":left+"px"});
	$("#user_2").css({"top":tp_2+"px","left":lt_2+"px"});
}