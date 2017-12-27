<template>
    <div>
        <div class="jumbotron">
            <h1>{{ title }}</h1>
        </div>
        <user-list :users="users" @edit-click="editUser" @delete-click="deleteUser" @message="childMessage" ref="usersListRef"></user-list>

        <div class="alert alert-success" v-if="showSuccess">
             
            <button type="button" class="close-btn" v-on:click="showSuccess=false">&times;</button>
            <strong>{{ successMessage }}</strong>
        </div>
        <user-edit :user="currentUser" @user-saved="savedUser" @user-canceled="cancelEdit" v-if="currentUser"></user-edit>           
    </div>              
</template>

<script type="text/javascript">
    import UserList from './userList.vue';
    import UserEdit from './userEdit.vue';
    
    export default {
        data: {
        title: 'User Profile',
        editingUser: false,
        showSuccess: false,
        showFailure: false,
        successMessage: '',
        failMessage: '',
        currentUser: null,
        user: null
    },
    methods: {
        editUser: function(user){
            this.currentUser = user;
            this.editingUser = true;
            this.showSuccess = false;
        },
        saveUser: function(){
            this.editingUser = false;  // desaparece na vista esta secção          
            axios.put('api/users/'+this.currentUser.username,this.currentUser)
                .then(response=>{
                    this.showSuccess = true;
                    this.successMessage = 'Your details have been saved';
                    // Copies response.data.data properties to this.currentUser
                    // without changing this.currentUser reference
                    Object.assign(this.currentUser, response.data.data);
                    this.currentUser = null;
                    this.editingUser = false;
                });
        },
        cancelEdit: function(){
            this.showSuccess = false;
            this.editingUser = false;
            axios.get('api/users/'+this.currentUser.username)
                .then(response=>{
                    console.dir (this.currentUser);
                    // Copies response.data.data properties to this.currentUser
                    // without changing this.currentUser reference
                    Object.assign(this.currentUser, response.data.data); 
                    console.dir (this.currentUser);
                    this.currentUser = null;
                });
        },
        getLoginUser: function() {
            axios.get('api/login')
                .then(response=>{this.user = response.data.data;});
        }
    },
    mounted() {

    }

    }
</script>

<style scoped>  
p {
    font-size: 2em;
    text-align: center;
}
</style>