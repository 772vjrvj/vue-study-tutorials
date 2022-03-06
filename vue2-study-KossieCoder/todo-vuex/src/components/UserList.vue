<template>
  <div>
    User List
    <div v-for="user in users" :key="user.id">
      {{ user.name }}
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  created() {
    this.getUsers();
  },
  computed: {

    ...mapState('user', ['users'])
    // ...mapState({
    //   users: state => state.user.users
    // })

    //다른 이름 쓰고 싶을 때 vuex홈페이지 참조
    //...mapState({people : 'users'})

    // ...mapState([
    //   'users'
    // ])

    // users() {
    //   return this.$store.state.users;
    // },
  },
  methods: {
    ...mapActions('user', ['getUsers'])

    // getUsers() {
    //   this.$store.dispatch('getUsers')
    // }
  }

}
</script>

<style>

</style>