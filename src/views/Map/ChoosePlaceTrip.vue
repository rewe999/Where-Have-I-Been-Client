<template>
  <div class="ListMap">
    <map-table :jsonData="geoJsonItems" @single-place="singlePlace"></map-table>
  </div>
  <div id="map"></div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import MapTable from "../../components/ChooseMap/MapTable.vue";
import axios from "axios";

let map = null;
export default {
  name: "UserMap",
  data() {
    return {
      geoJsonItems: [],
      clickedValue: 0,
      title: ''
    };
  },
  components: { MapTable },
  methods: {
    createMap() {
      mapboxgl.accessToken =
        "pk.eyJ1IjoicmV3ZTk5OSIsImEiOiJja2dwZDRweGYwcDF2MnltbzV4eGxrYXRmIn0.NZVEHJyOKu3-ACCu39fsTw";
      map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-112.74090004764511, 46.36100006625516],
        zoom: 7,
      });

      map.addControl(
        new MapboxGeocoder({
          accessToken: mapboxgl.accessToken,
          mapboxgl: mapboxgl,
        })
      );

      // data open
      map.on("load", function () {
        // Add an image to use as a custom marker
        map.loadImage(
          "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png",
          function (error, image) {
            if (error) throw error;
            map.addImage("custom-marker", image);
            // Add a GeoJSON source with 3 points.
            map.addSource("points", {
              type: "geojson",
              data: 'https://api.mapbox.com/geocoding/v5/mapbox.places/-112.73804554177912%2C46.361136226221646.json?access_token=pk.eyJ1Ijoic2VhcmNoLW1hY2hpbmUtdXNlci0xIiwiYSI6ImNrN2Y1Nmp4YjB3aG4zZ253YnJoY21kbzkifQ.JM5ZeqwEEm-Tonrk5wOOMw&cachebuster=1608723620421&autocomplete=true'
            });

            // Add a symbol layer
            map.addLayer({
              id: "symbols",
              type: "symbol",
              source: "points",
              layout: {
                "icon-image": "custom-marker",
              },
            });
          }
        );

        // Center the map on the coordinates of any clicked symbol from the 'symbols' layer.
        map.on("click", "symbols", function (e) {
          let desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu";

          // let title = this.title;
          let img = "../../assets/avatar.png/"

          new mapboxgl.Popup({ closeOnClick: true })
          .setLngLat([e.lngLat.lng,e.lngLat.lat])
          .setHTML("<div class='mapHtml'><div class='mapHeadHtml'>"+ this.title +"</div>"+ desc +"</div> <div class='mapGalleryHtml'><img src='"+ img +"' alt='imgMap' /></div>")
          .addTo(map);

          map.flyTo({
            center: e.features[0].geometry.coordinates,
          });
        });

        // Change the cursor to a pointer when the it enters a feature in the 'symbols' layer.
        map.on("mouseenter", "symbols", function () {
          map.getCanvas().style.cursor = "pointer";
        });

        // Change it back to a pointer when it leaves.
        map.on("mouseleave", "symbols", function () {
          map.getCanvas().style.cursor = "";
        });
      });
      // data close
    },
    async getGeoJson() {
      axios
        .get(
          "https://api.mapbox.com/geocoding/v5/mapbox.places/-112.73804554177912%2C46.361136226221646.json?access_token=pk.eyJ1Ijoic2VhcmNoLW1hY2hpbmUtdXNlci0xIiwiYSI6ImNrN2Y1Nmp4YjB3aG4zZ253YnJoY21kbzkifQ.JM5ZeqwEEm-Tonrk5wOOMw&cachebuster=1608723620421&autocomplete=true"
        )
        .then((res) => {
          this.geoJsonItems = res.data.features;
        });
    },
    addMarkers() {
      this.geoJsonItems.forEach((item) => {
        new mapboxgl.Marker()
          .setLngLat([item.center[0], item.center[1]])
          .addTo(map);
      });
    },
    singlePlace(e) {
      this.clickedValue = e;

      map.flyTo({
        center: [
          this.geoJsonItems[e].center[0],
          this.geoJsonItems[e].center[1],
        ],
        essential: true,
      });
    },
  },
  mounted() {
    this.createMap();
    this.getGeoJson();
  },
  updated() {
    this.title = this.geoJsonItems[this.clickedValue].place_name;
    // this.addMarkers();
  },
};
</script>

<style>
#map {
  width: 100vw;
  height: 100vh;
}
</style>