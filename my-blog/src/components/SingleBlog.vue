<template>
    <div id="single-blog">
		<h1>{{blog.title}}</h1>
        <p>创建时间: {{blog.createDate}}</p>
        <p>作&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;者: {{blog.author}}</p>
        <p>操&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;作：
             <button  v-on:click="editBlogById()">编辑</button>
             <button  v-on:click="deleteBlogById()">删除</button>
        </p>
		<p>博客分类：<span v-for="categorie in categories" :key="categorie">{{categorie}}&nbsp;&nbsp;</span></p>
		<article>{{blog.content}}</article>
	</div>
</template>
<script>
export default {
    name:'singleBlog',
    data(){
        return {
           id:this.$route.params.id,
           blog:{},
          categories:[] 
        }
    },
    created(){
         this.axios.post('/api/loadBlogById/'+this.id)
                      .then(  (response)=>{
                           this.blog=response.data;
                           this.categories=this.blog.categories.split(',');
                      })
                      .catch(function (error) {
                        //console.log(error);
                      });
    },
    methods:{
        deleteBlogById(){
          this.axios.post('/api/deleteBlog/'+this.id)
                      .then(  (response)=>{
                          console.log(response)
                           this.$router.push({path:'/'})
                      })
                      .catch(function (error) {
                        //console.log(error);
                      });
        },
        editBlogById(){
              this.$router.push({path:'/edit/'+this.id})
        }
    }
}
</script>
<style scoped>
#single-blog{
		max-width: 800px;
		margin: 0 auto;
		padding: 20px;
		background: #eee;
		border: 1px dotted #aaa;
	}
button{
  margin-right: 10px;  
  background: crimson;
  color: #fff;
  border: 0;
  padding: 5px 10px 5px 10px;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
}    
</style>