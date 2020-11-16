<template>
    <b-container>
        <b-sidebar id="sidebar-1" Title="Sidebar" width="140px" bg-variant="dark" no-header shadow>
                <template #default="{hide}">
                <b-button variant="dark" @click="hide">
                    <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-caret-left-fill" fill="#FFC4D1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                    </svg>
                </b-button>
                <b-col >

                <b-nav-item variant="dark" to="/about" class="button">
                    <svg width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-person" fill="#B6F1EB" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                    </svg>
                </b-nav-item>
                <b-nav-item to="/coding" class="button">
                    <svg width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-code-slash" fill="#B6F1EB" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0zm-.999-3.124a.5.5 0 0 1 .33.625l-4 13a.5.5 0 0 1-.955-.294l4-13a.5.5 0 0 1 .625-.33z"/>
                    </svg>
                </b-nav-item>
                <b-nav-item to="/creative" class="button">
                    <svg width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-music-note-beamed" fill="#B6F1EB" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"/>
                        <path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"/>
                        <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z"/>
                    </svg>
                </b-nav-item>
            </b-col>
                            </template>

        </b-sidebar>
    </b-container>
</template>

<script lang="ts">
import {
  defineComponent,
} from "@vue/composition-api";
export default defineComponent({
    name: "MenuBar",

});
</script>

<style>


</style>