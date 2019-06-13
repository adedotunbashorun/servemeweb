<template>
    <nav class="navbar navbar-default navbar-fixed-top">
			<div class="brand">
				<nuxt-link to="/admin/dashboard"><img src="" alt="ServeMe Logo" class="img-responsive logo"></nuxt-link>
			</div>
			<div class="container-fluid">
				<div class="navbar-btn">
					<button type="button" class="btn-toggle-fullwidth"><i class="lnr lnr-arrow-left-circle"></i></button>
				</div>

				<div id="navbar-menu">
					<ul class="nav navbar-nav navbar-right">
						<li class="dropdown">
							<a href="#" class="dropdown-toggle icon-menu" data-toggle="dropdown">
								<i class="lnr lnr-alarm"></i>
								<span class="badge bg-danger">5</span>
							</a>
							<ul class="dropdown-menu notifications">
								<li><a href="#" class="notification-item"><span class="dot bg-warning"></span>System space is almost full</a></li>
								<li><a href="#" class="notification-item"><span class="dot bg-danger"></span>You have 9 unfinished tasks</a></li>
								<li><a href="#" class="notification-item"><span class="dot bg-success"></span>Monthly report is available</a></li>
								<li><a href="#" class="notification-item"><span class="dot bg-warning"></span>Weekly meeting in 1 hour</a></li>
								<li><a href="#" class="notification-item"><span class="dot bg-success"></span>Your request has been approved</a></li>
								<li><a href="#" class="more">See all notifications</a></li>
							</ul>
						</li>
						<li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="lnr lnr-question-circle"></i> <span>Help</span> <i class="icon-submenu lnr lnr-chevron-down"></i></a>
							<ul class="dropdown-menu">
								<li><a href="#">Basic Use</a></li>
								<li><a href="#">Working With Data</a></li>
								<li><a href="#">Security</a></li>
								<li><a href="#">Troubleshooting</a></li>
							</ul>
						</li>
						<li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown"><img :src="apiUrl+'/'+user.profile_image" class="img-circle" alt="Avatar"> <span>{{user.first_name + ' ' + user.last_name}}</span> <i class="icon-submenu lnr lnr-chevron-down"></i></a>
							<ul class="dropdown-menu">
								<li><nuxt-link :to="{name: 'admin-users-profile'}"><i class="lnr lnr-user"></i> <span>My Profile</span></nuxt-link></li>
								<li><a href="#"><i class="lnr lnr-envelope"></i> <span>Message</span></a></li>
								<li><a href="#"><i class="lnr lnr-cog"></i> <span>Settings</span></a></li>
								<li><a href="#" @click="logoutUser"><i class="lnr lnr-exit"></i> <span>Logout</span></a></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
</template>
<script>
const Cookie = process.client ? require('js-cookie') : undefined
import {config} from '../../../config'
export default {
    props: ['user'],
    data(){
      return{
        id : '',
        apiUrl:''
      }
    },
    mounted(){
      this.apiUrl = config.apiUrl
      this.id = this.$store.getters.authUser._id
    },
    methods:{
        logoutUser() {
          let component = this;
          this.$store.dispatch('logout',this.$store.state.auth.headers)
          .then(() => {
            Cookie.remove('jwtToken')
            Cookie.remove('user')
            const token = null
            const user = null
            this.$store.commit('LOGIN_SUCCESS', {token, user})
            this.$router.go('/')
          })
          .catch(err => {
            Cookie.remove('jwtToken')
            Cookie.remove('user')
            const token = null
            const user = null
            this.$store.commit('LOGIN_SUCCESS', {token, user})
            this.$router.go('/')
          })
      },
    }
}
</script>
