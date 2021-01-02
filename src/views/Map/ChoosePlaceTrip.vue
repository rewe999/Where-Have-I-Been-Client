<template>
  <div class="ListMap">
    <map-table :items="mapItems" @single-place="ShowPlace"></map-table>
  </div>
  <base-map :items="mapItems"></base-map>
</template>

<script>
import MapTable from "../../components/ChooseMap/MapTable.vue";
import BaseMap from "../../components/ChooseMap/BaseMap.vue";
import axios from "axios";

export default {
  name: "UserMap",
  data() {
    return {
      mapItems: null,
    };
  },
  components: { MapTable, BaseMap },
  methods: {
    async getGeoJson() {
      axios
        .get(
          "https://api.mapbox.com/geocoding/v5/mapbox.places/-112.73804554177912%2C46.361136226221646.json?access_token=pk.eyJ1Ijoic2VhcmNoLW1hY2hpbmUtdXNlci0xIiwiYSI6ImNrN2Y1Nmp4YjB3aG4zZ253YnJoY21kbzkifQ.JM5ZeqwEEm-Tonrk5wOOMw&cachebuster=1608723620421&autocomplete=true"
        )
        .then((res) => {
          this.mapItems = res.data.features;
        });
    },
    ShowPlace(data){
      console.log(data);
    }
  },
  mounted() {
    this.getGeoJson();
  },
};
</script>

<style>
#map {
  width: 100vw;
  height: 100vh;
}
</style>