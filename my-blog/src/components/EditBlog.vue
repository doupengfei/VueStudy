 <template>
   <div id="edit-blog">
     <h1 v-show="!submmited">编辑博客</h1>
     <form v-show="!submmited">
         <label>博客标题：</label>
         <input type="text" v-model="blog.title">
         <div id="checkboxes">
          <label>博客分类：</label>
          <label>Vue.js</label>
          <input type="checkbox" value="Vue.js" v-model="blog.categories">
          <label>Node.js</label>
          <input type="checkbox" value="Node.js" v-model="blog.categories">
          <label>React.js</label>
          <input type="checkbox" value="React.js" v-model="blog.categories">
          <label>Angular4</label>
          <input type="checkbox" value="Angular4" v-model="blog.categories">
        </div>
        <label>作者:</label>
        <select v-model="blog.author" >
          <option v-for="author in authors" :key="author">
            {{author}}
          </option>
        </select>
        <label>博客内容：</label>
         <textarea     v-model="blog.content"></textarea>
         <button v-on:click.prevent="post">编辑博客</button>
     </form>
    <div id="preview">  
      <h2>博客预览</h2>
      <p>博客标题：{{blog.title}}</p>
      <p>博客分类：<span v-for="categorie in blog.categories" :key="categorie">{{categorie}}&nbsp;&nbsp;</span></p>
      <p>作者: {{blog.author}}</p>
      <p>博客内容：</p>
      <p>{{blog.content}}</p>
    </div>
   </div> 
   
</template>

<script>
export default {
  name: 'editBlog',
  data(){
    return{
      blog:{},
      authors:["dpf","Hemiah","Henry","Bucky"],
      submmited:false,
      id:this.$route.params.id
    }
  },
  methods:{
    post:function(){
      var str="";
      if(this.blog.categories.length!=0){
          for(var i=0;i<this.blog.categories.length;i++){
              if(this.blog.categories[i]!=""){
                 if(i==this.blog.categories.length-1){
                    str+=this.blog.categories[i];
                  }else{
                    str+=this.blog.categories[i]+",";
                  }
              }
                  
                  
                }
      }
      //通过axios连接http
        this.axios.post('/api/updateBlog', 
                       {
                         id:this.id,  
                         title:this.blog.title,
                         content:this.blog.content,
                         categories:str,
                         author:this.blog.author
                       } )
                      .then(  (response)=>{
                          if(response.data==""){
                              this.submmited = true;
                          }
                      })
                      .catch(function (error) {
                        //console.log(error);
                      });
    }
  },
  created(){
     this.axios.post('/api/loadBlogById/'+this.id)
                      .then(  (response)=>{
                           this.blog=response.data;
                           
                                this.blog.categories=this.blog.categories.split(',');
                            
                            
                          
                      })
                      .catch(function (error) {
                        //console.log(error);
                      });
  }
  
  
}
</script>

<style scoped>
 #edit-blog *{
  box-sizing: border-box;
}

#edit-blog{
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
}

label{
  display: block;
  margin: 20px 0 10px;
}

input[type="text"],textarea,select{
  display: block;
  width: 100%;
  padding: 8px;
  border-radius: 10px;
  outline:none;
}
 
textarea{
  height: 200px;
}

#checkboxes label{
  display: inline-block;
  margin-top: 10px;
}

#checkboxes input{
  display: inline-block;
  margin-right: 10px;
}

button{
  display: block;
  margin: 20px 0;
  background: crimson;
  color: #fff;
  border: 0;
  padding: 14px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
}

#preview{
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}

h3{
  margin-top: 10px;
}
</style>
