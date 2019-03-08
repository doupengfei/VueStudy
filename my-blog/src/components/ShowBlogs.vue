<template>
  <div v-theme:column="'narrow'" id="show-blogs">
     <h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="搜索">
     <div v-for="blog in filteredBlogs" :key="blog.value" class="single-blog">
         <router-link v-bind:to="'/blog/' + blog.id">
            <h3 v-rainbow>{{blog.title | to-uppercase}}</h3>
          </router-link>
         <article>{{blog.content | snippet}}</article> 
     </div>
  </div>
</template>

<script>

export default {
  name: 'showBlogs',
  data(){
      return{
         blogs:[],
         search:""
      }
  },
  created(){
      this.axios.post('/api/listBlog')
                      .then(  (response)=>{
                           this.blogs=response.data.slice(0,10)
                      })
                      .catch(function (error) {
                        //console.log(error);
                      });
  },
  computed:{
  	filteredBlogs:function(){
  		return this.blogs.filter((blog) =>{
  			return blog.title.match(this.search);
  		})
  	}
  },
  filters:{
      "to-uppercase":function(value){
          return value.toUpperCase();
      }
  }
}
</script>

<style>
 #show-blogs{
	max-width: 800px;
	margin: 0 auto;
}

.single-blog{
	padding: 20px;
	margin: 20px 0;
	box-sizing: border-box;
	background: #eee;
  border: 1px dotted #aaa;
}
#show-blogs a{
  color: #444;
  text-decoration: none;
}

input[type="text"]{
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 10px;
  outline: none;
}
</style>
