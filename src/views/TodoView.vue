<template>
  <div class="todo">
    <h1>
      Ma todo list
    </h1>

    <table class="table">
      <thead>
      <tr>
        <th scope="col">Titre</th>
        <th scope="col">Complété</th>
        <th scope="col">Créé le</th>
        <th scope="col"></th>
        <th scope="col"></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="todo in todos" :key="todo">
        <th scope="row">
          <div class="center">
            <input class="form-control width50pc" v-model="todo.title">
          </div>
        </th>
        <th scope="row">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="todo.completed">
        </th>
        <th scope="row">{{ displayDate(todo.created_at) }}</th>
        <th scope="row">
          <button type="button" class="btn" @click="editTodo(todo)">
            <i class="bi bi-pencil-square"></i>
          </button>
        </th>
        <th scope="row">
          <button type="button" class="btn" @click="deleteTodo(todo.id)">
            <i class="bi bi-trash"></i>
          </button>
        </th>
      </tr>
      <tr>
        <th scope="row">
          <div class="center">
            <input class="form-control width50pc" v-model="newTodo.title">
          </div>
        </th>
        <th scope="row"></th>
        <th scope="row"></th>
        <th scope="row">
          <button type="button" class="btn" @click="createTodo(newTodo)">
            <i class="bi bi-plus-circle"></i>
          </button>
        </th>
        <th scope="row"></th>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import todoService from "@/service/todoService";

export default {
  name: 'TodoView',
  methods: {
    getTodos(){
      todoService.getTodos().then((res) =>
        this.todos = res.data
      )
    },
    deleteTodo(id){
      todoService.deleteTodo(id).then(() =>
      {
        this.getTodos()
      })
    },
    editTodo(todo){
      todoService.editTodo(todo).then(() =>
      {
        this.getTodos()
      })
    },
    createTodo(todo){
      todoService.createTodo(todo).then(() =>
      {
        this.getTodos();
        this.resetNewTodo();
      })
    },
    displayDate(date){
      return new Date(date).toLocaleDateString()
    },
    resetNewTodo(){
      this.newTodo = {
        title:"",
      }
    }
  },
  computed: {
  },
  data() {
    return {
      todos: [],
      newTodo: {
        title:"",
      }
    }
  },
  beforeMount() {
    this.getTodos()
  }
}
</script>

<style>
@import '~bootstrap-icons/font/bootstrap-icons.css';

.center{
  display: flex;
  justify-content: center;
}

.width50pc{
  width:50%;
}
</style>