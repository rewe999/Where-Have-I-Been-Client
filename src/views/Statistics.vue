<template>
  <div class="container card-deck">
    <div class="row">
      <div class="card mb-3 col-md-5 no-gutters mx-auto my-3">
        <div class="row border-bottom">
          <h5 class="card-title text-center">Most visited cities</h5>
          <ol class="anyClass px-5" style="width: 100%">
            <li class="card-text border-bottom border-top">
              <p class="d-flex justify-content-between">
                {{ stats.mostVisitedCities.position_1.city }}
                <span
                  >Visited: {{ stats.mostVisitedCities.position_1.count }}
                </span>
              </p>
            </li>
            <li class="card-text border-bottom border-top">
              <p class="d-flex justify-content-between align-self-center">
                {{ stats.mostVisitedCities.position_2.city }}
                <span
                  >Visited:{{ stats.mostVisitedCities.position_2.count }}</span
                >
              </p>
            </li>
            <li class="card-text border-bottom border-top">
              <p class="d-flex justify-content-between">
                {{ stats.mostVisitedCities.position_3.city }}
                <span>
                  Visited: {{ stats.mostVisitedCities.position_3.count }}</span
                >
              </p>
            </li>
            <li class="card-text border-bottom border-top">
              <p class="d-flex justify-content-between">
                {{ stats.mostVisitedCities.position_4.city }}
                <span
                  >Visited:{{ stats.mostVisitedCities.position_4.count }}</span
                >
              </p>
            </li>
            <li class="card-text border-bottom border-top">
              <p class="d-flex justify-content-between">
                {{ stats.mostVisitedCities.position_5.city }}
                <span
                  >Visited:{{ stats.mostVisitedCities.position_5.count }}</span
                >
              </p>
            </li>
            <li class="card-text border-bottom border-top">
              <p class="d-flex justify-content-between">
                {{ stats.mostVisitedCities.position_6.city }}
                <span
                  >Visited:{{ stats.mostVisitedCities.position_6.count }}</span
                >
              </p>
            </li>
            <li class="card-text border-bottom border-top">
              <p class="d-flex justify-content-between">
                {{ stats.mostVisitedCities.position_7.city }}
                <span
                  >Visited: {{ stats.mostVisitedCities.position_7.count }}</span
                >
              </p>
            </li>
            <li class="card-text border-bottom border-top">
              <p class="d-flex justify-content-between">
                {{ stats.mostVisitedCities.position_8.city }}
                <span
                  >Visited:{{ stats.mostVisitedCities.position_8.count }}</span
                >
              </p>
            </li>
            <li class="card-text border-bottom border-top">
              <p class="d-flex justify-content-between">
                {{ stats.mostVisitedCities.position_9.city }}
                <span>
                  Visited:{{ stats.mostVisitedCities.position_9.count }}</span
                >
              </p>
            </li>
            <li class="card-text border-bottom border-top">
              <p class="d-flex justify-content-between">
                {{ stats.mostVisitedCities.position_10.city }}
                <span>
                  Visited:{{ stats.mostVisitedCities.position_10.count }}
                </span>
              </p>
            </li>
          </ol>
        </div>
      </div>

      <div class="card mb-3 col-md-5 card mx-auto my-3">
        <h5 class="card-title text-center">Most visited countries</h5>

        <ol class="anyClass card-body px-5">
          <li class="card-text border-bottom border-top">
            <p class="d-flex justify-content-between">
              {{ stats.mostVisitedCountries.position_1.country }}
              <span
                >Visited:
                {{ stats.mostVisitedCountries.position_1.count }}</span
              >
            </p>
          </li>
          <li class="card-text border-bottom border-top">
            <p class="d-flex justify-content-between">
              {{ stats.mostVisitedCountries.position_2.country }}
              <span>
                Visited:{{ stats.mostVisitedCountries.position_2.count }}</span
              >
            </p>
          </li>
          <li class="card-text border-bottom border-top">
            <p class="d-flex justify-content-between">
              {{ stats.mostVisitedCountries.position_3.country }}
              <span>
                Visited:{{ stats.mostVisitedCountries.position_3.count }}</span
              >
            </p>
          </li>
          <li class="card-text border-bottom border-top">
            <p class="d-flex justify-content-between">
              {{ stats.mostVisitedCountries.position_4.country }}
              <span>
                Visited: {{ stats.mostVisitedCountries.position_4.count }}</span
              >
            </p>
          </li>
          <li class="card-text border-bottom border-top">
            <p class="d-flex justify-content-between">
              {{ stats.mostVisitedCountries.position_5.country }}
              <span>
                Visited: {{ stats.mostVisitedCountries.position_5.count }}</span
              >
            </p>
          </li>
          <li class="card-text border-bottom border-top">
            <p class="d-flex justify-content-between">
              {{ stats.mostVisitedCountries.position_6.country }}
              <span
                >Visited:
                {{ stats.mostVisitedCountries.position_6.count }}</span
              >
            </p>
          </li>
          <li class="card-text border-bottom border-top">
            <p class="d-flex justify-content-between">
              {{ stats.mostVisitedCountries.position_7.country }}
              <span
                >Visited:
                {{ stats.mostVisitedCountries.position_7.count }}</span
              >
            </p>
          </li>
          <li class="card-text border-bottom border-top">
            <p class="d-flex justify-content-between">
              {{ stats.mostVisitedCountries.position_8.country }}
              <span
                >Visited:{{ stats.mostVisitedCountries.position_8.count }}</span
              >
            </p>
          </li>
          <li class="card-text border-bottom border-top">
            <p class="d-flex justify-content-between">
              {{ stats.mostVisitedCountries.position_9.country }}
              <span
                >Visited:
                {{ stats.mostVisitedCountries.position_9.count }}</span
              >
            </p>
          </li>
          <li class="card-text border-bottom border-top">
            <p class="d-flex justify-content-between">
              {{ stats.mostVisitedCountries.position_10.country }}
              <span>
                Visited:
                {{ stats.mostVisitedCountries.position_10.count }}</span
              >
            </p>
          </li>
        </ol>
      </div>
      <div class="card mb-3 col-md-5 card mx-auto my-3">
        <h5 class="card-title text-center">Most liked trips</h5>

        <ol class="anyClass1">
          <li class="card-text border-bottom border-top">
            <p class="d-flex justify-content-between">
              {{ stats.mostLikedTrips.position_1.name }}
              <span
                >Liked:{{ stats.mostLikedTrips.position_1.likes_count }}</span
              >
            </p>
          </li>
          <li class="card-text border-bottom border-top">
            <p class="d-flex justify-content-between">
              {{ stats.mostLikedTrips.position_2.name }}
              <span
                >Liked:{{ stats.mostLikedTrips.position_2.likes_count }}</span
              >
            </p>
          </li>
          <li class="card-text border-bottom border-top">
            <p class="d-flex justify-content-between">
              {{ stats.mostLikedTrips.position_3.name }}
              <span>
                Liked:{{ stats.mostLikedTrips.position_3.likes_count }}</span
              >
            </p>
          </li>
          <li class="card-text border-bottom border-top">
            <p class="d-flex justify-content-between">
              {{ stats.mostLikedTrips.position_4.name }}
              <span
                >Liked: {{ stats.mostLikedTrips.position_4.likes_count }}</span
              >
            </p>
          </li>
          <li class="card-text border-bottom border-top">
            <p class="d-flex justify-content-between">
              {{ stats.mostLikedTrips.position_5.name }}
              <span
                >Liked:{{ stats.mostLikedTrips.position_5.likes_count }}</span
              >
            </p>
          </li>
        </ol>
      </div>

      <div
        class="card justify-content-center mb-3 col-md-5 no-gutters mx-auto my-3"
      >
        <genderChart
          :maleCount="stats.maleTripsCount"
          :femaleCount="stats.femaleTripsCount"
        />
      </div>
      <div class="card mb-3 col-md-6 no-gutters mx-auto my-3">
        <MostTravellingNationalitiesChart
          :tripsByNationality="stats.mostTravelingNationalities"
        />
      </div>
      <div class="card mb-3 col-md-6 no-gutters mx-auto my-3">
        <TheBiggestTrips :theBiggestTrips="stats.theBiggestTrips" />
      </div>
    </div>
  </div>
</template>



<script>
import axios from "axios";
import genderChart from "../components/Charts/genderChart.vue";
import MostTravellingNationalitiesChart from "../components/Charts/nationalitiesChart.vue";
import TheBiggestTrips from "../components/Charts/TheBiggestTrips.vue";

export default {
  name: "Statistics",
  components: {
    genderChart,
    MostTravellingNationalitiesChart,
    TheBiggestTrips,
  },
  data() {
    return {
      stats: null,
    };
  },

  methods: {
    async getStats() {
      {
        const stats = await axios.get("statistics", {
          params: {
            "per-page": 10,
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        this.stats = stats.data.data[0].data;
      }
    },
  },

  created() {
    this.getStats();
  },
};
</script>

<style>
p {
  padding-top: 1rem;
}

body {
  background-image: url("../assets/nightsky(1).jpg");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
}
.anyClass {
  height: 300px;

  overflow-y: scroll;
}
.anyClass1 {
  height: 300px;
}
h5 {
  font-weight: bolder;
}
ol {
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
}
</style>


