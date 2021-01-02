<script>
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import mapboxgl from "mapbox-gl";

export default {
  methods: {
    doGeocoder() {
      const geocoder = new MapboxGeocoder({
        accessToken: process.env.MAP_TOKEN,
        mapboxgl: mapboxgl,
        marker: false,
      });
      console.log(geocoder);
    },
  },
};
</script>

<style>
</style>