window.onload=function(){
	var ce=getclass("ce")[0]


/*	if (document.documentElement.scrollTop>=600) {
		ce.style.display="block"
	}else{
		ce.style.display="none"
	}*/

var sy=$(".ytsy")[0]
var sytu=$(".topsytu")[0]

hover(sy,function(){
  this.style.color="#e5004f"
  sytu.style.backgroundPosition="-224px -27px"
},function(){
    this.style.color="#666"
    sytu.style.backgroundPosition="-224px 0px"
})



var topEWM=$(".TopEWM")[0]
  var topwxzi=$(".top-wxzi",topEWM)[0]
  var topwxtu=$(".topewtu",topEWM)[0]
  var topwxewm=$(".topwxewm",topEWM)[0]
hover(topEWM,function(){
  topwxzi.style.background="#fff"
  topwxtu.style.backgroundPosition="-224px -88px"
  this.style.overflow="visible"
  topwxewm.style.display="block"
},function(){
    topwxzi.style.background="#eee"
    topwxtu.style.backgroundPosition="-224px -58px"
  this.style.overflow="hidden"
  topwxewm.style.display="none"
})


   var topPhone=$(".TopPhone")[0]
  var toptelzi=$(".top-telzi",topPhone)[0]
  var topteltu=$(".top-tel",toptelzi)[0]
  var toptelewm=$(".toptelewm",topPhone)[0]
hover(topPhone,function(){
  toptelzi.style.background="#fff"
  this.style.overflow="visible"
  topteltu.style.backgroundPosition="center -20px"
  toptelewm.style.display="block"
},function(){
    toptelzi.style.background="#eee"
    this.style.overflow="hidden"
    topteltu.style.backgroundPosition="center 0"
    toptelewm.style.display="none"
})


    //轮播图左侧代码 
    var dl=getclass("d-l")[0]


     


    var dlul=dl.getElementsByTagName("ul")[0]
    var dlulli=dlul.getElementsByTagName("li")
    for (var i = 0; i < dlulli.length; i++) {
        dlulli[i].index=i    
        dlulli[i].onmouseover=function(e){
            
            var ev=e||window.event
            var em=ev.target||ev.srcElement

            var bdLfl=$(".bd-l-fl",this)[0]
            bdLfl.style.display="block"
            var bdll=$(".ban-mask-l",bdLfl)[0]
            var bdlr=$(".ban-mask-r",bdLfl)[0]
            bdlr.style.height=bdll.offsetHeight-8+"px"
 

            var dlimg=this.getElementsByTagName("div")[0]
            var dlimgBP=getstyle(dlimg,"background-position")
            var arr=dlimgBP.split(" ")
            var dlimgBPY=parseInt(arr[1])-18+"px"
            var attr=[arr[0],dlimgBPY].join(" ")
            dlimg.style.backgroundPosition=attr
            this.style.backgroundColor="#e5004f"
        }
 


         dlulli[i].onmouseout=function(){
            var bdLfl=$(".bd-l-fl",this)[0]
            bdLfl.style.display="none"
            var dlimg=this.getElementsByTagName("div")[0]
            var dlimgBP=getstyle(dlimg,"background-position")
            var arr=dlimgBP.split(" ")
            var dlimgBPY="-110px"
            var attr=[arr[0],dlimgBPY].join(" ")
            dlimg.style.backgroundPosition=attr
            this.style.backgroundColor="#323333"
        }
    };

var topxl=getclass("topxl")[0]
var topytxl=getclass("top-yt-xl")[0]
var topxlul=getclass("top-yi-fl")[0]
var topxllis=topxlul.getElementsByTagName("li")
var topxlas=topxlul.getElementsByTagName("a")
for (var i = 0; i < topxllis.length; i++) {
  topxllis[i].index=i
  topxllis[i].onmouseover=function(){
    topxlas[this.index].style.textDecoration="underline"
    topxlas[this.index].style.color="#e5004f"
  }
  topxllis[i].onmouseout=function(){
    topxlas[this.index].style.textDecoration="none"
    topxlas[this.index].style.color="#555"
  }
};
hover(topxl,function(){
  topxlul.style.display="block"
  this.style.backgroundColor="#fff"
},function(){
  topxlul.style.display="none"
  this.style.backgroundColor="#eee"
})

    //banner轮播
    var bjul=getclass("bj-ul")
    var banner=getclass("banner")[0]
    var bjbox=getclass("bjbox")[0]
    var bjulli=getclass("bjulli",bjul[0])//获取背景图片
    var bbtnul=getclass("d-lban-ul")[0]
    var bbtn=getclass("bbtn",bbtnul)//获取背景处按钮
    var btuN=0
    bbtn[0].style.backgroundColor="#e5004f"
    var bLBl=getclass("d-m-l")[0]//获取轮播图左箭头
    var bRBl=getclass("d-m-r")[0]//获取轮播图右箭头
    var bLR=getclass("d-m")//包箭头的容器
    var banD=getclass("banner-d")
    //轮播函数
    function lunbo(){
    btuN++
    if (btuN==bjulli.length) {
            btuN=0
        };
     for (var i = 0; i < bjulli.length; i++) {
        bjulli[i].style.display="none"
        bbtn[i].style.backgroundColor="#211616"
     };
        bjulli[btuN].style.display="block" 
        bbtn[btuN].style.backgroundColor="#e5004f"        
    }

   var t=setInterval(lunbo,3000)

   //在banner容器上的效果
   bLR[0].onmouseover=function(){
    	clearInterval(t)//停止动画
   }
   bLR[0].onmouseout=function(){
        t=setInterval(lunbo,3000)//离开banner容器时，开启动画
   }
  
   //轮播图左箭头代码
   bLBl.onclick=function(){
    	btuN--
    	if (btuN==-1) {
    		btuN=bjulli.length-1
    	}
    	for (var i = 0; i < bjulli.length; i++) {
    	bjulli[i].style.display="none"
    	bbtn[i].style.backgroundColor="#211616"
    	};
    	bjulli[btuN].style.display="block"
    	bbtn[btuN].style.backgroundColor="#e5004f"
    }
    //右箭头的代码
    bRBl.onclick=function(){
    	lunbo()
    }
  
    //背景图代码
  /* banner.onmouseover=function(){
    alert(2)
           clearInterval(t)
        }
   banner.onmouseout=function(){
        t=setInterval(lunbo,3000)
        }*/

    //轮播图下侧按钮的代码    
    for (var i = 0; i < bbtn.length; i++) {
    	bbtn[i].index=i
    	bbtn[i].onmouseover=function(){
           
    		btuN=this.index
    		for (var j = 0; j < bbtn.length; j++) {
    			bjulli[j].style.display="none"
    			bbtn[j].style.backgroundColor="#211616"
    		};
    		bjulli[this.index].style.display="block"
    		this.style.backgroundColor="#e5004f"
    	}

    };




    //展示区域选项框
    var zstul=getclass("zs-l-top-ul")[0]
    var zstimg=getclass("zs-t-img")    
    var zstbtn=zstul.getElementsByTagName("li")
    var zsbul=getclass("zs-l-bottom")[0]  
    var zsbbtu=zsbul.getElementsByTagName("ul")
    var sjbkli=getclass("sjbk-li")
/*    for (var i = 0; i < sjbkli.length; i++) {
        sjbkli[i].index=i
        sjbkli[i].onmouseover=function(){
            for (var j = 0; j < sjbkli.length; j++) {
                sjbkli[j].style.border="1px solid #ccc"
            }
         this.style.border="1px solid #000"
        }
    };*/

    for (var i = 0; i < zsbbtu.length; i++) {
    	if(zsbbtu[i].style.display=="block"){
    		zstimg[i].style.display="block"
    	}else{
    		zstimg[i].style.display="none"
    	}
    };


    for (var i = 0; i < zstbtn.length; i++) {
    	zstbtn[i].index=i;
    	zstbtn[i].onmouseover=function(){
    		for (var j = 0; j < zstbtn.length; j++) {
       			zsbbtu[j].style.display="none"
        		zstimg[j].style.display="none"
        		zstbtn[j].style.borderBottomColor="#211616"
    		};
        		zstimg[this.index].style.display="block"
        		zsbbtu[this.index].style.display="block"
        		zstbtn[this.index].style.borderBottomColor="#e5004f"
    	}
    };

    //图片边框动画
        
        var sjbkli=getclass("sjbk-li") 
        var sjdivl=getclass("sjdivl")
        var sjdivr=getclass("sjdivr")
        var sjdivt=getclass("sjdivt")
        var sjdivb=getclass("sjdivb")

for (var i = 0; i < sjbkli.length; i++) {
       sjbkli[i].index=i

       sjbkli[i].onmouseover=function(){
            /*alert(this.index)*/
            animate(sjdivl[this.index],{height:259},500)
            animate(sjdivr[this.index],{marginTop:0,height:259},500)
            animate(sjdivt[this.index],{width:220},500)
            animate(sjdivb[this.index],{marginLeft:0,width:219},500)
        }

        sjbkli[i].onmouseout=function(){
            animate(sjdivl[this.index],{height:0},500)
            animate(sjdivr[this.index],{marginTop:259,height:0},500)
            animate(sjdivt[this.index],{width:0},500)
            animate(sjdivb[this.index],{marginLeft:219,width:0},500)

        }

};
       

    //百货展柜选项卡
    var bht=getclass("bhzg-btn-ul")[0]
    var bhbtn=bht.getElementsByTagName("li")
    var bhtu=getclass("zhnr")
    var bhimg=getclass("bh-t-img")
    for (var i = 0; i < 2; i++) {
    	bhbtn[i].index=i
    	bhbtn[i].onmouseover=function(){
    		for (var j = 0; j < 2; j++) {
    			bhtu[j].style.display="none"
    			bhbtn[j].style.borderBottomColor="#211616"
    			bhimg[j].style.display="none"
    		};
    	    this.style.borderBottomColor="#e5004f"
    		bhtu[this.index].style.display="block"
    		bhimg[this.index].style.display="block"
    	}
    };

     //图片边框动画
        
        var divwbk=getclass("divwbk")
        var tjdivl=getclass("tjdivl")
        var tjdivr=getclass("tjdivr")
        var tjdivt=getclass("tjdivt")
        var tjdivb=getclass("tjdivb")
       for (var i = 0; i < divwbk.length; i++) {
       divwbk[i].index=i
       divwbk[i].onmouseover=function(){
            animate(tjdivl[this.index],{height:249},500)
            animate(tjdivr[this.index],{marginTop:0,height:249},500)
            animate(tjdivt[this.index],{width:200},500)
            animate(tjdivb[this.index],{marginLeft:0,width:199},500)
        }

        divwbk[i].onmouseout=function(){
            animate(tjdivl[this.index],{height:0},500)
            animate(tjdivr[this.index],{marginTop:249,height:0},500)
            animate(tjdivt[this.index],{width:0},500)
            animate(tjdivb[this.index],{marginLeft:199,width:0},500)

        }

};

    //八项中选项卡
    var bxJT=getclass("bx-d")
    var bxlb=getclass("bx-m-lb") 
    
    for (var i = 0; i < bxlb.length; i++) {
        bxlb[i].index=i
        bxlb[i].onmouseover=function(){
            bxJT[this.index].style.display="block"
        }
        bxlb[i].onmouseout=function(){
            bxJT[this.index].style.display="none"
        }
    };
       
    var lbjtL=getclass("bx-d-l")
    var lbjtR=getclass("bx-d-r")
    var lbanL=getclass("lban1")
    var lbanR=getclass("lban2")
    var lbtu=getclass("sjclbtu")
    var lbtuR=getclass("lbimg2")
    for (var i = 0; i < lbjtL.length; i++) {
        lbjtL[i].index=i
        lbjtR[i].index=i
        lbanL[i].index=i
        lbanR[i].index=i

         for (var j = 0; j < lbtu.length; j++) {
                if ((getstyle(lbtu[j],"margin-left"))=="0px") {
                        lbanL[j].style.backgroundColor="#e5004f"
                        lbanR[j].style.backgroundColor="#e323333"
                }else if ((getstyle(lbtu[j],"margin-left"))=="-390px") {
                     lbanR[j].style.backgroundColor="#e5004f"
                     lbanL[j].style.backgroundColor="#e323333"
                }
            };

        lbjtL[i].onclick=function(){
            animate(lbtu[this.index],{marginLeft:0},500)
            lbanL[this.index].style.background="#e5004f"
            lbanR[this.index].style.background="#323333"

        }
        lbjtR[i].onclick=function(){
           
          /*  if (getstyle(lbtu[this.index],"margin-left")=="0px") {*/
            animate(lbtu[this.index],{marginLeft:-390},500)
            lbanR[this.index].style.background="#e5004f"
            lbanL[this.index].style.background="#323333"
           /* }else{
            animate(lbtu[this.index],{marginLeft:0},500)
          }*/
        }
        lbanL[i].onmouseover=function(){
            animate(lbtu[this.index],{marginLeft:0},500)
                        lbanL[this.index].style.background="#e5004f"
            lbanR[this.index].style.background="#323333"
            
        }
        lbanR[i].onmouseover=function(){
          animate(lbtu[this.index],{marginLeft:-390},500)
           lbanR[this.index].style.background="#e5004f"
            lbanL[this.index].style.background="#323333"
        }
    };



   //八项图边框线变化

        var bxbhtu=getclass("bxbhtu")
        var bxdivl=getclass("bxdivl")
        var bxdivr=getclass("bxdivr")
        var bxdivt=getclass("bxdivt")
        var bxdivb=getclass("bxdivb")
       for (var i = 0; i < bxbhtu.length; i++) {
       bxbhtu[i].index=i
       bxbhtu[i].onmouseover=function(){
            animate(bxdivl[this.index],{height:181},500)
            animate(bxdivr[this.index],{marginTop:0,height:181},500)
            animate(bxdivt[this.index],{width:272},500)
            animate(bxdivb[this.index],{marginLeft:0,width:271},500)
        }

        bxbhtu[i].onmouseout=function(){
            animate(bxdivl[this.index],{height:0},500)
            animate(bxdivr[this.index],{marginTop:181,height:0},500)
            animate(bxdivt[this.index],{width:0},500)
            animate(bxdivb[this.index],{marginLeft:271,width:0},500)

        }
    
}


//八项左侧底部动画效果
var bxLBjtR=getclass("bx-b-r")
var bxLBjtL=getclass("bx-b-l")
var bxLBM=getclass("bx-l-lb-box")
var jtzflag=true//定义一个左按钮开关  防止多次点击失误
var jtyflag=true//定义一个右按钮开关  防止多次点击失误
for (var i = 0; i < bxLBjtR.length; i++) {
   bxLBjtR[i].index=i
   bxLBjtR[i].onmouseover=function(){
    this.style.backgroundPosition="-42px 0"
   }
   bxLBjtR[i].onmouseout=function(){
    this.style.backgroundPosition="-28px 0"
   }
   bxLBjtR[i].onclick=function(){
    if (jtzflag) {
         jtzflag=false
          var bxLBML=getstyle(bxLBM[this.index],"margin-left")
         if (bxLBML=="-510px") {
             bxLBM[this.index].style.marginLeft="0px"
             bxLBML="0"
            };
        bxLBMML=parseInt(bxLBML)-170
        animate(bxLBM[this.index],{marginLeft:bxLBMML},500,function(){
        jtzflag=true
      })
    };
    
}
    bxLBjtL[i].index=i
    bxLBjtL[i].onmouseover=function(){
    this.style.backgroundPosition="-14px 0"
   }
   bxLBjtL[i].onmouseout=function(){
    this.style.backgroundPosition="0px 0"
   }
   bxLBjtL[i].onclick=function(){
    if (jtyflag) {
      jtyflag=false
       var bxLBMR=getstyle(bxLBM[this.index],"margin-left")
   if (bxLBMR=="0px") {
        bxLBM[this.index].style.marginLeft="-510px"
        bxLBMR="-510"
    };
    bxLBMMR=parseInt(bxLBMR)+170
    animate(bxLBM[this.index],{marginLeft:bxLBMMR},500,function(){
      jtyflag=true
    })
    };
  
  }
};

var bxTop=[]
var baxiang=$(".baxiang")//获取八项内容快

var ce=$(".ce")[0]//获取侧面的固定栏
//var ceflag=true//判断侧面是否已经出现 防止再次判断清除现有动画
var ycdlis=$("li",$("ul",ce)[0])//获取侧栏中的对应按钮


for (var i = 0; i < baxiang.length; i++) {
    bxTop.push(baxiang[i].offsetTop)
};//获取八项块离文档顶部的距离

var ycdlisBGP=[]
var ycdlisBGT=[]
for (var i = 0; i < ycdlis.length; i++) {
    ycdlisBGP.push(getstyle(ycdlis[i],"backgroundPosition"))
    //获取侧面每个按钮的背景定位位置
    ycdlisBGT.push(getstyle(ycdlis[i],"backgroundImage"))
};  //获取侧面每个按钮的背景图片


for (var i = 0; i < ycdlis.length; i++) {
    ycdlis[i].index=i
    ycdlis[i].onclick=function(){
        if (i==ycdlis.length-1) {
             animate(document.documentElement,{scrollTop:0},500)
             animate(document.body,{scrollTop:0},500)
        };
       animate(document.documentElement,{scrollTop:bxTop[this.index]},500)
       animate(document.body,{scrollTop:bxTop[this.index]},500)
    }

   ycdlis[i].onmouseover=function(){
              this.style.background="#e5004f"
              this.style.fontSize="12px"
   }
   ycdlis[i].onmouseout=function(){
              this.style.backgroundImage=ycdlisBGT[this.index]
                this.style.backgroundPosition=ycdlisBGP[this.index]
                this.style.fontSize="0px"
   }

};


//获取银泰图  设置银泰图的加载优化
var  yintaitu =$(".yintaitu")
var yintaituTop=[]
for (var i = 0; i < yintaitu.length; i++) {
  yintaituTop.push(yintaitu[i].offsetTop)
};



window.onscroll=function(){
      var stop=document.body.scrollTop||document.documentElement.scrollTop
      //获取滚动条滚动的页面的长度
      
      //判断图片加载显示
      for (var i = 0; i < yintaituTop.length; i++) {
         if(stop+500>yintaituTop[i]){
             var imgs=$("img",yintaitu[i])
             for (var j = 0; j < imgs.length; j++) {
               imgs[j].src=imgs[j].getAttribute("asrc")

             };
         }
      };


     //判断侧栏显示时间
      if (stop>750/* && ceflag==true*/) {
        ce.style.opacity=1
      //  animate(ce,{opacity:1},200)
       // ceflag==false
      }else{
      //  ceflag==true
        ce.style.opacity=0
      }

      for (var i = 0; i < bxTop.length; i++) {
          if (bxTop[i]<stop+150) {
            for (var j = 0; j < ycdlis.length; j++) {
                 ycdlis[j].style.backgroundImage=ycdlisBGT[j]
                 //将对应的八项内容的原属性值重新赋值
                 ycdlis[j].style.backgroundPosition=ycdlisBGP[j]
                 //将对应的文档内容图片重新赋值
                 ycdlis[j].style.fontSize="0px"
                 //用改变字体大小的方式隐藏按钮上的字
              };
              ycdlis[i].style.background="#e5004f"
               //改变所选按钮的颜色
              ycdlis[i].style.fontSize="12px"
              //用改变字体的大小的方式来显示字
          };
         
      };
}



window.onscroll()


     

}