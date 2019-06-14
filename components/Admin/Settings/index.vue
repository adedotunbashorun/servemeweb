<template>
  <div>
    <h3 class="page-title">{{ page }}</h3>
    <div class="row">
      <div class="col-md-12">
        <!-- TABLE NO PADDING -->
        <div class="panel">
          <div class="panel-heading">
            <h3 class="panel-title">Class List
              <nuxt-link to="/admin/settings/create" class="pull pull-right btn btn-outline-primary">
              Create Settings</nuxt-link>
            </h3>
            <hr/>
          </div>
          <div class="panel-body no-padding">
            <table id="settings-table" class="table">
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
                        <tr v-for="(category, index) in settings" :key="index">
                            <td>{{ index + 1}}</td>
                            <td><img :src="apiUrl+'/'+category.image_url" style="width:30px;height:30px" /></td>
                            <td>{{ category.name}}</td>
                            <td>{{category.description}}</td>
                            <td>
                             <nuxt-link class="" :to="{name: 'admin-class-id', params:{id : category._id}}" title="edit / view">
                                        <i class="material-icons">edit</i></nuxt-link>
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
    props:['settings','page'],
    data(){
        return {
            apiUrl : ''
        }
    },
    mounted(){
        this.apiUrl = config.apiUrl
        setTimeout(() => {
            $('#settings-table').DataTable({})
        },2000)
    },
    methods:{
       
    }
}
</script>
