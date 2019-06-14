<template>
  <div>
    <h3 class="page-title">{{ page }}</h3>
    <div class="row">
      <div class="col-md-12">
        <!-- TABLE NO PADDING -->
        <div class="panel">
          <div class="panel-heading">
            <h3 class="panel-title">Class List
              <nuxt-link to="/admin/class/create" class="pull pull-right btn btn-outline-primary">
              Create Class</nuxt-link>
            </h3>
            <hr/>
          </div>
          <div class="panel-body no-padding">
            <table id="classes-table" class="table">
                    <thead class="bg-light">
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Action </th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(category, index) in classes" :key="index">
                            <td>{{ index + 1}}</td>
                            <td><img :src="apiUrl+'/'+category.image_url" style="width:30px;height:30px" /></td>
                            <td>{{ category.name}}</td>
                            <td>{{category.description}}</td>
                            <td>
                                <!-- <ul class="navbar-nav border-left flex-row ">
                                    <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle text-nowrap px-3" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                        <span class="d-none d-md-inline-block">Action</span>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-small"> -->
                                        <nuxt-link class="" :to="{name: 'admin-class-id', params:{id : category._id}}" title="edit / view">
                                        <i class="material-icons">edit</i></nuxt-link>
                                        <!-- <div class="dropdown-divider"></div> -->
                                        <a class="text-danger" style="cursor:pointer;" @click="deleteCategory(category._id)" title="delete">
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
import {config} from '../../../config'
export default {
    props:['classes','page'],
    data(){
        return {
            apiUrl : ''
        }
    },
    mounted(){
        this.apiUrl = config.apiUrl
        setTimeout(() => {
            $('#classes-table').DataTable({})
        },2000)
    },
    methods:{
        deleteCategory(id){
            this.$store.dispatch('removeClass', [id,this.$store.state.auth.headers])
            .then((resp) => {
            }).catch(err => console.log())
        }
    }
}
</script>
