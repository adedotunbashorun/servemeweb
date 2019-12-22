<template>
  <div>
    <h3 class="page-title">{{ page }}</h3>
    <div class="row">
      <div class="col-md-12">
        <!-- TABLE NO PADDING -->
        <div class="panel">
          <div class="panel-heading">
            <h3 class="panel-title">Orders List</h3>
            <select class="pull pull-right btn btn-outline-primary">
              <option value="">-- Select Type --</option>
            </select>
            <hr />
          </div>
          <div class="panel-body no-padding">
            <vue-good-table
              :rows="orders"
              :columns="columns"
              :pagination-options="{
                enabled: true,
                perPage: 5
              }"
            >
              <template slot="table-row" slot-scope="props">
                <span v-if="props.column.field == 'num'">
                  {{ props.row.originalIndex + 1 }}
                </span>
                <span v-else-if="props.column.field == 'image_url'">
                  <img
                    :src="apiUrl + '/' + props.row.image_url"
                    style="width:30px;height:30px"
                  />
                </span>
                <span v-else-if="props.column.field == 'action'">
                  <nuxt-link
                    class="btn btn-info dropdown-item"
                    :to="{
                      name: 'admin-order-id',
                      params: { id: props.row._id }
                    }"
                    title="edit / view"
                  >
                    <i class="fa fa-edit">
                      <!-- edit -->
                    </i></nuxt-link
                  >
                </span>
              </template>
            </vue-good-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { config } from "../../../config";
import "vue-good-table/dist/vue-good-table.css";
import { VueGoodTable } from "vue-good-table";

export default {
  props: ["orders", "page"],
  data() {
    return {
      apiUrl: "",
      // allOrders: [],
      columns: [
        { label: "#", field: "num", sortable: false },
        { label: "Name", field: "name", sortable: false },
        { label: "Vendor", field: "vendor", sortable: false },
        { label: "Service Category", field: "description", sortable: false },
        { label: "Payment Type", field: "description", sortable: false },
        { label: "Status", field: "description", sortable: false },
        { label: "Address", field: "description", sortable: false },
        { label: "Action", field: "action", sortable: false }
      ]
    };
  },
  mounted() {
    this.apiUrl = config.apiUrl;
  },
  computed: {
    allOrders() {
      return (this.allOrders = this.orders);
    }
  },
  components: {
    VueGoodTable
  },
  methods: {
    orderByType: status => {
      this.allOrders = this.orders;
      if (status == "All") {
        return (this.allOrders = this.orders);
      }
      this.allOrders = this.allOrders.filter(order => {
        return order.status === status;
      });
    }
  }
};
</script>
