<template>
    <Settings :settings="settings" :page="page"/>
</template>
<script>
import Settings from '~/components/Admin/Settings/index.vue'
export default {
    layout: 'admin',
    data(){
      return{
        page: 'Settings'
      }
    },
    components:{
        Settings
    },
    mounted(){
        this.allSettings()
    },
    computed:{
        settings(){
            return this.$store.state.settings.settings
        }
    },
    methods:{
        allSettings(){
            this.$store.dispatch('allSettings', this.$store.state.auth.headers)
            .then((resp) => {
            }).catch(err => console.log())
        }
    }
}
</script>
