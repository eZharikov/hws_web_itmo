<template>
   <section>
      <h2>Корзина</h2>
      <div v-if="$store.state.shop.length">
         <table cellspacing="20">
            <tr>
             
               <th>Название товара</th>
               <th>Цена товара</th>
               <th>Количество</th>
            </tr>
            <tr v-for="item in $store.state.shop" :key="item.id">
               
               <td>
               <router-link :to="{name:'Card', params: {id: item.id}}">{{item.name}}</router-link>
               </td>
               <td class="price">{{item.totalprice}} руб.</td>
               <td class="quantity">
                  <span class="less" @click="less(item)">-</span>{{item.quantity}}<span @click="more(item)">+</span>

               </td>
            </tr>
            <tr>
               <th class="summ" colspan="4">Итого: {{$store.state.totalSum}} руб.</th>
            </tr>
         </table>
      </div>
      <div v-else>
         <p>Корзина пуста</p>
      </div>
   </section>

   <!-- <router-view>
    </router-view> -->
</template>

<script>
// import {mapMutations} from 'vuex';
export default {
   name: 'cart',
   // computed: {
   //      ...mapMutations(['getTotalSum'])
   //  },
   methods:{
         less(item){
            this.$store.commit('getLess', {product: item});
        },
         more(item){
            this.$store.commit('getMore', {product: item});
        }
    }
}
</script>

<style scoped>
   section{
      width: 800px;
      background: darkorange;
      margin: auto;
      padding: 50px;
      margin-top: 150px;
   }
   .summ{
      text-align: right;
   }
   h2{
      text-align: center;
      margin-bottom: 25px;
   }
   table{
       margin: auto;
   }
   .quantity, .price{
      text-align: center;
   }
   span{
      margin-right: 10px;
      margin-left: 10px;
   }
   span:hover{
      cursor: pointer;
   }
   .less{
      font-size: 1.3rem;
   }
</style>