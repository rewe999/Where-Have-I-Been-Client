<template>
<div style="width:360px;height:360px">
  <h5 class="card-title text-center"><strong>Trips by gender</strong></h5>
  <canvas id="myChart" width="150" height="100"></canvas>
</div>

</template>

<script>
import Chart from "../../../node_modules/chart.js/dist/Chart.js";

export default {
  name: "Profil",
  props: {
    femaleCount: null,
    maleCount: null
  },
  methods: {
    DrawChart() {
      var ctx = document.getElementById("myChart").getContext("2d");
      var myChart = new Chart(ctx, {
        type: "pie",
        data: {
          labels: ["Male", "Female"],
          datasets: [
            {
              label: "# of Votes",
              data: [this.maleCount, this.femaleCount],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",

              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",

              ],
              borderWidth: 1,
            },
          ],
        },
      });
      console.log(myChart);
      console.log(this.femaleCount);
      console.log(this.maleCount);
    },
  },
  mounted() {
    this.DrawChart();
  },
};
</script>

<style>
</style>
