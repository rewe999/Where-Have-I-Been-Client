<template>
  <div class="container mb-5 listPosition">
    <div class="row">
      <div class="col-md-12">
        <h4 class="titleTableMapCenter">Choose places for your trip</h4>
        <ul class="timeline">
          <li v-for="(data, index) in items" :key="index">
            <a href="#" class="fs-3" @click="showPlace(index)">{{ data.text }}</a>
            <br />
            <p class="float-right">23 December, 2020</p>
            <p>{{ data.place_name }}</p>
          </li>
        </ul>
        <div v-if="geoData != null">
          <map-toast></map-toast>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MapToast from "./MapToast.vue";

export default {
  name: "MapTable",
  components: { MapToast },
  props: { items: Array, geoData: Object },
  methods: {
    showPlace(data) {
      this.$emit("single-place", data);
    },
  },
};
</script>

<style>
.ListMap {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30vw;
  height: 100vh;
  background-color: #fff;
  z-index: 25;
  overflow-y: scroll;
}

@media (max-width: 610px) {
  .ListMap {
    position: absolute;
    top: 60vh;
    width: 100vw;
  }
}

.listPosition {
  width: 100%;
  height: 100vh;
}

.titleTableMapCenter {
  text-align: center;
}

ul.timeline {
  list-style-type: none;
  position: relative;
}

ul.timeline:before {
  content: " ";
  background: #d4d9df;
  display: inline-block;
  position: absolute;
  left: 29px;
  width: 2px;
  height: 100%;
  z-index: 400;
}

ul.timeline > li {
  margin: 20px 0;
  padding-left: 20px;
}

ul.timeline > li:before {
  content: " ";
  background: white;
  display: inline-block;
  position: absolute;
  border-radius: 50%;
  border: 3px solid #22c0e8;
  left: 20px;
  width: 20px;
  height: 20px;
  z-index: 400;
}
</style>