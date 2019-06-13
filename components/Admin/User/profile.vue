<template>

  <div>
    <h3 class="page-title">{{ page }} <nuxt-link to="/admin/users" class="pull pull-right btn btn-outline-primary"><i class="fa fa-arrow-left"></i> Back</nuxt-link></h3>
    <div class="panel panel-profile">
      <div class="clearfix">
        <!-- LEFT COLUMN -->
        <div class="profile-left">

          <!-- PROFILE HEADER -->
          <div class="profile-header">
            <div class="overlay"></div>
            <div class="profile-main">
              <img src="assets/img/user-medium.png" class="img-circle" alt="Avatar">
              <h3 class="name">{{ user_details.first_name +' ' + user_details.last_name}}</h3>
              <span class="online-status status-available" v-if="user_details.online_status == 'true'">Available</span>
              <span class="offline-status status-available" v-else>Not Available</span>
            </div>
            <div class="profile-stat">
              <div class="row">
                <div class="col-md-4 stat-item">
                  45 <span>Jobs</span>
                </div>
                <div class="col-md-4 stat-item">
                  15 <span>Completed</span>
                </div>
                <div class="col-md-4 stat-item">
                  2174 <span>Average Rating</span>
                </div>
              </div>
            </div>
          </div>
          <!-- END PROFILE HEADER -->

          <!-- PROFILE DETAIL -->
          <div class="profile-detail">
            <div class="profile-info">
              <h4 class="heading">Basic Info</h4>
              <ul class="list-unstyled list-justify">
                <li>Mobile <span>{{ user_details.phone}}</span></li>
                <li>Email <span>{{ user_details.email}}</span></li>
              </ul>
            </div>
            <div class="profile-info">
              <h4 class="heading">About</h4>
              <p>{{ user_details.brief  }}</p>
            </div>
            <div class="text-center"><a href="#tab-bottom-left2" role="tab" data-toggle="tab" class="btn btn-primary">Edit Profile</a></div>
          </div>
          <!-- END PROFILE DETAIL -->
        </div>
        <!-- END LEFT COLUMN -->

        <!-- RIGHT COLUMN -->
        <div class="profile-right">

          <!-- TABBED CONTENT -->
          <div class="custom-tabs-line tabs-line-bottom left-aligned">
            <ul class="nav" role="tablist">
              <li class="active"><a href="#tab-bottom-left1" role="tab" data-toggle="tab">Recent Activity</a></li>
              <li><a href="#tab-bottom-left2" role="tab" data-toggle="tab">Edit Profile</a></li>
              <li><a href="#tab-bottom-left3" role="tab" data-toggle="tab">Supports</a></li>
            </ul>
          </div>
          <div class="tab-content">
            <div class="tab-pane fade in active" id="tab-bottom-left1">
              <div class="table-responsive">
                <table id="activity-table" class="table project-table">
                  <thead>
                      <tr>
                      <th>S/N</th>
                      <th>Action</th>
                      <th></th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr v-for="(activity,index) in activities" :key="index">
                      <th scope="row">
                          {{ index+1 }}
                      </th>
                      <td>
                          {{ activity.description }}
                      </td>
                      <td><Adedotun :value="activity.createdAt" fn="humandate" /></td>
                      </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="tab-pane fade" id="tab-bottom-left2">
              <div class="table-responsive">
                <form @submit.prevent="checkForm">
                    <div class="row">
                        <div class="col-md-12">
                            <strong class="text-muted d-block mb-2"></strong>
                            <p v-if="errors.length">
                                <b>Please correct the following error(s):</b>
                                <ul>
                                <li class="text-danger" v-for="error in errors" :key="error">{{ error }}</li>
                                </ul>
                            </p>
                            <div class="alert alert-success" v-if="success"><i class="material-icons" data-dismiss="alert">close</i>{{ success }}</div>
                            <div class="alert alert-danger" v-if="error"><i class="material-icons" data-dismiss="alert">close</i>{{ error }}</div>
                            <div class="form-group">
                                <select class="form-control" v-model="user_details.title">
                                    <option value="">-- Select Title --</option>
                                    <option value="Mr">Mr.</option>
                                    <option value="Mrs">Mrs.</option>
                                    <option value="Miss">Miss.</option>
                                </select>
                            </div>
                            <div class="form-group">
                               <select class="form-control" v-model="user_details.user_type">
                                    <option value="">-- User Type--</option>
                                    <option value="admin">Admin</option>
                                    <option value="vendor">Vendor</option>
                                    <option value="client">Client</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <input type="file" class="form-control" @change="onFileChange">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" v-model="user_details.first_name" placeholder="First Name">
                            </div>

                            <div class="form-group">
                                <input type="text" class="form-control" v-model="user_details.last_name" placeholder="Last Name" aria-label="Full name" aria-describedby="basic-addon1">
                            </div>
                            <div class="form-group">
                                <input type="text" v-model="user_details.phone" pattern="[0-9]{6,14}[0-9]$" class="form-control" placeholder="Phone Number" value="">
                                <span class="note">Format: 2349034268873</span>
                            </div>

                            <div class="form-group">
                                <input type="text" v-model="user_details.email" class="form-control" id="inputAddress" placeholder="Email" value="">
                            </div>
                            <div class="form-group">
                                <textarea type="text" v-model="user_details.address" placeholder="Address" class="form-control" id="inputAddress" rows="4"></textarea>
                            </div>
                            <div class="form-group">
                                <textarea type="text" v-model="user_details.brief " placeholder="brief  details about yourself" class="form-control" id="inputAddress" rows="4"></textarea>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="mb-2 btn btn-primary mr-2">Update User</button>
                            </div>
                        </div>
                    </div>
                </form>
              </div>
            </div>
            <div class="tab-pane fade" id="tab-bottom-left3">
              <div class="table-responsive" v-if="supports">
                <table id="activity-table" class="table project-table">
                  <thead>
                      <tr>
                      <th>S/N</th>
                      <th>Ticket No</th>
                      <th>Subject</th>
                      <th>Message</th>
                      <th>Action</th>
                      <th></th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr v-for="(support,index) in supports" :key="index">
                      <th scope="row">
                          {{ index+1 }}
                      </th>
                      <td>
                          {{ support.ticket_no }}
                      </td>
                      <td>
                          {{ support.title }}
                      </td>
                      <td>
                          {{support.message.substr(0, 100)}}
                      </td>
                      <td><nuxt-link class="" :to="{name: 'admin-support-id', params:{id : support._id}}" title="edit / view">
                            <i class="material-icons">edit</i></nuxt-link></td>
                      </tr>
                  </tbody>
                </table>
              </div>
              <label class="alert alert-info text-default" v-else> No Support Message</label>
            </div>
          </div>
          <!-- END TABBED CONTENT -->
        </div>
        <!-- END RIGHT COLUMN -->
      </div>
    </div>
  </div>
</template>
<script>
import Adedotun from '../../Extra/adedotun'
export default {
    props:['page'],
    data(){
      return {
        errors: [],
        user_details: {
            title:'',
            user_type: '',
            address:'',
            first_name:'',
            last_name:'',
            email:'',
            phone:'',
            brief : '',
            profile_image: ''
        },
        image: '',
        activities:[],
        supports:[],
        roles:[],
        permission:[],
        success: '',
        error: ''
      }
  },
  components:{
      Adedotun
  },
  mounted(){
        this.getUser()
        setTimeout(() => {
            $('#activity-table').DataTable({})
        },2000)

  },
  methods: {
    getUser(){
        this.$store.dispatch('userById', [(this.$nuxt._route.params.id) ? this.$nuxt._route.params.id : this.$store.getters.authUser._id,this.$store.state.auth.headers])
        .then((resp) => {
            this.user_details = resp.data.user
            this.activities = resp.data.activities
            this.supports  = resp.data.supports
        }).catch(err => console.log())
    },

    update(){
        let component = this;
        this.$store.dispatch('updateUser', [component.user_details,this.$store.state.auth.headers])
        .then((resp) => {
          this.error = ''
          this.success = ''
          if(resp.data.error){
            this.error = resp.data.msg
          }else{
            this.success = resp.data.msg
            this.errors = []
          }
        })
        .catch(err => {
            this.error = 'please verify that the data entered are correct.'
        })
    },
    checkForm: function (e) {
        if (this.user_details.title && this.user_details.first_name && this.user_details.last_name && this.user_details.email && this.user_details.phone) {
        this.update();
        return true;
        }

        this.errors = [];
        if (!this.user_details.title) {
        this.errors.push('Title required.');
        return false;
        }
        if (!this.user_details.first_name) {
        this.errors.push('FirstName required.');
        return false;
        }
        if (!this.user_details.last_name) {
        this.errors.push('LastName required.');
        return false;
        }
        if (!this.user_details.phone) {
        this.errors.push('Phone Number required.');
        return false;
        }
        if (!this.user_details.email) {
        this.errors.push('Email required.');
        return false;
        }else if (!this.validEmail(this.user_details.email)) {
        this.errors.push('Valid email required.');
        return false;
        }
        e.preventDefault();

    },
    validEmail: function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    },
    onFileChange(e) {
        var files = e.target.files || e.dataTransfer.files;
        if (!files.length)
          return;
        this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.user_details.profile_image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
  }
}
</script>
