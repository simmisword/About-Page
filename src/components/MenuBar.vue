<template>
    <div class="header" id="menubar">
        <div class="icons">
        <div><button class="btn"><img class="menuIcon" alt="person" src="../assets/person.png"></button></div>
        <div><button class="btn"><img class="menuIcon" alt="IT" src="../assets/IT.png"></button></div>
        <div><button class="btn"><img class="menuIcon" alt="noten" src="../assets/Noten.png"></button></div>
        </div>
    </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from "@vue/composition-api";
export default defineComponent({
    name: "MenuBar",

});
</script>

<style lang="scss">

    .header {
        width: 5%;
        height: 100%;
        background-color: #555B6E;
        border-style: none solid none none;
        border-color: #B6F1EB;
        border-width: 4px;
        position: fixed;
        top: 0px;
        left: 0px;
        box-shadow: 8px 0px 10px #81867C;
    }

    .icons {
        position: fixed;
        top: 33%;
    }

    .menuIcon {
        max-width: 70%;
    }

    .btn {
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 100px;
        background: none;
        border: none;
        transition-duration: 0.3s;
    }

    .btn:hover {
        box-shadow: #B6F1EB;
    }
</style>