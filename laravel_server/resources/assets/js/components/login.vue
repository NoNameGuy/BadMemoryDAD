<template>

  <form action="action_page.php">
   <div class="container">
     <div class="form-group">
       <label>Email: </label>
       <input type="text" v-model="user.email" placeholder="Enter Your Email" id="inputEmail" name="email" required>
        <!-- v-model vai associar diretamente o user.email da vista com o email do user na parte do script -->
     </div>
     <div class="form-group">
       <label>Password: </label>
       <input type="password" v-model="user.password" placeholder="Enter Your Password" id="inputPassword" name="password" required>
     </div>
     <button type="submit" v-on:click().prevent="login()">Login</button>
       <button type="submit" v-on:click().prevent="register()">Register</button>
   </div>


 </form>


</template>

<script type="text/javascript">


export default {
  data() {
    return {
      user : {
        email:"",
        password:""
      },
      loginError: false
    };
  },
  methods: {
    login: function (){
      axios.post('api/login', this.user, { // user que vem associado aos campos de email e password
        headers: {
          'Content-type' : 'application/json'
        }
      }).then(responde => {
        // buscar o token do user logado
        let token = response.data.acess_token;
        // guardar na localStorage o token
        localStorage.setItem('token', token);
        // user já se encontra logado e com a sessão guardada
        console.log(token);
        console.log(this.user);
        this.$router.push('/users'); // vou chamar um component do appvue.vue
      }).catch(loginError => {
        // Something went wrong!
        loginError = true;
        console.log(loginError);
      });

    },
    register: function() {
        this.$router.push('/register'); // vou chamar um component do appvue.vue

    },
  }


}



</script>


<scope>

</scope>
