<template>
  <div>
    <h3 class="page-title">{{ page }}</h3>
    <div class="row">
      <div class="col-md-12">
        <!-- TABLE NO PADDING -->
        <div class="panel">
          <div class="panel-heading">
            <h3 class="panel-title">User List
              <nuxt-link to="/admin/users/create" class="pull pull-right btn btn-outline-primary">
              Create User</nuxt-link>
            </h3>
            <hr/>
          </div>
          <div class="panel-body no-padding">
            <table id="user-table" class="table">
              <thead>
                <tr>
                    <th>#</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>User Type</th>
                    <th>Is Active</th>
                    <th> Action </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(user,index) in users" :key="index">
                    <td>{{ index +1 }}</td>
                    <td>{{ user.first_name + ' ' + user.last_name}}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.phone }}</td>
                    <td>{{ user.user_type }}</td>
                    <td style="color: #3ED60E">{{ user.is_active }}</td>
                    <td>
                    <!-- <ul class="navbar-nav border-left flex-row ">
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-nowrap px-3" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                            <span class="d-none d-md-inline-block">Action</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-small"> -->
                            <nuxt-link class="" :to="{name: 'admin-users-id', params:{id : user._id}}" title="edit / view">
                            <i class="material-icons">edit</i></nuxt-link>
                            <!-- <div class="dropdown-divider"></div> -->
                            <a v-if="user.user_type !== 'admin'" class="text-danger" style="cursor:pointer;" @click="deleteUser(user._id)" title="delete">
                            <i class="material-icons text-danger">delete</i></a>
                        <!-- </div>
                        </li>
                    </ul> -->
                    </td>
                </tr>
              </tbody>
          </table>
          </div>
        </div>
        <!-- END TABLE NO PADDING -->

      </div>
    </div>
  </div>
</template>
<script>
export default {
    props:['users','page'],
    mounted(){
        setTimeout(() => {
            $('#user-table').DataTable({})
        },2000)
    },
    methods:{
        deleteUser(id){
            this.$store.dispatch('removeUser', [id,this.$store.state.auth.headers])
            .then((resp) => {
            }).catch(err => console.log())
        }
    }
}
</script>
