//user1 position
var tp=0;
var left =0;


//user2 position

var tp_2 = 0;
var lt_2 = 0;

//map size

var map_with = 500;
var map_hei = 500;

//border color
var boder_c = 0;




// result 
var last = true;

//start
var stat_t = true;
$(function () {
    
	var start = setInterval(function(){
		if(stat_t){
			if(sessionStorage.getItem("start") == "true"){
				$("#start").css({"display":"none"});
				user_position();
				stat_t = false;
			}else{
				starting();
			}
		}
	},1200);
	
    $("#map").css({"width":map_with+"px","height":map_hei+"px"});
    var map_r = map_with;
    var map_b = map_hei;
	 
  
	
// box size   var timer = setInterval(function(){
//        map();
//    },5000)

    var map_border =  setInterval(function(){
        boderColor();
    },10000)
    
    $('body').keydown(function (e) {
        
        var maps = $("#map").offset();
        var user = $("#user").offset();
        var two_user = $("#user_2").offset();
        
        var key = e.keyCode;
        
        
//        user1
        if(key === 37){
            if(user.left > maps.left+20){
                left -= 10 ;
                $("#user").css({"left":left+"px"});
                    bang_f();
			}
        }else if(key === 38){
            if(user.top > maps.top+20){
                tp -= 10 ;
                $("#user").css({"top":tp+"px"});
                    bang_f();
			}
        }else if(key === 39){
            if(user.left < maps.left+map_hei-20){
                left += 10 ;
                $("#user").css({"left":left+"px"});
                    bang_f();
			}
        }else if(key === 40){
            if(user.top < maps.top+map_with-20){
                tp += 10 ;
                $("#user").css({"top":tp+"px"});
                    bang_f();
			}
        }
        
        /*user 2*/
        if(key === 65){
            if(two_user.left > maps.left+20){
                lt_2 -= 10 ;
                $("#user_2").css({"left":lt_2+"px"});
                    bang_f();
			}
        }else if(key === 87){
            if(two_user.top > maps.top+20){
                tp_2 -= 10 ;
                $("#user_2").css({"top":tp_2+"px"});
                    bang_f();
            }    
        }else if(key === 68){
            if(two_user.left < maps.left+map_with-20){
                lt_2 += 10 ;
                $("#user_2").css({"left":lt_2+"px"});
                    bang_f();
            }    
        }else if(key === 83){
            if(two_user.top < maps.top+map_hei-20){
                tp_2 += 10 ;
                $("#user_2").css({"top":tp_2+"px"});
                    bang_f();
            }
        }
        
        
            
        
    });
});



//function map(a){
//    map_with -=50;
//    map_hei -=50;
//    var u = $("#user").offset();
//    var m = $("#map").offset();
//    $("#map").css({"width":map_with+"px","height":map_hei+"px"});
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

var time = 0;

function starting(){
	if(time<3){
			time++;
			$("#start>span").fadeOut();
			$("#start>span:nth-child("+time+")").css({"display":"block"});
		}else{
			stat_t =false;
			$("#start").fadeOut();
			user_position();
			sessionStorage.setItem("start", "true");
			
		}
}


//start_user_position_function
function user_position(){
	
	
	var a = Math.floor(Math.random() * 2) + 1;
	
	if(a > 1){
		$("#left").animate({left:0});
			boder_c++;
			boderColor();
	}else{
		$("#right").animate({right:0});
			boder_c =0;
			boderColor();
	}
	
	
	 /*user 1 position*/
    tp = 10 * Math.floor(Math.random() * 45) + 1;
    left = 10 * Math.floor(Math.random() * 45) + 1;
	/*user 2 position*/
	tp_2 = 10 * Math.floor(Math.random() * 45) + 1;
	lt_2 = 10 * Math.floor(Math.random() * 45) + 1;
	
	$("#user").css({"top":tp+"px","left":left+"px"});
	$("#user_2").css({"top":tp_2+"px","left":lt_2+"px"});
}


//bang_function
function bang_f(){
        if(tp === tp_2 && left === lt_2){
            if(boder_c>0){
                if(last){
                    alert("blue win");
                    $("#result").css({"display":"block"}).animate({width:100+"%",height:100+"%",top:0,left:0});
                    $("#result>.title>span").addClass("blue").html("BLUE");
                    last = false;
                }
            }else{   
                if(last){
                    alert("red Win");
                    $("#result").css({"display":"block"}).animate({width:100+"%",height:100+"%",top:0,left:0});
                    $("#result>.title>span").addClass("red").html("RED");
                    last = false;
                }
            }
        }
    
}


//map_border_color_timer
function boderColor(){
    if(boder_c >0){
        boder_c=0;
        $("#map").css({"border":"red solid 10px"});
        $("#left").animate({left:0});
        $("#right").animate({right:"-"+30+"px"});

    }else{
        boder_c++;
        $("#map").css({"border":"blue solid 10px"})
        $("#right").animate({right:0});
        $("#left").animate({left:"-"+30+"px"});

    }
}


// regame

function regame(){
    location.reload();
}