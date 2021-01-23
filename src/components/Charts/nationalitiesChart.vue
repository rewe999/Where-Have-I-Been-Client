<template>
  <div style="width: 480px; height: 480px">
    <h5 class="card-title text-center"><strong>Trips by nationality</strong></h5>
    <canvas
      id="mostTravellingNationalitiesChart"
      width="300"
      height="200"
    ></canvas>
  </div>
</template>

<script>
import Chart from "../../../node_modules/chart.js/dist/Chart.js";

export default {
  name: "MostTravellingNationalitiesChart",
  props: {
    tripsByNationality: null,
  },
  methods: {
    DrawChart() {
      var ctx = document
        .getElementById("mostTravellingNationalitiesChart")
        .getContext("2d");
      var chartByNationalities = new Chart(ctx, {
        type: "bar",
        data: {
          labels: [
            this.tripsByNationality.position_1.country_name,
            this.tripsByNationality.position_2.country_name,
            this.tripsByNationality.position_3.country_name,
            this.tripsByNationality.position_4.country_name,
            this.tripsByNationality.position_5.country_name,
            this.tripsByNationality.position_6.country_name,
            this.tripsByNationality.position_7.country_name,
            this.tripsByNationality.position_8.country_name,
            this.tripsByNationality.position_9.country_name,
            this.tripsByNationality.position_10.country_name,
          ],
          datasets: [
            {
              label: "# of trips",
              data: [
                this.tripsByNationality.position_1.trips_count,
                this.tripsByNationality.position_2.trips_count,
                this.tripsByNationality.position_3.trips_count,
                this.tripsByNationality.position_4.trips_count,
                this.tripsByNationality.position_5.trips_count,
                this.tripsByNationality.position_6.trips_count,
                this.tripsByNationality.position_7.trips_count,
                this.tripsByNationality.position_8.trips_count,
                this.tripsByNationality.position_9.trips_count,
                this.tripsByNationality.position_10.trips_count,
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
