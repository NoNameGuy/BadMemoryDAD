@extends('master')

@section('title', 'User Profile')

@section('content')


<div class="jumbotron">
    <h1>@{{ title }}</h1>
</div>
<table class="table table-striped">
    <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="user in users"  :key="user.id" :class="{active: currentUser === user}">
            <td>@{{ user.name }}</td>
            <td>@{{ user.email }}</td>
            <td>@{{ user.username }}</td>
            <td>
                <a class="btn btn-xs btn-primary" v-on:click.prevent="editUser(user)">Edit</a>
                <!-- <a class="btn btn-xs btn-danger" v-on:click.prevent="deleteUser(user)">Delete</button> -->
            </td>
        </tr>
    </tbody>
</table>



<div class="alert alert-success" v-if="showSuccess">
    <button type="button" class="close-btn" v-on:click="showSuccess=false">&times;</button>
    <strong>@{{ successMessage }}</strong>
</div>


<div class="jumbotron" v-if="editingUser" >
    <h2>Edit Your Details</h2>
    <div class="form-group">
        <label for="inputName">Name</label>
        <input
            type="text" class="form-control" v-model="currentUser.name"
            name="name" id="inputName" 
            placeholder="Fullname" value="" />
    </div>
    <div class="form-group">
        <label for="inputPassword">Password</label>
        <input
            type="text" class="form-control" v-model="currentUser.password"
            name="password" id="password"
            placeholder="Password" value=""/>
    </div>
    <div class="form-group">
        <label for="inputEmail">Email</label>
        <input
            type="email" class="form-control" v-model="currentUser.email"
            name="email" id="inputEmail"
            placeholder="Email address" value=""/>
    </div>
    

    <div class="form-group">
        <a class="btn btn-default" v-on:click.prevent="saveUser()">Save</a>
        <a class="btn btn-default" v-on:click.prevent="cancelEdit()">Cancel</a>
    </div>

</div>





@endsection
@section('pagescript')
<script src="js/userapp.js"></script>

<!-- <script src="/js/manifest.js"></script>
<script src="/js/vendor.js"></script>
<script src="/js/vueapp.js"></script>
 -->
 @stop  
