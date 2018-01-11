<template>
	<div class="container">
		<div class="row">
	        <div class="col-md-8 col-md-offset-2">
	            <p>{{message}}</p>
	            <div class="text-left">
	                <button class="btn btn-primary"  v-on:click="logout()">Logout</button>
	                <router-link class="btn btn-default" to="/users">Cancel</router-link>
	            </div>
	        </div>
	    </div>
	</div>
</template>


<script type="text/javascript">
export default {
    data (){
        return {
        	// null obj
        };
			},
				computed: {
						message(){
								return "Sure you want logout?";
						}
    },
    methods: {
    	logout: function(){
				console.log("estou dentro da logout function");
    		// apagar o token da localStorage
    		let logConfig = {

            headers: {
							'Authorization': 'Bearer ' + window.localStorage.getItem('access_token'),
							// 'Accept' : 'application/json',
					}
				};
				console.log("antes do axios");
				console.log(logConfig);

					axios.post('api/logout', null, logConfig)
					.then(response => {
					if(response.status == 200){
							window.localStorage.removeItem('access_token');
							console.log("Token removed");
					}
					console.log(response);
			}).catch(error => {
					console.log(error);
			});
	}
}
}
</script>

<style scoped>
</style>
