<template>
  <div class="header">
      <div>
          <router-link to="/" class="name">*DNS*</router-link>
      </div>
      <nav>
           <router-link class="nav_item" v-for="tab in tabs" :key="tab.path" :to="tab.path">{{tab.name}}</router-link>
      </nav>
  </div>
</template>

<script>
export default {
    name: 'HeaderNav',
    props: {
        tabs: Array
    }
}
</script>

<style scoped>
    /* .nav_item:focus{
        background-color: #b30000;
    } */

    .nav_item:hover{
        background-color: darkorange;
    }

    .header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background: white;
        height: 4rem;
        padding: 0 3rem;
        border: darkorange 3px solid;
    }
    nav{
        width: 50%;
        display: flex;
    }
    nav a{
        flex: 1;
        color: gray;
        font-size: 1.5rem;
        text-decoration: none;
        padding-top: 1rem;
        padding-bottom: 1rem;
        text-align: center;
    }
    .name{
        margin: 0;
        padding-left: 2rem;
        line-height: 4rem;
        color: darkorange;
        font-size: 2rem;
        text-decoration: none;
    }
</style>