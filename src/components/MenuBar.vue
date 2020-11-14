<template>
    <div class="header" >
        <b-navbar toggleable="lg" type="dark" variant="info">
            <div class="icons">
            <div class="btn"><router-link to="/about"><img alt="person"  id="navabout" src="../assets/person.png"></router-link></div>
            <div class="btn"><router-link to="/coding"><img alt="IT" id="navcoding" src="../assets/IT.png"></router-link></div>
            <div class="btn"><router-link to="/creative"><img alt="noten" id="navcreative" src="../assets/Noten.png"></router-link></div>
        </div>
        </b-navbar>
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
        width: 70px;
        height: 100%;
        background-color: #555B6E;
        border-style: none solid none none;
        border-color: #B6F1EB;
        border-width: 4px;
        position: fixed;
        top: 0px;
        left: 0px;
        box-shadow: 8px 3px 6px 1px #81867C;
    }

    .icons {
        position: fixed;
    }

    .btn {
        margin: 2px;        
        position: fixed;
        padding:2px;
    }

    btn:hover {
        box-shadow: 5px 0px black;
    }

    #navabout {
        position: fixed;
        top: 30%;
        left: 17.5px;
        width: 30px;

    }

    #navcoding {
        position: fixed;
        top: 50%;
        left: 10px;
        width: 45px;
    }
    
    #navcreative {
        position: fixed;
        top: 69%;
        left:15px;
        width: 35px;
    }


</style>