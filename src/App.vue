<template>
  <section class="about-siggi">
    <MenuBar/>
    <transition name="fade">
    <router-view/>
    </transition>
    <Pages/>
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
  @import './assets/about-siggi.css';

</style>
