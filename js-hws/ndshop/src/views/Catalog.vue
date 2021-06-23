<template>

<section>
  <div class="nav">
      <router-link class="catalog" v-for="tab in tabs" :key="tab.name" :to="tab.path">{{tab.name}}</router-link>
   </div>
   <div class="products">
         <router-view/>
   </div>
</section> 

</template>

<script>
export default {
   name: 'Catalog',
   data(){
      return{
         tabs:[
            {name: 'Ноутбуки', path: '/catalog/desktop'},
            {name: 'Планшеты', path: '/catalog/tab'},
            {name: 'Телефоны', path: '/catalog/phone'}

         ]
      }
   }
}
</script>

<style scoped>
   section{
      display: flex;
      flex-grow: 1;
   }

   .nav{
      width: 250px;
      height: 580px;
      display: flex;
      flex-direction: column;
      background-color: white;
      border: darkorange 3px solid;
      justify-content: center;
   }
   .catalog{
      text-align: center;
      padding: 15px 60px;
      width: 130px;
      font-size: 1.5rem;
      text-decoration: none;
      color: gray;
   }
   .catalog:focus{
      background-color: darkorange;
    }
   .catalog:hover{
      background-color: darkorange;
    }
   .products{
      padding: 2rem;
      flex-grow: 1;
      display: flex;
      background-color: darkorange;
   }
</style>