<template>
  <div class="">
    <h3 class="page-title">{{ page }}</h3>
    <!-- Page Header -->
    <!-- OVERVIEW -->
    <div class="panel panel-headline">
      <div class="panel-heading">
        <h3 class="panel-title">Weekly Overview</h3>
        <p class="panel-subtitle">Period: Oct 14, 2016 - Oct 21, 2016</p>
      </div>
      <div class="panel-body">
        <div class="row">
          <div class="col-md-3">
            <div class="metric">
              <span class="icon"><i class="fa fa-download"></i></span>
              <p>
                <span class="number">{{ result.users }}</span>
                <span class="title">Total Users</span>
              </p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="metric">
              <span class="icon"><i class="fa fa-shopping-bag"></i></span>
              <p>
                <span class="number">{{ result.vendors }}</span>
                <span class="title">Vendors</span>
              </p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="metric">
              <span class="icon"><i class="fa fa-eye"></i></span>
              <p>
                <span class="number">{{ result.clients }}</span>
                <span class="title">Client</span>
              </p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="metric">
              <span class="icon"><i class="fa fa-bar-chart"></i></span>
              <p>
                <span class="number">{{ result.orders }}</span>
                <span class="title">Service Provided</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END OVERVIEW -->

    <div class="row">
      <div class="col-md-6">
        <!-- RECENT PURCHASES -->
        <div class="panel">
          <div class="panel-heading">
            <h3 class="panel-title">Recent Activities</h3>
            <div class="right">
              <button type="button" class="btn-toggle-collapse">
                <i class="lnr lnr-chevron-up"></i>
              </button>
              <button type="button" class="btn-remove">
                <i class="lnr lnr-cross"></i>
              </button>
            </div>
          </div>
          <div class="" v-if="result.user_activities">
            <vue-good-table :rows="result.activities" :columns="columns">
              <!-- <template slot="table-row-after" slot-scope="props">
                <td>
                  <router-link
                    :to="{
                      name: 'editattendance',
                      params: { id: props.row.id }
                    }"
                    class="btn btn-primary btn-xs"
                    >Insert/Edit</router-link
                  >
                  <router-link
                    :to="{
                      name: 'viewattendance',
                      params: { id: props.row.id }
                    }"
                    class="btn btn-primary btn-xs"
                    ><i class="fa fa-eye"></i>View</router-link
                  >
                  <button
                    @click="deleteAttendance(props.index)"
                    class="btn btn-danger btn-xs"
                  >
                    Delete
                  </button>
                </td>
              </template> -->
            </vue-good-table>
          </div>
          <div class="panel-footer">
            <div class="row">
              <div class="col-md-6">
                <span class="panel-note"
                  ><i class="fa fa-clock-o"></i> Last 24 hours</span
                >
              </div>
              <div class="col-md-6 text-right">
                <a href="#" class="btn btn-primary">View All Purchases</a>
              </div>
            </div>
          </div>
        </div>
        <!-- END RECENT PURCHASES -->
      </div>
      <div class="col-md-6">
        <!-- TIMELINE -->
        <div class="panel panel-scrolling">
          <div class="panel-heading">
            <h3 class="panel-title">Recent User Activity</h3>
            <div class="right">
              <button type="button" class="btn-toggle-collapse">
                <i class="lnr lnr-chevron-up"></i>
              </button>
              <button type="button" class="btn-remove">
                <i class="lnr lnr-cross"></i>
              </button>
            </div>
          </div>
          <div class="panel-body" v-if="result.user_activities">
            <vue-good-table :rows="result.user_activities" :columns="columns">
            </vue-good-table>
            <ul class="list-unstyled activity-list">
              <li>
                <img
                  src="assets/img/user1.png"
                  alt="Avatar"
                  class="img-circle pull-left avatar"
                />
                <p>
                  <a href="#">Michael</a> has achieved 80% of his completed
                  tasks <span class="timestamp">20 minutes ago</span>
                </p>
              </li>
              <li>
                <img
                  src="assets/img/user2.png"
                  alt="Avatar"
                  class="img-circle pull-left avatar"
                />
                <p>
                  <a href="#">Daniel</a> has been added as a team member to
                  project <a href="#">System Update</a>
                  <span class="timestamp">Yesterday</span>
                </p>
              </li>
              <li>
                <img
                  src="assets/img/user3.png"
                  alt="Avatar"
                  class="img-circle pull-left avatar"
                />
                <p>
                  <a href="#">Martha</a> created a new heatmap view
                  <a href="#">Landing Page</a>
                  <span class="timestamp">2 days ago</span>
                </p>
              </li>
              <li>
                <img
                  src="assets/img/user4.png"
                  alt="Avatar"
                  class="img-circle pull-left avatar"
                />
                <p>
                  <a href="#">Jane</a> has completed all of the tasks
                  <span class="timestamp">2 days ago</span>
                </p>
              </li>
              <li>
                <img
                  src="assets/img/user5.png"
                  alt="Avatar"
                  class="img-circle pull-left avatar"
                />
                <p>
                  <a href="#">Jason</a> started a discussion about
                  <a href="#">Weekly Meeting</a>
                  <span class="timestamp">3 days ago</span>
                </p>
              </li>
            </ul>
            <button
              type="button"
              class="btn btn-primary btn-bottom center-block"
            >
              Load More
            </button>
          </div>
        </div>
        <!-- END TIMELINE -->
      </div>
    </div>
  </div>
</template>
<script>
import "vue-good-table/dist/vue-good-table.css";
import { VueGoodTable } from "vue-good-table";

export default {
  props: ["user", "result", "page"],
  components: {
    VueGoodTable
  },
  data() {
    return {
      columns: [
        { label: "First Name", field: "user_id.first_name", sortable: false },
        { label: "Description", field: "description", sortable: false }
      ]
    };
  },
  mounted() {}
};
</script>
