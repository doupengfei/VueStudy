<template>
  <div id="app">
    <!-- <addBlog></addBlog> -->
    <!-- <showBlogs></showBlogs> -->
      <blogHeader></blogHeader> 
      <router-view></router-view>
  </div>
</template>

<script>
import AddBlog from './components/AddBlog.vue'
import ShowBlogs from './components/ShowBlogs.vue'
import BlogHeader from './components/BlogHeader.vue'
export default {
  name: 'app',
  components: {
    AddBlog,ShowBlogs,BlogHeader
  }
}
</script>

<style>
 
</style>
