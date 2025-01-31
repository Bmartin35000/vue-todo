<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>{{store.getters.date }}</h1>

    <button @click="incrementDay">++</button>
    <HelloWorld @toto="afficheMsg" msg="cc ça va" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {mapActions, useStore} from "vuex";
import store from "@/store";
export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  methods: {
    afficheMsg(payload){
      alert(payload.message)
    },
    incrDay(){
      store.dispatch("incrementDay");

    },
    ...mapActions['incrementDay']
  },
  computed: {
    store() {
      return useStore()
    }
  }
}
</script>
