<template>
  <div id="app">
    <twitter-nav></twitter-nav>
    <div class="container">
      <div class="row">
        <div class="col-md-4">

        </div>
        <div class="col-md-4">
          <tags v-bind={tags}>
            <span slot="label">Follow tags like: </span>
          </tags>
        </div>
        <div class="col-md-4">
          <input v-model="userquery"
                 @keyup.enter="queryUsers"
                 type="text" class="form-control"
                 id="users-input"
                 placeholder="Search User">
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>

import Vue from 'vue';
import API from './API.vue';

window.EventHub = new Vue({
    data () {
      return {
          currentRoute: window.location.pathname,
          userquery: "",
          tags: [],
          alwaysFollow: [],
          likeAudience: []
      };
    },
    created: function () {
      //add listensers
      this.$on('popstate', this.setRoute);
      this.$on('add-tag', this.addTag);
      this.$on('delete-tag', this.deleteTag);
    },
    beforeDestroy: function () {
      this.$off('popstate', this.setRoute);
      this.$off('add-tag', this.addTag)
      this.$off('delete-tag', this.deleteTag)
    },
    methods: {
      setRoute: function(){
          console.log("set route");
      },
      addTag: function (tag) {
        this.tags.push(tag);
        API.addTag(tag);
      },
      deleteTag: function (tag) {
        this.tags = this.tags.filter(function(t){
          return (t != tag);
        });
        API.removeTag(tag);
      },
    }
});

export default {
  name: 'app',
  components: {
    'twitter-nav': TwitterNav,
    'twitter-users': TwitterUsers,
    'tags': Tags
  },
  data () {
    return EventHub.$data;
  },
  created: function () {
    API.getSaved('tags').then(tags =>{
      this.tags = tags;
    });
    API.getSaved('always.follow').then(results =>{

    });
    API.getSaved('like.audience').then(results =>{

    });
  },
  methods: {
    queryUsers: function(text){
      //searchUsers
      console.log("query: ",this.userquery);
      API.searchUsers(this.userquery).then(results => {
        console.log('returned: ', results);
      });

    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
