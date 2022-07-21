<!-- https://idlecomputer.tistory.com/181 -->
<!-- https://velog.io/@mintaeho75/Vue.js-%EA%B8%B0%EC%B4%88-%EC%8A%AC%EB%A1%AF%EA%B3%BC-%EB%AF%B9%EC%8A%A4%EC%9D%B8 -->
<!-- https://kr.vuejs.org/v2/guide/components-slots.html -->


<template>
  <div>

    <slotButtonVuejsTest>
      Save
    </slotButtonVuejsTest>

    <slotContentsVuejsTest>
      <h1 slot="header">Here might be a page title</h1>

      <p>A paragraph for the main content.</p>
      <p>And another one.</p>

      <p slot="footer">Here's some contact info</p>
    </slotContentsVuejsTest>
    
    <div>-----1</div>

    <slotScopeVuejsTest :todos="todos">
      <li slot="litodo" slot-scope="slotProps" v-if="slotProps.todo.isCompleted">
        <span>V--</span>{{ slotProps.todo.text }}
      </li>
    </slotScopeVuejsTest>

    <div>-----2</div>

    <slotScopeVuejsTest :todos="todos">
      <template v-slot:litodo="{todo}">
        <li v-if="todo.isCompleted">
          <span>V--</span>{{ todo.text }}
        </li>
      </template>
    </slotScopeVuejsTest>

    <div>-----3</div>

    <slotScopeBasicArrayTest :items="items">
      <template slot="menu-item" slot-scope="{item}">
        <div>
          <em v-text="item"></em>
        </div>
      </template>
    </slotScopeBasicArrayTest>


    <slotScopeBasicArrayTest :items="items">
      <template v-slot:menu-item="{item}">
        <div>
          <em v-text="item"></em>
        </div>
      </template>
    </slotScopeBasicArrayTest>


  </div>
</template>

<script>
import slotButtonVuejsTest from '@/components/slot/slotButtonVuejsTest';
import slotContentsVuejsTest from '@/components/slot/slotContentsVuejsTest';
import slotScopeVuejsTest from '@/components/slot/slotScopeVuejsTest';
import slotScopeBasicArrayTest from '@/components/slot/slotScopeBasicArrayTest';

export default {
  data() {
    return {
        todos: [
            { id: 1, text: 'C++', isCompleted: true },
            { id: 2, text: 'JavaScript', isCompleted: false },
            { id: 3, text: 'Java', isCompleted: true },
            { id: 4, text: 'Perl', isCompleted: false },
        ],
        items: ['one', 'two', 'three']
    }
  },
  components: {
    slotButtonVuejsTest,
    slotContentsVuejsTest,
    slotScopeVuejsTest,
    slotScopeBasicArrayTest
  }
}
</script>
 