<template>
  <div>
    <h3 class="page-title">{{ page }}</h3>
    <div class="row">
      <div class="col-md-12">
        <!-- TABLE NO PADDING -->
        <div class="panel">
          <div class="panel-heading">
            <h3 class="panel-title">Orders List</h3>
            <hr />
          </div>
          <div class="panel-body no-padding">
            <table id="orders-table" class="table">
              <thead class="bg-light">
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(order, index) in orders" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>
                    <img
                      :src="apiUrl + '/' + order.image_url"
                      style="width:30px;height:30px"
                    />
                  </td>
                  <td>{{ order.name }}</td>
                  <td>{{ order.description }}</td>
                  <td>
                    <div class="dropdown">
                      <button
                        class="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Action
                      </button>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <nuxt-link
                          class="dropdown-item"
                          :to="{
                            name: 'admin-order-id',
                            params: { id: order._id }
                          }"
                          title="edit / view"
                        >
                          <i class="material-icons">edit</i></nuxt-link
                        >
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { config } from "../../../config";
export default {
  props: ["orders", "page"],
  data() {
    return {
      apiUrl: ""
    };
  },
  mounted() {
    this.apiUrl = config.apiUrl;
    setTimeout(() => {
      $("#orders-table").DataTable({});
    }, 2000);
  },
  methods: {}
};
</script>
