<template>
  <div id="app">
    <head>
    <meta name="viewport" content="width=devide-width,initial-scale=1">
    <link href="https://fonts.googleapis.com/css2?family=Philosopher&display=swap" rel="stylesheet">        
    <link rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min.css">
    </head>
    <div class="big-bg home news menu contact">
      
      <router-view/>
      
    </div>
  </div>
</template>


<style>
@charset "UTF-8";
a{
  text-decoration: none;
}
ul{
  list-style: none;
}
img{
  max-width:100%;
}
body{
  font-family:-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Helvetica Neue", HelveticaNeue, YuGothic, "Yu Gothic Medium", "Yu Gothic", Verdana, Meiryo, sans-serif;
  line-height:1.7;
  color:#432;

}
/*大きな背景画像 */
.big-bg{
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
}
</style>

