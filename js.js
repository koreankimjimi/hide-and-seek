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
var stat_t = false;

//timer start
var timeStart = false;

//plus num
var plus_num = 0;

//plus posi
var plus_l = 0;
var plus_t = 0;

//keystart
var key_s = false;

//now user
var nowUser;

//key_no
var key_no = true;

$(function () {
    
//	var map_border =  setInterval(function(){
//		if(timeStart == true){
//        	
//		}
//    },10000)
	
       
        
	
		var timer = setInterval(function(){
			if(timeStart == true){
				
				var time = $("#timer>span").html()-1;
				
					if(time > 0){
						$("#timer>span").html(time);
					}else{
						
						boderColor();
					}
				var rand = Math.floor(Math.random() * 9);
				var posi = $("#map").offset();
				
				
			}
		},1000)
	
	   var plus_f = setInterval(function(){
                        
						plus_l = 10 * Math.floor(Math.random() * 45)+1;
					
						plus_t = 10 * Math.floor(Math.random() * 45)+1;	
					
						$("#map").append("<div id='plus'></div>");
						$("#plus").css({"width":"10px","height":"10px",
									"position":"absolute",
										"top":plus_t+"px","left":plus_l+"px",
									   "background":"#009688","display":"block"});
                        key_no = true;
				
       },5000)
	var start = setInterval(function(){
		if(stat_t){
				starting();
		}
	},1100);
	
    $("#map").css({"width":map_with+"px","height":map_hei+"px"});
    var map_r = map_with;
    var map_b = map_hei;
	 
  
	
// box size   var timer = setInterval(function(){
//        map();
//    },5000)

    

    $('body').keydown(function (e) {
        
        var maps = $("#map").offset();
        var user = $("#user").offset();
        var two_user = $("#user_2").offset();
        
        var key = e.keyCode;
        
        key_s == false?key=false:true;
        
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
			stat_t = false;
			timeStart = true;
            key_s = true;
			$("#start").fadeOut(100);
			user_position();
//			sessionStorage.setItem("start", "true");
			
		}
}


//start_user_position_function
function user_position(){
	
	
	var a = Math.floor(Math.random() * 2) + 1;
	
	if(a > 1){
		$("#left").animate({left:0});
			boder_c++;
			boderColor();
            nowUser = "red";
	}else{
		$("#right").animate({right:0});
			boder_c =0;
			boderColor();
            nowUser = "blue";
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
    	
//		plus bang
        var t = parseInt($("#timer>span").html());
        
		if(tp === plus_t && left === plus_l){
			if(nowUser == "blue"){
                if(key_no == true){
                    $("#timer>span").html(t+10);
                    $("#plus").fadeOut();
                    key_no = false;
                }
            }else{
                if(key_no == true){
                    if(t>10){
                        $("#timer>span").html(t-10);    
                    }else{
                        boder_c = 0;
                        boderColor();   
                    }
                    $("#plus").fadeOut();
                    key_no = false;
                }
            }
		}else if(tp_2 === plus_t && lt_2 === plus_l){
			if(nowUser == "red"){
                if(key_no == true){
                    $("#timer>span").html(t+10);
                    $("#plus").fadeOut();
                    key_no = false;
                }
            }else{
                if(key_no == true){
                    if(t>10){
                        $("#timer>span").html(t-10);        
                    }else{
                        boder_c = 1;
                        boderColor();
                    }
                    $("#plus").fadeOut();
                    key_no = false;
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
        nowUser = "red";
        time = 10;
        $("#timer>span").html(time);
    }else{
        boder_c++;
        $("#map").css({"border":"blue solid 10px"})
        $("#right").animate({right:0});
        $("#left").animate({left:"-"+30+"px"});
        nowUser = "blue";
        time = 10;
        $("#timer>span").html(time);
    }
}


// regame

function regame(){
    location.reload();
}

//intro next
function intro_n(){
	
	stat_t = true;
	$("#start>img").fadeOut();
	$("#start>.start").fadeOut();
}
var num =0;
function intro(){
    var w_w = $(window).width();
    if(w_w >1100){
        if(num > 0){
            num=0;
            $("#start>img[alt = intro]").fadeOut();
            $("#start>.intro_w>span").html("상세 설명");
        }else{
             num++;
            $("#start>img").fadeIn();
            $("#start>.intro_w>span").html("닫기");
            //    $("#start>img[alt = intro]").fade();
        }
    }else{
       if(num > 0){
            num=0;
            $("#start>img[alt = intro]").fadeOut(100);
            $("#start>img[alt = introduce]").fadeIn();
            $("#start>.intro_w").removeAttr("style");
            $("#start>.intro_w>span").html("상세 설명");
        }else{
             num++;
            $("#start>img").fadeOut(100);
            $("#start>img[alt = intro]").fadeIn();
            $("#start>.intro_w").css({"position":"absolute","top":"50px","left":"50%","transform":"translateX(-50%)"})
            $("#start>.intro_w>span").html("닫기");
            
            //    $("#start>img[alt = intro]").fade();
        } 
    }    
}