<template>
    <div>
        <div class="box" id="grey"></div>
        <div class="box" id="blue"></div>
        <router-link to="/" ><img id="logo" alt="logo" src="../assets/logo.png"></router-link>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "Pages",
})
</script>

<style lang="scss">
    .box {
        float: left;
        position: fixed;
        top: 0px;
    }

    #logo {
        position: fixed;
        top: 46%;
        left: 80px;
        width: 120px;
    }

    #grey {
        left: 70px;
        width: 70px;
        height: 100%;
        background-color: #D4DCCD;
    }

    #blue {
        left: 140px;
        width: 70px;
        height: 100%;
        background-color: #B6F1EB;
        box-shadow: -6px 4px 6px 0px #81867C;
    }
</style>