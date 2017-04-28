<template>
  <div class="">
    <b-navbar toggleable type="inverse" variant="success">
      <b-nav-toggle target="nav_collapse"></b-nav-toggle>
      <b-link class="navbar-brand" to="#">
        <span>Vue Starter</span>
      </b-link>
      <v-link href="/">Home</v-link>
      <v-link href="/about">About</v-link>
    </b-navbar>
  <div class="container page-height">
    <slot></slot>
  </div>
  </div>
</template>

<script>
  import VLink from '../components/VLink.vue'

  export default {
    components: {
      VLink,
    }
  }
</script>

<style lang="scss">

body{
  color: white;
}

.padding{
 padding: 8px;
}

.bg-success{
  background: #207972 !important;
}
.page-height{
  min-height: 100vh;
}
.container {
  background: #2aa198;
}
</style>
