<script>
import Vue from 'vue';
let API = new Vue({
  data() {
    let url = 'http://localhost:3000/api';
    return {hello: `${url}/hello`}
  },
  methods: {
    resolve: function(results){
      return Promise.resolve(results.body);
    },
    sayHello: function(){
      return this.$http.get(this.hello).then(this.resolve);
    },

  }
});

export default API;
</script>
