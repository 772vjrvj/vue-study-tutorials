<template>
  <div class="mb-2 d-flex">
    <div>
      <input 
        type="checkbox" 
        :checked="todo.checked"
        @change="toggleCheckbox"
      >
    </div>
    <span 
      class="ml-3 flex-grow-1"
      :class="todo.checked ? 'text-muted' : ''"
      :style="todo.checked ? 'text-decoration: line-through': ''"
    >
      {{ todo.text }}
    </span>
    <button 
      class="btn btn-danger btn-sm"
      @click="deleteTodo"
    >Delete</button>
    {{ numberOfCompletedTodo }}
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  computed: {
    numberOfCompletedTodo() {
      return this.$store.getters['todo/numberOfCompletedTodo'];
    }
  },
  methods: {
    toggleCheckbox(e) {

      this.$store.dispatch('todo/toggleTodo', {
        id: this.todo.id,
        checked: e.target.checked
      });
    },
    deleteTodo() {
      this.$store.dispatch('todo/deleteTodo', this.todo.id);
    }
  }
}
</script>

<style>

</style>