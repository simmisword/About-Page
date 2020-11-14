<template>
  <section id="app">
    <router-view/>

    <div class="pages">
        <Pages/>
    </div>

    <div id="menubar">
      <MenuBar/>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import MenuBar from "@/components/MenuBar.vue"
import Pages from "@/components/Pages.vue"
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'


Vue.use(BootstrapVue)
export default Vue.extend({


  components:{
    MenuBar,
    Pages,
  }
})
</script>

<style lang="scss">

#app {
  font-family: Cardo;
  // background-color:  #555B6E;
  color: #D4DCCD;
  text-align: center;
}
    h1 {
        font-size: 56pt;
    }
</style>
