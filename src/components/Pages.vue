<template>
    <div> 
        <div v-b-toggle.sidebar-1 class="box" id="grey">
            <div class="menu">
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45.955" viewBox="0 0 61 45.955">
                    <g id="Gruppe_17" data-name="Gruppe 17" transform="translate(-29 -143)">
                        <line id="Linie_1" data-name="Linie 1" x2="54" transform="translate(32.5 146.5)" fill="none" stroke="#ffc4d1" stroke-linecap="round" stroke-width="7"/>
                        <line id="Linie_2" data-name="Linie 2" x2="54" transform="translate(32.5 165.978)" fill="none" stroke="#ffc4d1" stroke-linecap="round" stroke-width="7"/>
                        <line id="Linie_3" data-name="Linie 3" x2="54" transform="translate(32.5 185.455)" fill="none" stroke="#ffc4d1" stroke-linecap="round" stroke-width="7"/>
                    </g>
                    <defs>
                        <filter id="f3" x="0" y="0" width="200%" height="200%">
                            <feOffset result="offOut" in="SourceAlpha" dx="20" dy="20" />
                            <feGaussianBlur result="blurOut" in="offOut" stdDeviation="10" />
                            <feBlend in="SourceGraphic" in2="blurOut" mode="normal"/>
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>
        <div  class="box" id="blue"></div>
        <router-link to="/" >
            <img id="logo" alt="logo" src="../assets/logo.png">
        </router-link> 
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

    .menu{
        width: 45px;
        margin-left: 10px;
        margin-top: 45px;
        // box-shadow: 0px 3px 3px 0px #81867C;
    }

    #logo {
        position: fixed;
        top: 40%;
        left: 10px;
        width: 120px;
    }

    #grey {
        left: 0px;
        height: 100%;
        width: 70px;
        background-color: #D4DCCD;
    }

    #blue {
        left: 70px;
        width: 70px;
        height: 100%;
        background-color: #B6F1EB;
        box-shadow: 0px 4px 12px 2px #81867C;
        border-style: none solid none none;
        border-color: #FFC4D1;
        border-width: 4px;
    }
</style>