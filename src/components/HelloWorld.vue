<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{store.getters.date }}</h1>

    <button @click="sendMsg">send msg</button>


  </div>
</template>

<script>
import {useStore} from "vuex";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    sendMsg(){
      this.$emit('toto', {message: "new msg"})
    }
  },
  computed: {
    store() {
      return useStore()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
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
