<template>
  <section>
    <div class="heading">
      <h1><span>Test</span>, {{mainTitle}}</h1>
      <input v-model="mainTitle" type="text" placeholder="What are you looking for?">
    </div>
    <div class="tab-inner">
      <ul class="btn" ref="btns">
        <li v-for="(title, idx) in titleList" @click="myFunction" :key="idx" :dataAlt="'tab' + Number(idx + 1)" :class="idx === 0 ? 'active':''">
          {{title}}
        </li>
      </ul>
      <div class="tabs" ref="tabs">
        <div  v-for="(data, index) in dataList"
              :key="index"
              :id="data.dataAlt"
              :class="index === 0 ? 'active':''">
          <h2>{{data.title}}</h2>
          <p>
            {{data.content}}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      dataList: [],
      titleList: [],
      mainTitle:''
    }
  },
  mounted() {
    //dataList를 2번 for문 돌려서 title과 content를 나누고 v-modal을 쓸 수도 있다.
    this.dataList = [
      {
        dataAlt: 'tab1',
        title: 'HTML5',
        content: 'Test Contents HTML5'
      },
      {
        dataAlt: 'tab2',
        title: 'CSS3',
        content: 'Test Contents CSS3'
      },
      {
        dataAlt: 'tab3',
        title: 'JQUERY',
        content: 'Test Contents JQUERY'
      },
      {
        dataAlt: 'tab4',
        title: 'JAVASCRIPT',
        content: 'Test Contents JAVASCRIPT'
      },
      {
        dataAlt: 'tab5',
        title: 'CSS FRAMEWORKS',
        content: 'Test Contents CSS FRAMEWORKS'
      }
    ];
    this.titleList = this.dataList.map(data => data.title);
  },
  watch: {
    mainTitle(o){
      if(o[0] === 'Test'){
        alert('예약어는 사용할 수 없습니다.');
        this.mainTitle = [];
      }
    }
  },
  methods: {
    myFunction(e) {
      // const id = e.target.attributes.dataAlt.value;

      // const cs = [...e.target.parentNode.parentNode.childNodes[1].childNodes];
      // const frc = cs.find(o => o.classList.contains('active'));
      // frc.classList.remove('active');
      // let fac = cs.find(o => o.id === id);
      // fac.classList.add('active');
      //
      // const ts = [...e.target.parentNode.childNodes];
      // const ft = ts.find(o => o.classList.contains('active'));
      // ft.classList.remove('active');
      // e.target.classList.add('active');
      //너무 비효율 이다....

      const id = e.target.attributes.dataAlt.value;

      const cs = [...this.$refs.tabs.childNodes];
      const frc = cs.find(o => o.classList.contains('active'));
      frc.classList.remove('active');
      let fac = cs.find(o => o.id === id);
      fac.classList.add('active');

      const ts = [...this.$refs.btns.childNodes];
      const ft = ts.find(o => o.classList.contains('active'));
      ft.classList.remove('active');
      e.target.classList.add('active');



    }
  }
}
</script>
<style>
/* Google Web Fonts CDN */
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR:300,400,500,700,900&display=swap');

body {
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif;
  color: #222;
  line-height: 1.6em;
  background-color: #f4f4f4;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
section {
  width: 800px;
}
.tab-inner {
  margin-top: 30px;
}
.btn {
  list-style: none;
  padding: 0;
  margin: 0;
  overflow: hidden;
  margin-left: 10px;
}
.btn li {
  float: left;
  /* border: 1px solid #000; */
  width: 120px;
  text-align: center;
  cursor: pointer;
  background-color: #eee;
  border-right: 1px solid #ddd;
  padding: 5px;
  border-top: 2px solid transparent;
}
.btn li:last-child {
  width: 170px;
  border-right: none;
}
.btn li:hover,
.btn li.active {
  background-color: #fff;
  border-top: 2px solid crimson;
}
.tabs {}
.tabs div {
  background-color: #fff;
  padding: 20px;
  box-sizing: border-box;
  display: none;
}
.tabs div.active {
  display: block;
}

/* Tab Content */
.tabs div h2 {
  text-align: center;
}
.tabs div img {
  float: left;
  margin-right: 10px;
}
.tabs div p {
  overflow: hidden;
}

/* Heading */
.heading {}
.heading h1 {
  font-size: 30px;
  text-align: center;
}
.heading h1 span {
  color: crimson;
}
.heading input[type=text] {
  outline: none;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid #ddd;
  background: #fff;
  background-size: 23px;
  padding-left: 35px;
}
.heading input[type=text]::placeholder {
  font-style: italic;
  transition: 0.3s;
}
.heading input[type=text]:focus::placeholder {
  /* display: none; */
  /* visibility: hidden; */
  opacity: 0;
}

</style>
