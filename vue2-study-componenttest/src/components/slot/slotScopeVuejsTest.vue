<template>
    <ul>
      <template v-for="todo in todos">
          <!-- v-bind 디렉티브를 사용해 todo를 부모 컴포넌트에 전달 -->
          <slot name="litodo" :todo="todo">
            {{ todo.text }}
          </slot>
      </template>
  </ul>
</template>

<script>
export default {
    props: {
        todos: {
            type: Array,
            required: true
        }
    },
}
</script>
 