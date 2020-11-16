<template>
  <section class="about-siggi">
    <MenuBar/>
    <Pages/>
    <transition name="fade">
    <router-view/>
    </transition>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import MenuBar from "@/components/MenuBar.vue"
import Pages from "@/components/Pages.vue"

export default Vue.extend({


  components:{
    MenuBar,
    Pages,
  }
})
</script>

<style>

.about-siggi {
  font-family: Cardo;
  background-color:  #555B6E;
  color: #D4DCCD;
  text-align: left;
}

.alt-font{
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.biggi-h1{
  font-size: 60pt;
}

.centered{
  text-align: center;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
