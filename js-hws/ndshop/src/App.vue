<template>
  <section>
    <header-nav class="header" :tabs="tabs"></header-nav>
    <main>
      <div class="router">
        <router-view>
        </router-view>
      </div>
    </main>
  </section>
</template>

<script>
import HeaderNav from './components/HeaderNav.vue';

export default {
  components:{HeaderNav},

  data() {
    return {
      tabs: [
        {name: 'Каталог', path: '/catalog'},
        {name: 'Авторизация', path: '/form'},
        {name: 'Корзина', path: '/cart'}
      ]
    }
  }
}
</script>

<style>
*{
  margin: 0;
}

#app {
  color: #151719;
  max-width: 1200px;
  margin: 0 auto;
  /*background-color: whitesmoke;*/
  height: 100vh;
}


</style>
