<template>
  <div style="width: 480px; height: 480px; ">
    <h5 class="card-title text-center"><strong>Trips with the greatest number of places</strong></h5>
    <canvas
      id="theBiggestTrips"
      width="300"
      height="200"
    ></canvas>
  </div>
</template>

<script>
import Chart from "../../../node_modules/chart.js/dist/Chart.js";

export default {
  name: "TheBiggestTrips",
  props: {
    theBiggestTrips: null,
  },
  methods: {
    DrawChart() {
      var ctx = document
        .getElementById("theBiggestTrips")
        .getContext("2d");
      var chartByNationalities = new Chart(ctx, {
        type: "bar",
        data: {
          labels: [
            this.theBiggestTrips.position_1.name,
            this.theBiggestTrips.position_2.name,
            this.theBiggestTrips.position_3.name,
            this.theBiggestTrips.position_4.name,
            this.theBiggestTrips.position_5.name,

          ],
          datasets: [
            {
              label: "# of trips",
              data: [
                this.theBiggestTrips.position_1.places_count,
                this.theBiggestTrips.position_2.places_count,
                this.theBiggestTrips.position_3.places_count,
                this.theBiggestTrips.position_4.places_count,
                this.theBiggestTrips.position_5.places_count,

              ],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        },
      });
      console.log(chartByNationalities);
    },
  },
  mounted() {
    this.DrawChart();
  },
};
</script>

<style>

</style>
