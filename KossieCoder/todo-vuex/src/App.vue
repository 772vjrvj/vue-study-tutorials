<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <CompleteTodo />
    <AddTodo />
    <hr>
    <TodoList />
    <UserList />
  </div>
  
</template>

<script>
import TodoList from '@/components/TodoList';
import AddTodo from '@/components/AddTodo';
import CompleteTodo from '@/components/CompleteTodo';
import UserList from '@/components/UserList';

export default {
  components: {
    TodoList,
    AddTodo,
    CompleteTodo,
    UserList
  },
}
</script>

<style>

</style>