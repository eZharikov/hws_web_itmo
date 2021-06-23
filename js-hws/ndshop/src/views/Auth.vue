<template>
   <div class="form-box">
      <vee-form :validation-schema="rules" @submit="sendData">
         <h2>Авторизация</h2>
         <div class="flex-row box">
            <label class="col-4">Введите имя</label>
            <vee-field class="col-8 input" name="name"></vee-field>
            <vee-error class="error" name="name"/>
         </div>
         <div class="flex-row box">
            <label class="col-4">Введите пароль</label>
            <vee-field class="col-8 input" name="password"></vee-field>
            <vee-error class="error" name="password"/>
         </div>
         <input class="button" type="submit" value="Войти">
         <p class="true unshow">Авторизация прошла успешно! <br>Можете приступить к покупкам</p>
         <p class="false unshow">Введены некорректные данные имя/пароль</p>
      </vee-form>
   </div>
</template>

<script>
import {Form, Field, ErrorMessage, configure} from 'vee-validate';
import * as yup from 'yup';

configure({
  validateOnInput: true
});

export default {
   name: 'Form',
   components: {
    VeeForm: Form, 
    VeeField: Field, 
    VeeError: ErrorMessage 
   },

   data(){
    return{
      rules: yup.object({
         name: yup.string().trim().required().max(10, "Максимум 10 символов"),
         password: yup.string().trim().required().min(5, "Мимимум 5 символов"),
      })
    }
  },

   methods: {
   
      sendData(values){
         console.log(values);
         this.$store.commit('checkUser', {user: values});
      }
   }

}

</script>

<style scoped>
   .form-box{
      margin: auto;
      margin-top: 100px;
      width: 450px;
   }

   h2{
      margin-bottom: 32px;
   }

   .flex-row {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
   }
   .col-4 {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
   }

   .col-8 {
    -ms-flex: 0 0 66.666667%;
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
   }

   label{
      font-size: 1.3rem;
   }

   .input{
      /* position: relative; */
      height: 45px;
      margin-right: 16px;
      border-radius: 7px;
      border: 1px solid grey;
   }

   .error{
   /* top: 10px; */
    left: 75%;
    position: absolute;
    color: red;
   }

   .box{
      margin-bottom: 32px;
   }

   .button{
      width: 50%;
      margin: 0 25%;
      border: 2px solid rgb(29, 28, 28);
      border-radius: 3px;
      height: 45px;
      background-color: darkorange;
      font-size: 1.3rem;
      color: rgb(29, 28, 28);
      cursor: pointer;
      margin-bottom: 16px;
   }

   .button:focus{
      border: 2px solid darkorange;
   }

   .unshow{
      display: none;
   }

   .true{
      color: green;
   }

    .false{
      color: red;
   }
</style>