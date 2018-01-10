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
    data: function(){
        return {
        	// null obj
        }
    },
    methods: {
    	logout: function() {
    		// apagar o token da localStorage
    		let headers = {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
            }};
            axios.post('api/logout', null, headers) // url, body, params
            	.then(response =>{
            		// console.log(response);
            		if(response.status == 200) { // tudo ok para remover o token
	            		localStorage.remove('acess_token');
	            		console.log('Token removido');
            		}
        		}).catch(logoutError => {
            		console.log(logoutError);
            	});
        }
    	} // end methods
		}


</script>
