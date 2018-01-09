<template>

<!-- falta aqui o form do tipo submit e cenas -->
<form v-on="submit.prevent=register(user)">
  <div class="control-group">
    <label class="control-label" for="username">Username</label>
    <div class="controls">
      <input type="text" v-model="user.username" id="username" name="username" class="input-xlarge">
    </div>
  </div>

  <div class="control-group">
    <label class="control-label" for="email">E-mail</label>
    <div class="controls">
      <input type="text" v-model="user.email" id="email" name="email" class="input-xlarge">
    </div>
  </div>

  <div class="control-group">
    <label class="control-label" for="password">Password</label>
    <div class="controls">
      <input type="password" v-model="user.password" id="password" name="password" class="input-xlarge">
    </div>
  </div>

  <div class="control-group">
    <label class="control-label" for="name"> Name </label>
    <div class="controls">
      <input type="text" v-model="user.name" id="name" name="name" class="input-xlarge">
    </div>
  </div>

  <div class="control-group">
    <!-- Button -->
    <div class="controls">
      <button class="btn btn-success">Register</button>
    </div>
  </div>

</form>
</template>

<script type="text/javascript">


export default {
  data() {
    return {
      user : {
        username : '',
        email: '',
        password : '',
		    name : '',

      },
      registerError: false
    };
  },
  methods: {
    register: function() {
    	axios.post('api/register', {
    							username : user.username,
    							email : user.email,
    							password : user.password,
    							name : user.name
    						}).then( function(response) {
    		// guarda logo o token do registado
    		localStorage.setItem('token', response.data.access_token);
    	}).catch(registerError => {
    		console.log(registerError);
    	});
    },
  }


}



</script>


<scope>

</scope>
