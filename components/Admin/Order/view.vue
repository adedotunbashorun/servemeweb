<template>
  <div>
    <h3 class="page-title">
      {{ page
      }}<nuxt-link
        to="/admin/order"
        class="pull pull-right btn btn-outline-primary"
        ><i class="fa fa-arrow-left"></i> Go Back</nuxt-link
      >
    </h3>
    <div class="row">
      <div class="col-md-12">
        <!-- PANEL HEADLINE -->
        <div class="panel panel-headline">
          <div class="panel-heading">
            <h3 class="panel-title">View Order</h3>
            <hr />
            <!-- <span class="text-uppercase panel-subtitle"
              >Fill form to update class</span
            > -->
          </div>
          <div class="panel-body"></div>
        </div>
        <!-- END PANEL HEADLINE -->
      </div>
    </div>
  </div>
</template>
<script>
import { config } from "../../../config";
import Adedotun from "../../Extra/adedotun";
export default {
  props: ["page"],
  data() {
    return {
      errors: [],
      data: {
        name: "",
        description: "",
        image: ""
      },
      success: "",
      error: "",
      apiUrl: ""
    };
  },
  mounted() {
    this.apiUrl = config.apiUrl;
    this.getOrder();
  },
  components: {
    Adedotun
  },
  methods: {
    getOrder() {
      this.$store
        .dispatch("orderById", [
          this.$nuxt._route.params.id,
          this.$store.state.auth.headers
        ])
        .then(resp => {
          this.data = resp.data.class;
        })
        .catch(err => console.log());
    }
  }
};
</script>
