<template>
    <SettingsView :page="page"/>
</template>
<script>
import SettingsView from '~/components/Admin/Settings/view.vue'
export default {
    layout: 'admin',
    data(){
      return{
        page: 'View /Edit Settings'
      }
    },
    components:{
        SettingsView
    }
}
</script>
