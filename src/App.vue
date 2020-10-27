<template>
  <section id="app">
        <div class="pages">
        <Pages/>
    </div>
    <div id="menubar">
      <MenuBar/>
    </div>

    <div>
      <Landing/>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import MenuBar from "@/components/MenuBar.vue"
import Pages from "@/components/Pages.vue"
import Landing from "@/components/Landing.vue"
export default Vue.extend({
  components:{
    MenuBar,
    Pages,
    Landing,
  }
})
</script>

<style lang="scss">
#app {
  font-family: Cardo;
  color: #D4DCCD;
  text-align: center;
}
    h1 {
        font-size: 500%;
    }
</style>
