<template>
    <CreateSettings :page="page" />
</template>
<script>
import CreateSettings from '~/components/Admin/Settings/add.vue'
export default {
    layout: 'admin',
    data(){
      return{
        page: 'Create Settings'
      }
    },
    components:{
        CreateSettings
    }
}
</script>
