
<template>
  <div id="home" class="big-bg">
    <global-header></global-header>
    <div class="home-content wrapper">
      <h2 class="page-title">We'll Make Your Day</h2>
      <p>お洒落なカフェで癒されてみませんか？無添加の食材で体の中からリフレッシュ。</p>
      <router-link to="/menu" class="button">メニューを見る</router-link>
    </div><!--homecontent-->
  </div>
</template>
<script>
import GlobalHeader from '../components/global-header'


export default {
  components:{
    GlobalHeader
  }
  
}
</script>
<style>
/*home */
.home-content{
  text-align:center;
  margin-top:10%;
}
.home-content p{
  font-size:1.125rem;
  margin:10px 0 42px;
}
/*見出し */
.page-title{
  font-size:5rem;
  text-transform: uppercase;
  font-weight:normal;
  font-family: 'Philosopher';
}
/*button */
.button{
  font-size:1.375rem;
  background: #0bd;
  color:#fff;
  padding:18px 32px;
  border-radius: 5px;

}
.button:hover{
  background: #0090aa;
}
/**Homeの背景画像 */
#home{
  background-image:url('../assets/main-bg.jpg');
  min-height: 100vh;
}

.page-title{
  text-transform:none;
}
/**モバイル版 */
@media(max-width:600px){
  .page-title{
  font-size:2.5rem;
}
.home-content{
  margin-top:20%;i
}
}
</style>
