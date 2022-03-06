<template>
  <div class="blue lighten-3 pa-3">
    <h1>User 컴포넌트</h1>
    <p>이름: 뷰제이에스</p>
    <p>{{ getDateAndTime(createdAt) }}</p>
    {{ helloToMixin }}
    {{ test }}
    <hr>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <UserDetail 
          :name="name"
          :address="address"
          :phone="phone"
          :hasDog="hasDog"
        ></UserDetail>
      </v-flex>
      <v-flex xs12 sm6>
        <UserEdit
          :name="name"
          :address="address"
          :phone="phone"
          :hasDog="hasDog"
          @child="parents"
        ></UserEdit>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";
import { dateFormat } from "../mixins/dateFormat";

export default {
  components: {
    UserDetail,
    UserEdit
  },
  data() {
    return {
      name: 'Hoza',
      address: 'Seoul',
      phone: '1234-5678',
      hasDog: true,
      createdAt: null
    }
  },
  computed: {
    helloToMixin() {
      return this.mixinData + " 안녕하세요!"
    },
    test() {
      let a = '가나다'
      a = 'abc'
      return a;
    }
  },
  created() {
    console.log('유저 컴포넌트');
    this.createdAt = new Date();
  },
  methods: {
    parents(user) {
      this.name = user.name;
      this.address = user.address;
      this.phone = user.phone;
      this.hasDog = user.hasDog;
    },
    // getDateAndTime(date){
    //   let hour = date.getHours();
    //   let minutes = date.getMinutes();
    //   let fullDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
    //   return `${fullDate} ${hour}:${minutes}`
    // }
  },
  mixins:[dateFormat]
}
</script>