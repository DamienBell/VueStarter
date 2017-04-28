<template>
  <div class="tags-container">
    <div class="form-group">
       <label for="tags-input">
        <slot name="label">Tags</slot>
      </label>
       <input v-model="tagtext"
              @keyup.enter="addTag"
              type="text" class="form-control" id="tags-input" placeholder="Tags">
     </div>
    <div class="tag-well">
      <tag
         v-for="(tag, index) in tags"
         v-bind:text="tag"
         v-bind:key="index"
       ></tag>
    </div>
  </div>
</template>

<script>

import Tag from './Tag.vue';
export default {
  name: 'tags',
  props: ['tags'],
  data () {
    return {
        tagtext: null
    };
  },
  components: {
    'tag': Tag,
  },
  methods: {
    addTag(text){
      window.EventHub.$emit("add-tag", this.tagtext);
      this.tagtext = null;
    }
  }
}
</script>

<style lang="scss">
 .tag-well{
    min-height: 100px;
    overflow: auto;
    background-color: #eee;
    width: 100%;
    box-shadow: inset 1px -1px 2px 0px #ccc;
    border-radius: 3px;
  }

</style>
