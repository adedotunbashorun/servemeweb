<template>
    <Dashboard :user="user" :result="result" :page="page"/>
</template>
<script>
export default {
    layout: 'admin',
    components:{
        Dashboard: () => import('@/components/Admin/dashboard.vue'),
    },
    data(){
      return{
        result:{},
        page: 'Dashboard'
      }
    },
    mounted(){
      this.getCount()
    },
    computed:{
        user(){
            return this.$store.getters.authUser
        }
    },
    methods:{
        getCount(){
            this.$store.dispatch('allCounts', this.$store.state.auth.headers)
            .then((resp) => {
              this.result = resp.data.result
            }).catch(err => console.log())
        }
    }
}
</script>
