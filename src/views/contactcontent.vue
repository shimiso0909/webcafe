<template>

    <div>
        <div id="contact" class="big-bg">
            
            <global-header></global-header>
                    
            <contactform class="wrapper"></contactform>

            
            

        </div>
        
        
        <contactmap class="wrapper"></contactmap>
        <contactsns class="wrapper"></contactsns>
        
        
        
        <global-footer></global-footer>
    </div>
</template>
<script>
import GlobalHeader from '../components/global-header'
import GlobalFooter from '../components/global-footer'
import contactform from '../components/contactform'
import contactmap from '../components/contactmap'
import contactsns from '../components/contactsns'


export default {
  components:{
    GlobalHeader,
    GlobalFooter,
    contactform,
    contactmap,
    contactsns

}
  
}
</script>
<style scoped>
#contact{
    background-image: url('../assets/contact-bg.jpg');
    min-height:100vh;
}

</style>