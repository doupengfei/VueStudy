//实例化Vue对象
new Vue({
   el:"#vue-app",
   data:{
        name:"dpf",
        age:"10",
        gotoUrl:"www.baidu.com",
        websiteTag:"<a href='www.baidu.com'>百度一下</a>",
        x:0,
        y:0,
        error:false,
        success:false,
        teams:["勇士","火箭","雷霆","雄鹿"],
        players:[
                 {name:"库里",age:"29"},
                 {name:"杜兰特",age:"29"},
                 {name:"字母歌",age:"29"}
                 ]
   },
   methods:{
   	   sayHello:function (a) {
   	   	 return  a+' '+this.name+' !';
   	   },
   	   add:function(){
   	   	return this.age++;
   	   },
   	   subtract:function(){
   	   	return this.age--;
   	   },
   	   updateXY:function(event){
   	   	this.x=event.offsetX;
   	   	this.y=event.offsetY;
   	   }
   }

});

