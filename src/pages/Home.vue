<template>
  <main-layout>
    <p>Welcome home hello</p>
    <button v-on:click="sayHello">Say Hello</button>
    <div v-if="apiOn">
      <h2>Hello from your backend API</h2>
    </div>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/MainLayout.vue';
  import API        from './../API.vue';

  export default {
    components: {
      MainLayout
    },
    data () {

      return {
        apiOn: false
      }
    },
    mounted: function(){

    },
    methods: {
      sayHello: function(){
        API.sayHello()
        .then(results =>{
          if(results){
            this.apiOn = true;
          }
        });
      }
    }
  }
</script>
