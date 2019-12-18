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
                <span class="number">1,252</span>
                <span class="title">Total Users</span>
              </p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="metric">
              <span class="icon"><i class="fa fa-shopping-bag"></i></span>
              <p>
                <span class="number">203</span>
                <span class="title">Vendors</span>
              </p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="metric">
              <span class="icon"><i class="fa fa-eye"></i></span>
              <p>
                <span class="number">274,678</span>
                <span class="title">Client</span>
              </p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="metric">
              <span class="icon"><i class="fa fa-bar-chart"></i></span>
              <p>
                <span class="number">35%</span>
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
            <h3 class="panel-title">Recent Purchases</h3>
            <div class="right">
              <button type="button" class="btn-toggle-collapse">
                <i class="lnr lnr-chevron-up"></i>
              </button>
              <button type="button" class="btn-remove">
                <i class="lnr lnr-cross"></i>
              </button>
            </div>
          </div>
          <div class="panel-body no-padding">
            <!-- <table class="table table-striped">
              <thead>
                <tr>
                  <th>Order No.</th>
                  <th>Name</th>
                  <th>Amount</th>
                  <th>Date &amp; Time</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><a href="#">763648</a></td>
                  <td>Steve</td>
                  <td>$122</td>
                  <td>Oct 21, 2016</td>
                  <td><span class="label label-success">COMPLETED</span></td>
                </tr>
                <tr>
                  <td><a href="#">763649</a></td>
                  <td>Amber</td>
                  <td>$62</td>
                  <td>Oct 21, 2016</td>
                  <td><span class="label label-warning">PENDING</span></td>
                </tr>
                <tr>
                  <td><a href="#">763650</a></td>
                  <td>Michael</td>
                  <td>$34</td>
                  <td>Oct 18, 2016</td>
                  <td><span class="label label-danger">FAILED</span></td>
                </tr>
                <tr>
                  <td><a href="#">763651</a></td>
                  <td>Roger</td>
                  <td>$186</td>
                  <td>Oct 17, 2016</td>
                  <td><span class="label label-success">SUCCESS</span></td>
                </tr>
                <tr>
                  <td><a href="#">763652</a></td>
                  <td>Smith</td>
                  <td>$362</td>
                  <td>Oct 16, 2016</td>
                  <td><span class="label label-success">SUCCESS</span></td>
                </tr>
              </tbody>
            </table> -->

            <v-data-table
              :headers="tableHeaders"
              :items="purchases"
              :items-per-page="10"
            >
            </v-data-table>
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
          <div class="panel-body">
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
export default {
  props: ["user", "result", "page"],
  data() {
    return {
      tableHeaders: [
        { text: "Order No", value: "calories", align: "left", sortable: false },
        { text: "Name", value: "fat" },
        { text: "Amount", value: "carbs" },
        { text: "Date & Time", value: "protein" },
        { text: "Status (%)", value: "iron" }
      ],
      purchases: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%"
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%"
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%"
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%"
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%"
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%"
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%"
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%"
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%"
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%"
        }
      ],
      totalUsers: 0,
      totalVendors: 0,
      totalClients: 0,
      serviceProvided: 0
    };
  },
  mounted() {}
}


</script>
