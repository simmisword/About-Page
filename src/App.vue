<template>
  <section class="about-siggi">
    <MenuBar/>
    <transition name="fade">
    <router-view/>
    </transition>
    <Pages/>
  </section>
</template>


<script src="https://www.gstatic.com/firebasejs/8.0.2/firebase-app.js"></script>


<script src="https://www.gstatic.com/firebasejs/8.0.2/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDFj1H1qSvLZgkWAoSwJE9JZQvVvvTOkOw",
    authDomain: "siggifunkl.firebaseapp.com",
    databaseURL: "https://siggifunkl.firebaseio.com",
    projectId: "siggifunkl",
    storageBucket: "siggifunkl.appspot.com",
    messagingSenderId: "816797410586",
    appId: "1:816797410586:web:4cc578a8b55994fa42f8a3",
    measurementId: "G-7RWGEFLWY3"
  };
  // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
</script>


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
