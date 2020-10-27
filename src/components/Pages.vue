<template>
    <div>
        <div class="box" id="grey"></div>
        <div class="box" id="blue"></div>
        <img id="logo" alt="logo" src="../assets/logo.png">
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
        left: 6%;
        max-width: 8%;
    }

    #grey {
        left: 5%;
        width: 5%;
        height: 100%;
        background-color: #D4DCCD;
    }

    #blue {
        left: 10%;
        width: 5%;
        height: 100%;
        background-color: #B6F1EB;
        box-shadow: -5px 0px 12px #81867C;
    }
</style>