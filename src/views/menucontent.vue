
<template>
    <div>
        <div id="menu" class="big-bg">
      <global-header></global-header>
      <div class="menu-content wrapper">
          <h2 class="page-title">Menu</h2>
            <p>体に優しい自然食を提供する、WEB CAFE。無添加の食材を利用したメニューが特徴です。
                美味しいブレンドコーヒーとヘルシーなオーガニックフードで体の内側から癒されてください。</p>  

      </div>
      <grid></grid>
      
        
      
        
      
    </div>
    <global-footer></global-footer>

    </div>
    
</template>
<script>
import GlobalHeader from '../components/global-header'
import GlobalFooter from '../components/global-footer'
import grid from '../components/grid'


export default {
  components:{
    GlobalHeader,
    GlobalFooter,
    grid
}
  
}
</script>
<style>
#menu{
    background-image:url('../assets/menu-bg.jpg');
    min-height: 100vh;
}
.menu-content .page-title{
    text-align:center;
    text-transform:uppercase;
    
}
.menu-content{
    max-width:560px;
    margin-top:10%;
}
.menu-content p{
    margin:10px 0 0;
    font-size:1.125rem;
}
/**モバイル版 */
@media(max-width:600px){
    .menu-content{
    margin-top:20%;
}
}

</style>