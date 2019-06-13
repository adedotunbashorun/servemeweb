<template>
    <div id="wrapper">
          <Header :user="user"/>
            <SideBar/>
            <div class="main">
              <div class="main-content">
				        <div class="container-fluid">
                    <nuxt />
				        </div>
              </div>
            </div>
            <div class="clearfix"></div>
            <Footer/>
    </div>
</template>
<script>
import Header from '~/components/Layout/Admin/Header.vue'
import SideBar from '~/components/Layout/Admin/SideBar.vue'
import Footer from '~/components/Layout/Admin/Footer.vue'

export default {
  middleware: 'auth',
  props: ['page'],
    head () {
        return {
            bodyAttrs: {
                class: ''
            },
            link: [
                { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.6/css/all.css',crossorigin:'anonymous' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
                { rel: 'stylesheet',href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700'},
                { rel: 'stylesheet', href: '/assets/vendor/bootstrap/css/bootstrap.min.css' },
                { rel: 'stylesheet', href: '/assets/vendor/font-awesome/css/font-awesome.min.css' },
                { rel: 'stylesheet',href: '/assets/vendor/linearicons/style.css'},
                { rel: "stylesheet" , href: 'https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css'},
                { rel: 'stylesheet',href: "/assets/vendor/chartist/css/chartist-custom.css"},
                { rel: 'stylesheet',href: 'https://fonts.googleapis.com/css?family=Overpass|Raleway'},
                { rel: 'stylesheet',href: '/assets/css/main.css'},
                { rel: 'stylesheet', href: '/assets/css/demo.css'}
            ],
            script: [
                { src: '/assets/vendor/jquery/jquery.min.js' },
                { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js' },
                { src: '/assets/vendor/bootstrap/js/bootstrap.min.js'},
                { src: '/assets/vendor/jquery-slimscroll/jquery.slimscroll.min.js' },
                { src: "/assets/vendor/jquery.easy-pie-chart/jquery.easypiechart.min.js"},
		            { src: "/assets/vendor/chartist/js/chartist.min.js"},
                { src: '//cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js'},
                { src: '/assets/scripts/klorofil-common.js' }
            ]
        }
    },
    data(){
        return {
            // user: {}
        }
    },
    components: {
        Header,Footer,SideBar
    },
    computed:{
        user(){
            return this.$store.getters.authUser
        }
    }
}
</script>
