<template>
    <Order :orders="orders" :page="page"/>
</template>
<script>
import Order from '~/components/Admin/Order/index.vue'
export default {
    layout: 'admin',
    data(){
      return{
        page: 'Orders'
      }
    },
    components:{
        Order
    },
    mounted(){
        this.allOrders()
    },
    computed:{
        orders(){
          return (this.$store.state.orders.orders) ? this.$store.state.orders.orders : [];
        }
    },
    methods:{
        allOrders(){
            this.$store.dispatch('allOrders', this.$store.state.auth.headers)
            .then((resp) => {
            }).catch(err => console.log())
        }
    }
}
</script>
