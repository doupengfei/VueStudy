Vue.component("nba",{
    template:`
             <p>
               {{name}}:This is why we play!
               <button v-on:click="changeName">神气</button>

             </p>`,
    data:function(){
    	return {
    		name:"科比"
    	}
    },
    methods:{
    	changeName:function(){
    		this.name="杜兰特";
    	}
    }  

});
new Vue({
    el:"#vue-app-one"


});
new Vue({
    el:"#vue-app-two"


});