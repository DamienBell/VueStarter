<template>
  <div class="tag">
    <span class="tag-text">{{text}}</span>
    <span class="tag-close" v-on:click="remove()" >X</span>
  </div>
</template>

<script>

export default {
  name: 'tag',
  props: ["text"],
  methods: {
    remove: function(){
      window.EventHub.$emit("delete-tag", this.text);
    }
  }
}

</script>

<style lang="scss">

$padding: 4px;

.tag{

  margin: 4px;
  float: left;
  display: block;
  border: 1px solid #ccc;
  background: #ccc;
  border-radius: 3px;

 .tag-text{
    float: left;
    padding: $padding;
  }
 .tag-close{
    padding: $padding;
    font-weight: bold;
    height: 100%;
    text-align: center;
    display: block;
    float: left;
    cursor: pointer;
    background-color: white;
  }
}
</style>
