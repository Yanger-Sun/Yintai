function $(selector,range){
    if (typeof selector=="function") {
        on(window,"load",selector)
    }else if(typeof selector=="string"){
        if (/^\<[a-zA-Z][a-zA-Z1-6]{0,9}\>$/.test(selector)) {
            return document.createElement(selector.slice(1,-1))
        }else{
           var range=range||document//判断范围
           var range=range.length?range:[range]//将它们变成一个集合
           var reg=/(?:#|.)?[a-zA-Z][a-zA-Z0-9\-_]{0,}/g
           var sel=selector.match(reg)//把选择器拿到
           for (var i = 0; i < sel.length; i++) {
                range=getElem(sel[i],range)//遍历选择器进行拿到
           };

           return range
        }
    }
} 

function getElem(sel,ran){

    sel=trim(sel)
    if (sel.charAt(0)=="#") {
      return [document.getElementById(sel)]
    }
    if(sel.charAt(0)=="."){
        var all=[]
      for (var i = 0; i < ran.length; i++) {
        var a=getclass(sel.slice(1),ran[i])
        for (var j = 0; j < a.length; j++) {
            all.push(a[j])
        };
      };
      return all
    }
    if(/^[a-zA-Z][a-zA-Z1-6]*$/.test(sel)){
           var all=[]
           for (var i = 0; i < ran.length; i++) {
              var a=ran[i].getElementsByTagName(sel)
              for (var j = 0; j < a.length; j++) {
                  all.push(a[j])
              };

           };
           console.log(all)
           return all
    }

}

//去掉空格的函数
function trim(str,f){
  var f=f||"lr"
  if (f=="l") {
    var reg=/^\s+/g
    str=str.replace(reg,"")
  }else if(f=="r"){
    var reg=/\s+$/g
    str=str.replace(reg,"")
  }else if(f=="all"){
    var reg=/\s/g
    str=str.replace(reg,"")
  }else if(f=="lr"){
    str=str.replace(/^\s+|\s+$/g,"")
  }
  return str
}
function on(obj,ev,callback){
    if (obj.addEventListener) {
        return obj.addEventListener(ev,callback)
    }else if(obj.attachEvent){
        return obj.attachEvent("on"+ev,callback)
    }
}
//取类名
function getclass(classname,range){
    var range=range||document
    if (document.getElementsByClassName) {
        return range.getElementsByClassName(classname)
    }else{
        var all=range.getElementsByTagName("*")
        var reg=new RegExp("\\b"+classname+"\\b","g")
        var arr=[]
        for (var i = 0; i < all.length; i++) {
            if(reg.test(all[i])){
                 arr.push(all[i])
            }
        };
        return arr
    }
}





/*function $(selector,range){
    var range=range||document
    if (typeof selector=="string") {      //如果所传参数是一个字符串
        if (selector.charAt(0)=="#") {     //如果所传参数第一个字符是#则表示为ID
            return document.getElementById(selector.substr(1))
        }else if(selector.charAt(0)=="."){
            return getclass(selector.substr(1),range)
        }else if(/^[a-zA-Z][a-zA-Z1-6]{0,9}$/.test(selector)){
            return range.getElementsByTagName(selector) 
        }
    }else if(typeof selector=="function"){//如果所传参数是一个函数
        window.onload=selector
    }
}*/





/*//获取类名
function getclass(classname,range){ 
	//如果没有传范围值，则默认为document
	 var range=range||document
     if (document.getElementsByClassName) {
         return range.getElementsByClassName(classname)
     } else{
     	var arr=[]
         var all=range.getElementsByTagName("*")
         for (var i = 0; i < all.length; i++) {
         	if(all[i].className==classname){
                 arr.push(all[i])
         	}
         };
         return arr
     };
}*/


//获取类名  形参中classname是字符串  range永远是一个对象object
/*function getclass(classname,range){ 
    //如果没有传范围值，则默认为document
     var range=range||document
     //判断浏览器是否支持获取类名
     if (document.getElementsByClassName) {
        //支持直接获取
         return range.getElementsByClassName(classname)
     } else{
        var arr=[]
         var all=range.getElementsByTagName("*")
         for (var i = 0; i < all.length; i++) {
            if(checkClassName(all[i].className,classname)){
                 arr.push(all[i])
            }
         };
         return arr
     };
}*/

//函数检测类名是否包含所需类名
/*function checkClassName(tagname,classname){
    //利用空格将类名进行分割
    var arr=tagname.split(" ")
    for (var i = 0; i < arr.length; i++) {
        if(arr[i]==classname){
            return true
        }
    }
   return false
}*/

//兼容性获取
function gettext(obj,val){
    //如果参数val未定义
    if (val==undefined) {
        //判断是否支持textContet属性，
        if (obj.textContent!=undefined) {
            //支持的话则直接返回
            return obj.textContent
        } else{
            //不支持则使用innerText方法
            return obj.innerText       //IE支持
        };
    }else{
        //如果第二个参数有值则代表是用来设置内容
       if (obj.textContent!=undefined) {
        //如果支持textContent属性则利用textContent设置
           obj.textContent=val
        } else{
        //如果不支持则说明为IE6-8浏览器，则利用innerText设置
           obj.innerText=val
        };
        
    };
    
}

//获取元素属性
function getstyle(obj,attr){
    //判断是否支持currentStyle的属性
if (obj.currentStyle!=undefined) {
    //attr是个变量  所以要添加[attr]
    return obj.currentStyle[attr]
} else{
    //不支持则使用getComputerStyle(obj,null)[attr]方式
    return getComputedStyle(obj,null)[attr]
};
}

