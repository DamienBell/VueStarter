<template>
  <div id="app">
    <v-app id="example-3" left-fixed-sidebar>
      <v-toolbar>
        <v-toolbar-side-icon @click.native.stop="navOpen = !navOpen" />
        <v-toolbar-logo>Toolbar</v-toolbar-logo>
      </v-toolbar>
      <main>
        <v-sidebar left fixed drawer v-model="navOpen">
          <v-list>
            <v-list-item @click="route()">
              <v-list-tile>
                <v-link href="/">
                  <v-list-tile-title >Home</v-list-tile-title>
                </v-link>
              </v-list-tile>
            </v-list-item>
            <v-list-item>
              <v-list-tile>
                <v-link href="/about">
                  <v-list-tile-title >About</v-list-tile-title>
                </v-link>
              </v-list-tile>
            </v-list-item>
          </v-list>
        </v-sidebar>
        <v-content>
          <v-container fluid class="main-window">
            <slot></slot>
          </v-container>
        </v-content>
      </main>
    </v-app>

  </div>
</template>

<script>
  import Vue from 'vue';
  import VLink from '../components/VLink.vue';

  export default {
    components: {
      VLink,
    },
    data() {
      return {
        navOpen: true
      };
    },
    methods: {

    }
  };
</script>

<style lang="scss">
.main-window{
  margin-top: 8px;
  margin-left: 8px;
  font-size: 16px;
}

</style>
