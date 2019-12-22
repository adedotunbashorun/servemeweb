<template>
  <div>
    <h3 class="page-title">{{ page }}</h3>
    <div class="row">
      <div class="col-md-12">
        <!-- TABLE NO PADDING -->
        <div class="panel">
          <div class="panel-heading">
            <h3 class="panel-title">
              Support List
              <!-- <nuxt-link to="/admin/supports/create" class="pull pull-right btn btn-outline-primary">
              Create Support</nuxt-link> -->
            </h3>
            <hr />
          </div>
          <div class="panel-body no-padding">
            <!-- <table
              class="table align-items-center table-white table-flush"
              id="supports-table"
            >
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Subject</th>
                  <th>Message</th>
                  <th>Created At</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(support, index) in supports" :key="index">
                  <th scope="row">
                    {{ index + 1 }}
                  </th>
                  <td>
                    {{
                      support.user_id
                        ? support.user_id.first_name +
                          " " +
                          support.user_id.last_name
                        : ""
                    }}
                  </td>
                  <td>
                    {{ support.user_id ? support.user_id.email : "" }}
                  </td>
                  <td>
                    {{ support.title }}
                  </td>
                  <td>
                    {{ support.message }}
                  </td>
                  <td>
                    <Adedotun :value="support.createdAt" fn="humandate" />
                  </td>
                  <td>
                    <router-link
                      :to="{
                        name: 'admin-supports-id',
                        params: { id: support._id }
                      }"
                      class="btn btn-sm btn-primary float-right"
                      v-if="support.user_id"
                      >View Support</router-link
                    >
                  </td>
                </tr>
              </tbody>
            </table> -->
            <vue-good-table
              :rows="supports"
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
                <span v-else-if="props.column.field == 'name'">
                  {{
                    props.row.user_id.first_name +
                      " " +
                      props.row.user_id.last_name
                  }}
                </span>
                <span v-else-if="props.column.field == 'shortmessage'">
                  {{ props.row.message.substr(0, 50) }}...
                </span>
                <span v-else-if="props.column.field == 'createdAt'">
                  <Adedotun :value="props.row.createdAt" fn="humandate" />
                </span>
                <span v-else-if="props.column.field == 'action'">
                  <router-link
                    :to="{
                      name: 'admin-supports-id',
                      params: { id: props.row._id }
                    }"
                    class="btn btn-sm btn-primary"
                    v-if="props.row.user_id"
                  >
                    <i class="fa fa-eye">
                      <!-- View Support -->
                    </i>
                  </router-link>
                </span>
              </template>
            </vue-good-table>
          </div>
        </div>
        <!-- END TABLE NO PADDING -->
      </div>
    </div>
  </div>
</template>
<script>
import Adedotun from "../../Extra/adedotun";
import axios from "axios";
import "vue-good-table/dist/vue-good-table.css";
import { VueGoodTable } from "vue-good-table";

export default {
  props: ["page", "supports"],
  components: { Adedotun, VueGoodTable },
  data() {
    return {
      columns: [
        { label: "S/N", field: "num", sortable: false },
        { label: "Name", field: "name", sortable: false },
        { label: "Email", field: "user_id.email", sortable: false },
        { label: "Subject", field: "title", sortable: false },
        { label: "Message", field: "shortmessage", sortable: false },
        { label: "CreatedAt", field: "createdAt", sortable: false },
        { label: "", field: "action", sortable: false }
      ]
    };
  },
  mounted() {
    setTimeout(() => {
      $("#supports-table").DataTable({});
    }, 2000);
  }
};
</script>
