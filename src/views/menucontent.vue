
<template>
    <div>
        <div id="menu" class="big-bg">
      <global-header></global-header>
      <div class="menu-content wrapper">
          <h2 class="page-title">Menu</h2>
            <p>体に優しい自然食を提供する、WEB CAFE。無添加の食材を利用したメニューが特徴です。
                美味しいブレンドコーヒーとヘルシーなオーガニックフードで体の内側から癒されてください。</p>  

      </div>
        </div>
        <!--自作コンポーネントにもクラス指定可能-->
        <grid class="wrapper grid"></grid>
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
.grid{
    display:grid;
    /**これ以上小さくならない→minmax */
    /**Webでのデフォルトはrepeat(3,1fr) */
    grid-template-columns: repeat(auto-fit,minmax(240px,1fr));
    gap:26px;
    margin-top:6%;
    margin-bottom:50px;

}
/**モバイル版 */
@media(max-width:600px){
    .menu-content{
    margin-top:20%;
}
}

</style>